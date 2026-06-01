
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>
/**
 * Model Pelada
 * 
 */
export type Pelada = $Result.DefaultSelection<Prisma.$PeladaPayload>
/**
 * Model PeladaPlayer
 * 
 */
export type PeladaPlayer = $Result.DefaultSelection<Prisma.$PeladaPlayerPayload>
/**
 * Model PeladaQueueEntry
 * 
 */
export type PeladaQueueEntry = $Result.DefaultSelection<Prisma.$PeladaQueueEntryPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model MatchPlayer
 * 
 */
export type MatchPlayer = $Result.DefaultSelection<Prisma.$MatchPlayerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  REGISTERED: 'REGISTERED',
  PLACEHOLDER: 'PLACEHOLDER'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const GroupMemberRole: {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type GroupMemberRole = (typeof GroupMemberRole)[keyof typeof GroupMemberRole]


export const PeladaStatus: {
  OPEN: 'OPEN',
  FINISHED: 'FINISHED'
};

export type PeladaStatus = (typeof PeladaStatus)[keyof typeof PeladaStatus]


export const PeladaPlayerStatus: {
  ACTIVE: 'ACTIVE',
  ABSENT: 'ABSENT'
};

export type PeladaPlayerStatus = (typeof PeladaPlayerStatus)[keyof typeof PeladaPlayerStatus]


export const MatchStatus: {
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED'
};

export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus]


export const MatchTeam: {
  A: 'A',
  B: 'B'
};

export type MatchTeam = (typeof MatchTeam)[keyof typeof MatchTeam]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type GroupMemberRole = $Enums.GroupMemberRole

export const GroupMemberRole: typeof $Enums.GroupMemberRole

export type PeladaStatus = $Enums.PeladaStatus

export const PeladaStatus: typeof $Enums.PeladaStatus

export type PeladaPlayerStatus = $Enums.PeladaPlayerStatus

export const PeladaPlayerStatus: typeof $Enums.PeladaPlayerStatus

export type MatchStatus = $Enums.MatchStatus

export const MatchStatus: typeof $Enums.MatchStatus

export type MatchTeam = $Enums.MatchTeam

export const MatchTeam: typeof $Enums.MatchTeam

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pelada`: Exposes CRUD operations for the **Pelada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peladas
    * const peladas = await prisma.pelada.findMany()
    * ```
    */
  get pelada(): Prisma.PeladaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peladaPlayer`: Exposes CRUD operations for the **PeladaPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeladaPlayers
    * const peladaPlayers = await prisma.peladaPlayer.findMany()
    * ```
    */
  get peladaPlayer(): Prisma.PeladaPlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peladaQueueEntry`: Exposes CRUD operations for the **PeladaQueueEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeladaQueueEntries
    * const peladaQueueEntries = await prisma.peladaQueueEntry.findMany()
    * ```
    */
  get peladaQueueEntry(): Prisma.PeladaQueueEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchPlayer`: Exposes CRUD operations for the **MatchPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchPlayers
    * const matchPlayers = await prisma.matchPlayer.findMany()
    * ```
    */
  get matchPlayer(): Prisma.MatchPlayerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Group: 'Group',
    GroupMember: 'GroupMember',
    Pelada: 'Pelada',
    PeladaPlayer: 'PeladaPlayer',
    PeladaQueueEntry: 'PeladaQueueEntry',
    Match: 'Match',
    MatchPlayer: 'MatchPlayer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "group" | "groupMember" | "pelada" | "peladaPlayer" | "peladaQueueEntry" | "match" | "matchPlayer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      Pelada: {
        payload: Prisma.$PeladaPayload<ExtArgs>
        fields: Prisma.PeladaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeladaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeladaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPayload>
          }
          findFirst: {
            args: Prisma.PeladaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeladaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPayload>
          }
          findMany: {
            args: Prisma.PeladaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPayload>[]
          }
          create: {
            args: Prisma.PeladaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPayload>
          }
          createMany: {
            args: Prisma.PeladaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeladaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPayload>[]
          }
          delete: {
            args: Prisma.PeladaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPayload>
          }
          update: {
            args: Prisma.PeladaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPayload>
          }
          deleteMany: {
            args: Prisma.PeladaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeladaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeladaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPayload>[]
          }
          upsert: {
            args: Prisma.PeladaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPayload>
          }
          aggregate: {
            args: Prisma.PeladaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePelada>
          }
          groupBy: {
            args: Prisma.PeladaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeladaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeladaCountArgs<ExtArgs>
            result: $Utils.Optional<PeladaCountAggregateOutputType> | number
          }
        }
      }
      PeladaPlayer: {
        payload: Prisma.$PeladaPlayerPayload<ExtArgs>
        fields: Prisma.PeladaPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeladaPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeladaPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPlayerPayload>
          }
          findFirst: {
            args: Prisma.PeladaPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeladaPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPlayerPayload>
          }
          findMany: {
            args: Prisma.PeladaPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPlayerPayload>[]
          }
          create: {
            args: Prisma.PeladaPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPlayerPayload>
          }
          createMany: {
            args: Prisma.PeladaPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeladaPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPlayerPayload>[]
          }
          delete: {
            args: Prisma.PeladaPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPlayerPayload>
          }
          update: {
            args: Prisma.PeladaPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPlayerPayload>
          }
          deleteMany: {
            args: Prisma.PeladaPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeladaPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeladaPlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPlayerPayload>[]
          }
          upsert: {
            args: Prisma.PeladaPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaPlayerPayload>
          }
          aggregate: {
            args: Prisma.PeladaPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeladaPlayer>
          }
          groupBy: {
            args: Prisma.PeladaPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeladaPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeladaPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PeladaPlayerCountAggregateOutputType> | number
          }
        }
      }
      PeladaQueueEntry: {
        payload: Prisma.$PeladaQueueEntryPayload<ExtArgs>
        fields: Prisma.PeladaQueueEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeladaQueueEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaQueueEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeladaQueueEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaQueueEntryPayload>
          }
          findFirst: {
            args: Prisma.PeladaQueueEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaQueueEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeladaQueueEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaQueueEntryPayload>
          }
          findMany: {
            args: Prisma.PeladaQueueEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaQueueEntryPayload>[]
          }
          create: {
            args: Prisma.PeladaQueueEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaQueueEntryPayload>
          }
          createMany: {
            args: Prisma.PeladaQueueEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeladaQueueEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaQueueEntryPayload>[]
          }
          delete: {
            args: Prisma.PeladaQueueEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaQueueEntryPayload>
          }
          update: {
            args: Prisma.PeladaQueueEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaQueueEntryPayload>
          }
          deleteMany: {
            args: Prisma.PeladaQueueEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeladaQueueEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeladaQueueEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaQueueEntryPayload>[]
          }
          upsert: {
            args: Prisma.PeladaQueueEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeladaQueueEntryPayload>
          }
          aggregate: {
            args: Prisma.PeladaQueueEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeladaQueueEntry>
          }
          groupBy: {
            args: Prisma.PeladaQueueEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeladaQueueEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeladaQueueEntryCountArgs<ExtArgs>
            result: $Utils.Optional<PeladaQueueEntryCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      MatchPlayer: {
        payload: Prisma.$MatchPlayerPayload<ExtArgs>
        fields: Prisma.MatchPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>
          }
          findFirst: {
            args: Prisma.MatchPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>
          }
          findMany: {
            args: Prisma.MatchPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>[]
          }
          create: {
            args: Prisma.MatchPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>
          }
          createMany: {
            args: Prisma.MatchPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>[]
          }
          delete: {
            args: Prisma.MatchPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>
          }
          update: {
            args: Prisma.MatchPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>
          }
          deleteMany: {
            args: Prisma.MatchPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchPlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>[]
          }
          upsert: {
            args: Prisma.MatchPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>
          }
          aggregate: {
            args: Prisma.MatchPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchPlayer>
          }
          groupBy: {
            args: Prisma.MatchPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<MatchPlayerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    group?: GroupOmit
    groupMember?: GroupMemberOmit
    pelada?: PeladaOmit
    peladaPlayer?: PeladaPlayerOmit
    peladaQueueEntry?: PeladaQueueEntryOmit
    match?: MatchOmit
    matchPlayer?: MatchPlayerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedGroups: number
    memberships: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedGroups?: boolean | UserCountOutputTypeCountOwnedGroupsArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number
    peladas: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
    peladas?: boolean | GroupCountOutputTypeCountPeladasArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountPeladasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeladaWhereInput
  }


  /**
   * Count Type GroupMemberCountOutputType
   */

  export type GroupMemberCountOutputType = {
    peladaPlayers: number
  }

  export type GroupMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peladaPlayers?: boolean | GroupMemberCountOutputTypeCountPeladaPlayersArgs
  }

  // Custom InputTypes
  /**
   * GroupMemberCountOutputType without action
   */
  export type GroupMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMemberCountOutputType
     */
    select?: GroupMemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupMemberCountOutputType without action
   */
  export type GroupMemberCountOutputTypeCountPeladaPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeladaPlayerWhereInput
  }


  /**
   * Count Type PeladaCountOutputType
   */

  export type PeladaCountOutputType = {
    players: number
    queueEntries: number
    matches: number
  }

  export type PeladaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | PeladaCountOutputTypeCountPlayersArgs
    queueEntries?: boolean | PeladaCountOutputTypeCountQueueEntriesArgs
    matches?: boolean | PeladaCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * PeladaCountOutputType without action
   */
  export type PeladaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaCountOutputType
     */
    select?: PeladaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeladaCountOutputType without action
   */
  export type PeladaCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeladaPlayerWhereInput
  }

  /**
   * PeladaCountOutputType without action
   */
  export type PeladaCountOutputTypeCountQueueEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeladaQueueEntryWhereInput
  }

  /**
   * PeladaCountOutputType without action
   */
  export type PeladaCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type PeladaPlayerCountOutputType
   */

  export type PeladaPlayerCountOutputType = {
    matchPlayers: number
  }

  export type PeladaPlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchPlayers?: boolean | PeladaPlayerCountOutputTypeCountMatchPlayersArgs
  }

  // Custom InputTypes
  /**
   * PeladaPlayerCountOutputType without action
   */
  export type PeladaPlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayerCountOutputType
     */
    select?: PeladaPlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeladaPlayerCountOutputType without action
   */
  export type PeladaPlayerCountOutputTypeCountMatchPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchPlayerWhereInput
  }


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    players: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | MatchCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchPlayerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    nickname: string | null
    email: string | null
    passwordHash: string | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    nickname: string | null
    email: string | null
    passwordHash: string | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    nickname: number
    email: number
    passwordHash: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nickname?: true
    email?: true
    passwordHash?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nickname?: true
    email?: true
    passwordHash?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nickname?: true
    email?: true
    passwordHash?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string | null
    lastName: string | null
    nickname: string
    email: string | null
    passwordHash: string | null
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nickname?: boolean
    email?: boolean
    passwordHash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownedGroups?: boolean | User$ownedGroupsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nickname?: boolean
    email?: boolean
    passwordHash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nickname?: boolean
    email?: boolean
    passwordHash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nickname?: boolean
    email?: boolean
    passwordHash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "nickname" | "email" | "passwordHash" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedGroups?: boolean | User$ownedGroupsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedGroups: Prisma.$GroupPayload<ExtArgs>[]
      memberships: Prisma.$GroupMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string | null
      lastName: string | null
      nickname: string
      email: string | null
      passwordHash: string | null
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedGroups<T extends User$ownedGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedGroups
   */
  export type User$ownedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    peladas?: boolean | Group$peladasArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    peladas?: boolean | Group$peladasArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
      peladas: Prisma.$PeladaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    peladas<T extends Group$peladasArgs<ExtArgs> = {}>(args?: Subset<T, Group$peladasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly ownerId: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * Group.peladas
   */
  export type Group$peladasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelada
     */
    select?: PeladaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelada
     */
    omit?: PeladaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaInclude<ExtArgs> | null
    where?: PeladaWhereInput
    orderBy?: PeladaOrderByWithRelationInput | PeladaOrderByWithRelationInput[]
    cursor?: PeladaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeladaScalarFieldEnum | PeladaScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    role: $Enums.GroupMemberRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    role: $Enums.GroupMemberRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMemberCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupMemberMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMemberCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    id: string
    groupId: string
    userId: string
    role: $Enums.GroupMemberRole
    createdAt: Date
    updatedAt: Date
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    peladaPlayers?: boolean | GroupMember$peladaPlayersArgs<ExtArgs>
    _count?: boolean | GroupMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectScalar = {
    id?: boolean
    groupId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "userId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["groupMember"]>
  export type GroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    peladaPlayers?: boolean | GroupMember$peladaPlayersArgs<ExtArgs>
    _count?: boolean | GroupMemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      peladaPlayers: Prisma.$PeladaPlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      userId: string
      role: $Enums.GroupMemberRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }

  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberFindUniqueArgs>(args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberFindFirstArgs>(args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupMemberFindManyArgs>(args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
     */
    create<T extends GroupMemberCreateArgs>(args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberCreateManyArgs>(args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMembers and returns the data saved in the database.
     * @param {GroupMemberCreateManyAndReturnArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberDeleteArgs>(args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberUpdateArgs>(args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberUpdateManyArgs>(args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers and returns the data updated in the database.
     * @param {GroupMemberUpdateManyAndReturnArgs} args - Arguments to update many GroupMembers.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberUpsertArgs>(args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    peladaPlayers<T extends GroupMember$peladaPlayersArgs<ExtArgs> = {}>(args?: Subset<T, GroupMember$peladaPlayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupMember model
   */
  interface GroupMemberFieldRefs {
    readonly id: FieldRef<"GroupMember", 'String'>
    readonly groupId: FieldRef<"GroupMember", 'String'>
    readonly userId: FieldRef<"GroupMember", 'String'>
    readonly role: FieldRef<"GroupMember", 'GroupMemberRole'>
    readonly createdAt: FieldRef<"GroupMember", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }

  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMember createManyAndReturn
   */
  export type GroupMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
  }

  /**
   * GroupMember updateManyAndReturn
   */
  export type GroupMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }

  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to delete.
     */
    limit?: number
  }

  /**
   * GroupMember.peladaPlayers
   */
  export type GroupMember$peladaPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayer
     */
    select?: PeladaPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaPlayer
     */
    omit?: PeladaPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaPlayerInclude<ExtArgs> | null
    where?: PeladaPlayerWhereInput
    orderBy?: PeladaPlayerOrderByWithRelationInput | PeladaPlayerOrderByWithRelationInput[]
    cursor?: PeladaPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeladaPlayerScalarFieldEnum | PeladaPlayerScalarFieldEnum[]
  }

  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model Pelada
   */

  export type AggregatePelada = {
    _count: PeladaCountAggregateOutputType | null
    _avg: PeladaAvgAggregateOutputType | null
    _sum: PeladaSumAggregateOutputType | null
    _min: PeladaMinAggregateOutputType | null
    _max: PeladaMaxAggregateOutputType | null
  }

  export type PeladaAvgAggregateOutputType = {
    playersPerTeam: number | null
  }

  export type PeladaSumAggregateOutputType = {
    playersPerTeam: number | null
  }

  export type PeladaMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    name: string | null
    date: Date | null
    playersPerTeam: number | null
    status: $Enums.PeladaStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeladaMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    name: string | null
    date: Date | null
    playersPerTeam: number | null
    status: $Enums.PeladaStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeladaCountAggregateOutputType = {
    id: number
    groupId: number
    name: number
    date: number
    playersPerTeam: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PeladaAvgAggregateInputType = {
    playersPerTeam?: true
  }

  export type PeladaSumAggregateInputType = {
    playersPerTeam?: true
  }

  export type PeladaMinAggregateInputType = {
    id?: true
    groupId?: true
    name?: true
    date?: true
    playersPerTeam?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeladaMaxAggregateInputType = {
    id?: true
    groupId?: true
    name?: true
    date?: true
    playersPerTeam?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeladaCountAggregateInputType = {
    id?: true
    groupId?: true
    name?: true
    date?: true
    playersPerTeam?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PeladaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pelada to aggregate.
     */
    where?: PeladaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peladas to fetch.
     */
    orderBy?: PeladaOrderByWithRelationInput | PeladaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeladaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peladas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peladas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Peladas
    **/
    _count?: true | PeladaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeladaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeladaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeladaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeladaMaxAggregateInputType
  }

  export type GetPeladaAggregateType<T extends PeladaAggregateArgs> = {
        [P in keyof T & keyof AggregatePelada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePelada[P]>
      : GetScalarType<T[P], AggregatePelada[P]>
  }




  export type PeladaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeladaWhereInput
    orderBy?: PeladaOrderByWithAggregationInput | PeladaOrderByWithAggregationInput[]
    by: PeladaScalarFieldEnum[] | PeladaScalarFieldEnum
    having?: PeladaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeladaCountAggregateInputType | true
    _avg?: PeladaAvgAggregateInputType
    _sum?: PeladaSumAggregateInputType
    _min?: PeladaMinAggregateInputType
    _max?: PeladaMaxAggregateInputType
  }

  export type PeladaGroupByOutputType = {
    id: string
    groupId: string
    name: string
    date: Date | null
    playersPerTeam: number
    status: $Enums.PeladaStatus
    createdAt: Date
    updatedAt: Date
    _count: PeladaCountAggregateOutputType | null
    _avg: PeladaAvgAggregateOutputType | null
    _sum: PeladaSumAggregateOutputType | null
    _min: PeladaMinAggregateOutputType | null
    _max: PeladaMaxAggregateOutputType | null
  }

  type GetPeladaGroupByPayload<T extends PeladaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeladaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeladaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeladaGroupByOutputType[P]>
            : GetScalarType<T[P], PeladaGroupByOutputType[P]>
        }
      >
    >


  export type PeladaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    name?: boolean
    date?: boolean
    playersPerTeam?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    players?: boolean | Pelada$playersArgs<ExtArgs>
    queueEntries?: boolean | Pelada$queueEntriesArgs<ExtArgs>
    matches?: boolean | Pelada$matchesArgs<ExtArgs>
    _count?: boolean | PeladaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pelada"]>

  export type PeladaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    name?: boolean
    date?: boolean
    playersPerTeam?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pelada"]>

  export type PeladaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    name?: boolean
    date?: boolean
    playersPerTeam?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pelada"]>

  export type PeladaSelectScalar = {
    id?: boolean
    groupId?: boolean
    name?: boolean
    date?: boolean
    playersPerTeam?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PeladaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "name" | "date" | "playersPerTeam" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["pelada"]>
  export type PeladaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    players?: boolean | Pelada$playersArgs<ExtArgs>
    queueEntries?: boolean | Pelada$queueEntriesArgs<ExtArgs>
    matches?: boolean | Pelada$matchesArgs<ExtArgs>
    _count?: boolean | PeladaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeladaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type PeladaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $PeladaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pelada"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      players: Prisma.$PeladaPlayerPayload<ExtArgs>[]
      queueEntries: Prisma.$PeladaQueueEntryPayload<ExtArgs>[]
      matches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      name: string
      date: Date | null
      playersPerTeam: number
      status: $Enums.PeladaStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pelada"]>
    composites: {}
  }

  type PeladaGetPayload<S extends boolean | null | undefined | PeladaDefaultArgs> = $Result.GetResult<Prisma.$PeladaPayload, S>

  type PeladaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeladaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeladaCountAggregateInputType | true
    }

  export interface PeladaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pelada'], meta: { name: 'Pelada' } }
    /**
     * Find zero or one Pelada that matches the filter.
     * @param {PeladaFindUniqueArgs} args - Arguments to find a Pelada
     * @example
     * // Get one Pelada
     * const pelada = await prisma.pelada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeladaFindUniqueArgs>(args: SelectSubset<T, PeladaFindUniqueArgs<ExtArgs>>): Prisma__PeladaClient<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pelada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeladaFindUniqueOrThrowArgs} args - Arguments to find a Pelada
     * @example
     * // Get one Pelada
     * const pelada = await prisma.pelada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeladaFindUniqueOrThrowArgs>(args: SelectSubset<T, PeladaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeladaClient<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pelada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaFindFirstArgs} args - Arguments to find a Pelada
     * @example
     * // Get one Pelada
     * const pelada = await prisma.pelada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeladaFindFirstArgs>(args?: SelectSubset<T, PeladaFindFirstArgs<ExtArgs>>): Prisma__PeladaClient<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pelada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaFindFirstOrThrowArgs} args - Arguments to find a Pelada
     * @example
     * // Get one Pelada
     * const pelada = await prisma.pelada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeladaFindFirstOrThrowArgs>(args?: SelectSubset<T, PeladaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeladaClient<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Peladas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peladas
     * const peladas = await prisma.pelada.findMany()
     * 
     * // Get first 10 Peladas
     * const peladas = await prisma.pelada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peladaWithIdOnly = await prisma.pelada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeladaFindManyArgs>(args?: SelectSubset<T, PeladaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pelada.
     * @param {PeladaCreateArgs} args - Arguments to create a Pelada.
     * @example
     * // Create one Pelada
     * const Pelada = await prisma.pelada.create({
     *   data: {
     *     // ... data to create a Pelada
     *   }
     * })
     * 
     */
    create<T extends PeladaCreateArgs>(args: SelectSubset<T, PeladaCreateArgs<ExtArgs>>): Prisma__PeladaClient<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Peladas.
     * @param {PeladaCreateManyArgs} args - Arguments to create many Peladas.
     * @example
     * // Create many Peladas
     * const pelada = await prisma.pelada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeladaCreateManyArgs>(args?: SelectSubset<T, PeladaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Peladas and returns the data saved in the database.
     * @param {PeladaCreateManyAndReturnArgs} args - Arguments to create many Peladas.
     * @example
     * // Create many Peladas
     * const pelada = await prisma.pelada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Peladas and only return the `id`
     * const peladaWithIdOnly = await prisma.pelada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeladaCreateManyAndReturnArgs>(args?: SelectSubset<T, PeladaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pelada.
     * @param {PeladaDeleteArgs} args - Arguments to delete one Pelada.
     * @example
     * // Delete one Pelada
     * const Pelada = await prisma.pelada.delete({
     *   where: {
     *     // ... filter to delete one Pelada
     *   }
     * })
     * 
     */
    delete<T extends PeladaDeleteArgs>(args: SelectSubset<T, PeladaDeleteArgs<ExtArgs>>): Prisma__PeladaClient<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pelada.
     * @param {PeladaUpdateArgs} args - Arguments to update one Pelada.
     * @example
     * // Update one Pelada
     * const pelada = await prisma.pelada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeladaUpdateArgs>(args: SelectSubset<T, PeladaUpdateArgs<ExtArgs>>): Prisma__PeladaClient<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Peladas.
     * @param {PeladaDeleteManyArgs} args - Arguments to filter Peladas to delete.
     * @example
     * // Delete a few Peladas
     * const { count } = await prisma.pelada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeladaDeleteManyArgs>(args?: SelectSubset<T, PeladaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peladas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peladas
     * const pelada = await prisma.pelada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeladaUpdateManyArgs>(args: SelectSubset<T, PeladaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peladas and returns the data updated in the database.
     * @param {PeladaUpdateManyAndReturnArgs} args - Arguments to update many Peladas.
     * @example
     * // Update many Peladas
     * const pelada = await prisma.pelada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Peladas and only return the `id`
     * const peladaWithIdOnly = await prisma.pelada.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PeladaUpdateManyAndReturnArgs>(args: SelectSubset<T, PeladaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pelada.
     * @param {PeladaUpsertArgs} args - Arguments to update or create a Pelada.
     * @example
     * // Update or create a Pelada
     * const pelada = await prisma.pelada.upsert({
     *   create: {
     *     // ... data to create a Pelada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pelada we want to update
     *   }
     * })
     */
    upsert<T extends PeladaUpsertArgs>(args: SelectSubset<T, PeladaUpsertArgs<ExtArgs>>): Prisma__PeladaClient<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Peladas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaCountArgs} args - Arguments to filter Peladas to count.
     * @example
     * // Count the number of Peladas
     * const count = await prisma.pelada.count({
     *   where: {
     *     // ... the filter for the Peladas we want to count
     *   }
     * })
    **/
    count<T extends PeladaCountArgs>(
      args?: Subset<T, PeladaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeladaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pelada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeladaAggregateArgs>(args: Subset<T, PeladaAggregateArgs>): Prisma.PrismaPromise<GetPeladaAggregateType<T>>

    /**
     * Group by Pelada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeladaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeladaGroupByArgs['orderBy'] }
        : { orderBy?: PeladaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeladaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeladaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pelada model
   */
  readonly fields: PeladaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pelada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeladaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    players<T extends Pelada$playersArgs<ExtArgs> = {}>(args?: Subset<T, Pelada$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    queueEntries<T extends Pelada$queueEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Pelada$queueEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeladaQueueEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends Pelada$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Pelada$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pelada model
   */
  interface PeladaFieldRefs {
    readonly id: FieldRef<"Pelada", 'String'>
    readonly groupId: FieldRef<"Pelada", 'String'>
    readonly name: FieldRef<"Pelada", 'String'>
    readonly date: FieldRef<"Pelada", 'DateTime'>
    readonly playersPerTeam: FieldRef<"Pelada", 'Int'>
    readonly status: FieldRef<"Pelada", 'PeladaStatus'>
    readonly createdAt: FieldRef<"Pelada", 'DateTime'>
    readonly updatedAt: FieldRef<"Pelada", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pelada findUnique
   */
  export type PeladaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelada
     */
    select?: PeladaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelada
     */
    omit?: PeladaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaInclude<ExtArgs> | null
    /**
     * Filter, which Pelada to fetch.
     */
    where: PeladaWhereUniqueInput
  }

  /**
   * Pelada findUniqueOrThrow
   */
  export type PeladaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelada
     */
    select?: PeladaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelada
     */
    omit?: PeladaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaInclude<ExtArgs> | null
    /**
     * Filter, which Pelada to fetch.
     */
    where: PeladaWhereUniqueInput
  }

  /**
   * Pelada findFirst
   */
  export type PeladaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelada
     */
    select?: PeladaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelada
     */
    omit?: PeladaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaInclude<ExtArgs> | null
    /**
     * Filter, which Pelada to fetch.
     */
    where?: PeladaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peladas to fetch.
     */
    orderBy?: PeladaOrderByWithRelationInput | PeladaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peladas.
     */
    cursor?: PeladaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peladas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peladas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peladas.
     */
    distinct?: PeladaScalarFieldEnum | PeladaScalarFieldEnum[]
  }

  /**
   * Pelada findFirstOrThrow
   */
  export type PeladaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelada
     */
    select?: PeladaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelada
     */
    omit?: PeladaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaInclude<ExtArgs> | null
    /**
     * Filter, which Pelada to fetch.
     */
    where?: PeladaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peladas to fetch.
     */
    orderBy?: PeladaOrderByWithRelationInput | PeladaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peladas.
     */
    cursor?: PeladaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peladas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peladas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peladas.
     */
    distinct?: PeladaScalarFieldEnum | PeladaScalarFieldEnum[]
  }

  /**
   * Pelada findMany
   */
  export type PeladaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelada
     */
    select?: PeladaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelada
     */
    omit?: PeladaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaInclude<ExtArgs> | null
    /**
     * Filter, which Peladas to fetch.
     */
    where?: PeladaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peladas to fetch.
     */
    orderBy?: PeladaOrderByWithRelationInput | PeladaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Peladas.
     */
    cursor?: PeladaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peladas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peladas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peladas.
     */
    distinct?: PeladaScalarFieldEnum | PeladaScalarFieldEnum[]
  }

  /**
   * Pelada create
   */
  export type PeladaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelada
     */
    select?: PeladaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelada
     */
    omit?: PeladaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pelada.
     */
    data: XOR<PeladaCreateInput, PeladaUncheckedCreateInput>
  }

  /**
   * Pelada createMany
   */
  export type PeladaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Peladas.
     */
    data: PeladaCreateManyInput | PeladaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pelada createManyAndReturn
   */
  export type PeladaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelada
     */
    select?: PeladaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pelada
     */
    omit?: PeladaOmit<ExtArgs> | null
    /**
     * The data used to create many Peladas.
     */
    data: PeladaCreateManyInput | PeladaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pelada update
   */
  export type PeladaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelada
     */
    select?: PeladaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelada
     */
    omit?: PeladaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pelada.
     */
    data: XOR<PeladaUpdateInput, PeladaUncheckedUpdateInput>
    /**
     * Choose, which Pelada to update.
     */
    where: PeladaWhereUniqueInput
  }

  /**
   * Pelada updateMany
   */
  export type PeladaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Peladas.
     */
    data: XOR<PeladaUpdateManyMutationInput, PeladaUncheckedUpdateManyInput>
    /**
     * Filter which Peladas to update
     */
    where?: PeladaWhereInput
    /**
     * Limit how many Peladas to update.
     */
    limit?: number
  }

  /**
   * Pelada updateManyAndReturn
   */
  export type PeladaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelada
     */
    select?: PeladaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pelada
     */
    omit?: PeladaOmit<ExtArgs> | null
    /**
     * The data used to update Peladas.
     */
    data: XOR<PeladaUpdateManyMutationInput, PeladaUncheckedUpdateManyInput>
    /**
     * Filter which Peladas to update
     */
    where?: PeladaWhereInput
    /**
     * Limit how many Peladas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pelada upsert
   */
  export type PeladaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelada
     */
    select?: PeladaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelada
     */
    omit?: PeladaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pelada to update in case it exists.
     */
    where: PeladaWhereUniqueInput
    /**
     * In case the Pelada found by the `where` argument doesn't exist, create a new Pelada with this data.
     */
    create: XOR<PeladaCreateInput, PeladaUncheckedCreateInput>
    /**
     * In case the Pelada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeladaUpdateInput, PeladaUncheckedUpdateInput>
  }

  /**
   * Pelada delete
   */
  export type PeladaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelada
     */
    select?: PeladaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelada
     */
    omit?: PeladaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaInclude<ExtArgs> | null
    /**
     * Filter which Pelada to delete.
     */
    where: PeladaWhereUniqueInput
  }

  /**
   * Pelada deleteMany
   */
  export type PeladaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peladas to delete
     */
    where?: PeladaWhereInput
    /**
     * Limit how many Peladas to delete.
     */
    limit?: number
  }

  /**
   * Pelada.players
   */
  export type Pelada$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayer
     */
    select?: PeladaPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaPlayer
     */
    omit?: PeladaPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaPlayerInclude<ExtArgs> | null
    where?: PeladaPlayerWhereInput
    orderBy?: PeladaPlayerOrderByWithRelationInput | PeladaPlayerOrderByWithRelationInput[]
    cursor?: PeladaPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeladaPlayerScalarFieldEnum | PeladaPlayerScalarFieldEnum[]
  }

  /**
   * Pelada.queueEntries
   */
  export type Pelada$queueEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaQueueEntry
     */
    select?: PeladaQueueEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaQueueEntry
     */
    omit?: PeladaQueueEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaQueueEntryInclude<ExtArgs> | null
    where?: PeladaQueueEntryWhereInput
    orderBy?: PeladaQueueEntryOrderByWithRelationInput | PeladaQueueEntryOrderByWithRelationInput[]
    cursor?: PeladaQueueEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeladaQueueEntryScalarFieldEnum | PeladaQueueEntryScalarFieldEnum[]
  }

  /**
   * Pelada.matches
   */
  export type Pelada$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Pelada without action
   */
  export type PeladaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pelada
     */
    select?: PeladaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pelada
     */
    omit?: PeladaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaInclude<ExtArgs> | null
  }


  /**
   * Model PeladaPlayer
   */

  export type AggregatePeladaPlayer = {
    _count: PeladaPlayerCountAggregateOutputType | null
    _min: PeladaPlayerMinAggregateOutputType | null
    _max: PeladaPlayerMaxAggregateOutputType | null
  }

  export type PeladaPlayerMinAggregateOutputType = {
    id: string | null
    peladaId: string | null
    groupMemberId: string | null
    status: $Enums.PeladaPlayerStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeladaPlayerMaxAggregateOutputType = {
    id: string | null
    peladaId: string | null
    groupMemberId: string | null
    status: $Enums.PeladaPlayerStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeladaPlayerCountAggregateOutputType = {
    id: number
    peladaId: number
    groupMemberId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PeladaPlayerMinAggregateInputType = {
    id?: true
    peladaId?: true
    groupMemberId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeladaPlayerMaxAggregateInputType = {
    id?: true
    peladaId?: true
    groupMemberId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeladaPlayerCountAggregateInputType = {
    id?: true
    peladaId?: true
    groupMemberId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PeladaPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeladaPlayer to aggregate.
     */
    where?: PeladaPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeladaPlayers to fetch.
     */
    orderBy?: PeladaPlayerOrderByWithRelationInput | PeladaPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeladaPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeladaPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeladaPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PeladaPlayers
    **/
    _count?: true | PeladaPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeladaPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeladaPlayerMaxAggregateInputType
  }

  export type GetPeladaPlayerAggregateType<T extends PeladaPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePeladaPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeladaPlayer[P]>
      : GetScalarType<T[P], AggregatePeladaPlayer[P]>
  }




  export type PeladaPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeladaPlayerWhereInput
    orderBy?: PeladaPlayerOrderByWithAggregationInput | PeladaPlayerOrderByWithAggregationInput[]
    by: PeladaPlayerScalarFieldEnum[] | PeladaPlayerScalarFieldEnum
    having?: PeladaPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeladaPlayerCountAggregateInputType | true
    _min?: PeladaPlayerMinAggregateInputType
    _max?: PeladaPlayerMaxAggregateInputType
  }

  export type PeladaPlayerGroupByOutputType = {
    id: string
    peladaId: string
    groupMemberId: string
    status: $Enums.PeladaPlayerStatus
    createdAt: Date
    updatedAt: Date
    _count: PeladaPlayerCountAggregateOutputType | null
    _min: PeladaPlayerMinAggregateOutputType | null
    _max: PeladaPlayerMaxAggregateOutputType | null
  }

  type GetPeladaPlayerGroupByPayload<T extends PeladaPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeladaPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeladaPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeladaPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PeladaPlayerGroupByOutputType[P]>
        }
      >
    >


  export type PeladaPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peladaId?: boolean
    groupMemberId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
    groupMember?: boolean | GroupMemberDefaultArgs<ExtArgs>
    queueEntry?: boolean | PeladaPlayer$queueEntryArgs<ExtArgs>
    matchPlayers?: boolean | PeladaPlayer$matchPlayersArgs<ExtArgs>
    _count?: boolean | PeladaPlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peladaPlayer"]>

  export type PeladaPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peladaId?: boolean
    groupMemberId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
    groupMember?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peladaPlayer"]>

  export type PeladaPlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peladaId?: boolean
    groupMemberId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
    groupMember?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peladaPlayer"]>

  export type PeladaPlayerSelectScalar = {
    id?: boolean
    peladaId?: boolean
    groupMemberId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PeladaPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "peladaId" | "groupMemberId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["peladaPlayer"]>
  export type PeladaPlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
    groupMember?: boolean | GroupMemberDefaultArgs<ExtArgs>
    queueEntry?: boolean | PeladaPlayer$queueEntryArgs<ExtArgs>
    matchPlayers?: boolean | PeladaPlayer$matchPlayersArgs<ExtArgs>
    _count?: boolean | PeladaPlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeladaPlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
    groupMember?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }
  export type PeladaPlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
    groupMember?: boolean | GroupMemberDefaultArgs<ExtArgs>
  }

  export type $PeladaPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PeladaPlayer"
    objects: {
      pelada: Prisma.$PeladaPayload<ExtArgs>
      groupMember: Prisma.$GroupMemberPayload<ExtArgs>
      queueEntry: Prisma.$PeladaQueueEntryPayload<ExtArgs> | null
      matchPlayers: Prisma.$MatchPlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      peladaId: string
      groupMemberId: string
      status: $Enums.PeladaPlayerStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["peladaPlayer"]>
    composites: {}
  }

  type PeladaPlayerGetPayload<S extends boolean | null | undefined | PeladaPlayerDefaultArgs> = $Result.GetResult<Prisma.$PeladaPlayerPayload, S>

  type PeladaPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeladaPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeladaPlayerCountAggregateInputType | true
    }

  export interface PeladaPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PeladaPlayer'], meta: { name: 'PeladaPlayer' } }
    /**
     * Find zero or one PeladaPlayer that matches the filter.
     * @param {PeladaPlayerFindUniqueArgs} args - Arguments to find a PeladaPlayer
     * @example
     * // Get one PeladaPlayer
     * const peladaPlayer = await prisma.peladaPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeladaPlayerFindUniqueArgs>(args: SelectSubset<T, PeladaPlayerFindUniqueArgs<ExtArgs>>): Prisma__PeladaPlayerClient<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PeladaPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeladaPlayerFindUniqueOrThrowArgs} args - Arguments to find a PeladaPlayer
     * @example
     * // Get one PeladaPlayer
     * const peladaPlayer = await prisma.peladaPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeladaPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PeladaPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeladaPlayerClient<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeladaPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaPlayerFindFirstArgs} args - Arguments to find a PeladaPlayer
     * @example
     * // Get one PeladaPlayer
     * const peladaPlayer = await prisma.peladaPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeladaPlayerFindFirstArgs>(args?: SelectSubset<T, PeladaPlayerFindFirstArgs<ExtArgs>>): Prisma__PeladaPlayerClient<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeladaPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaPlayerFindFirstOrThrowArgs} args - Arguments to find a PeladaPlayer
     * @example
     * // Get one PeladaPlayer
     * const peladaPlayer = await prisma.peladaPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeladaPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PeladaPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeladaPlayerClient<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PeladaPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeladaPlayers
     * const peladaPlayers = await prisma.peladaPlayer.findMany()
     * 
     * // Get first 10 PeladaPlayers
     * const peladaPlayers = await prisma.peladaPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peladaPlayerWithIdOnly = await prisma.peladaPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeladaPlayerFindManyArgs>(args?: SelectSubset<T, PeladaPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PeladaPlayer.
     * @param {PeladaPlayerCreateArgs} args - Arguments to create a PeladaPlayer.
     * @example
     * // Create one PeladaPlayer
     * const PeladaPlayer = await prisma.peladaPlayer.create({
     *   data: {
     *     // ... data to create a PeladaPlayer
     *   }
     * })
     * 
     */
    create<T extends PeladaPlayerCreateArgs>(args: SelectSubset<T, PeladaPlayerCreateArgs<ExtArgs>>): Prisma__PeladaPlayerClient<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PeladaPlayers.
     * @param {PeladaPlayerCreateManyArgs} args - Arguments to create many PeladaPlayers.
     * @example
     * // Create many PeladaPlayers
     * const peladaPlayer = await prisma.peladaPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeladaPlayerCreateManyArgs>(args?: SelectSubset<T, PeladaPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PeladaPlayers and returns the data saved in the database.
     * @param {PeladaPlayerCreateManyAndReturnArgs} args - Arguments to create many PeladaPlayers.
     * @example
     * // Create many PeladaPlayers
     * const peladaPlayer = await prisma.peladaPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PeladaPlayers and only return the `id`
     * const peladaPlayerWithIdOnly = await prisma.peladaPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeladaPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PeladaPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PeladaPlayer.
     * @param {PeladaPlayerDeleteArgs} args - Arguments to delete one PeladaPlayer.
     * @example
     * // Delete one PeladaPlayer
     * const PeladaPlayer = await prisma.peladaPlayer.delete({
     *   where: {
     *     // ... filter to delete one PeladaPlayer
     *   }
     * })
     * 
     */
    delete<T extends PeladaPlayerDeleteArgs>(args: SelectSubset<T, PeladaPlayerDeleteArgs<ExtArgs>>): Prisma__PeladaPlayerClient<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PeladaPlayer.
     * @param {PeladaPlayerUpdateArgs} args - Arguments to update one PeladaPlayer.
     * @example
     * // Update one PeladaPlayer
     * const peladaPlayer = await prisma.peladaPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeladaPlayerUpdateArgs>(args: SelectSubset<T, PeladaPlayerUpdateArgs<ExtArgs>>): Prisma__PeladaPlayerClient<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PeladaPlayers.
     * @param {PeladaPlayerDeleteManyArgs} args - Arguments to filter PeladaPlayers to delete.
     * @example
     * // Delete a few PeladaPlayers
     * const { count } = await prisma.peladaPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeladaPlayerDeleteManyArgs>(args?: SelectSubset<T, PeladaPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeladaPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeladaPlayers
     * const peladaPlayer = await prisma.peladaPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeladaPlayerUpdateManyArgs>(args: SelectSubset<T, PeladaPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeladaPlayers and returns the data updated in the database.
     * @param {PeladaPlayerUpdateManyAndReturnArgs} args - Arguments to update many PeladaPlayers.
     * @example
     * // Update many PeladaPlayers
     * const peladaPlayer = await prisma.peladaPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PeladaPlayers and only return the `id`
     * const peladaPlayerWithIdOnly = await prisma.peladaPlayer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PeladaPlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PeladaPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PeladaPlayer.
     * @param {PeladaPlayerUpsertArgs} args - Arguments to update or create a PeladaPlayer.
     * @example
     * // Update or create a PeladaPlayer
     * const peladaPlayer = await prisma.peladaPlayer.upsert({
     *   create: {
     *     // ... data to create a PeladaPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeladaPlayer we want to update
     *   }
     * })
     */
    upsert<T extends PeladaPlayerUpsertArgs>(args: SelectSubset<T, PeladaPlayerUpsertArgs<ExtArgs>>): Prisma__PeladaPlayerClient<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PeladaPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaPlayerCountArgs} args - Arguments to filter PeladaPlayers to count.
     * @example
     * // Count the number of PeladaPlayers
     * const count = await prisma.peladaPlayer.count({
     *   where: {
     *     // ... the filter for the PeladaPlayers we want to count
     *   }
     * })
    **/
    count<T extends PeladaPlayerCountArgs>(
      args?: Subset<T, PeladaPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeladaPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeladaPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeladaPlayerAggregateArgs>(args: Subset<T, PeladaPlayerAggregateArgs>): Prisma.PrismaPromise<GetPeladaPlayerAggregateType<T>>

    /**
     * Group by PeladaPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaPlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeladaPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeladaPlayerGroupByArgs['orderBy'] }
        : { orderBy?: PeladaPlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeladaPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeladaPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PeladaPlayer model
   */
  readonly fields: PeladaPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PeladaPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeladaPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pelada<T extends PeladaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeladaDefaultArgs<ExtArgs>>): Prisma__PeladaClient<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groupMember<T extends GroupMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupMemberDefaultArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    queueEntry<T extends PeladaPlayer$queueEntryArgs<ExtArgs> = {}>(args?: Subset<T, PeladaPlayer$queueEntryArgs<ExtArgs>>): Prisma__PeladaQueueEntryClient<$Result.GetResult<Prisma.$PeladaQueueEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    matchPlayers<T extends PeladaPlayer$matchPlayersArgs<ExtArgs> = {}>(args?: Subset<T, PeladaPlayer$matchPlayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PeladaPlayer model
   */
  interface PeladaPlayerFieldRefs {
    readonly id: FieldRef<"PeladaPlayer", 'String'>
    readonly peladaId: FieldRef<"PeladaPlayer", 'String'>
    readonly groupMemberId: FieldRef<"PeladaPlayer", 'String'>
    readonly status: FieldRef<"PeladaPlayer", 'PeladaPlayerStatus'>
    readonly createdAt: FieldRef<"PeladaPlayer", 'DateTime'>
    readonly updatedAt: FieldRef<"PeladaPlayer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PeladaPlayer findUnique
   */
  export type PeladaPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayer
     */
    select?: PeladaPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaPlayer
     */
    omit?: PeladaPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaPlayerInclude<ExtArgs> | null
    /**
     * Filter, which PeladaPlayer to fetch.
     */
    where: PeladaPlayerWhereUniqueInput
  }

  /**
   * PeladaPlayer findUniqueOrThrow
   */
  export type PeladaPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayer
     */
    select?: PeladaPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaPlayer
     */
    omit?: PeladaPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaPlayerInclude<ExtArgs> | null
    /**
     * Filter, which PeladaPlayer to fetch.
     */
    where: PeladaPlayerWhereUniqueInput
  }

  /**
   * PeladaPlayer findFirst
   */
  export type PeladaPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayer
     */
    select?: PeladaPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaPlayer
     */
    omit?: PeladaPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaPlayerInclude<ExtArgs> | null
    /**
     * Filter, which PeladaPlayer to fetch.
     */
    where?: PeladaPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeladaPlayers to fetch.
     */
    orderBy?: PeladaPlayerOrderByWithRelationInput | PeladaPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeladaPlayers.
     */
    cursor?: PeladaPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeladaPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeladaPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeladaPlayers.
     */
    distinct?: PeladaPlayerScalarFieldEnum | PeladaPlayerScalarFieldEnum[]
  }

  /**
   * PeladaPlayer findFirstOrThrow
   */
  export type PeladaPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayer
     */
    select?: PeladaPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaPlayer
     */
    omit?: PeladaPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaPlayerInclude<ExtArgs> | null
    /**
     * Filter, which PeladaPlayer to fetch.
     */
    where?: PeladaPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeladaPlayers to fetch.
     */
    orderBy?: PeladaPlayerOrderByWithRelationInput | PeladaPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeladaPlayers.
     */
    cursor?: PeladaPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeladaPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeladaPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeladaPlayers.
     */
    distinct?: PeladaPlayerScalarFieldEnum | PeladaPlayerScalarFieldEnum[]
  }

  /**
   * PeladaPlayer findMany
   */
  export type PeladaPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayer
     */
    select?: PeladaPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaPlayer
     */
    omit?: PeladaPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaPlayerInclude<ExtArgs> | null
    /**
     * Filter, which PeladaPlayers to fetch.
     */
    where?: PeladaPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeladaPlayers to fetch.
     */
    orderBy?: PeladaPlayerOrderByWithRelationInput | PeladaPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PeladaPlayers.
     */
    cursor?: PeladaPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeladaPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeladaPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeladaPlayers.
     */
    distinct?: PeladaPlayerScalarFieldEnum | PeladaPlayerScalarFieldEnum[]
  }

  /**
   * PeladaPlayer create
   */
  export type PeladaPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayer
     */
    select?: PeladaPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaPlayer
     */
    omit?: PeladaPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaPlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a PeladaPlayer.
     */
    data: XOR<PeladaPlayerCreateInput, PeladaPlayerUncheckedCreateInput>
  }

  /**
   * PeladaPlayer createMany
   */
  export type PeladaPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PeladaPlayers.
     */
    data: PeladaPlayerCreateManyInput | PeladaPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeladaPlayer createManyAndReturn
   */
  export type PeladaPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayer
     */
    select?: PeladaPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaPlayer
     */
    omit?: PeladaPlayerOmit<ExtArgs> | null
    /**
     * The data used to create many PeladaPlayers.
     */
    data: PeladaPlayerCreateManyInput | PeladaPlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaPlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeladaPlayer update
   */
  export type PeladaPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayer
     */
    select?: PeladaPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaPlayer
     */
    omit?: PeladaPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaPlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a PeladaPlayer.
     */
    data: XOR<PeladaPlayerUpdateInput, PeladaPlayerUncheckedUpdateInput>
    /**
     * Choose, which PeladaPlayer to update.
     */
    where: PeladaPlayerWhereUniqueInput
  }

  /**
   * PeladaPlayer updateMany
   */
  export type PeladaPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PeladaPlayers.
     */
    data: XOR<PeladaPlayerUpdateManyMutationInput, PeladaPlayerUncheckedUpdateManyInput>
    /**
     * Filter which PeladaPlayers to update
     */
    where?: PeladaPlayerWhereInput
    /**
     * Limit how many PeladaPlayers to update.
     */
    limit?: number
  }

  /**
   * PeladaPlayer updateManyAndReturn
   */
  export type PeladaPlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayer
     */
    select?: PeladaPlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaPlayer
     */
    omit?: PeladaPlayerOmit<ExtArgs> | null
    /**
     * The data used to update PeladaPlayers.
     */
    data: XOR<PeladaPlayerUpdateManyMutationInput, PeladaPlayerUncheckedUpdateManyInput>
    /**
     * Filter which PeladaPlayers to update
     */
    where?: PeladaPlayerWhereInput
    /**
     * Limit how many PeladaPlayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaPlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeladaPlayer upsert
   */
  export type PeladaPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayer
     */
    select?: PeladaPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaPlayer
     */
    omit?: PeladaPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaPlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the PeladaPlayer to update in case it exists.
     */
    where: PeladaPlayerWhereUniqueInput
    /**
     * In case the PeladaPlayer found by the `where` argument doesn't exist, create a new PeladaPlayer with this data.
     */
    create: XOR<PeladaPlayerCreateInput, PeladaPlayerUncheckedCreateInput>
    /**
     * In case the PeladaPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeladaPlayerUpdateInput, PeladaPlayerUncheckedUpdateInput>
  }

  /**
   * PeladaPlayer delete
   */
  export type PeladaPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayer
     */
    select?: PeladaPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaPlayer
     */
    omit?: PeladaPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaPlayerInclude<ExtArgs> | null
    /**
     * Filter which PeladaPlayer to delete.
     */
    where: PeladaPlayerWhereUniqueInput
  }

  /**
   * PeladaPlayer deleteMany
   */
  export type PeladaPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeladaPlayers to delete
     */
    where?: PeladaPlayerWhereInput
    /**
     * Limit how many PeladaPlayers to delete.
     */
    limit?: number
  }

  /**
   * PeladaPlayer.queueEntry
   */
  export type PeladaPlayer$queueEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaQueueEntry
     */
    select?: PeladaQueueEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaQueueEntry
     */
    omit?: PeladaQueueEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaQueueEntryInclude<ExtArgs> | null
    where?: PeladaQueueEntryWhereInput
  }

  /**
   * PeladaPlayer.matchPlayers
   */
  export type PeladaPlayer$matchPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    where?: MatchPlayerWhereInput
    orderBy?: MatchPlayerOrderByWithRelationInput | MatchPlayerOrderByWithRelationInput[]
    cursor?: MatchPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchPlayerScalarFieldEnum | MatchPlayerScalarFieldEnum[]
  }

  /**
   * PeladaPlayer without action
   */
  export type PeladaPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaPlayer
     */
    select?: PeladaPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaPlayer
     */
    omit?: PeladaPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaPlayerInclude<ExtArgs> | null
  }


  /**
   * Model PeladaQueueEntry
   */

  export type AggregatePeladaQueueEntry = {
    _count: PeladaQueueEntryCountAggregateOutputType | null
    _avg: PeladaQueueEntryAvgAggregateOutputType | null
    _sum: PeladaQueueEntrySumAggregateOutputType | null
    _min: PeladaQueueEntryMinAggregateOutputType | null
    _max: PeladaQueueEntryMaxAggregateOutputType | null
  }

  export type PeladaQueueEntryAvgAggregateOutputType = {
    position: number | null
  }

  export type PeladaQueueEntrySumAggregateOutputType = {
    position: number | null
  }

  export type PeladaQueueEntryMinAggregateOutputType = {
    id: string | null
    peladaId: string | null
    peladaPlayerId: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeladaQueueEntryMaxAggregateOutputType = {
    id: string | null
    peladaId: string | null
    peladaPlayerId: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeladaQueueEntryCountAggregateOutputType = {
    id: number
    peladaId: number
    peladaPlayerId: number
    position: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PeladaQueueEntryAvgAggregateInputType = {
    position?: true
  }

  export type PeladaQueueEntrySumAggregateInputType = {
    position?: true
  }

  export type PeladaQueueEntryMinAggregateInputType = {
    id?: true
    peladaId?: true
    peladaPlayerId?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeladaQueueEntryMaxAggregateInputType = {
    id?: true
    peladaId?: true
    peladaPlayerId?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeladaQueueEntryCountAggregateInputType = {
    id?: true
    peladaId?: true
    peladaPlayerId?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PeladaQueueEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeladaQueueEntry to aggregate.
     */
    where?: PeladaQueueEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeladaQueueEntries to fetch.
     */
    orderBy?: PeladaQueueEntryOrderByWithRelationInput | PeladaQueueEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeladaQueueEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeladaQueueEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeladaQueueEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PeladaQueueEntries
    **/
    _count?: true | PeladaQueueEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeladaQueueEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeladaQueueEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeladaQueueEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeladaQueueEntryMaxAggregateInputType
  }

  export type GetPeladaQueueEntryAggregateType<T extends PeladaQueueEntryAggregateArgs> = {
        [P in keyof T & keyof AggregatePeladaQueueEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeladaQueueEntry[P]>
      : GetScalarType<T[P], AggregatePeladaQueueEntry[P]>
  }




  export type PeladaQueueEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeladaQueueEntryWhereInput
    orderBy?: PeladaQueueEntryOrderByWithAggregationInput | PeladaQueueEntryOrderByWithAggregationInput[]
    by: PeladaQueueEntryScalarFieldEnum[] | PeladaQueueEntryScalarFieldEnum
    having?: PeladaQueueEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeladaQueueEntryCountAggregateInputType | true
    _avg?: PeladaQueueEntryAvgAggregateInputType
    _sum?: PeladaQueueEntrySumAggregateInputType
    _min?: PeladaQueueEntryMinAggregateInputType
    _max?: PeladaQueueEntryMaxAggregateInputType
  }

  export type PeladaQueueEntryGroupByOutputType = {
    id: string
    peladaId: string
    peladaPlayerId: string
    position: number
    createdAt: Date
    updatedAt: Date
    _count: PeladaQueueEntryCountAggregateOutputType | null
    _avg: PeladaQueueEntryAvgAggregateOutputType | null
    _sum: PeladaQueueEntrySumAggregateOutputType | null
    _min: PeladaQueueEntryMinAggregateOutputType | null
    _max: PeladaQueueEntryMaxAggregateOutputType | null
  }

  type GetPeladaQueueEntryGroupByPayload<T extends PeladaQueueEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeladaQueueEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeladaQueueEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeladaQueueEntryGroupByOutputType[P]>
            : GetScalarType<T[P], PeladaQueueEntryGroupByOutputType[P]>
        }
      >
    >


  export type PeladaQueueEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peladaId?: boolean
    peladaPlayerId?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
    peladaPlayer?: boolean | PeladaPlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peladaQueueEntry"]>

  export type PeladaQueueEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peladaId?: boolean
    peladaPlayerId?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
    peladaPlayer?: boolean | PeladaPlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peladaQueueEntry"]>

  export type PeladaQueueEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peladaId?: boolean
    peladaPlayerId?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
    peladaPlayer?: boolean | PeladaPlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peladaQueueEntry"]>

  export type PeladaQueueEntrySelectScalar = {
    id?: boolean
    peladaId?: boolean
    peladaPlayerId?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PeladaQueueEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "peladaId" | "peladaPlayerId" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["peladaQueueEntry"]>
  export type PeladaQueueEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
    peladaPlayer?: boolean | PeladaPlayerDefaultArgs<ExtArgs>
  }
  export type PeladaQueueEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
    peladaPlayer?: boolean | PeladaPlayerDefaultArgs<ExtArgs>
  }
  export type PeladaQueueEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
    peladaPlayer?: boolean | PeladaPlayerDefaultArgs<ExtArgs>
  }

  export type $PeladaQueueEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PeladaQueueEntry"
    objects: {
      pelada: Prisma.$PeladaPayload<ExtArgs>
      peladaPlayer: Prisma.$PeladaPlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      peladaId: string
      peladaPlayerId: string
      position: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["peladaQueueEntry"]>
    composites: {}
  }

  type PeladaQueueEntryGetPayload<S extends boolean | null | undefined | PeladaQueueEntryDefaultArgs> = $Result.GetResult<Prisma.$PeladaQueueEntryPayload, S>

  type PeladaQueueEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeladaQueueEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeladaQueueEntryCountAggregateInputType | true
    }

  export interface PeladaQueueEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PeladaQueueEntry'], meta: { name: 'PeladaQueueEntry' } }
    /**
     * Find zero or one PeladaQueueEntry that matches the filter.
     * @param {PeladaQueueEntryFindUniqueArgs} args - Arguments to find a PeladaQueueEntry
     * @example
     * // Get one PeladaQueueEntry
     * const peladaQueueEntry = await prisma.peladaQueueEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeladaQueueEntryFindUniqueArgs>(args: SelectSubset<T, PeladaQueueEntryFindUniqueArgs<ExtArgs>>): Prisma__PeladaQueueEntryClient<$Result.GetResult<Prisma.$PeladaQueueEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PeladaQueueEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeladaQueueEntryFindUniqueOrThrowArgs} args - Arguments to find a PeladaQueueEntry
     * @example
     * // Get one PeladaQueueEntry
     * const peladaQueueEntry = await prisma.peladaQueueEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeladaQueueEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, PeladaQueueEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeladaQueueEntryClient<$Result.GetResult<Prisma.$PeladaQueueEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeladaQueueEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaQueueEntryFindFirstArgs} args - Arguments to find a PeladaQueueEntry
     * @example
     * // Get one PeladaQueueEntry
     * const peladaQueueEntry = await prisma.peladaQueueEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeladaQueueEntryFindFirstArgs>(args?: SelectSubset<T, PeladaQueueEntryFindFirstArgs<ExtArgs>>): Prisma__PeladaQueueEntryClient<$Result.GetResult<Prisma.$PeladaQueueEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeladaQueueEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaQueueEntryFindFirstOrThrowArgs} args - Arguments to find a PeladaQueueEntry
     * @example
     * // Get one PeladaQueueEntry
     * const peladaQueueEntry = await prisma.peladaQueueEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeladaQueueEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, PeladaQueueEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeladaQueueEntryClient<$Result.GetResult<Prisma.$PeladaQueueEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PeladaQueueEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaQueueEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeladaQueueEntries
     * const peladaQueueEntries = await prisma.peladaQueueEntry.findMany()
     * 
     * // Get first 10 PeladaQueueEntries
     * const peladaQueueEntries = await prisma.peladaQueueEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peladaQueueEntryWithIdOnly = await prisma.peladaQueueEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeladaQueueEntryFindManyArgs>(args?: SelectSubset<T, PeladaQueueEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeladaQueueEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PeladaQueueEntry.
     * @param {PeladaQueueEntryCreateArgs} args - Arguments to create a PeladaQueueEntry.
     * @example
     * // Create one PeladaQueueEntry
     * const PeladaQueueEntry = await prisma.peladaQueueEntry.create({
     *   data: {
     *     // ... data to create a PeladaQueueEntry
     *   }
     * })
     * 
     */
    create<T extends PeladaQueueEntryCreateArgs>(args: SelectSubset<T, PeladaQueueEntryCreateArgs<ExtArgs>>): Prisma__PeladaQueueEntryClient<$Result.GetResult<Prisma.$PeladaQueueEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PeladaQueueEntries.
     * @param {PeladaQueueEntryCreateManyArgs} args - Arguments to create many PeladaQueueEntries.
     * @example
     * // Create many PeladaQueueEntries
     * const peladaQueueEntry = await prisma.peladaQueueEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeladaQueueEntryCreateManyArgs>(args?: SelectSubset<T, PeladaQueueEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PeladaQueueEntries and returns the data saved in the database.
     * @param {PeladaQueueEntryCreateManyAndReturnArgs} args - Arguments to create many PeladaQueueEntries.
     * @example
     * // Create many PeladaQueueEntries
     * const peladaQueueEntry = await prisma.peladaQueueEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PeladaQueueEntries and only return the `id`
     * const peladaQueueEntryWithIdOnly = await prisma.peladaQueueEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeladaQueueEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, PeladaQueueEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeladaQueueEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PeladaQueueEntry.
     * @param {PeladaQueueEntryDeleteArgs} args - Arguments to delete one PeladaQueueEntry.
     * @example
     * // Delete one PeladaQueueEntry
     * const PeladaQueueEntry = await prisma.peladaQueueEntry.delete({
     *   where: {
     *     // ... filter to delete one PeladaQueueEntry
     *   }
     * })
     * 
     */
    delete<T extends PeladaQueueEntryDeleteArgs>(args: SelectSubset<T, PeladaQueueEntryDeleteArgs<ExtArgs>>): Prisma__PeladaQueueEntryClient<$Result.GetResult<Prisma.$PeladaQueueEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PeladaQueueEntry.
     * @param {PeladaQueueEntryUpdateArgs} args - Arguments to update one PeladaQueueEntry.
     * @example
     * // Update one PeladaQueueEntry
     * const peladaQueueEntry = await prisma.peladaQueueEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeladaQueueEntryUpdateArgs>(args: SelectSubset<T, PeladaQueueEntryUpdateArgs<ExtArgs>>): Prisma__PeladaQueueEntryClient<$Result.GetResult<Prisma.$PeladaQueueEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PeladaQueueEntries.
     * @param {PeladaQueueEntryDeleteManyArgs} args - Arguments to filter PeladaQueueEntries to delete.
     * @example
     * // Delete a few PeladaQueueEntries
     * const { count } = await prisma.peladaQueueEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeladaQueueEntryDeleteManyArgs>(args?: SelectSubset<T, PeladaQueueEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeladaQueueEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaQueueEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeladaQueueEntries
     * const peladaQueueEntry = await prisma.peladaQueueEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeladaQueueEntryUpdateManyArgs>(args: SelectSubset<T, PeladaQueueEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeladaQueueEntries and returns the data updated in the database.
     * @param {PeladaQueueEntryUpdateManyAndReturnArgs} args - Arguments to update many PeladaQueueEntries.
     * @example
     * // Update many PeladaQueueEntries
     * const peladaQueueEntry = await prisma.peladaQueueEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PeladaQueueEntries and only return the `id`
     * const peladaQueueEntryWithIdOnly = await prisma.peladaQueueEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PeladaQueueEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, PeladaQueueEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeladaQueueEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PeladaQueueEntry.
     * @param {PeladaQueueEntryUpsertArgs} args - Arguments to update or create a PeladaQueueEntry.
     * @example
     * // Update or create a PeladaQueueEntry
     * const peladaQueueEntry = await prisma.peladaQueueEntry.upsert({
     *   create: {
     *     // ... data to create a PeladaQueueEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeladaQueueEntry we want to update
     *   }
     * })
     */
    upsert<T extends PeladaQueueEntryUpsertArgs>(args: SelectSubset<T, PeladaQueueEntryUpsertArgs<ExtArgs>>): Prisma__PeladaQueueEntryClient<$Result.GetResult<Prisma.$PeladaQueueEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PeladaQueueEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaQueueEntryCountArgs} args - Arguments to filter PeladaQueueEntries to count.
     * @example
     * // Count the number of PeladaQueueEntries
     * const count = await prisma.peladaQueueEntry.count({
     *   where: {
     *     // ... the filter for the PeladaQueueEntries we want to count
     *   }
     * })
    **/
    count<T extends PeladaQueueEntryCountArgs>(
      args?: Subset<T, PeladaQueueEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeladaQueueEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeladaQueueEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaQueueEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeladaQueueEntryAggregateArgs>(args: Subset<T, PeladaQueueEntryAggregateArgs>): Prisma.PrismaPromise<GetPeladaQueueEntryAggregateType<T>>

    /**
     * Group by PeladaQueueEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeladaQueueEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeladaQueueEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeladaQueueEntryGroupByArgs['orderBy'] }
        : { orderBy?: PeladaQueueEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeladaQueueEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeladaQueueEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PeladaQueueEntry model
   */
  readonly fields: PeladaQueueEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PeladaQueueEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeladaQueueEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pelada<T extends PeladaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeladaDefaultArgs<ExtArgs>>): Prisma__PeladaClient<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    peladaPlayer<T extends PeladaPlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeladaPlayerDefaultArgs<ExtArgs>>): Prisma__PeladaPlayerClient<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PeladaQueueEntry model
   */
  interface PeladaQueueEntryFieldRefs {
    readonly id: FieldRef<"PeladaQueueEntry", 'String'>
    readonly peladaId: FieldRef<"PeladaQueueEntry", 'String'>
    readonly peladaPlayerId: FieldRef<"PeladaQueueEntry", 'String'>
    readonly position: FieldRef<"PeladaQueueEntry", 'Int'>
    readonly createdAt: FieldRef<"PeladaQueueEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"PeladaQueueEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PeladaQueueEntry findUnique
   */
  export type PeladaQueueEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaQueueEntry
     */
    select?: PeladaQueueEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaQueueEntry
     */
    omit?: PeladaQueueEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaQueueEntryInclude<ExtArgs> | null
    /**
     * Filter, which PeladaQueueEntry to fetch.
     */
    where: PeladaQueueEntryWhereUniqueInput
  }

  /**
   * PeladaQueueEntry findUniqueOrThrow
   */
  export type PeladaQueueEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaQueueEntry
     */
    select?: PeladaQueueEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaQueueEntry
     */
    omit?: PeladaQueueEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaQueueEntryInclude<ExtArgs> | null
    /**
     * Filter, which PeladaQueueEntry to fetch.
     */
    where: PeladaQueueEntryWhereUniqueInput
  }

  /**
   * PeladaQueueEntry findFirst
   */
  export type PeladaQueueEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaQueueEntry
     */
    select?: PeladaQueueEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaQueueEntry
     */
    omit?: PeladaQueueEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaQueueEntryInclude<ExtArgs> | null
    /**
     * Filter, which PeladaQueueEntry to fetch.
     */
    where?: PeladaQueueEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeladaQueueEntries to fetch.
     */
    orderBy?: PeladaQueueEntryOrderByWithRelationInput | PeladaQueueEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeladaQueueEntries.
     */
    cursor?: PeladaQueueEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeladaQueueEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeladaQueueEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeladaQueueEntries.
     */
    distinct?: PeladaQueueEntryScalarFieldEnum | PeladaQueueEntryScalarFieldEnum[]
  }

  /**
   * PeladaQueueEntry findFirstOrThrow
   */
  export type PeladaQueueEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaQueueEntry
     */
    select?: PeladaQueueEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaQueueEntry
     */
    omit?: PeladaQueueEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaQueueEntryInclude<ExtArgs> | null
    /**
     * Filter, which PeladaQueueEntry to fetch.
     */
    where?: PeladaQueueEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeladaQueueEntries to fetch.
     */
    orderBy?: PeladaQueueEntryOrderByWithRelationInput | PeladaQueueEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeladaQueueEntries.
     */
    cursor?: PeladaQueueEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeladaQueueEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeladaQueueEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeladaQueueEntries.
     */
    distinct?: PeladaQueueEntryScalarFieldEnum | PeladaQueueEntryScalarFieldEnum[]
  }

  /**
   * PeladaQueueEntry findMany
   */
  export type PeladaQueueEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaQueueEntry
     */
    select?: PeladaQueueEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaQueueEntry
     */
    omit?: PeladaQueueEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaQueueEntryInclude<ExtArgs> | null
    /**
     * Filter, which PeladaQueueEntries to fetch.
     */
    where?: PeladaQueueEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeladaQueueEntries to fetch.
     */
    orderBy?: PeladaQueueEntryOrderByWithRelationInput | PeladaQueueEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PeladaQueueEntries.
     */
    cursor?: PeladaQueueEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeladaQueueEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeladaQueueEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeladaQueueEntries.
     */
    distinct?: PeladaQueueEntryScalarFieldEnum | PeladaQueueEntryScalarFieldEnum[]
  }

  /**
   * PeladaQueueEntry create
   */
  export type PeladaQueueEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaQueueEntry
     */
    select?: PeladaQueueEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaQueueEntry
     */
    omit?: PeladaQueueEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaQueueEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a PeladaQueueEntry.
     */
    data: XOR<PeladaQueueEntryCreateInput, PeladaQueueEntryUncheckedCreateInput>
  }

  /**
   * PeladaQueueEntry createMany
   */
  export type PeladaQueueEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PeladaQueueEntries.
     */
    data: PeladaQueueEntryCreateManyInput | PeladaQueueEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeladaQueueEntry createManyAndReturn
   */
  export type PeladaQueueEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaQueueEntry
     */
    select?: PeladaQueueEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaQueueEntry
     */
    omit?: PeladaQueueEntryOmit<ExtArgs> | null
    /**
     * The data used to create many PeladaQueueEntries.
     */
    data: PeladaQueueEntryCreateManyInput | PeladaQueueEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaQueueEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeladaQueueEntry update
   */
  export type PeladaQueueEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaQueueEntry
     */
    select?: PeladaQueueEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaQueueEntry
     */
    omit?: PeladaQueueEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaQueueEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a PeladaQueueEntry.
     */
    data: XOR<PeladaQueueEntryUpdateInput, PeladaQueueEntryUncheckedUpdateInput>
    /**
     * Choose, which PeladaQueueEntry to update.
     */
    where: PeladaQueueEntryWhereUniqueInput
  }

  /**
   * PeladaQueueEntry updateMany
   */
  export type PeladaQueueEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PeladaQueueEntries.
     */
    data: XOR<PeladaQueueEntryUpdateManyMutationInput, PeladaQueueEntryUncheckedUpdateManyInput>
    /**
     * Filter which PeladaQueueEntries to update
     */
    where?: PeladaQueueEntryWhereInput
    /**
     * Limit how many PeladaQueueEntries to update.
     */
    limit?: number
  }

  /**
   * PeladaQueueEntry updateManyAndReturn
   */
  export type PeladaQueueEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaQueueEntry
     */
    select?: PeladaQueueEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaQueueEntry
     */
    omit?: PeladaQueueEntryOmit<ExtArgs> | null
    /**
     * The data used to update PeladaQueueEntries.
     */
    data: XOR<PeladaQueueEntryUpdateManyMutationInput, PeladaQueueEntryUncheckedUpdateManyInput>
    /**
     * Filter which PeladaQueueEntries to update
     */
    where?: PeladaQueueEntryWhereInput
    /**
     * Limit how many PeladaQueueEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaQueueEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeladaQueueEntry upsert
   */
  export type PeladaQueueEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaQueueEntry
     */
    select?: PeladaQueueEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaQueueEntry
     */
    omit?: PeladaQueueEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaQueueEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the PeladaQueueEntry to update in case it exists.
     */
    where: PeladaQueueEntryWhereUniqueInput
    /**
     * In case the PeladaQueueEntry found by the `where` argument doesn't exist, create a new PeladaQueueEntry with this data.
     */
    create: XOR<PeladaQueueEntryCreateInput, PeladaQueueEntryUncheckedCreateInput>
    /**
     * In case the PeladaQueueEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeladaQueueEntryUpdateInput, PeladaQueueEntryUncheckedUpdateInput>
  }

  /**
   * PeladaQueueEntry delete
   */
  export type PeladaQueueEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaQueueEntry
     */
    select?: PeladaQueueEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaQueueEntry
     */
    omit?: PeladaQueueEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaQueueEntryInclude<ExtArgs> | null
    /**
     * Filter which PeladaQueueEntry to delete.
     */
    where: PeladaQueueEntryWhereUniqueInput
  }

  /**
   * PeladaQueueEntry deleteMany
   */
  export type PeladaQueueEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeladaQueueEntries to delete
     */
    where?: PeladaQueueEntryWhereInput
    /**
     * Limit how many PeladaQueueEntries to delete.
     */
    limit?: number
  }

  /**
   * PeladaQueueEntry without action
   */
  export type PeladaQueueEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeladaQueueEntry
     */
    select?: PeladaQueueEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeladaQueueEntry
     */
    omit?: PeladaQueueEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeladaQueueEntryInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    sequence: number | null
    teamAScore: number | null
    teamBScore: number | null
  }

  export type MatchSumAggregateOutputType = {
    sequence: number | null
    teamAScore: number | null
    teamBScore: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    peladaId: string | null
    sequence: number | null
    status: $Enums.MatchStatus | null
    startedAt: Date | null
    finishedAt: Date | null
    teamAScore: number | null
    teamBScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    peladaId: string | null
    sequence: number | null
    status: $Enums.MatchStatus | null
    startedAt: Date | null
    finishedAt: Date | null
    teamAScore: number | null
    teamBScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    peladaId: number
    sequence: number
    status: number
    startedAt: number
    finishedAt: number
    teamAScore: number
    teamBScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    sequence?: true
    teamAScore?: true
    teamBScore?: true
  }

  export type MatchSumAggregateInputType = {
    sequence?: true
    teamAScore?: true
    teamBScore?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    peladaId?: true
    sequence?: true
    status?: true
    startedAt?: true
    finishedAt?: true
    teamAScore?: true
    teamBScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    peladaId?: true
    sequence?: true
    status?: true
    startedAt?: true
    finishedAt?: true
    teamAScore?: true
    teamBScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    peladaId?: true
    sequence?: true
    status?: true
    startedAt?: true
    finishedAt?: true
    teamAScore?: true
    teamBScore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    peladaId: string
    sequence: number
    status: $Enums.MatchStatus
    startedAt: Date
    finishedAt: Date | null
    teamAScore: number | null
    teamBScore: number | null
    createdAt: Date
    updatedAt: Date
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peladaId?: boolean
    sequence?: boolean
    status?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    teamAScore?: boolean
    teamBScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
    players?: boolean | Match$playersArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peladaId?: boolean
    sequence?: boolean
    status?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    teamAScore?: boolean
    teamBScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peladaId?: boolean
    sequence?: boolean
    status?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    teamAScore?: boolean
    teamBScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    peladaId?: boolean
    sequence?: boolean
    status?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    teamAScore?: boolean
    teamBScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "peladaId" | "sequence" | "status" | "startedAt" | "finishedAt" | "teamAScore" | "teamBScore" | "createdAt" | "updatedAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
    players?: boolean | Match$playersArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pelada?: boolean | PeladaDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      pelada: Prisma.$PeladaPayload<ExtArgs>
      players: Prisma.$MatchPlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      peladaId: string
      sequence: number
      status: $Enums.MatchStatus
      startedAt: Date
      finishedAt: Date | null
      teamAScore: number | null
      teamBScore: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pelada<T extends PeladaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeladaDefaultArgs<ExtArgs>>): Prisma__PeladaClient<$Result.GetResult<Prisma.$PeladaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    players<T extends Match$playersArgs<ExtArgs> = {}>(args?: Subset<T, Match$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly peladaId: FieldRef<"Match", 'String'>
    readonly sequence: FieldRef<"Match", 'Int'>
    readonly status: FieldRef<"Match", 'MatchStatus'>
    readonly startedAt: FieldRef<"Match", 'DateTime'>
    readonly finishedAt: FieldRef<"Match", 'DateTime'>
    readonly teamAScore: FieldRef<"Match", 'Int'>
    readonly teamBScore: FieldRef<"Match", 'Int'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
    readonly updatedAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match.players
   */
  export type Match$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    where?: MatchPlayerWhereInput
    orderBy?: MatchPlayerOrderByWithRelationInput | MatchPlayerOrderByWithRelationInput[]
    cursor?: MatchPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchPlayerScalarFieldEnum | MatchPlayerScalarFieldEnum[]
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model MatchPlayer
   */

  export type AggregateMatchPlayer = {
    _count: MatchPlayerCountAggregateOutputType | null
    _min: MatchPlayerMinAggregateOutputType | null
    _max: MatchPlayerMaxAggregateOutputType | null
  }

  export type MatchPlayerMinAggregateOutputType = {
    id: string | null
    matchId: string | null
    peladaPlayerId: string | null
    team: $Enums.MatchTeam | null
    createdAt: Date | null
  }

  export type MatchPlayerMaxAggregateOutputType = {
    id: string | null
    matchId: string | null
    peladaPlayerId: string | null
    team: $Enums.MatchTeam | null
    createdAt: Date | null
  }

  export type MatchPlayerCountAggregateOutputType = {
    id: number
    matchId: number
    peladaPlayerId: number
    team: number
    createdAt: number
    _all: number
  }


  export type MatchPlayerMinAggregateInputType = {
    id?: true
    matchId?: true
    peladaPlayerId?: true
    team?: true
    createdAt?: true
  }

  export type MatchPlayerMaxAggregateInputType = {
    id?: true
    matchId?: true
    peladaPlayerId?: true
    team?: true
    createdAt?: true
  }

  export type MatchPlayerCountAggregateInputType = {
    id?: true
    matchId?: true
    peladaPlayerId?: true
    team?: true
    createdAt?: true
    _all?: true
  }

  export type MatchPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchPlayer to aggregate.
     */
    where?: MatchPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPlayers to fetch.
     */
    orderBy?: MatchPlayerOrderByWithRelationInput | MatchPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchPlayers
    **/
    _count?: true | MatchPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchPlayerMaxAggregateInputType
  }

  export type GetMatchPlayerAggregateType<T extends MatchPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchPlayer[P]>
      : GetScalarType<T[P], AggregateMatchPlayer[P]>
  }




  export type MatchPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchPlayerWhereInput
    orderBy?: MatchPlayerOrderByWithAggregationInput | MatchPlayerOrderByWithAggregationInput[]
    by: MatchPlayerScalarFieldEnum[] | MatchPlayerScalarFieldEnum
    having?: MatchPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchPlayerCountAggregateInputType | true
    _min?: MatchPlayerMinAggregateInputType
    _max?: MatchPlayerMaxAggregateInputType
  }

  export type MatchPlayerGroupByOutputType = {
    id: string
    matchId: string
    peladaPlayerId: string
    team: $Enums.MatchTeam
    createdAt: Date
    _count: MatchPlayerCountAggregateOutputType | null
    _min: MatchPlayerMinAggregateOutputType | null
    _max: MatchPlayerMaxAggregateOutputType | null
  }

  type GetMatchPlayerGroupByPayload<T extends MatchPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], MatchPlayerGroupByOutputType[P]>
        }
      >
    >


  export type MatchPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    peladaPlayerId?: boolean
    team?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    peladaPlayer?: boolean | PeladaPlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchPlayer"]>

  export type MatchPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    peladaPlayerId?: boolean
    team?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    peladaPlayer?: boolean | PeladaPlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchPlayer"]>

  export type MatchPlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    peladaPlayerId?: boolean
    team?: boolean
    createdAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    peladaPlayer?: boolean | PeladaPlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchPlayer"]>

  export type MatchPlayerSelectScalar = {
    id?: boolean
    matchId?: boolean
    peladaPlayerId?: boolean
    team?: boolean
    createdAt?: boolean
  }

  export type MatchPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "peladaPlayerId" | "team" | "createdAt", ExtArgs["result"]["matchPlayer"]>
  export type MatchPlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    peladaPlayer?: boolean | PeladaPlayerDefaultArgs<ExtArgs>
  }
  export type MatchPlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    peladaPlayer?: boolean | PeladaPlayerDefaultArgs<ExtArgs>
  }
  export type MatchPlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    peladaPlayer?: boolean | PeladaPlayerDefaultArgs<ExtArgs>
  }

  export type $MatchPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchPlayer"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
      peladaPlayer: Prisma.$PeladaPlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchId: string
      peladaPlayerId: string
      team: $Enums.MatchTeam
      createdAt: Date
    }, ExtArgs["result"]["matchPlayer"]>
    composites: {}
  }

  type MatchPlayerGetPayload<S extends boolean | null | undefined | MatchPlayerDefaultArgs> = $Result.GetResult<Prisma.$MatchPlayerPayload, S>

  type MatchPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchPlayerCountAggregateInputType | true
    }

  export interface MatchPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchPlayer'], meta: { name: 'MatchPlayer' } }
    /**
     * Find zero or one MatchPlayer that matches the filter.
     * @param {MatchPlayerFindUniqueArgs} args - Arguments to find a MatchPlayer
     * @example
     * // Get one MatchPlayer
     * const matchPlayer = await prisma.matchPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchPlayerFindUniqueArgs>(args: SelectSubset<T, MatchPlayerFindUniqueArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchPlayerFindUniqueOrThrowArgs} args - Arguments to find a MatchPlayer
     * @example
     * // Get one MatchPlayer
     * const matchPlayer = await prisma.matchPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerFindFirstArgs} args - Arguments to find a MatchPlayer
     * @example
     * // Get one MatchPlayer
     * const matchPlayer = await prisma.matchPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchPlayerFindFirstArgs>(args?: SelectSubset<T, MatchPlayerFindFirstArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerFindFirstOrThrowArgs} args - Arguments to find a MatchPlayer
     * @example
     * // Get one MatchPlayer
     * const matchPlayer = await prisma.matchPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchPlayers
     * const matchPlayers = await prisma.matchPlayer.findMany()
     * 
     * // Get first 10 MatchPlayers
     * const matchPlayers = await prisma.matchPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchPlayerWithIdOnly = await prisma.matchPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchPlayerFindManyArgs>(args?: SelectSubset<T, MatchPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchPlayer.
     * @param {MatchPlayerCreateArgs} args - Arguments to create a MatchPlayer.
     * @example
     * // Create one MatchPlayer
     * const MatchPlayer = await prisma.matchPlayer.create({
     *   data: {
     *     // ... data to create a MatchPlayer
     *   }
     * })
     * 
     */
    create<T extends MatchPlayerCreateArgs>(args: SelectSubset<T, MatchPlayerCreateArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchPlayers.
     * @param {MatchPlayerCreateManyArgs} args - Arguments to create many MatchPlayers.
     * @example
     * // Create many MatchPlayers
     * const matchPlayer = await prisma.matchPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchPlayerCreateManyArgs>(args?: SelectSubset<T, MatchPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchPlayers and returns the data saved in the database.
     * @param {MatchPlayerCreateManyAndReturnArgs} args - Arguments to create many MatchPlayers.
     * @example
     * // Create many MatchPlayers
     * const matchPlayer = await prisma.matchPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchPlayers and only return the `id`
     * const matchPlayerWithIdOnly = await prisma.matchPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchPlayer.
     * @param {MatchPlayerDeleteArgs} args - Arguments to delete one MatchPlayer.
     * @example
     * // Delete one MatchPlayer
     * const MatchPlayer = await prisma.matchPlayer.delete({
     *   where: {
     *     // ... filter to delete one MatchPlayer
     *   }
     * })
     * 
     */
    delete<T extends MatchPlayerDeleteArgs>(args: SelectSubset<T, MatchPlayerDeleteArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchPlayer.
     * @param {MatchPlayerUpdateArgs} args - Arguments to update one MatchPlayer.
     * @example
     * // Update one MatchPlayer
     * const matchPlayer = await prisma.matchPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchPlayerUpdateArgs>(args: SelectSubset<T, MatchPlayerUpdateArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchPlayers.
     * @param {MatchPlayerDeleteManyArgs} args - Arguments to filter MatchPlayers to delete.
     * @example
     * // Delete a few MatchPlayers
     * const { count } = await prisma.matchPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchPlayerDeleteManyArgs>(args?: SelectSubset<T, MatchPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchPlayers
     * const matchPlayer = await prisma.matchPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchPlayerUpdateManyArgs>(args: SelectSubset<T, MatchPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchPlayers and returns the data updated in the database.
     * @param {MatchPlayerUpdateManyAndReturnArgs} args - Arguments to update many MatchPlayers.
     * @example
     * // Update many MatchPlayers
     * const matchPlayer = await prisma.matchPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchPlayers and only return the `id`
     * const matchPlayerWithIdOnly = await prisma.matchPlayer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchPlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchPlayer.
     * @param {MatchPlayerUpsertArgs} args - Arguments to update or create a MatchPlayer.
     * @example
     * // Update or create a MatchPlayer
     * const matchPlayer = await prisma.matchPlayer.upsert({
     *   create: {
     *     // ... data to create a MatchPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchPlayer we want to update
     *   }
     * })
     */
    upsert<T extends MatchPlayerUpsertArgs>(args: SelectSubset<T, MatchPlayerUpsertArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerCountArgs} args - Arguments to filter MatchPlayers to count.
     * @example
     * // Count the number of MatchPlayers
     * const count = await prisma.matchPlayer.count({
     *   where: {
     *     // ... the filter for the MatchPlayers we want to count
     *   }
     * })
    **/
    count<T extends MatchPlayerCountArgs>(
      args?: Subset<T, MatchPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchPlayerAggregateArgs>(args: Subset<T, MatchPlayerAggregateArgs>): Prisma.PrismaPromise<GetMatchPlayerAggregateType<T>>

    /**
     * Group by MatchPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchPlayerGroupByArgs['orderBy'] }
        : { orderBy?: MatchPlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchPlayer model
   */
  readonly fields: MatchPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    peladaPlayer<T extends PeladaPlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeladaPlayerDefaultArgs<ExtArgs>>): Prisma__PeladaPlayerClient<$Result.GetResult<Prisma.$PeladaPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchPlayer model
   */
  interface MatchPlayerFieldRefs {
    readonly id: FieldRef<"MatchPlayer", 'String'>
    readonly matchId: FieldRef<"MatchPlayer", 'String'>
    readonly peladaPlayerId: FieldRef<"MatchPlayer", 'String'>
    readonly team: FieldRef<"MatchPlayer", 'MatchTeam'>
    readonly createdAt: FieldRef<"MatchPlayer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchPlayer findUnique
   */
  export type MatchPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayer to fetch.
     */
    where: MatchPlayerWhereUniqueInput
  }

  /**
   * MatchPlayer findUniqueOrThrow
   */
  export type MatchPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayer to fetch.
     */
    where: MatchPlayerWhereUniqueInput
  }

  /**
   * MatchPlayer findFirst
   */
  export type MatchPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayer to fetch.
     */
    where?: MatchPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPlayers to fetch.
     */
    orderBy?: MatchPlayerOrderByWithRelationInput | MatchPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchPlayers.
     */
    cursor?: MatchPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchPlayers.
     */
    distinct?: MatchPlayerScalarFieldEnum | MatchPlayerScalarFieldEnum[]
  }

  /**
   * MatchPlayer findFirstOrThrow
   */
  export type MatchPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayer to fetch.
     */
    where?: MatchPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPlayers to fetch.
     */
    orderBy?: MatchPlayerOrderByWithRelationInput | MatchPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchPlayers.
     */
    cursor?: MatchPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchPlayers.
     */
    distinct?: MatchPlayerScalarFieldEnum | MatchPlayerScalarFieldEnum[]
  }

  /**
   * MatchPlayer findMany
   */
  export type MatchPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayers to fetch.
     */
    where?: MatchPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPlayers to fetch.
     */
    orderBy?: MatchPlayerOrderByWithRelationInput | MatchPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchPlayers.
     */
    cursor?: MatchPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchPlayers.
     */
    distinct?: MatchPlayerScalarFieldEnum | MatchPlayerScalarFieldEnum[]
  }

  /**
   * MatchPlayer create
   */
  export type MatchPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchPlayer.
     */
    data: XOR<MatchPlayerCreateInput, MatchPlayerUncheckedCreateInput>
  }

  /**
   * MatchPlayer createMany
   */
  export type MatchPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchPlayers.
     */
    data: MatchPlayerCreateManyInput | MatchPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchPlayer createManyAndReturn
   */
  export type MatchPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * The data used to create many MatchPlayers.
     */
    data: MatchPlayerCreateManyInput | MatchPlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchPlayer update
   */
  export type MatchPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchPlayer.
     */
    data: XOR<MatchPlayerUpdateInput, MatchPlayerUncheckedUpdateInput>
    /**
     * Choose, which MatchPlayer to update.
     */
    where: MatchPlayerWhereUniqueInput
  }

  /**
   * MatchPlayer updateMany
   */
  export type MatchPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchPlayers.
     */
    data: XOR<MatchPlayerUpdateManyMutationInput, MatchPlayerUncheckedUpdateManyInput>
    /**
     * Filter which MatchPlayers to update
     */
    where?: MatchPlayerWhereInput
    /**
     * Limit how many MatchPlayers to update.
     */
    limit?: number
  }

  /**
   * MatchPlayer updateManyAndReturn
   */
  export type MatchPlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * The data used to update MatchPlayers.
     */
    data: XOR<MatchPlayerUpdateManyMutationInput, MatchPlayerUncheckedUpdateManyInput>
    /**
     * Filter which MatchPlayers to update
     */
    where?: MatchPlayerWhereInput
    /**
     * Limit how many MatchPlayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchPlayer upsert
   */
  export type MatchPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchPlayer to update in case it exists.
     */
    where: MatchPlayerWhereUniqueInput
    /**
     * In case the MatchPlayer found by the `where` argument doesn't exist, create a new MatchPlayer with this data.
     */
    create: XOR<MatchPlayerCreateInput, MatchPlayerUncheckedCreateInput>
    /**
     * In case the MatchPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchPlayerUpdateInput, MatchPlayerUncheckedUpdateInput>
  }

  /**
   * MatchPlayer delete
   */
  export type MatchPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * Filter which MatchPlayer to delete.
     */
    where: MatchPlayerWhereUniqueInput
  }

  /**
   * MatchPlayer deleteMany
   */
  export type MatchPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchPlayers to delete
     */
    where?: MatchPlayerWhereInput
    /**
     * Limit how many MatchPlayers to delete.
     */
    limit?: number
  }

  /**
   * MatchPlayer without action
   */
  export type MatchPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    nickname: 'nickname',
    email: 'email',
    passwordHash: 'passwordHash',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const PeladaScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    name: 'name',
    date: 'date',
    playersPerTeam: 'playersPerTeam',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PeladaScalarFieldEnum = (typeof PeladaScalarFieldEnum)[keyof typeof PeladaScalarFieldEnum]


  export const PeladaPlayerScalarFieldEnum: {
    id: 'id',
    peladaId: 'peladaId',
    groupMemberId: 'groupMemberId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PeladaPlayerScalarFieldEnum = (typeof PeladaPlayerScalarFieldEnum)[keyof typeof PeladaPlayerScalarFieldEnum]


  export const PeladaQueueEntryScalarFieldEnum: {
    id: 'id',
    peladaId: 'peladaId',
    peladaPlayerId: 'peladaPlayerId',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PeladaQueueEntryScalarFieldEnum = (typeof PeladaQueueEntryScalarFieldEnum)[keyof typeof PeladaQueueEntryScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    peladaId: 'peladaId',
    sequence: 'sequence',
    status: 'status',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    teamAScore: 'teamAScore',
    teamBScore: 'teamBScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const MatchPlayerScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    peladaPlayerId: 'peladaPlayerId',
    team: 'team',
    createdAt: 'createdAt'
  };

  export type MatchPlayerScalarFieldEnum = (typeof MatchPlayerScalarFieldEnum)[keyof typeof MatchPlayerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'GroupMemberRole'
   */
  export type EnumGroupMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupMemberRole'>
    


  /**
   * Reference to a field of type 'GroupMemberRole[]'
   */
  export type ListEnumGroupMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupMemberRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PeladaStatus'
   */
  export type EnumPeladaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeladaStatus'>
    


  /**
   * Reference to a field of type 'PeladaStatus[]'
   */
  export type ListEnumPeladaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeladaStatus[]'>
    


  /**
   * Reference to a field of type 'PeladaPlayerStatus'
   */
  export type EnumPeladaPlayerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeladaPlayerStatus'>
    


  /**
   * Reference to a field of type 'PeladaPlayerStatus[]'
   */
  export type ListEnumPeladaPlayerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeladaPlayerStatus[]'>
    


  /**
   * Reference to a field of type 'MatchStatus'
   */
  export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus'>
    


  /**
   * Reference to a field of type 'MatchStatus[]'
   */
  export type ListEnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus[]'>
    


  /**
   * Reference to a field of type 'MatchTeam'
   */
  export type EnumMatchTeamFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchTeam'>
    


  /**
   * Reference to a field of type 'MatchTeam[]'
   */
  export type ListEnumMatchTeamFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchTeam[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    nickname?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedGroups?: GroupListRelationFilter
    memberships?: GroupMemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    nickname?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownedGroups?: GroupOrderByRelationAggregateInput
    memberships?: GroupMemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    nickname?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedGroups?: GroupListRelationFilter
    memberships?: GroupMemberListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    nickname?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    nickname?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    ownerId?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: GroupMemberListRelationFilter
    peladas?: PeladaListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: GroupMemberOrderByRelationAggregateInput
    peladas?: PeladaOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    ownerId?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: GroupMemberListRelationFilter
    peladas?: PeladaListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    ownerId?: StringWithAggregatesFilter<"Group"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    role?: EnumGroupMemberRoleFilter<"GroupMember"> | $Enums.GroupMemberRole
    createdAt?: DateTimeFilter<"GroupMember"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMember"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    peladaPlayers?: PeladaPlayerListRelationFilter
  }

  export type GroupMemberOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    peladaPlayers?: PeladaPlayerOrderByRelationAggregateInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId_userId?: GroupMemberGroupIdUserIdCompoundUniqueInput
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    role?: EnumGroupMemberRoleFilter<"GroupMember"> | $Enums.GroupMemberRole
    createdAt?: DateTimeFilter<"GroupMember"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMember"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    peladaPlayers?: PeladaPlayerListRelationFilter
  }, "id" | "groupId_userId">

  export type GroupMemberOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupMember"> | string
    groupId?: StringWithAggregatesFilter<"GroupMember"> | string
    userId?: StringWithAggregatesFilter<"GroupMember"> | string
    role?: EnumGroupMemberRoleWithAggregatesFilter<"GroupMember"> | $Enums.GroupMemberRole
    createdAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
  }

  export type PeladaWhereInput = {
    AND?: PeladaWhereInput | PeladaWhereInput[]
    OR?: PeladaWhereInput[]
    NOT?: PeladaWhereInput | PeladaWhereInput[]
    id?: StringFilter<"Pelada"> | string
    groupId?: StringFilter<"Pelada"> | string
    name?: StringFilter<"Pelada"> | string
    date?: DateTimeNullableFilter<"Pelada"> | Date | string | null
    playersPerTeam?: IntFilter<"Pelada"> | number
    status?: EnumPeladaStatusFilter<"Pelada"> | $Enums.PeladaStatus
    createdAt?: DateTimeFilter<"Pelada"> | Date | string
    updatedAt?: DateTimeFilter<"Pelada"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    players?: PeladaPlayerListRelationFilter
    queueEntries?: PeladaQueueEntryListRelationFilter
    matches?: MatchListRelationFilter
  }

  export type PeladaOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    date?: SortOrderInput | SortOrder
    playersPerTeam?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    players?: PeladaPlayerOrderByRelationAggregateInput
    queueEntries?: PeladaQueueEntryOrderByRelationAggregateInput
    matches?: MatchOrderByRelationAggregateInput
  }

  export type PeladaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PeladaWhereInput | PeladaWhereInput[]
    OR?: PeladaWhereInput[]
    NOT?: PeladaWhereInput | PeladaWhereInput[]
    groupId?: StringFilter<"Pelada"> | string
    name?: StringFilter<"Pelada"> | string
    date?: DateTimeNullableFilter<"Pelada"> | Date | string | null
    playersPerTeam?: IntFilter<"Pelada"> | number
    status?: EnumPeladaStatusFilter<"Pelada"> | $Enums.PeladaStatus
    createdAt?: DateTimeFilter<"Pelada"> | Date | string
    updatedAt?: DateTimeFilter<"Pelada"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    players?: PeladaPlayerListRelationFilter
    queueEntries?: PeladaQueueEntryListRelationFilter
    matches?: MatchListRelationFilter
  }, "id">

  export type PeladaOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    date?: SortOrderInput | SortOrder
    playersPerTeam?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PeladaCountOrderByAggregateInput
    _avg?: PeladaAvgOrderByAggregateInput
    _max?: PeladaMaxOrderByAggregateInput
    _min?: PeladaMinOrderByAggregateInput
    _sum?: PeladaSumOrderByAggregateInput
  }

  export type PeladaScalarWhereWithAggregatesInput = {
    AND?: PeladaScalarWhereWithAggregatesInput | PeladaScalarWhereWithAggregatesInput[]
    OR?: PeladaScalarWhereWithAggregatesInput[]
    NOT?: PeladaScalarWhereWithAggregatesInput | PeladaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pelada"> | string
    groupId?: StringWithAggregatesFilter<"Pelada"> | string
    name?: StringWithAggregatesFilter<"Pelada"> | string
    date?: DateTimeNullableWithAggregatesFilter<"Pelada"> | Date | string | null
    playersPerTeam?: IntWithAggregatesFilter<"Pelada"> | number
    status?: EnumPeladaStatusWithAggregatesFilter<"Pelada"> | $Enums.PeladaStatus
    createdAt?: DateTimeWithAggregatesFilter<"Pelada"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pelada"> | Date | string
  }

  export type PeladaPlayerWhereInput = {
    AND?: PeladaPlayerWhereInput | PeladaPlayerWhereInput[]
    OR?: PeladaPlayerWhereInput[]
    NOT?: PeladaPlayerWhereInput | PeladaPlayerWhereInput[]
    id?: StringFilter<"PeladaPlayer"> | string
    peladaId?: StringFilter<"PeladaPlayer"> | string
    groupMemberId?: StringFilter<"PeladaPlayer"> | string
    status?: EnumPeladaPlayerStatusFilter<"PeladaPlayer"> | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFilter<"PeladaPlayer"> | Date | string
    updatedAt?: DateTimeFilter<"PeladaPlayer"> | Date | string
    pelada?: XOR<PeladaScalarRelationFilter, PeladaWhereInput>
    groupMember?: XOR<GroupMemberScalarRelationFilter, GroupMemberWhereInput>
    queueEntry?: XOR<PeladaQueueEntryNullableScalarRelationFilter, PeladaQueueEntryWhereInput> | null
    matchPlayers?: MatchPlayerListRelationFilter
  }

  export type PeladaPlayerOrderByWithRelationInput = {
    id?: SortOrder
    peladaId?: SortOrder
    groupMemberId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pelada?: PeladaOrderByWithRelationInput
    groupMember?: GroupMemberOrderByWithRelationInput
    queueEntry?: PeladaQueueEntryOrderByWithRelationInput
    matchPlayers?: MatchPlayerOrderByRelationAggregateInput
  }

  export type PeladaPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    peladaId_groupMemberId?: PeladaPlayerPeladaIdGroupMemberIdCompoundUniqueInput
    AND?: PeladaPlayerWhereInput | PeladaPlayerWhereInput[]
    OR?: PeladaPlayerWhereInput[]
    NOT?: PeladaPlayerWhereInput | PeladaPlayerWhereInput[]
    peladaId?: StringFilter<"PeladaPlayer"> | string
    groupMemberId?: StringFilter<"PeladaPlayer"> | string
    status?: EnumPeladaPlayerStatusFilter<"PeladaPlayer"> | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFilter<"PeladaPlayer"> | Date | string
    updatedAt?: DateTimeFilter<"PeladaPlayer"> | Date | string
    pelada?: XOR<PeladaScalarRelationFilter, PeladaWhereInput>
    groupMember?: XOR<GroupMemberScalarRelationFilter, GroupMemberWhereInput>
    queueEntry?: XOR<PeladaQueueEntryNullableScalarRelationFilter, PeladaQueueEntryWhereInput> | null
    matchPlayers?: MatchPlayerListRelationFilter
  }, "id" | "peladaId_groupMemberId">

  export type PeladaPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    peladaId?: SortOrder
    groupMemberId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PeladaPlayerCountOrderByAggregateInput
    _max?: PeladaPlayerMaxOrderByAggregateInput
    _min?: PeladaPlayerMinOrderByAggregateInput
  }

  export type PeladaPlayerScalarWhereWithAggregatesInput = {
    AND?: PeladaPlayerScalarWhereWithAggregatesInput | PeladaPlayerScalarWhereWithAggregatesInput[]
    OR?: PeladaPlayerScalarWhereWithAggregatesInput[]
    NOT?: PeladaPlayerScalarWhereWithAggregatesInput | PeladaPlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PeladaPlayer"> | string
    peladaId?: StringWithAggregatesFilter<"PeladaPlayer"> | string
    groupMemberId?: StringWithAggregatesFilter<"PeladaPlayer"> | string
    status?: EnumPeladaPlayerStatusWithAggregatesFilter<"PeladaPlayer"> | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeWithAggregatesFilter<"PeladaPlayer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PeladaPlayer"> | Date | string
  }

  export type PeladaQueueEntryWhereInput = {
    AND?: PeladaQueueEntryWhereInput | PeladaQueueEntryWhereInput[]
    OR?: PeladaQueueEntryWhereInput[]
    NOT?: PeladaQueueEntryWhereInput | PeladaQueueEntryWhereInput[]
    id?: StringFilter<"PeladaQueueEntry"> | string
    peladaId?: StringFilter<"PeladaQueueEntry"> | string
    peladaPlayerId?: StringFilter<"PeladaQueueEntry"> | string
    position?: IntFilter<"PeladaQueueEntry"> | number
    createdAt?: DateTimeFilter<"PeladaQueueEntry"> | Date | string
    updatedAt?: DateTimeFilter<"PeladaQueueEntry"> | Date | string
    pelada?: XOR<PeladaScalarRelationFilter, PeladaWhereInput>
    peladaPlayer?: XOR<PeladaPlayerScalarRelationFilter, PeladaPlayerWhereInput>
  }

  export type PeladaQueueEntryOrderByWithRelationInput = {
    id?: SortOrder
    peladaId?: SortOrder
    peladaPlayerId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pelada?: PeladaOrderByWithRelationInput
    peladaPlayer?: PeladaPlayerOrderByWithRelationInput
  }

  export type PeladaQueueEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    peladaPlayerId?: string
    peladaId_position?: PeladaQueueEntryPeladaIdPositionCompoundUniqueInput
    AND?: PeladaQueueEntryWhereInput | PeladaQueueEntryWhereInput[]
    OR?: PeladaQueueEntryWhereInput[]
    NOT?: PeladaQueueEntryWhereInput | PeladaQueueEntryWhereInput[]
    peladaId?: StringFilter<"PeladaQueueEntry"> | string
    position?: IntFilter<"PeladaQueueEntry"> | number
    createdAt?: DateTimeFilter<"PeladaQueueEntry"> | Date | string
    updatedAt?: DateTimeFilter<"PeladaQueueEntry"> | Date | string
    pelada?: XOR<PeladaScalarRelationFilter, PeladaWhereInput>
    peladaPlayer?: XOR<PeladaPlayerScalarRelationFilter, PeladaPlayerWhereInput>
  }, "id" | "peladaPlayerId" | "peladaId_position">

  export type PeladaQueueEntryOrderByWithAggregationInput = {
    id?: SortOrder
    peladaId?: SortOrder
    peladaPlayerId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PeladaQueueEntryCountOrderByAggregateInput
    _avg?: PeladaQueueEntryAvgOrderByAggregateInput
    _max?: PeladaQueueEntryMaxOrderByAggregateInput
    _min?: PeladaQueueEntryMinOrderByAggregateInput
    _sum?: PeladaQueueEntrySumOrderByAggregateInput
  }

  export type PeladaQueueEntryScalarWhereWithAggregatesInput = {
    AND?: PeladaQueueEntryScalarWhereWithAggregatesInput | PeladaQueueEntryScalarWhereWithAggregatesInput[]
    OR?: PeladaQueueEntryScalarWhereWithAggregatesInput[]
    NOT?: PeladaQueueEntryScalarWhereWithAggregatesInput | PeladaQueueEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PeladaQueueEntry"> | string
    peladaId?: StringWithAggregatesFilter<"PeladaQueueEntry"> | string
    peladaPlayerId?: StringWithAggregatesFilter<"PeladaQueueEntry"> | string
    position?: IntWithAggregatesFilter<"PeladaQueueEntry"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PeladaQueueEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PeladaQueueEntry"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    peladaId?: StringFilter<"Match"> | string
    sequence?: IntFilter<"Match"> | number
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    startedAt?: DateTimeFilter<"Match"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    teamAScore?: IntNullableFilter<"Match"> | number | null
    teamBScore?: IntNullableFilter<"Match"> | number | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    pelada?: XOR<PeladaScalarRelationFilter, PeladaWhereInput>
    players?: MatchPlayerListRelationFilter
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    peladaId?: SortOrder
    sequence?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    teamAScore?: SortOrderInput | SortOrder
    teamBScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pelada?: PeladaOrderByWithRelationInput
    players?: MatchPlayerOrderByRelationAggregateInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    peladaId_sequence?: MatchPeladaIdSequenceCompoundUniqueInput
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    peladaId?: StringFilter<"Match"> | string
    sequence?: IntFilter<"Match"> | number
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    startedAt?: DateTimeFilter<"Match"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    teamAScore?: IntNullableFilter<"Match"> | number | null
    teamBScore?: IntNullableFilter<"Match"> | number | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    pelada?: XOR<PeladaScalarRelationFilter, PeladaWhereInput>
    players?: MatchPlayerListRelationFilter
  }, "id" | "peladaId_sequence">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    peladaId?: SortOrder
    sequence?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    teamAScore?: SortOrderInput | SortOrder
    teamBScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    peladaId?: StringWithAggregatesFilter<"Match"> | string
    sequence?: IntWithAggregatesFilter<"Match"> | number
    status?: EnumMatchStatusWithAggregatesFilter<"Match"> | $Enums.MatchStatus
    startedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null
    teamAScore?: IntNullableWithAggregatesFilter<"Match"> | number | null
    teamBScore?: IntNullableWithAggregatesFilter<"Match"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type MatchPlayerWhereInput = {
    AND?: MatchPlayerWhereInput | MatchPlayerWhereInput[]
    OR?: MatchPlayerWhereInput[]
    NOT?: MatchPlayerWhereInput | MatchPlayerWhereInput[]
    id?: StringFilter<"MatchPlayer"> | string
    matchId?: StringFilter<"MatchPlayer"> | string
    peladaPlayerId?: StringFilter<"MatchPlayer"> | string
    team?: EnumMatchTeamFilter<"MatchPlayer"> | $Enums.MatchTeam
    createdAt?: DateTimeFilter<"MatchPlayer"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    peladaPlayer?: XOR<PeladaPlayerScalarRelationFilter, PeladaPlayerWhereInput>
  }

  export type MatchPlayerOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    peladaPlayerId?: SortOrder
    team?: SortOrder
    createdAt?: SortOrder
    match?: MatchOrderByWithRelationInput
    peladaPlayer?: PeladaPlayerOrderByWithRelationInput
  }

  export type MatchPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matchId_peladaPlayerId?: MatchPlayerMatchIdPeladaPlayerIdCompoundUniqueInput
    AND?: MatchPlayerWhereInput | MatchPlayerWhereInput[]
    OR?: MatchPlayerWhereInput[]
    NOT?: MatchPlayerWhereInput | MatchPlayerWhereInput[]
    matchId?: StringFilter<"MatchPlayer"> | string
    peladaPlayerId?: StringFilter<"MatchPlayer"> | string
    team?: EnumMatchTeamFilter<"MatchPlayer"> | $Enums.MatchTeam
    createdAt?: DateTimeFilter<"MatchPlayer"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    peladaPlayer?: XOR<PeladaPlayerScalarRelationFilter, PeladaPlayerWhereInput>
  }, "id" | "matchId_peladaPlayerId">

  export type MatchPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    peladaPlayerId?: SortOrder
    team?: SortOrder
    createdAt?: SortOrder
    _count?: MatchPlayerCountOrderByAggregateInput
    _max?: MatchPlayerMaxOrderByAggregateInput
    _min?: MatchPlayerMinOrderByAggregateInput
  }

  export type MatchPlayerScalarWhereWithAggregatesInput = {
    AND?: MatchPlayerScalarWhereWithAggregatesInput | MatchPlayerScalarWhereWithAggregatesInput[]
    OR?: MatchPlayerScalarWhereWithAggregatesInput[]
    NOT?: MatchPlayerScalarWhereWithAggregatesInput | MatchPlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchPlayer"> | string
    matchId?: StringWithAggregatesFilter<"MatchPlayer"> | string
    peladaPlayerId?: StringWithAggregatesFilter<"MatchPlayer"> | string
    team?: EnumMatchTeamWithAggregatesFilter<"MatchPlayer"> | $Enums.MatchTeam
    createdAt?: DateTimeWithAggregatesFilter<"MatchPlayer"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    nickname: string
    email?: string | null
    passwordHash?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    memberships?: GroupMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    nickname: string
    email?: string | null
    passwordHash?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    memberships?: GroupMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    nickname: string
    email?: string | null
    passwordHash?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    peladas?: PeladaCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    peladas?: PeladaUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    peladas?: PeladaUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    peladas?: PeladaUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateInput = {
    id?: string
    role?: $Enums.GroupMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMembershipsInput
    peladaPlayers?: PeladaPlayerCreateNestedManyWithoutGroupMemberInput
  }

  export type GroupMemberUncheckedCreateInput = {
    id?: string
    groupId: string
    userId: string
    role?: $Enums.GroupMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    peladaPlayers?: PeladaPlayerUncheckedCreateNestedManyWithoutGroupMemberInput
  }

  export type GroupMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupMemberRoleFieldUpdateOperationsInput | $Enums.GroupMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    peladaPlayers?: PeladaPlayerUpdateManyWithoutGroupMemberNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupMemberRoleFieldUpdateOperationsInput | $Enums.GroupMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peladaPlayers?: PeladaPlayerUncheckedUpdateManyWithoutGroupMemberNestedInput
  }

  export type GroupMemberCreateManyInput = {
    id?: string
    groupId: string
    userId: string
    role?: $Enums.GroupMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupMemberRoleFieldUpdateOperationsInput | $Enums.GroupMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupMemberRoleFieldUpdateOperationsInput | $Enums.GroupMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeladaCreateInput = {
    id?: string
    name: string
    date?: Date | string | null
    playersPerTeam?: number
    status?: $Enums.PeladaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutPeladasInput
    players?: PeladaPlayerCreateNestedManyWithoutPeladaInput
    queueEntries?: PeladaQueueEntryCreateNestedManyWithoutPeladaInput
    matches?: MatchCreateNestedManyWithoutPeladaInput
  }

  export type PeladaUncheckedCreateInput = {
    id?: string
    groupId: string
    name: string
    date?: Date | string | null
    playersPerTeam?: number
    status?: $Enums.PeladaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PeladaPlayerUncheckedCreateNestedManyWithoutPeladaInput
    queueEntries?: PeladaQueueEntryUncheckedCreateNestedManyWithoutPeladaInput
    matches?: MatchUncheckedCreateNestedManyWithoutPeladaInput
  }

  export type PeladaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playersPerTeam?: IntFieldUpdateOperationsInput | number
    status?: EnumPeladaStatusFieldUpdateOperationsInput | $Enums.PeladaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutPeladasNestedInput
    players?: PeladaPlayerUpdateManyWithoutPeladaNestedInput
    queueEntries?: PeladaQueueEntryUpdateManyWithoutPeladaNestedInput
    matches?: MatchUpdateManyWithoutPeladaNestedInput
  }

  export type PeladaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playersPerTeam?: IntFieldUpdateOperationsInput | number
    status?: EnumPeladaStatusFieldUpdateOperationsInput | $Enums.PeladaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PeladaPlayerUncheckedUpdateManyWithoutPeladaNestedInput
    queueEntries?: PeladaQueueEntryUncheckedUpdateManyWithoutPeladaNestedInput
    matches?: MatchUncheckedUpdateManyWithoutPeladaNestedInput
  }

  export type PeladaCreateManyInput = {
    id?: string
    groupId: string
    name: string
    date?: Date | string | null
    playersPerTeam?: number
    status?: $Enums.PeladaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeladaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playersPerTeam?: IntFieldUpdateOperationsInput | number
    status?: EnumPeladaStatusFieldUpdateOperationsInput | $Enums.PeladaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeladaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playersPerTeam?: IntFieldUpdateOperationsInput | number
    status?: EnumPeladaStatusFieldUpdateOperationsInput | $Enums.PeladaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeladaPlayerCreateInput = {
    id?: string
    status?: $Enums.PeladaPlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    pelada: PeladaCreateNestedOneWithoutPlayersInput
    groupMember: GroupMemberCreateNestedOneWithoutPeladaPlayersInput
    queueEntry?: PeladaQueueEntryCreateNestedOneWithoutPeladaPlayerInput
    matchPlayers?: MatchPlayerCreateNestedManyWithoutPeladaPlayerInput
  }

  export type PeladaPlayerUncheckedCreateInput = {
    id?: string
    peladaId: string
    groupMemberId: string
    status?: $Enums.PeladaPlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    queueEntry?: PeladaQueueEntryUncheckedCreateNestedOneWithoutPeladaPlayerInput
    matchPlayers?: MatchPlayerUncheckedCreateNestedManyWithoutPeladaPlayerInput
  }

  export type PeladaPlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPeladaPlayerStatusFieldUpdateOperationsInput | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pelada?: PeladaUpdateOneRequiredWithoutPlayersNestedInput
    groupMember?: GroupMemberUpdateOneRequiredWithoutPeladaPlayersNestedInput
    queueEntry?: PeladaQueueEntryUpdateOneWithoutPeladaPlayerNestedInput
    matchPlayers?: MatchPlayerUpdateManyWithoutPeladaPlayerNestedInput
  }

  export type PeladaPlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaId?: StringFieldUpdateOperationsInput | string
    groupMemberId?: StringFieldUpdateOperationsInput | string
    status?: EnumPeladaPlayerStatusFieldUpdateOperationsInput | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queueEntry?: PeladaQueueEntryUncheckedUpdateOneWithoutPeladaPlayerNestedInput
    matchPlayers?: MatchPlayerUncheckedUpdateManyWithoutPeladaPlayerNestedInput
  }

  export type PeladaPlayerCreateManyInput = {
    id?: string
    peladaId: string
    groupMemberId: string
    status?: $Enums.PeladaPlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeladaPlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPeladaPlayerStatusFieldUpdateOperationsInput | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeladaPlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaId?: StringFieldUpdateOperationsInput | string
    groupMemberId?: StringFieldUpdateOperationsInput | string
    status?: EnumPeladaPlayerStatusFieldUpdateOperationsInput | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeladaQueueEntryCreateInput = {
    id?: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pelada: PeladaCreateNestedOneWithoutQueueEntriesInput
    peladaPlayer: PeladaPlayerCreateNestedOneWithoutQueueEntryInput
  }

  export type PeladaQueueEntryUncheckedCreateInput = {
    id?: string
    peladaId: string
    peladaPlayerId: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeladaQueueEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pelada?: PeladaUpdateOneRequiredWithoutQueueEntriesNestedInput
    peladaPlayer?: PeladaPlayerUpdateOneRequiredWithoutQueueEntryNestedInput
  }

  export type PeladaQueueEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaId?: StringFieldUpdateOperationsInput | string
    peladaPlayerId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeladaQueueEntryCreateManyInput = {
    id?: string
    peladaId: string
    peladaPlayerId: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeladaQueueEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeladaQueueEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaId?: StringFieldUpdateOperationsInput | string
    peladaPlayerId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    sequence: number
    status?: $Enums.MatchStatus
    startedAt?: Date | string
    finishedAt?: Date | string | null
    teamAScore?: number | null
    teamBScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pelada: PeladaCreateNestedOneWithoutMatchesInput
    players?: MatchPlayerCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    peladaId: string
    sequence: number
    status?: $Enums.MatchStatus
    startedAt?: Date | string
    finishedAt?: Date | string | null
    teamAScore?: number | null
    teamBScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: MatchPlayerUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamAScore?: NullableIntFieldUpdateOperationsInput | number | null
    teamBScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pelada?: PeladaUpdateOneRequiredWithoutMatchesNestedInput
    players?: MatchPlayerUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamAScore?: NullableIntFieldUpdateOperationsInput | number | null
    teamBScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: MatchPlayerUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: string
    peladaId: string
    sequence: number
    status?: $Enums.MatchStatus
    startedAt?: Date | string
    finishedAt?: Date | string | null
    teamAScore?: number | null
    teamBScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamAScore?: NullableIntFieldUpdateOperationsInput | number | null
    teamBScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamAScore?: NullableIntFieldUpdateOperationsInput | number | null
    teamBScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchPlayerCreateInput = {
    id?: string
    team: $Enums.MatchTeam
    createdAt?: Date | string
    match: MatchCreateNestedOneWithoutPlayersInput
    peladaPlayer: PeladaPlayerCreateNestedOneWithoutMatchPlayersInput
  }

  export type MatchPlayerUncheckedCreateInput = {
    id?: string
    matchId: string
    peladaPlayerId: string
    team: $Enums.MatchTeam
    createdAt?: Date | string
  }

  export type MatchPlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: EnumMatchTeamFieldUpdateOperationsInput | $Enums.MatchTeam
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutPlayersNestedInput
    peladaPlayer?: PeladaPlayerUpdateOneRequiredWithoutMatchPlayersNestedInput
  }

  export type MatchPlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    peladaPlayerId?: StringFieldUpdateOperationsInput | string
    team?: EnumMatchTeamFieldUpdateOperationsInput | $Enums.MatchTeam
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchPlayerCreateManyInput = {
    id?: string
    matchId: string
    peladaPlayerId: string
    team: $Enums.MatchTeam
    createdAt?: Date | string
  }

  export type MatchPlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: EnumMatchTeamFieldUpdateOperationsInput | $Enums.MatchTeam
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchPlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    peladaPlayerId?: StringFieldUpdateOperationsInput | string
    team?: EnumMatchTeamFieldUpdateOperationsInput | $Enums.MatchTeam
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PeladaListRelationFilter = {
    every?: PeladaWhereInput
    some?: PeladaWhereInput
    none?: PeladaWhereInput
  }

  export type PeladaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGroupMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupMemberRole | EnumGroupMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GroupMemberRole[] | ListEnumGroupMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupMemberRole[] | ListEnumGroupMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupMemberRoleFilter<$PrismaModel> | $Enums.GroupMemberRole
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type PeladaPlayerListRelationFilter = {
    every?: PeladaPlayerWhereInput
    some?: PeladaPlayerWhereInput
    none?: PeladaPlayerWhereInput
  }

  export type PeladaPlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMemberGroupIdUserIdCompoundUniqueInput = {
    groupId: string
    userId: string
  }

  export type GroupMemberCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGroupMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupMemberRole | EnumGroupMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GroupMemberRole[] | ListEnumGroupMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupMemberRole[] | ListEnumGroupMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.GroupMemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumGroupMemberRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumPeladaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PeladaStatus | EnumPeladaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PeladaStatus[] | ListEnumPeladaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeladaStatus[] | ListEnumPeladaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPeladaStatusFilter<$PrismaModel> | $Enums.PeladaStatus
  }

  export type PeladaQueueEntryListRelationFilter = {
    every?: PeladaQueueEntryWhereInput
    some?: PeladaQueueEntryWhereInput
    none?: PeladaQueueEntryWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type PeladaQueueEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeladaCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    date?: SortOrder
    playersPerTeam?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeladaAvgOrderByAggregateInput = {
    playersPerTeam?: SortOrder
  }

  export type PeladaMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    date?: SortOrder
    playersPerTeam?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeladaMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    date?: SortOrder
    playersPerTeam?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeladaSumOrderByAggregateInput = {
    playersPerTeam?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPeladaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeladaStatus | EnumPeladaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PeladaStatus[] | ListEnumPeladaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeladaStatus[] | ListEnumPeladaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPeladaStatusWithAggregatesFilter<$PrismaModel> | $Enums.PeladaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeladaStatusFilter<$PrismaModel>
    _max?: NestedEnumPeladaStatusFilter<$PrismaModel>
  }

  export type EnumPeladaPlayerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PeladaPlayerStatus | EnumPeladaPlayerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PeladaPlayerStatus[] | ListEnumPeladaPlayerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeladaPlayerStatus[] | ListEnumPeladaPlayerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPeladaPlayerStatusFilter<$PrismaModel> | $Enums.PeladaPlayerStatus
  }

  export type PeladaScalarRelationFilter = {
    is?: PeladaWhereInput
    isNot?: PeladaWhereInput
  }

  export type GroupMemberScalarRelationFilter = {
    is?: GroupMemberWhereInput
    isNot?: GroupMemberWhereInput
  }

  export type PeladaQueueEntryNullableScalarRelationFilter = {
    is?: PeladaQueueEntryWhereInput | null
    isNot?: PeladaQueueEntryWhereInput | null
  }

  export type MatchPlayerListRelationFilter = {
    every?: MatchPlayerWhereInput
    some?: MatchPlayerWhereInput
    none?: MatchPlayerWhereInput
  }

  export type MatchPlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeladaPlayerPeladaIdGroupMemberIdCompoundUniqueInput = {
    peladaId: string
    groupMemberId: string
  }

  export type PeladaPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    peladaId?: SortOrder
    groupMemberId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeladaPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    peladaId?: SortOrder
    groupMemberId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeladaPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    peladaId?: SortOrder
    groupMemberId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPeladaPlayerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeladaPlayerStatus | EnumPeladaPlayerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PeladaPlayerStatus[] | ListEnumPeladaPlayerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeladaPlayerStatus[] | ListEnumPeladaPlayerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPeladaPlayerStatusWithAggregatesFilter<$PrismaModel> | $Enums.PeladaPlayerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeladaPlayerStatusFilter<$PrismaModel>
    _max?: NestedEnumPeladaPlayerStatusFilter<$PrismaModel>
  }

  export type PeladaPlayerScalarRelationFilter = {
    is?: PeladaPlayerWhereInput
    isNot?: PeladaPlayerWhereInput
  }

  export type PeladaQueueEntryPeladaIdPositionCompoundUniqueInput = {
    peladaId: string
    position: number
  }

  export type PeladaQueueEntryCountOrderByAggregateInput = {
    id?: SortOrder
    peladaId?: SortOrder
    peladaPlayerId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeladaQueueEntryAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type PeladaQueueEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    peladaId?: SortOrder
    peladaPlayerId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeladaQueueEntryMinOrderByAggregateInput = {
    id?: SortOrder
    peladaId?: SortOrder
    peladaPlayerId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeladaQueueEntrySumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type EnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MatchPeladaIdSequenceCompoundUniqueInput = {
    peladaId: string
    sequence: number
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    peladaId?: SortOrder
    sequence?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    teamAScore?: SortOrder
    teamBScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    sequence?: SortOrder
    teamAScore?: SortOrder
    teamBScore?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    peladaId?: SortOrder
    sequence?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    teamAScore?: SortOrder
    teamBScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    peladaId?: SortOrder
    sequence?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    teamAScore?: SortOrder
    teamBScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    sequence?: SortOrder
    teamAScore?: SortOrder
    teamBScore?: SortOrder
  }

  export type EnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumMatchTeamFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchTeam | EnumMatchTeamFieldRefInput<$PrismaModel>
    in?: $Enums.MatchTeam[] | ListEnumMatchTeamFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchTeam[] | ListEnumMatchTeamFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTeamFilter<$PrismaModel> | $Enums.MatchTeam
  }

  export type MatchScalarRelationFilter = {
    is?: MatchWhereInput
    isNot?: MatchWhereInput
  }

  export type MatchPlayerMatchIdPeladaPlayerIdCompoundUniqueInput = {
    matchId: string
    peladaPlayerId: string
  }

  export type MatchPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    peladaPlayerId?: SortOrder
    team?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    peladaPlayerId?: SortOrder
    team?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    peladaPlayerId?: SortOrder
    team?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMatchTeamWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchTeam | EnumMatchTeamFieldRefInput<$PrismaModel>
    in?: $Enums.MatchTeam[] | ListEnumMatchTeamFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchTeam[] | ListEnumMatchTeamFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTeamWithAggregatesFilter<$PrismaModel> | $Enums.MatchTeam
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchTeamFilter<$PrismaModel>
    _max?: NestedEnumMatchTeamFilter<$PrismaModel>
  }

  export type GroupCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutOwnerInput | GroupUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutOwnerInput | GroupUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutOwnerInput | GroupUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutOwnerInput | GroupUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutOwnerInput | GroupUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutOwnerInput | GroupUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedGroupsInput = {
    create?: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type PeladaCreateNestedManyWithoutGroupInput = {
    create?: XOR<PeladaCreateWithoutGroupInput, PeladaUncheckedCreateWithoutGroupInput> | PeladaCreateWithoutGroupInput[] | PeladaUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PeladaCreateOrConnectWithoutGroupInput | PeladaCreateOrConnectWithoutGroupInput[]
    createMany?: PeladaCreateManyGroupInputEnvelope
    connect?: PeladaWhereUniqueInput | PeladaWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type PeladaUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<PeladaCreateWithoutGroupInput, PeladaUncheckedCreateWithoutGroupInput> | PeladaCreateWithoutGroupInput[] | PeladaUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PeladaCreateOrConnectWithoutGroupInput | PeladaCreateOrConnectWithoutGroupInput[]
    createMany?: PeladaCreateManyGroupInputEnvelope
    connect?: PeladaWhereUniqueInput | PeladaWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedGroupsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedGroupsInput
    upsert?: UserUpsertWithoutOwnedGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedGroupsInput, UserUpdateWithoutOwnedGroupsInput>, UserUncheckedUpdateWithoutOwnedGroupsInput>
  }

  export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type PeladaUpdateManyWithoutGroupNestedInput = {
    create?: XOR<PeladaCreateWithoutGroupInput, PeladaUncheckedCreateWithoutGroupInput> | PeladaCreateWithoutGroupInput[] | PeladaUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PeladaCreateOrConnectWithoutGroupInput | PeladaCreateOrConnectWithoutGroupInput[]
    upsert?: PeladaUpsertWithWhereUniqueWithoutGroupInput | PeladaUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: PeladaCreateManyGroupInputEnvelope
    set?: PeladaWhereUniqueInput | PeladaWhereUniqueInput[]
    disconnect?: PeladaWhereUniqueInput | PeladaWhereUniqueInput[]
    delete?: PeladaWhereUniqueInput | PeladaWhereUniqueInput[]
    connect?: PeladaWhereUniqueInput | PeladaWhereUniqueInput[]
    update?: PeladaUpdateWithWhereUniqueWithoutGroupInput | PeladaUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: PeladaUpdateManyWithWhereWithoutGroupInput | PeladaUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: PeladaScalarWhereInput | PeladaScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type PeladaUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<PeladaCreateWithoutGroupInput, PeladaUncheckedCreateWithoutGroupInput> | PeladaCreateWithoutGroupInput[] | PeladaUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PeladaCreateOrConnectWithoutGroupInput | PeladaCreateOrConnectWithoutGroupInput[]
    upsert?: PeladaUpsertWithWhereUniqueWithoutGroupInput | PeladaUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: PeladaCreateManyGroupInputEnvelope
    set?: PeladaWhereUniqueInput | PeladaWhereUniqueInput[]
    disconnect?: PeladaWhereUniqueInput | PeladaWhereUniqueInput[]
    delete?: PeladaWhereUniqueInput | PeladaWhereUniqueInput[]
    connect?: PeladaWhereUniqueInput | PeladaWhereUniqueInput[]
    update?: PeladaUpdateWithWhereUniqueWithoutGroupInput | PeladaUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: PeladaUpdateManyWithWhereWithoutGroupInput | PeladaUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: PeladaScalarWhereInput | PeladaScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type PeladaPlayerCreateNestedManyWithoutGroupMemberInput = {
    create?: XOR<PeladaPlayerCreateWithoutGroupMemberInput, PeladaPlayerUncheckedCreateWithoutGroupMemberInput> | PeladaPlayerCreateWithoutGroupMemberInput[] | PeladaPlayerUncheckedCreateWithoutGroupMemberInput[]
    connectOrCreate?: PeladaPlayerCreateOrConnectWithoutGroupMemberInput | PeladaPlayerCreateOrConnectWithoutGroupMemberInput[]
    createMany?: PeladaPlayerCreateManyGroupMemberInputEnvelope
    connect?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
  }

  export type PeladaPlayerUncheckedCreateNestedManyWithoutGroupMemberInput = {
    create?: XOR<PeladaPlayerCreateWithoutGroupMemberInput, PeladaPlayerUncheckedCreateWithoutGroupMemberInput> | PeladaPlayerCreateWithoutGroupMemberInput[] | PeladaPlayerUncheckedCreateWithoutGroupMemberInput[]
    connectOrCreate?: PeladaPlayerCreateOrConnectWithoutGroupMemberInput | PeladaPlayerCreateOrConnectWithoutGroupMemberInput[]
    createMany?: PeladaPlayerCreateManyGroupMemberInputEnvelope
    connect?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
  }

  export type EnumGroupMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.GroupMemberRole
  }

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembersInput, GroupUpdateWithoutMembersInput>, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type PeladaPlayerUpdateManyWithoutGroupMemberNestedInput = {
    create?: XOR<PeladaPlayerCreateWithoutGroupMemberInput, PeladaPlayerUncheckedCreateWithoutGroupMemberInput> | PeladaPlayerCreateWithoutGroupMemberInput[] | PeladaPlayerUncheckedCreateWithoutGroupMemberInput[]
    connectOrCreate?: PeladaPlayerCreateOrConnectWithoutGroupMemberInput | PeladaPlayerCreateOrConnectWithoutGroupMemberInput[]
    upsert?: PeladaPlayerUpsertWithWhereUniqueWithoutGroupMemberInput | PeladaPlayerUpsertWithWhereUniqueWithoutGroupMemberInput[]
    createMany?: PeladaPlayerCreateManyGroupMemberInputEnvelope
    set?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    disconnect?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    delete?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    connect?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    update?: PeladaPlayerUpdateWithWhereUniqueWithoutGroupMemberInput | PeladaPlayerUpdateWithWhereUniqueWithoutGroupMemberInput[]
    updateMany?: PeladaPlayerUpdateManyWithWhereWithoutGroupMemberInput | PeladaPlayerUpdateManyWithWhereWithoutGroupMemberInput[]
    deleteMany?: PeladaPlayerScalarWhereInput | PeladaPlayerScalarWhereInput[]
  }

  export type PeladaPlayerUncheckedUpdateManyWithoutGroupMemberNestedInput = {
    create?: XOR<PeladaPlayerCreateWithoutGroupMemberInput, PeladaPlayerUncheckedCreateWithoutGroupMemberInput> | PeladaPlayerCreateWithoutGroupMemberInput[] | PeladaPlayerUncheckedCreateWithoutGroupMemberInput[]
    connectOrCreate?: PeladaPlayerCreateOrConnectWithoutGroupMemberInput | PeladaPlayerCreateOrConnectWithoutGroupMemberInput[]
    upsert?: PeladaPlayerUpsertWithWhereUniqueWithoutGroupMemberInput | PeladaPlayerUpsertWithWhereUniqueWithoutGroupMemberInput[]
    createMany?: PeladaPlayerCreateManyGroupMemberInputEnvelope
    set?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    disconnect?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    delete?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    connect?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    update?: PeladaPlayerUpdateWithWhereUniqueWithoutGroupMemberInput | PeladaPlayerUpdateWithWhereUniqueWithoutGroupMemberInput[]
    updateMany?: PeladaPlayerUpdateManyWithWhereWithoutGroupMemberInput | PeladaPlayerUpdateManyWithWhereWithoutGroupMemberInput[]
    deleteMany?: PeladaPlayerScalarWhereInput | PeladaPlayerScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutPeladasInput = {
    create?: XOR<GroupCreateWithoutPeladasInput, GroupUncheckedCreateWithoutPeladasInput>
    connectOrCreate?: GroupCreateOrConnectWithoutPeladasInput
    connect?: GroupWhereUniqueInput
  }

  export type PeladaPlayerCreateNestedManyWithoutPeladaInput = {
    create?: XOR<PeladaPlayerCreateWithoutPeladaInput, PeladaPlayerUncheckedCreateWithoutPeladaInput> | PeladaPlayerCreateWithoutPeladaInput[] | PeladaPlayerUncheckedCreateWithoutPeladaInput[]
    connectOrCreate?: PeladaPlayerCreateOrConnectWithoutPeladaInput | PeladaPlayerCreateOrConnectWithoutPeladaInput[]
    createMany?: PeladaPlayerCreateManyPeladaInputEnvelope
    connect?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
  }

  export type PeladaQueueEntryCreateNestedManyWithoutPeladaInput = {
    create?: XOR<PeladaQueueEntryCreateWithoutPeladaInput, PeladaQueueEntryUncheckedCreateWithoutPeladaInput> | PeladaQueueEntryCreateWithoutPeladaInput[] | PeladaQueueEntryUncheckedCreateWithoutPeladaInput[]
    connectOrCreate?: PeladaQueueEntryCreateOrConnectWithoutPeladaInput | PeladaQueueEntryCreateOrConnectWithoutPeladaInput[]
    createMany?: PeladaQueueEntryCreateManyPeladaInputEnvelope
    connect?: PeladaQueueEntryWhereUniqueInput | PeladaQueueEntryWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutPeladaInput = {
    create?: XOR<MatchCreateWithoutPeladaInput, MatchUncheckedCreateWithoutPeladaInput> | MatchCreateWithoutPeladaInput[] | MatchUncheckedCreateWithoutPeladaInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutPeladaInput | MatchCreateOrConnectWithoutPeladaInput[]
    createMany?: MatchCreateManyPeladaInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type PeladaPlayerUncheckedCreateNestedManyWithoutPeladaInput = {
    create?: XOR<PeladaPlayerCreateWithoutPeladaInput, PeladaPlayerUncheckedCreateWithoutPeladaInput> | PeladaPlayerCreateWithoutPeladaInput[] | PeladaPlayerUncheckedCreateWithoutPeladaInput[]
    connectOrCreate?: PeladaPlayerCreateOrConnectWithoutPeladaInput | PeladaPlayerCreateOrConnectWithoutPeladaInput[]
    createMany?: PeladaPlayerCreateManyPeladaInputEnvelope
    connect?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
  }

  export type PeladaQueueEntryUncheckedCreateNestedManyWithoutPeladaInput = {
    create?: XOR<PeladaQueueEntryCreateWithoutPeladaInput, PeladaQueueEntryUncheckedCreateWithoutPeladaInput> | PeladaQueueEntryCreateWithoutPeladaInput[] | PeladaQueueEntryUncheckedCreateWithoutPeladaInput[]
    connectOrCreate?: PeladaQueueEntryCreateOrConnectWithoutPeladaInput | PeladaQueueEntryCreateOrConnectWithoutPeladaInput[]
    createMany?: PeladaQueueEntryCreateManyPeladaInputEnvelope
    connect?: PeladaQueueEntryWhereUniqueInput | PeladaQueueEntryWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutPeladaInput = {
    create?: XOR<MatchCreateWithoutPeladaInput, MatchUncheckedCreateWithoutPeladaInput> | MatchCreateWithoutPeladaInput[] | MatchUncheckedCreateWithoutPeladaInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutPeladaInput | MatchCreateOrConnectWithoutPeladaInput[]
    createMany?: MatchCreateManyPeladaInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPeladaStatusFieldUpdateOperationsInput = {
    set?: $Enums.PeladaStatus
  }

  export type GroupUpdateOneRequiredWithoutPeladasNestedInput = {
    create?: XOR<GroupCreateWithoutPeladasInput, GroupUncheckedCreateWithoutPeladasInput>
    connectOrCreate?: GroupCreateOrConnectWithoutPeladasInput
    upsert?: GroupUpsertWithoutPeladasInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutPeladasInput, GroupUpdateWithoutPeladasInput>, GroupUncheckedUpdateWithoutPeladasInput>
  }

  export type PeladaPlayerUpdateManyWithoutPeladaNestedInput = {
    create?: XOR<PeladaPlayerCreateWithoutPeladaInput, PeladaPlayerUncheckedCreateWithoutPeladaInput> | PeladaPlayerCreateWithoutPeladaInput[] | PeladaPlayerUncheckedCreateWithoutPeladaInput[]
    connectOrCreate?: PeladaPlayerCreateOrConnectWithoutPeladaInput | PeladaPlayerCreateOrConnectWithoutPeladaInput[]
    upsert?: PeladaPlayerUpsertWithWhereUniqueWithoutPeladaInput | PeladaPlayerUpsertWithWhereUniqueWithoutPeladaInput[]
    createMany?: PeladaPlayerCreateManyPeladaInputEnvelope
    set?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    disconnect?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    delete?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    connect?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    update?: PeladaPlayerUpdateWithWhereUniqueWithoutPeladaInput | PeladaPlayerUpdateWithWhereUniqueWithoutPeladaInput[]
    updateMany?: PeladaPlayerUpdateManyWithWhereWithoutPeladaInput | PeladaPlayerUpdateManyWithWhereWithoutPeladaInput[]
    deleteMany?: PeladaPlayerScalarWhereInput | PeladaPlayerScalarWhereInput[]
  }

  export type PeladaQueueEntryUpdateManyWithoutPeladaNestedInput = {
    create?: XOR<PeladaQueueEntryCreateWithoutPeladaInput, PeladaQueueEntryUncheckedCreateWithoutPeladaInput> | PeladaQueueEntryCreateWithoutPeladaInput[] | PeladaQueueEntryUncheckedCreateWithoutPeladaInput[]
    connectOrCreate?: PeladaQueueEntryCreateOrConnectWithoutPeladaInput | PeladaQueueEntryCreateOrConnectWithoutPeladaInput[]
    upsert?: PeladaQueueEntryUpsertWithWhereUniqueWithoutPeladaInput | PeladaQueueEntryUpsertWithWhereUniqueWithoutPeladaInput[]
    createMany?: PeladaQueueEntryCreateManyPeladaInputEnvelope
    set?: PeladaQueueEntryWhereUniqueInput | PeladaQueueEntryWhereUniqueInput[]
    disconnect?: PeladaQueueEntryWhereUniqueInput | PeladaQueueEntryWhereUniqueInput[]
    delete?: PeladaQueueEntryWhereUniqueInput | PeladaQueueEntryWhereUniqueInput[]
    connect?: PeladaQueueEntryWhereUniqueInput | PeladaQueueEntryWhereUniqueInput[]
    update?: PeladaQueueEntryUpdateWithWhereUniqueWithoutPeladaInput | PeladaQueueEntryUpdateWithWhereUniqueWithoutPeladaInput[]
    updateMany?: PeladaQueueEntryUpdateManyWithWhereWithoutPeladaInput | PeladaQueueEntryUpdateManyWithWhereWithoutPeladaInput[]
    deleteMany?: PeladaQueueEntryScalarWhereInput | PeladaQueueEntryScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutPeladaNestedInput = {
    create?: XOR<MatchCreateWithoutPeladaInput, MatchUncheckedCreateWithoutPeladaInput> | MatchCreateWithoutPeladaInput[] | MatchUncheckedCreateWithoutPeladaInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutPeladaInput | MatchCreateOrConnectWithoutPeladaInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPeladaInput | MatchUpsertWithWhereUniqueWithoutPeladaInput[]
    createMany?: MatchCreateManyPeladaInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPeladaInput | MatchUpdateWithWhereUniqueWithoutPeladaInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutPeladaInput | MatchUpdateManyWithWhereWithoutPeladaInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type PeladaPlayerUncheckedUpdateManyWithoutPeladaNestedInput = {
    create?: XOR<PeladaPlayerCreateWithoutPeladaInput, PeladaPlayerUncheckedCreateWithoutPeladaInput> | PeladaPlayerCreateWithoutPeladaInput[] | PeladaPlayerUncheckedCreateWithoutPeladaInput[]
    connectOrCreate?: PeladaPlayerCreateOrConnectWithoutPeladaInput | PeladaPlayerCreateOrConnectWithoutPeladaInput[]
    upsert?: PeladaPlayerUpsertWithWhereUniqueWithoutPeladaInput | PeladaPlayerUpsertWithWhereUniqueWithoutPeladaInput[]
    createMany?: PeladaPlayerCreateManyPeladaInputEnvelope
    set?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    disconnect?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    delete?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    connect?: PeladaPlayerWhereUniqueInput | PeladaPlayerWhereUniqueInput[]
    update?: PeladaPlayerUpdateWithWhereUniqueWithoutPeladaInput | PeladaPlayerUpdateWithWhereUniqueWithoutPeladaInput[]
    updateMany?: PeladaPlayerUpdateManyWithWhereWithoutPeladaInput | PeladaPlayerUpdateManyWithWhereWithoutPeladaInput[]
    deleteMany?: PeladaPlayerScalarWhereInput | PeladaPlayerScalarWhereInput[]
  }

  export type PeladaQueueEntryUncheckedUpdateManyWithoutPeladaNestedInput = {
    create?: XOR<PeladaQueueEntryCreateWithoutPeladaInput, PeladaQueueEntryUncheckedCreateWithoutPeladaInput> | PeladaQueueEntryCreateWithoutPeladaInput[] | PeladaQueueEntryUncheckedCreateWithoutPeladaInput[]
    connectOrCreate?: PeladaQueueEntryCreateOrConnectWithoutPeladaInput | PeladaQueueEntryCreateOrConnectWithoutPeladaInput[]
    upsert?: PeladaQueueEntryUpsertWithWhereUniqueWithoutPeladaInput | PeladaQueueEntryUpsertWithWhereUniqueWithoutPeladaInput[]
    createMany?: PeladaQueueEntryCreateManyPeladaInputEnvelope
    set?: PeladaQueueEntryWhereUniqueInput | PeladaQueueEntryWhereUniqueInput[]
    disconnect?: PeladaQueueEntryWhereUniqueInput | PeladaQueueEntryWhereUniqueInput[]
    delete?: PeladaQueueEntryWhereUniqueInput | PeladaQueueEntryWhereUniqueInput[]
    connect?: PeladaQueueEntryWhereUniqueInput | PeladaQueueEntryWhereUniqueInput[]
    update?: PeladaQueueEntryUpdateWithWhereUniqueWithoutPeladaInput | PeladaQueueEntryUpdateWithWhereUniqueWithoutPeladaInput[]
    updateMany?: PeladaQueueEntryUpdateManyWithWhereWithoutPeladaInput | PeladaQueueEntryUpdateManyWithWhereWithoutPeladaInput[]
    deleteMany?: PeladaQueueEntryScalarWhereInput | PeladaQueueEntryScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutPeladaNestedInput = {
    create?: XOR<MatchCreateWithoutPeladaInput, MatchUncheckedCreateWithoutPeladaInput> | MatchCreateWithoutPeladaInput[] | MatchUncheckedCreateWithoutPeladaInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutPeladaInput | MatchCreateOrConnectWithoutPeladaInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPeladaInput | MatchUpsertWithWhereUniqueWithoutPeladaInput[]
    createMany?: MatchCreateManyPeladaInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPeladaInput | MatchUpdateWithWhereUniqueWithoutPeladaInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutPeladaInput | MatchUpdateManyWithWhereWithoutPeladaInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type PeladaCreateNestedOneWithoutPlayersInput = {
    create?: XOR<PeladaCreateWithoutPlayersInput, PeladaUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: PeladaCreateOrConnectWithoutPlayersInput
    connect?: PeladaWhereUniqueInput
  }

  export type GroupMemberCreateNestedOneWithoutPeladaPlayersInput = {
    create?: XOR<GroupMemberCreateWithoutPeladaPlayersInput, GroupMemberUncheckedCreateWithoutPeladaPlayersInput>
    connectOrCreate?: GroupMemberCreateOrConnectWithoutPeladaPlayersInput
    connect?: GroupMemberWhereUniqueInput
  }

  export type PeladaQueueEntryCreateNestedOneWithoutPeladaPlayerInput = {
    create?: XOR<PeladaQueueEntryCreateWithoutPeladaPlayerInput, PeladaQueueEntryUncheckedCreateWithoutPeladaPlayerInput>
    connectOrCreate?: PeladaQueueEntryCreateOrConnectWithoutPeladaPlayerInput
    connect?: PeladaQueueEntryWhereUniqueInput
  }

  export type MatchPlayerCreateNestedManyWithoutPeladaPlayerInput = {
    create?: XOR<MatchPlayerCreateWithoutPeladaPlayerInput, MatchPlayerUncheckedCreateWithoutPeladaPlayerInput> | MatchPlayerCreateWithoutPeladaPlayerInput[] | MatchPlayerUncheckedCreateWithoutPeladaPlayerInput[]
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutPeladaPlayerInput | MatchPlayerCreateOrConnectWithoutPeladaPlayerInput[]
    createMany?: MatchPlayerCreateManyPeladaPlayerInputEnvelope
    connect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
  }

  export type PeladaQueueEntryUncheckedCreateNestedOneWithoutPeladaPlayerInput = {
    create?: XOR<PeladaQueueEntryCreateWithoutPeladaPlayerInput, PeladaQueueEntryUncheckedCreateWithoutPeladaPlayerInput>
    connectOrCreate?: PeladaQueueEntryCreateOrConnectWithoutPeladaPlayerInput
    connect?: PeladaQueueEntryWhereUniqueInput
  }

  export type MatchPlayerUncheckedCreateNestedManyWithoutPeladaPlayerInput = {
    create?: XOR<MatchPlayerCreateWithoutPeladaPlayerInput, MatchPlayerUncheckedCreateWithoutPeladaPlayerInput> | MatchPlayerCreateWithoutPeladaPlayerInput[] | MatchPlayerUncheckedCreateWithoutPeladaPlayerInput[]
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutPeladaPlayerInput | MatchPlayerCreateOrConnectWithoutPeladaPlayerInput[]
    createMany?: MatchPlayerCreateManyPeladaPlayerInputEnvelope
    connect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
  }

  export type EnumPeladaPlayerStatusFieldUpdateOperationsInput = {
    set?: $Enums.PeladaPlayerStatus
  }

  export type PeladaUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<PeladaCreateWithoutPlayersInput, PeladaUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: PeladaCreateOrConnectWithoutPlayersInput
    upsert?: PeladaUpsertWithoutPlayersInput
    connect?: PeladaWhereUniqueInput
    update?: XOR<XOR<PeladaUpdateToOneWithWhereWithoutPlayersInput, PeladaUpdateWithoutPlayersInput>, PeladaUncheckedUpdateWithoutPlayersInput>
  }

  export type GroupMemberUpdateOneRequiredWithoutPeladaPlayersNestedInput = {
    create?: XOR<GroupMemberCreateWithoutPeladaPlayersInput, GroupMemberUncheckedCreateWithoutPeladaPlayersInput>
    connectOrCreate?: GroupMemberCreateOrConnectWithoutPeladaPlayersInput
    upsert?: GroupMemberUpsertWithoutPeladaPlayersInput
    connect?: GroupMemberWhereUniqueInput
    update?: XOR<XOR<GroupMemberUpdateToOneWithWhereWithoutPeladaPlayersInput, GroupMemberUpdateWithoutPeladaPlayersInput>, GroupMemberUncheckedUpdateWithoutPeladaPlayersInput>
  }

  export type PeladaQueueEntryUpdateOneWithoutPeladaPlayerNestedInput = {
    create?: XOR<PeladaQueueEntryCreateWithoutPeladaPlayerInput, PeladaQueueEntryUncheckedCreateWithoutPeladaPlayerInput>
    connectOrCreate?: PeladaQueueEntryCreateOrConnectWithoutPeladaPlayerInput
    upsert?: PeladaQueueEntryUpsertWithoutPeladaPlayerInput
    disconnect?: PeladaQueueEntryWhereInput | boolean
    delete?: PeladaQueueEntryWhereInput | boolean
    connect?: PeladaQueueEntryWhereUniqueInput
    update?: XOR<XOR<PeladaQueueEntryUpdateToOneWithWhereWithoutPeladaPlayerInput, PeladaQueueEntryUpdateWithoutPeladaPlayerInput>, PeladaQueueEntryUncheckedUpdateWithoutPeladaPlayerInput>
  }

  export type MatchPlayerUpdateManyWithoutPeladaPlayerNestedInput = {
    create?: XOR<MatchPlayerCreateWithoutPeladaPlayerInput, MatchPlayerUncheckedCreateWithoutPeladaPlayerInput> | MatchPlayerCreateWithoutPeladaPlayerInput[] | MatchPlayerUncheckedCreateWithoutPeladaPlayerInput[]
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutPeladaPlayerInput | MatchPlayerCreateOrConnectWithoutPeladaPlayerInput[]
    upsert?: MatchPlayerUpsertWithWhereUniqueWithoutPeladaPlayerInput | MatchPlayerUpsertWithWhereUniqueWithoutPeladaPlayerInput[]
    createMany?: MatchPlayerCreateManyPeladaPlayerInputEnvelope
    set?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    disconnect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    delete?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    connect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    update?: MatchPlayerUpdateWithWhereUniqueWithoutPeladaPlayerInput | MatchPlayerUpdateWithWhereUniqueWithoutPeladaPlayerInput[]
    updateMany?: MatchPlayerUpdateManyWithWhereWithoutPeladaPlayerInput | MatchPlayerUpdateManyWithWhereWithoutPeladaPlayerInput[]
    deleteMany?: MatchPlayerScalarWhereInput | MatchPlayerScalarWhereInput[]
  }

  export type PeladaQueueEntryUncheckedUpdateOneWithoutPeladaPlayerNestedInput = {
    create?: XOR<PeladaQueueEntryCreateWithoutPeladaPlayerInput, PeladaQueueEntryUncheckedCreateWithoutPeladaPlayerInput>
    connectOrCreate?: PeladaQueueEntryCreateOrConnectWithoutPeladaPlayerInput
    upsert?: PeladaQueueEntryUpsertWithoutPeladaPlayerInput
    disconnect?: PeladaQueueEntryWhereInput | boolean
    delete?: PeladaQueueEntryWhereInput | boolean
    connect?: PeladaQueueEntryWhereUniqueInput
    update?: XOR<XOR<PeladaQueueEntryUpdateToOneWithWhereWithoutPeladaPlayerInput, PeladaQueueEntryUpdateWithoutPeladaPlayerInput>, PeladaQueueEntryUncheckedUpdateWithoutPeladaPlayerInput>
  }

  export type MatchPlayerUncheckedUpdateManyWithoutPeladaPlayerNestedInput = {
    create?: XOR<MatchPlayerCreateWithoutPeladaPlayerInput, MatchPlayerUncheckedCreateWithoutPeladaPlayerInput> | MatchPlayerCreateWithoutPeladaPlayerInput[] | MatchPlayerUncheckedCreateWithoutPeladaPlayerInput[]
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutPeladaPlayerInput | MatchPlayerCreateOrConnectWithoutPeladaPlayerInput[]
    upsert?: MatchPlayerUpsertWithWhereUniqueWithoutPeladaPlayerInput | MatchPlayerUpsertWithWhereUniqueWithoutPeladaPlayerInput[]
    createMany?: MatchPlayerCreateManyPeladaPlayerInputEnvelope
    set?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    disconnect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    delete?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    connect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    update?: MatchPlayerUpdateWithWhereUniqueWithoutPeladaPlayerInput | MatchPlayerUpdateWithWhereUniqueWithoutPeladaPlayerInput[]
    updateMany?: MatchPlayerUpdateManyWithWhereWithoutPeladaPlayerInput | MatchPlayerUpdateManyWithWhereWithoutPeladaPlayerInput[]
    deleteMany?: MatchPlayerScalarWhereInput | MatchPlayerScalarWhereInput[]
  }

  export type PeladaCreateNestedOneWithoutQueueEntriesInput = {
    create?: XOR<PeladaCreateWithoutQueueEntriesInput, PeladaUncheckedCreateWithoutQueueEntriesInput>
    connectOrCreate?: PeladaCreateOrConnectWithoutQueueEntriesInput
    connect?: PeladaWhereUniqueInput
  }

  export type PeladaPlayerCreateNestedOneWithoutQueueEntryInput = {
    create?: XOR<PeladaPlayerCreateWithoutQueueEntryInput, PeladaPlayerUncheckedCreateWithoutQueueEntryInput>
    connectOrCreate?: PeladaPlayerCreateOrConnectWithoutQueueEntryInput
    connect?: PeladaPlayerWhereUniqueInput
  }

  export type PeladaUpdateOneRequiredWithoutQueueEntriesNestedInput = {
    create?: XOR<PeladaCreateWithoutQueueEntriesInput, PeladaUncheckedCreateWithoutQueueEntriesInput>
    connectOrCreate?: PeladaCreateOrConnectWithoutQueueEntriesInput
    upsert?: PeladaUpsertWithoutQueueEntriesInput
    connect?: PeladaWhereUniqueInput
    update?: XOR<XOR<PeladaUpdateToOneWithWhereWithoutQueueEntriesInput, PeladaUpdateWithoutQueueEntriesInput>, PeladaUncheckedUpdateWithoutQueueEntriesInput>
  }

  export type PeladaPlayerUpdateOneRequiredWithoutQueueEntryNestedInput = {
    create?: XOR<PeladaPlayerCreateWithoutQueueEntryInput, PeladaPlayerUncheckedCreateWithoutQueueEntryInput>
    connectOrCreate?: PeladaPlayerCreateOrConnectWithoutQueueEntryInput
    upsert?: PeladaPlayerUpsertWithoutQueueEntryInput
    connect?: PeladaPlayerWhereUniqueInput
    update?: XOR<XOR<PeladaPlayerUpdateToOneWithWhereWithoutQueueEntryInput, PeladaPlayerUpdateWithoutQueueEntryInput>, PeladaPlayerUncheckedUpdateWithoutQueueEntryInput>
  }

  export type PeladaCreateNestedOneWithoutMatchesInput = {
    create?: XOR<PeladaCreateWithoutMatchesInput, PeladaUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: PeladaCreateOrConnectWithoutMatchesInput
    connect?: PeladaWhereUniqueInput
  }

  export type MatchPlayerCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchPlayerCreateWithoutMatchInput, MatchPlayerUncheckedCreateWithoutMatchInput> | MatchPlayerCreateWithoutMatchInput[] | MatchPlayerUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutMatchInput | MatchPlayerCreateOrConnectWithoutMatchInput[]
    createMany?: MatchPlayerCreateManyMatchInputEnvelope
    connect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
  }

  export type MatchPlayerUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchPlayerCreateWithoutMatchInput, MatchPlayerUncheckedCreateWithoutMatchInput> | MatchPlayerCreateWithoutMatchInput[] | MatchPlayerUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutMatchInput | MatchPlayerCreateOrConnectWithoutMatchInput[]
    createMany?: MatchPlayerCreateManyMatchInputEnvelope
    connect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
  }

  export type EnumMatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PeladaUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<PeladaCreateWithoutMatchesInput, PeladaUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: PeladaCreateOrConnectWithoutMatchesInput
    upsert?: PeladaUpsertWithoutMatchesInput
    connect?: PeladaWhereUniqueInput
    update?: XOR<XOR<PeladaUpdateToOneWithWhereWithoutMatchesInput, PeladaUpdateWithoutMatchesInput>, PeladaUncheckedUpdateWithoutMatchesInput>
  }

  export type MatchPlayerUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchPlayerCreateWithoutMatchInput, MatchPlayerUncheckedCreateWithoutMatchInput> | MatchPlayerCreateWithoutMatchInput[] | MatchPlayerUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutMatchInput | MatchPlayerCreateOrConnectWithoutMatchInput[]
    upsert?: MatchPlayerUpsertWithWhereUniqueWithoutMatchInput | MatchPlayerUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchPlayerCreateManyMatchInputEnvelope
    set?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    disconnect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    delete?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    connect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    update?: MatchPlayerUpdateWithWhereUniqueWithoutMatchInput | MatchPlayerUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchPlayerUpdateManyWithWhereWithoutMatchInput | MatchPlayerUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchPlayerScalarWhereInput | MatchPlayerScalarWhereInput[]
  }

  export type MatchPlayerUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchPlayerCreateWithoutMatchInput, MatchPlayerUncheckedCreateWithoutMatchInput> | MatchPlayerCreateWithoutMatchInput[] | MatchPlayerUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutMatchInput | MatchPlayerCreateOrConnectWithoutMatchInput[]
    upsert?: MatchPlayerUpsertWithWhereUniqueWithoutMatchInput | MatchPlayerUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchPlayerCreateManyMatchInputEnvelope
    set?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    disconnect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    delete?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    connect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    update?: MatchPlayerUpdateWithWhereUniqueWithoutMatchInput | MatchPlayerUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchPlayerUpdateManyWithWhereWithoutMatchInput | MatchPlayerUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchPlayerScalarWhereInput | MatchPlayerScalarWhereInput[]
  }

  export type MatchCreateNestedOneWithoutPlayersInput = {
    create?: XOR<MatchCreateWithoutPlayersInput, MatchUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: MatchCreateOrConnectWithoutPlayersInput
    connect?: MatchWhereUniqueInput
  }

  export type PeladaPlayerCreateNestedOneWithoutMatchPlayersInput = {
    create?: XOR<PeladaPlayerCreateWithoutMatchPlayersInput, PeladaPlayerUncheckedCreateWithoutMatchPlayersInput>
    connectOrCreate?: PeladaPlayerCreateOrConnectWithoutMatchPlayersInput
    connect?: PeladaPlayerWhereUniqueInput
  }

  export type EnumMatchTeamFieldUpdateOperationsInput = {
    set?: $Enums.MatchTeam
  }

  export type MatchUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<MatchCreateWithoutPlayersInput, MatchUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: MatchCreateOrConnectWithoutPlayersInput
    upsert?: MatchUpsertWithoutPlayersInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutPlayersInput, MatchUpdateWithoutPlayersInput>, MatchUncheckedUpdateWithoutPlayersInput>
  }

  export type PeladaPlayerUpdateOneRequiredWithoutMatchPlayersNestedInput = {
    create?: XOR<PeladaPlayerCreateWithoutMatchPlayersInput, PeladaPlayerUncheckedCreateWithoutMatchPlayersInput>
    connectOrCreate?: PeladaPlayerCreateOrConnectWithoutMatchPlayersInput
    upsert?: PeladaPlayerUpsertWithoutMatchPlayersInput
    connect?: PeladaPlayerWhereUniqueInput
    update?: XOR<XOR<PeladaPlayerUpdateToOneWithWhereWithoutMatchPlayersInput, PeladaPlayerUpdateWithoutMatchPlayersInput>, PeladaPlayerUncheckedUpdateWithoutMatchPlayersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGroupMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupMemberRole | EnumGroupMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GroupMemberRole[] | ListEnumGroupMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupMemberRole[] | ListEnumGroupMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupMemberRoleFilter<$PrismaModel> | $Enums.GroupMemberRole
  }

  export type NestedEnumGroupMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupMemberRole | EnumGroupMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GroupMemberRole[] | ListEnumGroupMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupMemberRole[] | ListEnumGroupMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.GroupMemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumGroupMemberRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPeladaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PeladaStatus | EnumPeladaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PeladaStatus[] | ListEnumPeladaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeladaStatus[] | ListEnumPeladaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPeladaStatusFilter<$PrismaModel> | $Enums.PeladaStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPeladaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeladaStatus | EnumPeladaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PeladaStatus[] | ListEnumPeladaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeladaStatus[] | ListEnumPeladaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPeladaStatusWithAggregatesFilter<$PrismaModel> | $Enums.PeladaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeladaStatusFilter<$PrismaModel>
    _max?: NestedEnumPeladaStatusFilter<$PrismaModel>
  }

  export type NestedEnumPeladaPlayerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PeladaPlayerStatus | EnumPeladaPlayerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PeladaPlayerStatus[] | ListEnumPeladaPlayerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeladaPlayerStatus[] | ListEnumPeladaPlayerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPeladaPlayerStatusFilter<$PrismaModel> | $Enums.PeladaPlayerStatus
  }

  export type NestedEnumPeladaPlayerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeladaPlayerStatus | EnumPeladaPlayerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PeladaPlayerStatus[] | ListEnumPeladaPlayerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeladaPlayerStatus[] | ListEnumPeladaPlayerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPeladaPlayerStatusWithAggregatesFilter<$PrismaModel> | $Enums.PeladaPlayerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeladaPlayerStatusFilter<$PrismaModel>
    _max?: NestedEnumPeladaPlayerStatusFilter<$PrismaModel>
  }

  export type NestedEnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMatchTeamFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchTeam | EnumMatchTeamFieldRefInput<$PrismaModel>
    in?: $Enums.MatchTeam[] | ListEnumMatchTeamFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchTeam[] | ListEnumMatchTeamFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTeamFilter<$PrismaModel> | $Enums.MatchTeam
  }

  export type NestedEnumMatchTeamWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchTeam | EnumMatchTeamFieldRefInput<$PrismaModel>
    in?: $Enums.MatchTeam[] | ListEnumMatchTeamFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchTeam[] | ListEnumMatchTeamFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchTeamWithAggregatesFilter<$PrismaModel> | $Enums.MatchTeam
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchTeamFilter<$PrismaModel>
    _max?: NestedEnumMatchTeamFilter<$PrismaModel>
  }

  export type GroupCreateWithoutOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    peladas?: PeladaCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    peladas?: PeladaUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput>
  }

  export type GroupCreateManyOwnerInputEnvelope = {
    data: GroupCreateManyOwnerInput | GroupCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.GroupMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutMembersInput
    peladaPlayers?: PeladaPlayerCreateNestedManyWithoutGroupMemberInput
  }

  export type GroupMemberUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    role?: $Enums.GroupMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    peladaPlayers?: PeladaPlayerUncheckedCreateNestedManyWithoutGroupMemberInput
  }

  export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateManyUserInputEnvelope = {
    data: GroupMemberCreateManyUserInput | GroupMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithWhereUniqueWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutOwnerInput, GroupUncheckedUpdateWithoutOwnerInput>
    create: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutOwnerInput, GroupUncheckedUpdateWithoutOwnerInput>
  }

  export type GroupUpdateManyWithWhereWithoutOwnerInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutOwnerInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    ownerId?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    role?: EnumGroupMemberRoleFilter<"GroupMember"> | $Enums.GroupMemberRole
    createdAt?: DateTimeFilter<"GroupMember"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMember"> | Date | string
  }

  export type UserCreateWithoutOwnedGroupsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    nickname: string
    email?: string | null
    passwordHash?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: GroupMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedGroupsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    nickname: string
    email?: string | null
    passwordHash?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
  }

  export type GroupMemberCreateWithoutGroupInput = {
    id?: string
    role?: $Enums.GroupMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
    peladaPlayers?: PeladaPlayerCreateNestedManyWithoutGroupMemberInput
  }

  export type GroupMemberUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    role?: $Enums.GroupMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    peladaPlayers?: PeladaPlayerUncheckedCreateNestedManyWithoutGroupMemberInput
  }

  export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberCreateManyGroupInputEnvelope = {
    data: GroupMemberCreateManyGroupInput | GroupMemberCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type PeladaCreateWithoutGroupInput = {
    id?: string
    name: string
    date?: Date | string | null
    playersPerTeam?: number
    status?: $Enums.PeladaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PeladaPlayerCreateNestedManyWithoutPeladaInput
    queueEntries?: PeladaQueueEntryCreateNestedManyWithoutPeladaInput
    matches?: MatchCreateNestedManyWithoutPeladaInput
  }

  export type PeladaUncheckedCreateWithoutGroupInput = {
    id?: string
    name: string
    date?: Date | string | null
    playersPerTeam?: number
    status?: $Enums.PeladaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PeladaPlayerUncheckedCreateNestedManyWithoutPeladaInput
    queueEntries?: PeladaQueueEntryUncheckedCreateNestedManyWithoutPeladaInput
    matches?: MatchUncheckedCreateNestedManyWithoutPeladaInput
  }

  export type PeladaCreateOrConnectWithoutGroupInput = {
    where: PeladaWhereUniqueInput
    create: XOR<PeladaCreateWithoutGroupInput, PeladaUncheckedCreateWithoutGroupInput>
  }

  export type PeladaCreateManyGroupInputEnvelope = {
    data: PeladaCreateManyGroupInput | PeladaCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedGroupsInput = {
    update: XOR<UserUpdateWithoutOwnedGroupsInput, UserUncheckedUpdateWithoutOwnedGroupsInput>
    create: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedGroupsInput, UserUncheckedUpdateWithoutOwnedGroupsInput>
  }

  export type UserUpdateWithoutOwnedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: GroupMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupInput>
  }

  export type PeladaUpsertWithWhereUniqueWithoutGroupInput = {
    where: PeladaWhereUniqueInput
    update: XOR<PeladaUpdateWithoutGroupInput, PeladaUncheckedUpdateWithoutGroupInput>
    create: XOR<PeladaCreateWithoutGroupInput, PeladaUncheckedCreateWithoutGroupInput>
  }

  export type PeladaUpdateWithWhereUniqueWithoutGroupInput = {
    where: PeladaWhereUniqueInput
    data: XOR<PeladaUpdateWithoutGroupInput, PeladaUncheckedUpdateWithoutGroupInput>
  }

  export type PeladaUpdateManyWithWhereWithoutGroupInput = {
    where: PeladaScalarWhereInput
    data: XOR<PeladaUpdateManyMutationInput, PeladaUncheckedUpdateManyWithoutGroupInput>
  }

  export type PeladaScalarWhereInput = {
    AND?: PeladaScalarWhereInput | PeladaScalarWhereInput[]
    OR?: PeladaScalarWhereInput[]
    NOT?: PeladaScalarWhereInput | PeladaScalarWhereInput[]
    id?: StringFilter<"Pelada"> | string
    groupId?: StringFilter<"Pelada"> | string
    name?: StringFilter<"Pelada"> | string
    date?: DateTimeNullableFilter<"Pelada"> | Date | string | null
    playersPerTeam?: IntFilter<"Pelada"> | number
    status?: EnumPeladaStatusFilter<"Pelada"> | $Enums.PeladaStatus
    createdAt?: DateTimeFilter<"Pelada"> | Date | string
    updatedAt?: DateTimeFilter<"Pelada"> | Date | string
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    peladas?: PeladaCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    peladas?: PeladaUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    nickname: string
    email?: string | null
    passwordHash?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    nickname: string
    email?: string | null
    passwordHash?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type PeladaPlayerCreateWithoutGroupMemberInput = {
    id?: string
    status?: $Enums.PeladaPlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    pelada: PeladaCreateNestedOneWithoutPlayersInput
    queueEntry?: PeladaQueueEntryCreateNestedOneWithoutPeladaPlayerInput
    matchPlayers?: MatchPlayerCreateNestedManyWithoutPeladaPlayerInput
  }

  export type PeladaPlayerUncheckedCreateWithoutGroupMemberInput = {
    id?: string
    peladaId: string
    status?: $Enums.PeladaPlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    queueEntry?: PeladaQueueEntryUncheckedCreateNestedOneWithoutPeladaPlayerInput
    matchPlayers?: MatchPlayerUncheckedCreateNestedManyWithoutPeladaPlayerInput
  }

  export type PeladaPlayerCreateOrConnectWithoutGroupMemberInput = {
    where: PeladaPlayerWhereUniqueInput
    create: XOR<PeladaPlayerCreateWithoutGroupMemberInput, PeladaPlayerUncheckedCreateWithoutGroupMemberInput>
  }

  export type PeladaPlayerCreateManyGroupMemberInputEnvelope = {
    data: PeladaPlayerCreateManyGroupMemberInput | PeladaPlayerCreateManyGroupMemberInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    peladas?: PeladaUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peladas?: PeladaUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type PeladaPlayerUpsertWithWhereUniqueWithoutGroupMemberInput = {
    where: PeladaPlayerWhereUniqueInput
    update: XOR<PeladaPlayerUpdateWithoutGroupMemberInput, PeladaPlayerUncheckedUpdateWithoutGroupMemberInput>
    create: XOR<PeladaPlayerCreateWithoutGroupMemberInput, PeladaPlayerUncheckedCreateWithoutGroupMemberInput>
  }

  export type PeladaPlayerUpdateWithWhereUniqueWithoutGroupMemberInput = {
    where: PeladaPlayerWhereUniqueInput
    data: XOR<PeladaPlayerUpdateWithoutGroupMemberInput, PeladaPlayerUncheckedUpdateWithoutGroupMemberInput>
  }

  export type PeladaPlayerUpdateManyWithWhereWithoutGroupMemberInput = {
    where: PeladaPlayerScalarWhereInput
    data: XOR<PeladaPlayerUpdateManyMutationInput, PeladaPlayerUncheckedUpdateManyWithoutGroupMemberInput>
  }

  export type PeladaPlayerScalarWhereInput = {
    AND?: PeladaPlayerScalarWhereInput | PeladaPlayerScalarWhereInput[]
    OR?: PeladaPlayerScalarWhereInput[]
    NOT?: PeladaPlayerScalarWhereInput | PeladaPlayerScalarWhereInput[]
    id?: StringFilter<"PeladaPlayer"> | string
    peladaId?: StringFilter<"PeladaPlayer"> | string
    groupMemberId?: StringFilter<"PeladaPlayer"> | string
    status?: EnumPeladaPlayerStatusFilter<"PeladaPlayer"> | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFilter<"PeladaPlayer"> | Date | string
    updatedAt?: DateTimeFilter<"PeladaPlayer"> | Date | string
  }

  export type GroupCreateWithoutPeladasInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutPeladasInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutPeladasInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutPeladasInput, GroupUncheckedCreateWithoutPeladasInput>
  }

  export type PeladaPlayerCreateWithoutPeladaInput = {
    id?: string
    status?: $Enums.PeladaPlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMember: GroupMemberCreateNestedOneWithoutPeladaPlayersInput
    queueEntry?: PeladaQueueEntryCreateNestedOneWithoutPeladaPlayerInput
    matchPlayers?: MatchPlayerCreateNestedManyWithoutPeladaPlayerInput
  }

  export type PeladaPlayerUncheckedCreateWithoutPeladaInput = {
    id?: string
    groupMemberId: string
    status?: $Enums.PeladaPlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    queueEntry?: PeladaQueueEntryUncheckedCreateNestedOneWithoutPeladaPlayerInput
    matchPlayers?: MatchPlayerUncheckedCreateNestedManyWithoutPeladaPlayerInput
  }

  export type PeladaPlayerCreateOrConnectWithoutPeladaInput = {
    where: PeladaPlayerWhereUniqueInput
    create: XOR<PeladaPlayerCreateWithoutPeladaInput, PeladaPlayerUncheckedCreateWithoutPeladaInput>
  }

  export type PeladaPlayerCreateManyPeladaInputEnvelope = {
    data: PeladaPlayerCreateManyPeladaInput | PeladaPlayerCreateManyPeladaInput[]
    skipDuplicates?: boolean
  }

  export type PeladaQueueEntryCreateWithoutPeladaInput = {
    id?: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    peladaPlayer: PeladaPlayerCreateNestedOneWithoutQueueEntryInput
  }

  export type PeladaQueueEntryUncheckedCreateWithoutPeladaInput = {
    id?: string
    peladaPlayerId: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeladaQueueEntryCreateOrConnectWithoutPeladaInput = {
    where: PeladaQueueEntryWhereUniqueInput
    create: XOR<PeladaQueueEntryCreateWithoutPeladaInput, PeladaQueueEntryUncheckedCreateWithoutPeladaInput>
  }

  export type PeladaQueueEntryCreateManyPeladaInputEnvelope = {
    data: PeladaQueueEntryCreateManyPeladaInput | PeladaQueueEntryCreateManyPeladaInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutPeladaInput = {
    id?: string
    sequence: number
    status?: $Enums.MatchStatus
    startedAt?: Date | string
    finishedAt?: Date | string | null
    teamAScore?: number | null
    teamBScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: MatchPlayerCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutPeladaInput = {
    id?: string
    sequence: number
    status?: $Enums.MatchStatus
    startedAt?: Date | string
    finishedAt?: Date | string | null
    teamAScore?: number | null
    teamBScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: MatchPlayerUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutPeladaInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPeladaInput, MatchUncheckedCreateWithoutPeladaInput>
  }

  export type MatchCreateManyPeladaInputEnvelope = {
    data: MatchCreateManyPeladaInput | MatchCreateManyPeladaInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutPeladasInput = {
    update: XOR<GroupUpdateWithoutPeladasInput, GroupUncheckedUpdateWithoutPeladasInput>
    create: XOR<GroupCreateWithoutPeladasInput, GroupUncheckedCreateWithoutPeladasInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutPeladasInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutPeladasInput, GroupUncheckedUpdateWithoutPeladasInput>
  }

  export type GroupUpdateWithoutPeladasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutPeladasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type PeladaPlayerUpsertWithWhereUniqueWithoutPeladaInput = {
    where: PeladaPlayerWhereUniqueInput
    update: XOR<PeladaPlayerUpdateWithoutPeladaInput, PeladaPlayerUncheckedUpdateWithoutPeladaInput>
    create: XOR<PeladaPlayerCreateWithoutPeladaInput, PeladaPlayerUncheckedCreateWithoutPeladaInput>
  }

  export type PeladaPlayerUpdateWithWhereUniqueWithoutPeladaInput = {
    where: PeladaPlayerWhereUniqueInput
    data: XOR<PeladaPlayerUpdateWithoutPeladaInput, PeladaPlayerUncheckedUpdateWithoutPeladaInput>
  }

  export type PeladaPlayerUpdateManyWithWhereWithoutPeladaInput = {
    where: PeladaPlayerScalarWhereInput
    data: XOR<PeladaPlayerUpdateManyMutationInput, PeladaPlayerUncheckedUpdateManyWithoutPeladaInput>
  }

  export type PeladaQueueEntryUpsertWithWhereUniqueWithoutPeladaInput = {
    where: PeladaQueueEntryWhereUniqueInput
    update: XOR<PeladaQueueEntryUpdateWithoutPeladaInput, PeladaQueueEntryUncheckedUpdateWithoutPeladaInput>
    create: XOR<PeladaQueueEntryCreateWithoutPeladaInput, PeladaQueueEntryUncheckedCreateWithoutPeladaInput>
  }

  export type PeladaQueueEntryUpdateWithWhereUniqueWithoutPeladaInput = {
    where: PeladaQueueEntryWhereUniqueInput
    data: XOR<PeladaQueueEntryUpdateWithoutPeladaInput, PeladaQueueEntryUncheckedUpdateWithoutPeladaInput>
  }

  export type PeladaQueueEntryUpdateManyWithWhereWithoutPeladaInput = {
    where: PeladaQueueEntryScalarWhereInput
    data: XOR<PeladaQueueEntryUpdateManyMutationInput, PeladaQueueEntryUncheckedUpdateManyWithoutPeladaInput>
  }

  export type PeladaQueueEntryScalarWhereInput = {
    AND?: PeladaQueueEntryScalarWhereInput | PeladaQueueEntryScalarWhereInput[]
    OR?: PeladaQueueEntryScalarWhereInput[]
    NOT?: PeladaQueueEntryScalarWhereInput | PeladaQueueEntryScalarWhereInput[]
    id?: StringFilter<"PeladaQueueEntry"> | string
    peladaId?: StringFilter<"PeladaQueueEntry"> | string
    peladaPlayerId?: StringFilter<"PeladaQueueEntry"> | string
    position?: IntFilter<"PeladaQueueEntry"> | number
    createdAt?: DateTimeFilter<"PeladaQueueEntry"> | Date | string
    updatedAt?: DateTimeFilter<"PeladaQueueEntry"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutPeladaInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutPeladaInput, MatchUncheckedUpdateWithoutPeladaInput>
    create: XOR<MatchCreateWithoutPeladaInput, MatchUncheckedCreateWithoutPeladaInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutPeladaInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutPeladaInput, MatchUncheckedUpdateWithoutPeladaInput>
  }

  export type MatchUpdateManyWithWhereWithoutPeladaInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutPeladaInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    peladaId?: StringFilter<"Match"> | string
    sequence?: IntFilter<"Match"> | number
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    startedAt?: DateTimeFilter<"Match"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    teamAScore?: IntNullableFilter<"Match"> | number | null
    teamBScore?: IntNullableFilter<"Match"> | number | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type PeladaCreateWithoutPlayersInput = {
    id?: string
    name: string
    date?: Date | string | null
    playersPerTeam?: number
    status?: $Enums.PeladaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutPeladasInput
    queueEntries?: PeladaQueueEntryCreateNestedManyWithoutPeladaInput
    matches?: MatchCreateNestedManyWithoutPeladaInput
  }

  export type PeladaUncheckedCreateWithoutPlayersInput = {
    id?: string
    groupId: string
    name: string
    date?: Date | string | null
    playersPerTeam?: number
    status?: $Enums.PeladaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    queueEntries?: PeladaQueueEntryUncheckedCreateNestedManyWithoutPeladaInput
    matches?: MatchUncheckedCreateNestedManyWithoutPeladaInput
  }

  export type PeladaCreateOrConnectWithoutPlayersInput = {
    where: PeladaWhereUniqueInput
    create: XOR<PeladaCreateWithoutPlayersInput, PeladaUncheckedCreateWithoutPlayersInput>
  }

  export type GroupMemberCreateWithoutPeladaPlayersInput = {
    id?: string
    role?: $Enums.GroupMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type GroupMemberUncheckedCreateWithoutPeladaPlayersInput = {
    id?: string
    groupId: string
    userId: string
    role?: $Enums.GroupMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutPeladaPlayersInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutPeladaPlayersInput, GroupMemberUncheckedCreateWithoutPeladaPlayersInput>
  }

  export type PeladaQueueEntryCreateWithoutPeladaPlayerInput = {
    id?: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pelada: PeladaCreateNestedOneWithoutQueueEntriesInput
  }

  export type PeladaQueueEntryUncheckedCreateWithoutPeladaPlayerInput = {
    id?: string
    peladaId: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeladaQueueEntryCreateOrConnectWithoutPeladaPlayerInput = {
    where: PeladaQueueEntryWhereUniqueInput
    create: XOR<PeladaQueueEntryCreateWithoutPeladaPlayerInput, PeladaQueueEntryUncheckedCreateWithoutPeladaPlayerInput>
  }

  export type MatchPlayerCreateWithoutPeladaPlayerInput = {
    id?: string
    team: $Enums.MatchTeam
    createdAt?: Date | string
    match: MatchCreateNestedOneWithoutPlayersInput
  }

  export type MatchPlayerUncheckedCreateWithoutPeladaPlayerInput = {
    id?: string
    matchId: string
    team: $Enums.MatchTeam
    createdAt?: Date | string
  }

  export type MatchPlayerCreateOrConnectWithoutPeladaPlayerInput = {
    where: MatchPlayerWhereUniqueInput
    create: XOR<MatchPlayerCreateWithoutPeladaPlayerInput, MatchPlayerUncheckedCreateWithoutPeladaPlayerInput>
  }

  export type MatchPlayerCreateManyPeladaPlayerInputEnvelope = {
    data: MatchPlayerCreateManyPeladaPlayerInput | MatchPlayerCreateManyPeladaPlayerInput[]
    skipDuplicates?: boolean
  }

  export type PeladaUpsertWithoutPlayersInput = {
    update: XOR<PeladaUpdateWithoutPlayersInput, PeladaUncheckedUpdateWithoutPlayersInput>
    create: XOR<PeladaCreateWithoutPlayersInput, PeladaUncheckedCreateWithoutPlayersInput>
    where?: PeladaWhereInput
  }

  export type PeladaUpdateToOneWithWhereWithoutPlayersInput = {
    where?: PeladaWhereInput
    data: XOR<PeladaUpdateWithoutPlayersInput, PeladaUncheckedUpdateWithoutPlayersInput>
  }

  export type PeladaUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playersPerTeam?: IntFieldUpdateOperationsInput | number
    status?: EnumPeladaStatusFieldUpdateOperationsInput | $Enums.PeladaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutPeladasNestedInput
    queueEntries?: PeladaQueueEntryUpdateManyWithoutPeladaNestedInput
    matches?: MatchUpdateManyWithoutPeladaNestedInput
  }

  export type PeladaUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playersPerTeam?: IntFieldUpdateOperationsInput | number
    status?: EnumPeladaStatusFieldUpdateOperationsInput | $Enums.PeladaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queueEntries?: PeladaQueueEntryUncheckedUpdateManyWithoutPeladaNestedInput
    matches?: MatchUncheckedUpdateManyWithoutPeladaNestedInput
  }

  export type GroupMemberUpsertWithoutPeladaPlayersInput = {
    update: XOR<GroupMemberUpdateWithoutPeladaPlayersInput, GroupMemberUncheckedUpdateWithoutPeladaPlayersInput>
    create: XOR<GroupMemberCreateWithoutPeladaPlayersInput, GroupMemberUncheckedCreateWithoutPeladaPlayersInput>
    where?: GroupMemberWhereInput
  }

  export type GroupMemberUpdateToOneWithWhereWithoutPeladaPlayersInput = {
    where?: GroupMemberWhereInput
    data: XOR<GroupMemberUpdateWithoutPeladaPlayersInput, GroupMemberUncheckedUpdateWithoutPeladaPlayersInput>
  }

  export type GroupMemberUpdateWithoutPeladaPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupMemberRoleFieldUpdateOperationsInput | $Enums.GroupMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutPeladaPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupMemberRoleFieldUpdateOperationsInput | $Enums.GroupMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeladaQueueEntryUpsertWithoutPeladaPlayerInput = {
    update: XOR<PeladaQueueEntryUpdateWithoutPeladaPlayerInput, PeladaQueueEntryUncheckedUpdateWithoutPeladaPlayerInput>
    create: XOR<PeladaQueueEntryCreateWithoutPeladaPlayerInput, PeladaQueueEntryUncheckedCreateWithoutPeladaPlayerInput>
    where?: PeladaQueueEntryWhereInput
  }

  export type PeladaQueueEntryUpdateToOneWithWhereWithoutPeladaPlayerInput = {
    where?: PeladaQueueEntryWhereInput
    data: XOR<PeladaQueueEntryUpdateWithoutPeladaPlayerInput, PeladaQueueEntryUncheckedUpdateWithoutPeladaPlayerInput>
  }

  export type PeladaQueueEntryUpdateWithoutPeladaPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pelada?: PeladaUpdateOneRequiredWithoutQueueEntriesNestedInput
  }

  export type PeladaQueueEntryUncheckedUpdateWithoutPeladaPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchPlayerUpsertWithWhereUniqueWithoutPeladaPlayerInput = {
    where: MatchPlayerWhereUniqueInput
    update: XOR<MatchPlayerUpdateWithoutPeladaPlayerInput, MatchPlayerUncheckedUpdateWithoutPeladaPlayerInput>
    create: XOR<MatchPlayerCreateWithoutPeladaPlayerInput, MatchPlayerUncheckedCreateWithoutPeladaPlayerInput>
  }

  export type MatchPlayerUpdateWithWhereUniqueWithoutPeladaPlayerInput = {
    where: MatchPlayerWhereUniqueInput
    data: XOR<MatchPlayerUpdateWithoutPeladaPlayerInput, MatchPlayerUncheckedUpdateWithoutPeladaPlayerInput>
  }

  export type MatchPlayerUpdateManyWithWhereWithoutPeladaPlayerInput = {
    where: MatchPlayerScalarWhereInput
    data: XOR<MatchPlayerUpdateManyMutationInput, MatchPlayerUncheckedUpdateManyWithoutPeladaPlayerInput>
  }

  export type MatchPlayerScalarWhereInput = {
    AND?: MatchPlayerScalarWhereInput | MatchPlayerScalarWhereInput[]
    OR?: MatchPlayerScalarWhereInput[]
    NOT?: MatchPlayerScalarWhereInput | MatchPlayerScalarWhereInput[]
    id?: StringFilter<"MatchPlayer"> | string
    matchId?: StringFilter<"MatchPlayer"> | string
    peladaPlayerId?: StringFilter<"MatchPlayer"> | string
    team?: EnumMatchTeamFilter<"MatchPlayer"> | $Enums.MatchTeam
    createdAt?: DateTimeFilter<"MatchPlayer"> | Date | string
  }

  export type PeladaCreateWithoutQueueEntriesInput = {
    id?: string
    name: string
    date?: Date | string | null
    playersPerTeam?: number
    status?: $Enums.PeladaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutPeladasInput
    players?: PeladaPlayerCreateNestedManyWithoutPeladaInput
    matches?: MatchCreateNestedManyWithoutPeladaInput
  }

  export type PeladaUncheckedCreateWithoutQueueEntriesInput = {
    id?: string
    groupId: string
    name: string
    date?: Date | string | null
    playersPerTeam?: number
    status?: $Enums.PeladaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PeladaPlayerUncheckedCreateNestedManyWithoutPeladaInput
    matches?: MatchUncheckedCreateNestedManyWithoutPeladaInput
  }

  export type PeladaCreateOrConnectWithoutQueueEntriesInput = {
    where: PeladaWhereUniqueInput
    create: XOR<PeladaCreateWithoutQueueEntriesInput, PeladaUncheckedCreateWithoutQueueEntriesInput>
  }

  export type PeladaPlayerCreateWithoutQueueEntryInput = {
    id?: string
    status?: $Enums.PeladaPlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    pelada: PeladaCreateNestedOneWithoutPlayersInput
    groupMember: GroupMemberCreateNestedOneWithoutPeladaPlayersInput
    matchPlayers?: MatchPlayerCreateNestedManyWithoutPeladaPlayerInput
  }

  export type PeladaPlayerUncheckedCreateWithoutQueueEntryInput = {
    id?: string
    peladaId: string
    groupMemberId: string
    status?: $Enums.PeladaPlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    matchPlayers?: MatchPlayerUncheckedCreateNestedManyWithoutPeladaPlayerInput
  }

  export type PeladaPlayerCreateOrConnectWithoutQueueEntryInput = {
    where: PeladaPlayerWhereUniqueInput
    create: XOR<PeladaPlayerCreateWithoutQueueEntryInput, PeladaPlayerUncheckedCreateWithoutQueueEntryInput>
  }

  export type PeladaUpsertWithoutQueueEntriesInput = {
    update: XOR<PeladaUpdateWithoutQueueEntriesInput, PeladaUncheckedUpdateWithoutQueueEntriesInput>
    create: XOR<PeladaCreateWithoutQueueEntriesInput, PeladaUncheckedCreateWithoutQueueEntriesInput>
    where?: PeladaWhereInput
  }

  export type PeladaUpdateToOneWithWhereWithoutQueueEntriesInput = {
    where?: PeladaWhereInput
    data: XOR<PeladaUpdateWithoutQueueEntriesInput, PeladaUncheckedUpdateWithoutQueueEntriesInput>
  }

  export type PeladaUpdateWithoutQueueEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playersPerTeam?: IntFieldUpdateOperationsInput | number
    status?: EnumPeladaStatusFieldUpdateOperationsInput | $Enums.PeladaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutPeladasNestedInput
    players?: PeladaPlayerUpdateManyWithoutPeladaNestedInput
    matches?: MatchUpdateManyWithoutPeladaNestedInput
  }

  export type PeladaUncheckedUpdateWithoutQueueEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playersPerTeam?: IntFieldUpdateOperationsInput | number
    status?: EnumPeladaStatusFieldUpdateOperationsInput | $Enums.PeladaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PeladaPlayerUncheckedUpdateManyWithoutPeladaNestedInput
    matches?: MatchUncheckedUpdateManyWithoutPeladaNestedInput
  }

  export type PeladaPlayerUpsertWithoutQueueEntryInput = {
    update: XOR<PeladaPlayerUpdateWithoutQueueEntryInput, PeladaPlayerUncheckedUpdateWithoutQueueEntryInput>
    create: XOR<PeladaPlayerCreateWithoutQueueEntryInput, PeladaPlayerUncheckedCreateWithoutQueueEntryInput>
    where?: PeladaPlayerWhereInput
  }

  export type PeladaPlayerUpdateToOneWithWhereWithoutQueueEntryInput = {
    where?: PeladaPlayerWhereInput
    data: XOR<PeladaPlayerUpdateWithoutQueueEntryInput, PeladaPlayerUncheckedUpdateWithoutQueueEntryInput>
  }

  export type PeladaPlayerUpdateWithoutQueueEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPeladaPlayerStatusFieldUpdateOperationsInput | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pelada?: PeladaUpdateOneRequiredWithoutPlayersNestedInput
    groupMember?: GroupMemberUpdateOneRequiredWithoutPeladaPlayersNestedInput
    matchPlayers?: MatchPlayerUpdateManyWithoutPeladaPlayerNestedInput
  }

  export type PeladaPlayerUncheckedUpdateWithoutQueueEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaId?: StringFieldUpdateOperationsInput | string
    groupMemberId?: StringFieldUpdateOperationsInput | string
    status?: EnumPeladaPlayerStatusFieldUpdateOperationsInput | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPlayers?: MatchPlayerUncheckedUpdateManyWithoutPeladaPlayerNestedInput
  }

  export type PeladaCreateWithoutMatchesInput = {
    id?: string
    name: string
    date?: Date | string | null
    playersPerTeam?: number
    status?: $Enums.PeladaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutPeladasInput
    players?: PeladaPlayerCreateNestedManyWithoutPeladaInput
    queueEntries?: PeladaQueueEntryCreateNestedManyWithoutPeladaInput
  }

  export type PeladaUncheckedCreateWithoutMatchesInput = {
    id?: string
    groupId: string
    name: string
    date?: Date | string | null
    playersPerTeam?: number
    status?: $Enums.PeladaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PeladaPlayerUncheckedCreateNestedManyWithoutPeladaInput
    queueEntries?: PeladaQueueEntryUncheckedCreateNestedManyWithoutPeladaInput
  }

  export type PeladaCreateOrConnectWithoutMatchesInput = {
    where: PeladaWhereUniqueInput
    create: XOR<PeladaCreateWithoutMatchesInput, PeladaUncheckedCreateWithoutMatchesInput>
  }

  export type MatchPlayerCreateWithoutMatchInput = {
    id?: string
    team: $Enums.MatchTeam
    createdAt?: Date | string
    peladaPlayer: PeladaPlayerCreateNestedOneWithoutMatchPlayersInput
  }

  export type MatchPlayerUncheckedCreateWithoutMatchInput = {
    id?: string
    peladaPlayerId: string
    team: $Enums.MatchTeam
    createdAt?: Date | string
  }

  export type MatchPlayerCreateOrConnectWithoutMatchInput = {
    where: MatchPlayerWhereUniqueInput
    create: XOR<MatchPlayerCreateWithoutMatchInput, MatchPlayerUncheckedCreateWithoutMatchInput>
  }

  export type MatchPlayerCreateManyMatchInputEnvelope = {
    data: MatchPlayerCreateManyMatchInput | MatchPlayerCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type PeladaUpsertWithoutMatchesInput = {
    update: XOR<PeladaUpdateWithoutMatchesInput, PeladaUncheckedUpdateWithoutMatchesInput>
    create: XOR<PeladaCreateWithoutMatchesInput, PeladaUncheckedCreateWithoutMatchesInput>
    where?: PeladaWhereInput
  }

  export type PeladaUpdateToOneWithWhereWithoutMatchesInput = {
    where?: PeladaWhereInput
    data: XOR<PeladaUpdateWithoutMatchesInput, PeladaUncheckedUpdateWithoutMatchesInput>
  }

  export type PeladaUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playersPerTeam?: IntFieldUpdateOperationsInput | number
    status?: EnumPeladaStatusFieldUpdateOperationsInput | $Enums.PeladaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutPeladasNestedInput
    players?: PeladaPlayerUpdateManyWithoutPeladaNestedInput
    queueEntries?: PeladaQueueEntryUpdateManyWithoutPeladaNestedInput
  }

  export type PeladaUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playersPerTeam?: IntFieldUpdateOperationsInput | number
    status?: EnumPeladaStatusFieldUpdateOperationsInput | $Enums.PeladaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PeladaPlayerUncheckedUpdateManyWithoutPeladaNestedInput
    queueEntries?: PeladaQueueEntryUncheckedUpdateManyWithoutPeladaNestedInput
  }

  export type MatchPlayerUpsertWithWhereUniqueWithoutMatchInput = {
    where: MatchPlayerWhereUniqueInput
    update: XOR<MatchPlayerUpdateWithoutMatchInput, MatchPlayerUncheckedUpdateWithoutMatchInput>
    create: XOR<MatchPlayerCreateWithoutMatchInput, MatchPlayerUncheckedCreateWithoutMatchInput>
  }

  export type MatchPlayerUpdateWithWhereUniqueWithoutMatchInput = {
    where: MatchPlayerWhereUniqueInput
    data: XOR<MatchPlayerUpdateWithoutMatchInput, MatchPlayerUncheckedUpdateWithoutMatchInput>
  }

  export type MatchPlayerUpdateManyWithWhereWithoutMatchInput = {
    where: MatchPlayerScalarWhereInput
    data: XOR<MatchPlayerUpdateManyMutationInput, MatchPlayerUncheckedUpdateManyWithoutMatchInput>
  }

  export type MatchCreateWithoutPlayersInput = {
    id?: string
    sequence: number
    status?: $Enums.MatchStatus
    startedAt?: Date | string
    finishedAt?: Date | string | null
    teamAScore?: number | null
    teamBScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pelada: PeladaCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateWithoutPlayersInput = {
    id?: string
    peladaId: string
    sequence: number
    status?: $Enums.MatchStatus
    startedAt?: Date | string
    finishedAt?: Date | string | null
    teamAScore?: number | null
    teamBScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutPlayersInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPlayersInput, MatchUncheckedCreateWithoutPlayersInput>
  }

  export type PeladaPlayerCreateWithoutMatchPlayersInput = {
    id?: string
    status?: $Enums.PeladaPlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    pelada: PeladaCreateNestedOneWithoutPlayersInput
    groupMember: GroupMemberCreateNestedOneWithoutPeladaPlayersInput
    queueEntry?: PeladaQueueEntryCreateNestedOneWithoutPeladaPlayerInput
  }

  export type PeladaPlayerUncheckedCreateWithoutMatchPlayersInput = {
    id?: string
    peladaId: string
    groupMemberId: string
    status?: $Enums.PeladaPlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    queueEntry?: PeladaQueueEntryUncheckedCreateNestedOneWithoutPeladaPlayerInput
  }

  export type PeladaPlayerCreateOrConnectWithoutMatchPlayersInput = {
    where: PeladaPlayerWhereUniqueInput
    create: XOR<PeladaPlayerCreateWithoutMatchPlayersInput, PeladaPlayerUncheckedCreateWithoutMatchPlayersInput>
  }

  export type MatchUpsertWithoutPlayersInput = {
    update: XOR<MatchUpdateWithoutPlayersInput, MatchUncheckedUpdateWithoutPlayersInput>
    create: XOR<MatchCreateWithoutPlayersInput, MatchUncheckedCreateWithoutPlayersInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutPlayersInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutPlayersInput, MatchUncheckedUpdateWithoutPlayersInput>
  }

  export type MatchUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamAScore?: NullableIntFieldUpdateOperationsInput | number | null
    teamBScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pelada?: PeladaUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamAScore?: NullableIntFieldUpdateOperationsInput | number | null
    teamBScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeladaPlayerUpsertWithoutMatchPlayersInput = {
    update: XOR<PeladaPlayerUpdateWithoutMatchPlayersInput, PeladaPlayerUncheckedUpdateWithoutMatchPlayersInput>
    create: XOR<PeladaPlayerCreateWithoutMatchPlayersInput, PeladaPlayerUncheckedCreateWithoutMatchPlayersInput>
    where?: PeladaPlayerWhereInput
  }

  export type PeladaPlayerUpdateToOneWithWhereWithoutMatchPlayersInput = {
    where?: PeladaPlayerWhereInput
    data: XOR<PeladaPlayerUpdateWithoutMatchPlayersInput, PeladaPlayerUncheckedUpdateWithoutMatchPlayersInput>
  }

  export type PeladaPlayerUpdateWithoutMatchPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPeladaPlayerStatusFieldUpdateOperationsInput | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pelada?: PeladaUpdateOneRequiredWithoutPlayersNestedInput
    groupMember?: GroupMemberUpdateOneRequiredWithoutPeladaPlayersNestedInput
    queueEntry?: PeladaQueueEntryUpdateOneWithoutPeladaPlayerNestedInput
  }

  export type PeladaPlayerUncheckedUpdateWithoutMatchPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaId?: StringFieldUpdateOperationsInput | string
    groupMemberId?: StringFieldUpdateOperationsInput | string
    status?: EnumPeladaPlayerStatusFieldUpdateOperationsInput | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queueEntry?: PeladaQueueEntryUncheckedUpdateOneWithoutPeladaPlayerNestedInput
  }

  export type GroupCreateManyOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberCreateManyUserInput = {
    id?: string
    groupId: string
    role?: $Enums.GroupMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    peladas?: PeladaUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    peladas?: PeladaUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupMemberRoleFieldUpdateOperationsInput | $Enums.GroupMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    peladaPlayers?: PeladaPlayerUpdateManyWithoutGroupMemberNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupMemberRoleFieldUpdateOperationsInput | $Enums.GroupMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peladaPlayers?: PeladaPlayerUncheckedUpdateManyWithoutGroupMemberNestedInput
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupMemberRoleFieldUpdateOperationsInput | $Enums.GroupMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateManyGroupInput = {
    id?: string
    userId: string
    role?: $Enums.GroupMemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeladaCreateManyGroupInput = {
    id?: string
    name: string
    date?: Date | string | null
    playersPerTeam?: number
    status?: $Enums.PeladaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMemberUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupMemberRoleFieldUpdateOperationsInput | $Enums.GroupMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    peladaPlayers?: PeladaPlayerUpdateManyWithoutGroupMemberNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupMemberRoleFieldUpdateOperationsInput | $Enums.GroupMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peladaPlayers?: PeladaPlayerUncheckedUpdateManyWithoutGroupMemberNestedInput
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumGroupMemberRoleFieldUpdateOperationsInput | $Enums.GroupMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeladaUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playersPerTeam?: IntFieldUpdateOperationsInput | number
    status?: EnumPeladaStatusFieldUpdateOperationsInput | $Enums.PeladaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PeladaPlayerUpdateManyWithoutPeladaNestedInput
    queueEntries?: PeladaQueueEntryUpdateManyWithoutPeladaNestedInput
    matches?: MatchUpdateManyWithoutPeladaNestedInput
  }

  export type PeladaUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playersPerTeam?: IntFieldUpdateOperationsInput | number
    status?: EnumPeladaStatusFieldUpdateOperationsInput | $Enums.PeladaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PeladaPlayerUncheckedUpdateManyWithoutPeladaNestedInput
    queueEntries?: PeladaQueueEntryUncheckedUpdateManyWithoutPeladaNestedInput
    matches?: MatchUncheckedUpdateManyWithoutPeladaNestedInput
  }

  export type PeladaUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playersPerTeam?: IntFieldUpdateOperationsInput | number
    status?: EnumPeladaStatusFieldUpdateOperationsInput | $Enums.PeladaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeladaPlayerCreateManyGroupMemberInput = {
    id?: string
    peladaId: string
    status?: $Enums.PeladaPlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeladaPlayerUpdateWithoutGroupMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPeladaPlayerStatusFieldUpdateOperationsInput | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pelada?: PeladaUpdateOneRequiredWithoutPlayersNestedInput
    queueEntry?: PeladaQueueEntryUpdateOneWithoutPeladaPlayerNestedInput
    matchPlayers?: MatchPlayerUpdateManyWithoutPeladaPlayerNestedInput
  }

  export type PeladaPlayerUncheckedUpdateWithoutGroupMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaId?: StringFieldUpdateOperationsInput | string
    status?: EnumPeladaPlayerStatusFieldUpdateOperationsInput | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queueEntry?: PeladaQueueEntryUncheckedUpdateOneWithoutPeladaPlayerNestedInput
    matchPlayers?: MatchPlayerUncheckedUpdateManyWithoutPeladaPlayerNestedInput
  }

  export type PeladaPlayerUncheckedUpdateManyWithoutGroupMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaId?: StringFieldUpdateOperationsInput | string
    status?: EnumPeladaPlayerStatusFieldUpdateOperationsInput | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeladaPlayerCreateManyPeladaInput = {
    id?: string
    groupMemberId: string
    status?: $Enums.PeladaPlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeladaQueueEntryCreateManyPeladaInput = {
    id?: string
    peladaPlayerId: string
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyPeladaInput = {
    id?: string
    sequence: number
    status?: $Enums.MatchStatus
    startedAt?: Date | string
    finishedAt?: Date | string | null
    teamAScore?: number | null
    teamBScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeladaPlayerUpdateWithoutPeladaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPeladaPlayerStatusFieldUpdateOperationsInput | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMember?: GroupMemberUpdateOneRequiredWithoutPeladaPlayersNestedInput
    queueEntry?: PeladaQueueEntryUpdateOneWithoutPeladaPlayerNestedInput
    matchPlayers?: MatchPlayerUpdateManyWithoutPeladaPlayerNestedInput
  }

  export type PeladaPlayerUncheckedUpdateWithoutPeladaInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupMemberId?: StringFieldUpdateOperationsInput | string
    status?: EnumPeladaPlayerStatusFieldUpdateOperationsInput | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queueEntry?: PeladaQueueEntryUncheckedUpdateOneWithoutPeladaPlayerNestedInput
    matchPlayers?: MatchPlayerUncheckedUpdateManyWithoutPeladaPlayerNestedInput
  }

  export type PeladaPlayerUncheckedUpdateManyWithoutPeladaInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupMemberId?: StringFieldUpdateOperationsInput | string
    status?: EnumPeladaPlayerStatusFieldUpdateOperationsInput | $Enums.PeladaPlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeladaQueueEntryUpdateWithoutPeladaInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peladaPlayer?: PeladaPlayerUpdateOneRequiredWithoutQueueEntryNestedInput
  }

  export type PeladaQueueEntryUncheckedUpdateWithoutPeladaInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaPlayerId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeladaQueueEntryUncheckedUpdateManyWithoutPeladaInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaPlayerId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutPeladaInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamAScore?: NullableIntFieldUpdateOperationsInput | number | null
    teamBScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: MatchPlayerUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutPeladaInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamAScore?: NullableIntFieldUpdateOperationsInput | number | null
    teamBScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: MatchPlayerUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutPeladaInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teamAScore?: NullableIntFieldUpdateOperationsInput | number | null
    teamBScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchPlayerCreateManyPeladaPlayerInput = {
    id?: string
    matchId: string
    team: $Enums.MatchTeam
    createdAt?: Date | string
  }

  export type MatchPlayerUpdateWithoutPeladaPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: EnumMatchTeamFieldUpdateOperationsInput | $Enums.MatchTeam
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type MatchPlayerUncheckedUpdateWithoutPeladaPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    team?: EnumMatchTeamFieldUpdateOperationsInput | $Enums.MatchTeam
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchPlayerUncheckedUpdateManyWithoutPeladaPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    team?: EnumMatchTeamFieldUpdateOperationsInput | $Enums.MatchTeam
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchPlayerCreateManyMatchInput = {
    id?: string
    peladaPlayerId: string
    team: $Enums.MatchTeam
    createdAt?: Date | string
  }

  export type MatchPlayerUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: EnumMatchTeamFieldUpdateOperationsInput | $Enums.MatchTeam
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peladaPlayer?: PeladaPlayerUpdateOneRequiredWithoutMatchPlayersNestedInput
  }

  export type MatchPlayerUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaPlayerId?: StringFieldUpdateOperationsInput | string
    team?: EnumMatchTeamFieldUpdateOperationsInput | $Enums.MatchTeam
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchPlayerUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    peladaPlayerId?: StringFieldUpdateOperationsInput | string
    team?: EnumMatchTeamFieldUpdateOperationsInput | $Enums.MatchTeam
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}