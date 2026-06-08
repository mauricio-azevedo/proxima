import type * as React from 'react';
import { useEffect, useRef, useState } from 'react';

import { Button, Drawer, Form, InputGroup, Label, TextField, Typography } from '@heroui/react';

import { useLocale } from '../../shared/i18n/hooks/use-locale';
import { createPickupGame } from './api/create-pickup-game';
import type { CreatePickupGameRequest } from './types/create-pickup-game-request';
import type { PickupGameVisibility, Weekday } from './types/pickup-game-home';

const CREATE_PICKUP_GAME_FORM_ID = 'create-pickup-game-form';
const DRAWER_CLOSE_NAVIGATION_DELAY_MS = 260;
const MIN_PICKUP_GAME_NAME_LENGTH = 2;
const MIN_TEAM_SIZE = 2;
const MAX_TEAM_SIZE = 11;

const WEEKDAYS: Weekday[] = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
];

interface CreatePickupGameDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCreated: () => void;
}

export function CreatePickupGameDrawer({ isOpen, onClose, onCreated }: CreatePickupGameDrawerProps) {
  const { t } = useLocale();
  const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen);
  const [name, setName] = useState('');
  const [locationName, setLocationName] = useState('');
  const [weekday, setWeekday] = useState<Weekday | null>(null);
  const [startTime, setStartTime] = useState('');
  const [defaultTeamSize, setDefaultTeamSize] = useState('5');
  const [visibility, setVisibility] = useState<PickupGameVisibility>('PRIVATE');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const closeNavigationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isClosingRef = useRef(false);

  const validationMessage = getValidationMessage({ name, weekday, startTime, defaultTeamSize }, t);
  const isSubmitDisabled = isSubmitting || validationMessage !== null;

  useEffect(() => {
    if (isOpen) {
      isClosingRef.current = false;
      setIsDrawerOpen(true);
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (closeNavigationTimeoutRef.current) {
        clearTimeout(closeNavigationTimeoutRef.current);
      }
    };
  }, []);

  function requestClose(afterClose: () => void = onClose) {
    if (isSubmitting || isClosingRef.current) {
      return;
    }

    isClosingRef.current = true;
    setIsDrawerOpen(false);

    closeNavigationTimeoutRef.current = setTimeout(() => {
      afterClose();
    }, DRAWER_CLOSE_NAVIGATION_DELAY_MS);
  }

  function handleOpenChange(nextIsOpen: boolean) {
    if (!nextIsOpen) {
      requestClose();
    }
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    if (!weekday) {
      setErrorMessage(t('pickupGames.create.validation.weekday'));
      return;
    }

    const payload: CreatePickupGameRequest = {
      name: name.trim(),
      locationName: locationName.trim() || undefined,
      weekday,
      startTime,
      defaultTeamSize: Number(defaultTeamSize),
      visibility,
    };

    void create(payload);
  }

  async function create(payload: CreatePickupGameRequest) {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await createPickupGame(payload);
      setIsSubmitting(false);
      requestClose(onCreated);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : t('pickupGames.create.errorFallback'));
      setIsSubmitting(false);
    }
  }

  return (
    <Drawer>
      <Drawer.Backdrop isOpen={isDrawerOpen} onOpenChange={handleOpenChange}>
        <Drawer.Content placement="bottom">
          <Drawer.Dialog aria-label={t('pickupGames.create.title')} className="create-pickup-game-drawer-dialog">
            <Drawer.Handle />
            <Drawer.CloseTrigger />

            <Drawer.Header>
              <Drawer.Heading>{t('pickupGames.create.title')}</Drawer.Heading>
            </Drawer.Header>

            <Drawer.Body>
              <Form
                id={CREATE_PICKUP_GAME_FORM_ID}
                aria-label={t('pickupGames.create.title')}
                className="create-pickup-game-form create-pickup-game-drawer-form"
                onSubmit={submit}
              >
                <CreatePickupGameTextField
                  isRequired
                  label={t('pickupGames.create.name')}
                  name="name"
                  placeholder={t('pickupGames.create.namePlaceholder')}
                  value={name}
                  onChange={setName}
                />

                <CreatePickupGameTextField
                  label={t('pickupGames.create.location')}
                  name="locationName"
                  placeholder={t('pickupGames.create.locationPlaceholder')}
                  value={locationName}
                  onChange={setLocationName}
                />

                <TextField fullWidth isRequired name="startTime" type="time">
                  <Label>{t('pickupGames.create.startTime')}</Label>
                  <InputGroup fullWidth variant="secondary">
                    <InputGroup.Input value={startTime} onChange={(event) => setStartTime(event.target.value)} />
                  </InputGroup>
                </TextField>

                <TextField fullWidth isRequired name="defaultTeamSize" type="number">
                  <Label>{t('pickupGames.create.teamSize')}</Label>
                  <InputGroup fullWidth variant="secondary">
                    <InputGroup.Input
                      inputMode="numeric"
                      max={MAX_TEAM_SIZE}
                      min={MIN_TEAM_SIZE}
                      value={defaultTeamSize}
                      onChange={(event) => setDefaultTeamSize(event.target.value)}
                    />
                  </InputGroup>
                </TextField>

                <ChoiceGroup label={t('pickupGames.create.weekday')} isRequired className="create-pickup-game-weekday-list">
                  {WEEKDAYS.map((option) => (
                    <ChoiceButton
                      key={option}
                      ariaLabel={t(getWeekdayMessageId(option))}
                      isSelected={weekday === option}
                      onPress={() => setWeekday(option)}
                    >
                      {getWeekdayInitial(option)}
                    </ChoiceButton>
                  ))}
                </ChoiceGroup>

                <ChoiceGroup label={t('pickupGames.create.visibility')} isRequired>
                  <ChoiceButton isSelected={visibility === 'PRIVATE'} onPress={() => setVisibility('PRIVATE')}>
                    {t('pickupGames.create.visibilityPrivate')}
                  </ChoiceButton>
                  <ChoiceButton isSelected={visibility === 'PUBLIC'} onPress={() => setVisibility('PUBLIC')}>
                    {t('pickupGames.create.visibilityPublic')}
                  </ChoiceButton>
                </ChoiceGroup>

                {errorMessage ? (
                  <Typography.Paragraph size="sm" className="text-danger">
                    {errorMessage}
                  </Typography.Paragraph>
                ) : null}
              </Form>
            </Drawer.Body>

            <Drawer.Footer>
              <Button type="button" isDisabled={isSubmitting} onClick={() => requestClose()}>
                {t('pickupGames.create.cancel')}
              </Button>
              <Button type="submit" form={CREATE_PICKUP_GAME_FORM_ID} variant="primary" isDisabled={isSubmitDisabled}>
                {isSubmitting ? t('pickupGames.create.submitting') : t('pickupGames.create.submit')}
              </Button>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}

function CreatePickupGameTextField({
  isRequired = false,
  label,
  name,
  placeholder,
  value,
  onChange,
}: {
  isRequired?: boolean;
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <TextField fullWidth isRequired={isRequired} name={name} type="text">
      <Label>{label}</Label>
      <InputGroup fullWidth variant="secondary">
        <InputGroup.Input placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} />
      </InputGroup>
    </TextField>
  );
}

function ChoiceGroup({
  children,
  label,
  isRequired,
  className,
}: {
  children: React.ReactNode;
  label: string;
  isRequired?: boolean;
  className?: string;
}) {
  return (
    <div className="create-pickup-game-choice-group">
      <Label>
        {label}
        {isRequired ? ' *' : ''}
      </Label>
      <div className={className ? `create-pickup-game-choice-list ${className}` : 'create-pickup-game-choice-list'} role="group" aria-label={label}>
        {children}
      </div>
    </div>
  );
}

function ChoiceButton({
  children,
  ariaLabel,
  isSelected,
  onPress,
}: {
  children: React.ReactNode;
  ariaLabel?: string;
  isSelected: boolean;
  onPress: () => void;
}) {
  return (
    <Button
      aria-label={ariaLabel}
      aria-pressed={isSelected}
      type="button"
      variant={isSelected ? 'primary' : undefined}
      className={isSelected ? 'create-pickup-game-choice-button is-selected' : 'create-pickup-game-choice-button'}
      onClick={onPress}
    >
      {children}
    </Button>
  );
}

function getValidationMessage(
  values: { name: string; weekday: Weekday | null; startTime: string; defaultTeamSize: string },
  t: ReturnType<typeof useLocale>['t'],
) {
  if (values.name.trim().length < MIN_PICKUP_GAME_NAME_LENGTH) {
    return t('pickupGames.create.validation.name');
  }

  if (!values.weekday) {
    return t('pickupGames.create.validation.weekday');
  }

  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(values.startTime)) {
    return t('pickupGames.create.validation.startTime');
  }

  const teamSize = Number(values.defaultTeamSize);

  if (!Number.isInteger(teamSize) || teamSize < MIN_TEAM_SIZE || teamSize > MAX_TEAM_SIZE) {
    return t('pickupGames.create.validation.teamSize');
  }

  return null;
}

function getWeekdayMessageId(weekday: Weekday) {
  return `weekday.${weekday}` as const;
}

function getWeekdayInitial(weekday: Weekday) {
  if (weekday === 'MONDAY') return 'M';
  if (weekday === 'TUESDAY') return 'T';
  if (weekday === 'WEDNESDAY') return 'W';
  if (weekday === 'THURSDAY') return 'T';
  if (weekday === 'FRIDAY') return 'F';
  if (weekday === 'SATURDAY') return 'S';
  return 'S';
}
