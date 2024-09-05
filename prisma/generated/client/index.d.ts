
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model UserStatus
 * 
 */
export type UserStatus = $Result.DefaultSelection<Prisma.$UserStatusPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Reaction
 * 
 */
export type Reaction = $Result.DefaultSelection<Prisma.$ReactionPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model PracticeSet
 * 
 */
export type PracticeSet = $Result.DefaultSelection<Prisma.$PracticeSetPayload>
/**
 * Model UserPracticeSet
 * 
 */
export type UserPracticeSet = $Result.DefaultSelection<Prisma.$UserPracticeSetPayload>
/**
 * Model PracticeTask
 * 
 */
export type PracticeTask = $Result.DefaultSelection<Prisma.$PracticeTaskPayload>
/**
 * Model UserTaskMetadata
 * 
 */
export type UserTaskMetadata = $Result.DefaultSelection<Prisma.$UserTaskMetadataPayload>
/**
 * Model TaskTag
 * 
 */
export type TaskTag = $Result.DefaultSelection<Prisma.$TaskTagPayload>
/**
 * Model UserSubmitTask
 * 
 */
export type UserSubmitTask = $Result.DefaultSelection<Prisma.$UserSubmitTaskPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Visibility: {
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
  FRIENDS: 'FRIENDS'
};

export type Visibility = (typeof Visibility)[keyof typeof Visibility]


export const PostReaction: {
  LIKE: 'LIKE',
  HAHA: 'HAHA',
  DISLIKE: 'DISLIKE'
};

export type PostReaction = (typeof PostReaction)[keyof typeof PostReaction]


export const Status: {
  LIVE: 'LIVE',
  ACHIEVED: 'ACHIEVED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const TaskType: {
  RESOURCE: 'RESOURCE',
  CODING: 'CODING'
};

export type TaskType = (typeof TaskType)[keyof typeof TaskType]

}

export type Visibility = $Enums.Visibility

export const Visibility: typeof $Enums.Visibility

export type PostReaction = $Enums.PostReaction

export const PostReaction: typeof $Enums.PostReaction

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type TaskType = $Enums.TaskType

export const TaskType: typeof $Enums.TaskType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userStatus`: Exposes CRUD operations for the **UserStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStatuses
    * const userStatuses = await prisma.userStatus.findMany()
    * ```
    */
  get userStatus(): Prisma.UserStatusDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.reaction`: Exposes CRUD operations for the **Reaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reactions
    * const reactions = await prisma.reaction.findMany()
    * ```
    */
  get reaction(): Prisma.ReactionDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.practiceSet`: Exposes CRUD operations for the **PracticeSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PracticeSets
    * const practiceSets = await prisma.practiceSet.findMany()
    * ```
    */
  get practiceSet(): Prisma.PracticeSetDelegate<ExtArgs>;

  /**
   * `prisma.userPracticeSet`: Exposes CRUD operations for the **UserPracticeSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPracticeSets
    * const userPracticeSets = await prisma.userPracticeSet.findMany()
    * ```
    */
  get userPracticeSet(): Prisma.UserPracticeSetDelegate<ExtArgs>;

  /**
   * `prisma.practiceTask`: Exposes CRUD operations for the **PracticeTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PracticeTasks
    * const practiceTasks = await prisma.practiceTask.findMany()
    * ```
    */
  get practiceTask(): Prisma.PracticeTaskDelegate<ExtArgs>;

  /**
   * `prisma.userTaskMetadata`: Exposes CRUD operations for the **UserTaskMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTaskMetadata
    * const userTaskMetadata = await prisma.userTaskMetadata.findMany()
    * ```
    */
  get userTaskMetadata(): Prisma.UserTaskMetadataDelegate<ExtArgs>;

  /**
   * `prisma.taskTag`: Exposes CRUD operations for the **TaskTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskTags
    * const taskTags = await prisma.taskTag.findMany()
    * ```
    */
  get taskTag(): Prisma.TaskTagDelegate<ExtArgs>;

  /**
   * `prisma.userSubmitTask`: Exposes CRUD operations for the **UserSubmitTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSubmitTasks
    * const userSubmitTasks = await prisma.userSubmitTask.findMany()
    * ```
    */
  get userSubmitTask(): Prisma.UserSubmitTaskDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.15.1
   * Query Engine version: 5675a3182f972f1a8f31d16eee6abf4fd54910e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    UserStatus: 'UserStatus',
    Post: 'Post',
    Reaction: 'Reaction',
    Comment: 'Comment',
    PracticeSet: 'PracticeSet',
    UserPracticeSet: 'UserPracticeSet',
    PracticeTask: 'PracticeTask',
    UserTaskMetadata: 'UserTaskMetadata',
    TaskTag: 'TaskTag',
    UserSubmitTask: 'UserSubmitTask'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'userStatus' | 'post' | 'reaction' | 'comment' | 'practiceSet' | 'userPracticeSet' | 'practiceTask' | 'userTaskMetadata' | 'taskTag' | 'userSubmitTask'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserStatus: {
        payload: Prisma.$UserStatusPayload<ExtArgs>
        fields: Prisma.UserStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStatusFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStatusFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>
          }
          findFirst: {
            args: Prisma.UserStatusFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStatusFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>
          }
          findMany: {
            args: Prisma.UserStatusFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>[]
          }
          create: {
            args: Prisma.UserStatusCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>
          }
          createMany: {
            args: Prisma.UserStatusCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStatusCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>[]
          }
          delete: {
            args: Prisma.UserStatusDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>
          }
          update: {
            args: Prisma.UserStatusUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>
          }
          deleteMany: {
            args: Prisma.UserStatusDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserStatusUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserStatusUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>
          }
          aggregate: {
            args: Prisma.UserStatusAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserStatus>
          }
          groupBy: {
            args: Prisma.UserStatusGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStatusCountArgs<ExtArgs>,
            result: $Utils.Optional<UserStatusCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Reaction: {
        payload: Prisma.$ReactionPayload<ExtArgs>
        fields: Prisma.ReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findFirst: {
            args: Prisma.ReactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findMany: {
            args: Prisma.ReactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          create: {
            args: Prisma.ReactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          createMany: {
            args: Prisma.ReactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReactionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          delete: {
            args: Prisma.ReactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          update: {
            args: Prisma.ReactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          deleteMany: {
            args: Prisma.ReactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          aggregate: {
            args: Prisma.ReactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReaction>
          }
          groupBy: {
            args: Prisma.ReactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReactionCountArgs<ExtArgs>,
            result: $Utils.Optional<ReactionCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      PracticeSet: {
        payload: Prisma.$PracticeSetPayload<ExtArgs>
        fields: Prisma.PracticeSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PracticeSetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PracticeSetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeSetPayload>
          }
          findFirst: {
            args: Prisma.PracticeSetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PracticeSetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeSetPayload>
          }
          findMany: {
            args: Prisma.PracticeSetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeSetPayload>[]
          }
          create: {
            args: Prisma.PracticeSetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeSetPayload>
          }
          createMany: {
            args: Prisma.PracticeSetCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PracticeSetCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeSetPayload>[]
          }
          delete: {
            args: Prisma.PracticeSetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeSetPayload>
          }
          update: {
            args: Prisma.PracticeSetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeSetPayload>
          }
          deleteMany: {
            args: Prisma.PracticeSetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PracticeSetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PracticeSetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeSetPayload>
          }
          aggregate: {
            args: Prisma.PracticeSetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePracticeSet>
          }
          groupBy: {
            args: Prisma.PracticeSetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PracticeSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PracticeSetCountArgs<ExtArgs>,
            result: $Utils.Optional<PracticeSetCountAggregateOutputType> | number
          }
        }
      }
      UserPracticeSet: {
        payload: Prisma.$UserPracticeSetPayload<ExtArgs>
        fields: Prisma.UserPracticeSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPracticeSetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPracticeSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPracticeSetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPracticeSetPayload>
          }
          findFirst: {
            args: Prisma.UserPracticeSetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPracticeSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPracticeSetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPracticeSetPayload>
          }
          findMany: {
            args: Prisma.UserPracticeSetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPracticeSetPayload>[]
          }
          create: {
            args: Prisma.UserPracticeSetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPracticeSetPayload>
          }
          createMany: {
            args: Prisma.UserPracticeSetCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPracticeSetCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPracticeSetPayload>[]
          }
          delete: {
            args: Prisma.UserPracticeSetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPracticeSetPayload>
          }
          update: {
            args: Prisma.UserPracticeSetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPracticeSetPayload>
          }
          deleteMany: {
            args: Prisma.UserPracticeSetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserPracticeSetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserPracticeSetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPracticeSetPayload>
          }
          aggregate: {
            args: Prisma.UserPracticeSetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserPracticeSet>
          }
          groupBy: {
            args: Prisma.UserPracticeSetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserPracticeSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPracticeSetCountArgs<ExtArgs>,
            result: $Utils.Optional<UserPracticeSetCountAggregateOutputType> | number
          }
        }
      }
      PracticeTask: {
        payload: Prisma.$PracticeTaskPayload<ExtArgs>
        fields: Prisma.PracticeTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PracticeTaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PracticeTaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeTaskPayload>
          }
          findFirst: {
            args: Prisma.PracticeTaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PracticeTaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeTaskPayload>
          }
          findMany: {
            args: Prisma.PracticeTaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeTaskPayload>[]
          }
          create: {
            args: Prisma.PracticeTaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeTaskPayload>
          }
          createMany: {
            args: Prisma.PracticeTaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PracticeTaskCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeTaskPayload>[]
          }
          delete: {
            args: Prisma.PracticeTaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeTaskPayload>
          }
          update: {
            args: Prisma.PracticeTaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeTaskPayload>
          }
          deleteMany: {
            args: Prisma.PracticeTaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PracticeTaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PracticeTaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PracticeTaskPayload>
          }
          aggregate: {
            args: Prisma.PracticeTaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePracticeTask>
          }
          groupBy: {
            args: Prisma.PracticeTaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PracticeTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.PracticeTaskCountArgs<ExtArgs>,
            result: $Utils.Optional<PracticeTaskCountAggregateOutputType> | number
          }
        }
      }
      UserTaskMetadata: {
        payload: Prisma.$UserTaskMetadataPayload<ExtArgs>
        fields: Prisma.UserTaskMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTaskMetadataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTaskMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTaskMetadataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTaskMetadataPayload>
          }
          findFirst: {
            args: Prisma.UserTaskMetadataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTaskMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTaskMetadataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTaskMetadataPayload>
          }
          findMany: {
            args: Prisma.UserTaskMetadataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTaskMetadataPayload>[]
          }
          create: {
            args: Prisma.UserTaskMetadataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTaskMetadataPayload>
          }
          createMany: {
            args: Prisma.UserTaskMetadataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTaskMetadataCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTaskMetadataPayload>[]
          }
          delete: {
            args: Prisma.UserTaskMetadataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTaskMetadataPayload>
          }
          update: {
            args: Prisma.UserTaskMetadataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTaskMetadataPayload>
          }
          deleteMany: {
            args: Prisma.UserTaskMetadataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserTaskMetadataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserTaskMetadataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTaskMetadataPayload>
          }
          aggregate: {
            args: Prisma.UserTaskMetadataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserTaskMetadata>
          }
          groupBy: {
            args: Prisma.UserTaskMetadataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserTaskMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTaskMetadataCountArgs<ExtArgs>,
            result: $Utils.Optional<UserTaskMetadataCountAggregateOutputType> | number
          }
        }
      }
      TaskTag: {
        payload: Prisma.$TaskTagPayload<ExtArgs>
        fields: Prisma.TaskTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskTagFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskTagFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          findFirst: {
            args: Prisma.TaskTagFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskTagFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          findMany: {
            args: Prisma.TaskTagFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>[]
          }
          create: {
            args: Prisma.TaskTagCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          createMany: {
            args: Prisma.TaskTagCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskTagCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>[]
          }
          delete: {
            args: Prisma.TaskTagDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          update: {
            args: Prisma.TaskTagUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          deleteMany: {
            args: Prisma.TaskTagDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TaskTagUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TaskTagUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          aggregate: {
            args: Prisma.TaskTagAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTaskTag>
          }
          groupBy: {
            args: Prisma.TaskTagGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TaskTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskTagCountArgs<ExtArgs>,
            result: $Utils.Optional<TaskTagCountAggregateOutputType> | number
          }
        }
      }
      UserSubmitTask: {
        payload: Prisma.$UserSubmitTaskPayload<ExtArgs>
        fields: Prisma.UserSubmitTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSubmitTaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSubmitTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSubmitTaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSubmitTaskPayload>
          }
          findFirst: {
            args: Prisma.UserSubmitTaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSubmitTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSubmitTaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSubmitTaskPayload>
          }
          findMany: {
            args: Prisma.UserSubmitTaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSubmitTaskPayload>[]
          }
          create: {
            args: Prisma.UserSubmitTaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSubmitTaskPayload>
          }
          createMany: {
            args: Prisma.UserSubmitTaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSubmitTaskCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSubmitTaskPayload>[]
          }
          delete: {
            args: Prisma.UserSubmitTaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSubmitTaskPayload>
          }
          update: {
            args: Prisma.UserSubmitTaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSubmitTaskPayload>
          }
          deleteMany: {
            args: Prisma.UserSubmitTaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserSubmitTaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserSubmitTaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserSubmitTaskPayload>
          }
          aggregate: {
            args: Prisma.UserSubmitTaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserSubmitTask>
          }
          groupBy: {
            args: Prisma.UserSubmitTaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserSubmitTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSubmitTaskCountArgs<ExtArgs>,
            result: $Utils.Optional<UserSubmitTaskCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    posts: number
    reactions: number
    comments: number
    userStatuses: number
    practiceSets: number
    practiceTasks: number
    userSubmitTasks: number
    userPracticeSets: number
    userTaskMetadatas: number
    taskTag: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    reactions?: boolean | UserCountOutputTypeCountReactionsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    userStatuses?: boolean | UserCountOutputTypeCountUserStatusesArgs
    practiceSets?: boolean | UserCountOutputTypeCountPracticeSetsArgs
    practiceTasks?: boolean | UserCountOutputTypeCountPracticeTasksArgs
    userSubmitTasks?: boolean | UserCountOutputTypeCountUserSubmitTasksArgs
    userPracticeSets?: boolean | UserCountOutputTypeCountUserPracticeSetsArgs
    userTaskMetadatas?: boolean | UserCountOutputTypeCountUserTaskMetadatasArgs
    taskTag?: boolean | UserCountOutputTypeCountTaskTagArgs
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
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatusWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPracticeSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PracticeSetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPracticeTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PracticeTaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserSubmitTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubmitTaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPracticeSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPracticeSetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTaskMetadatasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTaskMetadataWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTagWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    reactions: number
    comments: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reactions?: boolean | PostCountOutputTypeCountReactionsArgs
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type PracticeSetCountOutputType
   */

  export type PracticeSetCountOutputType = {
    practiceTasks: number
    userSubmitTasks: number
    userPracticeSets: number
  }

  export type PracticeSetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practiceTasks?: boolean | PracticeSetCountOutputTypeCountPracticeTasksArgs
    userSubmitTasks?: boolean | PracticeSetCountOutputTypeCountUserSubmitTasksArgs
    userPracticeSets?: boolean | PracticeSetCountOutputTypeCountUserPracticeSetsArgs
  }

  // Custom InputTypes
  /**
   * PracticeSetCountOutputType without action
   */
  export type PracticeSetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSetCountOutputType
     */
    select?: PracticeSetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PracticeSetCountOutputType without action
   */
  export type PracticeSetCountOutputTypeCountPracticeTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PracticeTaskWhereInput
  }

  /**
   * PracticeSetCountOutputType without action
   */
  export type PracticeSetCountOutputTypeCountUserSubmitTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubmitTaskWhereInput
  }

  /**
   * PracticeSetCountOutputType without action
   */
  export type PracticeSetCountOutputTypeCountUserPracticeSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPracticeSetWhereInput
  }


  /**
   * Count Type UserPracticeSetCountOutputType
   */

  export type UserPracticeSetCountOutputType = {
    userSubmitTasks: number
  }

  export type UserPracticeSetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSubmitTasks?: boolean | UserPracticeSetCountOutputTypeCountUserSubmitTasksArgs
  }

  // Custom InputTypes
  /**
   * UserPracticeSetCountOutputType without action
   */
  export type UserPracticeSetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPracticeSetCountOutputType
     */
    select?: UserPracticeSetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserPracticeSetCountOutputType without action
   */
  export type UserPracticeSetCountOutputTypeCountUserSubmitTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubmitTaskWhereInput
  }


  /**
   * Count Type PracticeTaskCountOutputType
   */

  export type PracticeTaskCountOutputType = {
    userSubmitTasks: number
    userTaskMetadatas: number
    taskTags: number
  }

  export type PracticeTaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSubmitTasks?: boolean | PracticeTaskCountOutputTypeCountUserSubmitTasksArgs
    userTaskMetadatas?: boolean | PracticeTaskCountOutputTypeCountUserTaskMetadatasArgs
    taskTags?: boolean | PracticeTaskCountOutputTypeCountTaskTagsArgs
  }

  // Custom InputTypes
  /**
   * PracticeTaskCountOutputType without action
   */
  export type PracticeTaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTaskCountOutputType
     */
    select?: PracticeTaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PracticeTaskCountOutputType without action
   */
  export type PracticeTaskCountOutputTypeCountUserSubmitTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubmitTaskWhereInput
  }

  /**
   * PracticeTaskCountOutputType without action
   */
  export type PracticeTaskCountOutputTypeCountUserTaskMetadatasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTaskMetadataWhereInput
  }

  /**
   * PracticeTaskCountOutputType without action
   */
  export type PracticeTaskCountOutputTypeCountTaskTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTagWhereInput
  }


  /**
   * Count Type TaskTagCountOutputType
   */

  export type TaskTagCountOutputType = {
    PracticeTask: number
  }

  export type TaskTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PracticeTask?: boolean | TaskTagCountOutputTypeCountPracticeTaskArgs
  }

  // Custom InputTypes
  /**
   * TaskTagCountOutputType without action
   */
  export type TaskTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTagCountOutputType
     */
    select?: TaskTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskTagCountOutputType without action
   */
  export type TaskTagCountOutputTypeCountPracticeTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PracticeTaskWhereInput
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
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
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
    email: string
    password: string
    name: string | null
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
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    userStatuses?: boolean | User$userStatusesArgs<ExtArgs>
    practiceSets?: boolean | User$practiceSetsArgs<ExtArgs>
    practiceTasks?: boolean | User$practiceTasksArgs<ExtArgs>
    userSubmitTasks?: boolean | User$userSubmitTasksArgs<ExtArgs>
    userPracticeSets?: boolean | User$userPracticeSetsArgs<ExtArgs>
    userTaskMetadatas?: boolean | User$userTaskMetadatasArgs<ExtArgs>
    taskTag?: boolean | User$taskTagArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    userStatuses?: boolean | User$userStatusesArgs<ExtArgs>
    practiceSets?: boolean | User$practiceSetsArgs<ExtArgs>
    practiceTasks?: boolean | User$practiceTasksArgs<ExtArgs>
    userSubmitTasks?: boolean | User$userSubmitTasksArgs<ExtArgs>
    userPracticeSets?: boolean | User$userPracticeSetsArgs<ExtArgs>
    userTaskMetadatas?: boolean | User$userTaskMetadatasArgs<ExtArgs>
    taskTag?: boolean | User$taskTagArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      userStatuses: Prisma.$UserStatusPayload<ExtArgs>[]
      practiceSets: Prisma.$PracticeSetPayload<ExtArgs>[]
      practiceTasks: Prisma.$PracticeTaskPayload<ExtArgs>[]
      userSubmitTasks: Prisma.$UserSubmitTaskPayload<ExtArgs>[]
      userPracticeSets: Prisma.$UserPracticeSetPayload<ExtArgs>[]
      userTaskMetadatas: Prisma.$UserTaskMetadataPayload<ExtArgs>[]
      taskTag: Prisma.$TaskTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    createManyAndReturn<T extends UserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    reactions<T extends User$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    userStatuses<T extends User$userStatusesArgs<ExtArgs> = {}>(args?: Subset<T, User$userStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, 'findMany'> | Null>;

    practiceSets<T extends User$practiceSetsArgs<ExtArgs> = {}>(args?: Subset<T, User$practiceSetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeSetPayload<ExtArgs>, T, 'findMany'> | Null>;

    practiceTasks<T extends User$practiceTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$practiceTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    userSubmitTasks<T extends User$userSubmitTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$userSubmitTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubmitTaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    userPracticeSets<T extends User$userPracticeSetsArgs<ExtArgs> = {}>(args?: Subset<T, User$userPracticeSetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPracticeSetPayload<ExtArgs>, T, 'findMany'> | Null>;

    userTaskMetadatas<T extends User$userTaskMetadatasArgs<ExtArgs> = {}>(args?: Subset<T, User$userTaskMetadatasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskMetadataPayload<ExtArgs>, T, 'findMany'> | Null>;

    taskTag<T extends User$taskTagArgs<ExtArgs> = {}>(args?: Subset<T, User$taskTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
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
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.reactions
   */
  export type User$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.userStatuses
   */
  export type User$userStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    where?: UserStatusWhereInput
    orderBy?: UserStatusOrderByWithRelationInput | UserStatusOrderByWithRelationInput[]
    cursor?: UserStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStatusScalarFieldEnum | UserStatusScalarFieldEnum[]
  }

  /**
   * User.practiceSets
   */
  export type User$practiceSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSet
     */
    select?: PracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSetInclude<ExtArgs> | null
    where?: PracticeSetWhereInput
    orderBy?: PracticeSetOrderByWithRelationInput | PracticeSetOrderByWithRelationInput[]
    cursor?: PracticeSetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticeSetScalarFieldEnum | PracticeSetScalarFieldEnum[]
  }

  /**
   * User.practiceTasks
   */
  export type User$practiceTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTask
     */
    select?: PracticeTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeTaskInclude<ExtArgs> | null
    where?: PracticeTaskWhereInput
    orderBy?: PracticeTaskOrderByWithRelationInput | PracticeTaskOrderByWithRelationInput[]
    cursor?: PracticeTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticeTaskScalarFieldEnum | PracticeTaskScalarFieldEnum[]
  }

  /**
   * User.userSubmitTasks
   */
  export type User$userSubmitTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskInclude<ExtArgs> | null
    where?: UserSubmitTaskWhereInput
    orderBy?: UserSubmitTaskOrderByWithRelationInput | UserSubmitTaskOrderByWithRelationInput[]
    cursor?: UserSubmitTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubmitTaskScalarFieldEnum | UserSubmitTaskScalarFieldEnum[]
  }

  /**
   * User.userPracticeSets
   */
  export type User$userPracticeSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPracticeSet
     */
    select?: UserPracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPracticeSetInclude<ExtArgs> | null
    where?: UserPracticeSetWhereInput
    orderBy?: UserPracticeSetOrderByWithRelationInput | UserPracticeSetOrderByWithRelationInput[]
    cursor?: UserPracticeSetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPracticeSetScalarFieldEnum | UserPracticeSetScalarFieldEnum[]
  }

  /**
   * User.userTaskMetadatas
   */
  export type User$userTaskMetadatasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskMetadata
     */
    select?: UserTaskMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskMetadataInclude<ExtArgs> | null
    where?: UserTaskMetadataWhereInput
    orderBy?: UserTaskMetadataOrderByWithRelationInput | UserTaskMetadataOrderByWithRelationInput[]
    cursor?: UserTaskMetadataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTaskMetadataScalarFieldEnum | UserTaskMetadataScalarFieldEnum[]
  }

  /**
   * User.taskTag
   */
  export type User$taskTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    where?: TaskTagWhereInput
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    cursor?: TaskTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserStatus
   */

  export type AggregateUserStatus = {
    _count: UserStatusCountAggregateOutputType | null
    _min: UserStatusMinAggregateOutputType | null
    _max: UserStatusMaxAggregateOutputType | null
  }

  export type UserStatusMinAggregateOutputType = {
    id: string | null
    userId: string | null
    pictureUrl: string | null
    text: string | null
    backgroundImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserStatusMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    pictureUrl: string | null
    text: string | null
    backgroundImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserStatusCountAggregateOutputType = {
    id: number
    userId: number
    pictureUrl: number
    text: number
    backgroundImageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserStatusMinAggregateInputType = {
    id?: true
    userId?: true
    pictureUrl?: true
    text?: true
    backgroundImageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserStatusMaxAggregateInputType = {
    id?: true
    userId?: true
    pictureUrl?: true
    text?: true
    backgroundImageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserStatusCountAggregateInputType = {
    id?: true
    userId?: true
    pictureUrl?: true
    text?: true
    backgroundImageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStatus to aggregate.
     */
    where?: UserStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStatuses to fetch.
     */
    orderBy?: UserStatusOrderByWithRelationInput | UserStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStatuses
    **/
    _count?: true | UserStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStatusMaxAggregateInputType
  }

  export type GetUserStatusAggregateType<T extends UserStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStatus[P]>
      : GetScalarType<T[P], AggregateUserStatus[P]>
  }




  export type UserStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatusWhereInput
    orderBy?: UserStatusOrderByWithAggregationInput | UserStatusOrderByWithAggregationInput[]
    by: UserStatusScalarFieldEnum[] | UserStatusScalarFieldEnum
    having?: UserStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStatusCountAggregateInputType | true
    _min?: UserStatusMinAggregateInputType
    _max?: UserStatusMaxAggregateInputType
  }

  export type UserStatusGroupByOutputType = {
    id: string
    userId: string
    pictureUrl: string | null
    text: string | null
    backgroundImageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserStatusCountAggregateOutputType | null
    _min: UserStatusMinAggregateOutputType | null
    _max: UserStatusMaxAggregateOutputType | null
  }

  type GetUserStatusGroupByPayload<T extends UserStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStatusGroupByOutputType[P]>
            : GetScalarType<T[P], UserStatusGroupByOutputType[P]>
        }
      >
    >


  export type UserStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pictureUrl?: boolean
    text?: boolean
    backgroundImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStatus"]>

  export type UserStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pictureUrl?: boolean
    text?: boolean
    backgroundImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStatus"]>

  export type UserStatusSelectScalar = {
    id?: boolean
    userId?: boolean
    pictureUrl?: boolean
    text?: boolean
    backgroundImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStatus"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      pictureUrl: string | null
      text: string | null
      backgroundImageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userStatus"]>
    composites: {}
  }

  type UserStatusGetPayload<S extends boolean | null | undefined | UserStatusDefaultArgs> = $Result.GetResult<Prisma.$UserStatusPayload, S>

  type UserStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserStatusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserStatusCountAggregateInputType | true
    }

  export interface UserStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStatus'], meta: { name: 'UserStatus' } }
    /**
     * Find zero or one UserStatus that matches the filter.
     * @param {UserStatusFindUniqueArgs} args - Arguments to find a UserStatus
     * @example
     * // Get one UserStatus
     * const userStatus = await prisma.userStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserStatusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserStatusFindUniqueArgs<ExtArgs>>
    ): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserStatus that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserStatusFindUniqueOrThrowArgs} args - Arguments to find a UserStatus
     * @example
     * // Get one UserStatus
     * const userStatus = await prisma.userStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserStatusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStatusFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusFindFirstArgs} args - Arguments to find a UserStatus
     * @example
     * // Get one UserStatus
     * const userStatus = await prisma.userStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserStatusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStatusFindFirstArgs<ExtArgs>>
    ): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusFindFirstOrThrowArgs} args - Arguments to find a UserStatus
     * @example
     * // Get one UserStatus
     * const userStatus = await prisma.userStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserStatusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStatusFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStatuses
     * const userStatuses = await prisma.userStatus.findMany()
     * 
     * // Get first 10 UserStatuses
     * const userStatuses = await prisma.userStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStatusWithIdOnly = await prisma.userStatus.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserStatusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStatusFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserStatus.
     * @param {UserStatusCreateArgs} args - Arguments to create a UserStatus.
     * @example
     * // Create one UserStatus
     * const UserStatus = await prisma.userStatus.create({
     *   data: {
     *     // ... data to create a UserStatus
     *   }
     * })
     * 
    **/
    create<T extends UserStatusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserStatusCreateArgs<ExtArgs>>
    ): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserStatuses.
     * @param {UserStatusCreateManyArgs} args - Arguments to create many UserStatuses.
     * @example
     * // Create many UserStatuses
     * const userStatus = await prisma.userStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserStatusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStatusCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStatuses and returns the data saved in the database.
     * @param {UserStatusCreateManyAndReturnArgs} args - Arguments to create many UserStatuses.
     * @example
     * // Create many UserStatuses
     * const userStatus = await prisma.userStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStatuses and only return the `id`
     * const userStatusWithIdOnly = await prisma.userStatus.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserStatusCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStatusCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a UserStatus.
     * @param {UserStatusDeleteArgs} args - Arguments to delete one UserStatus.
     * @example
     * // Delete one UserStatus
     * const UserStatus = await prisma.userStatus.delete({
     *   where: {
     *     // ... filter to delete one UserStatus
     *   }
     * })
     * 
    **/
    delete<T extends UserStatusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserStatusDeleteArgs<ExtArgs>>
    ): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserStatus.
     * @param {UserStatusUpdateArgs} args - Arguments to update one UserStatus.
     * @example
     * // Update one UserStatus
     * const userStatus = await prisma.userStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserStatusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserStatusUpdateArgs<ExtArgs>>
    ): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserStatuses.
     * @param {UserStatusDeleteManyArgs} args - Arguments to filter UserStatuses to delete.
     * @example
     * // Delete a few UserStatuses
     * const { count } = await prisma.userStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserStatusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStatusDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStatuses
     * const userStatus = await prisma.userStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserStatusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserStatusUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserStatus.
     * @param {UserStatusUpsertArgs} args - Arguments to update or create a UserStatus.
     * @example
     * // Update or create a UserStatus
     * const userStatus = await prisma.userStatus.upsert({
     *   create: {
     *     // ... data to create a UserStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStatus we want to update
     *   }
     * })
    **/
    upsert<T extends UserStatusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserStatusUpsertArgs<ExtArgs>>
    ): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusCountArgs} args - Arguments to filter UserStatuses to count.
     * @example
     * // Count the number of UserStatuses
     * const count = await prisma.userStatus.count({
     *   where: {
     *     // ... the filter for the UserStatuses we want to count
     *   }
     * })
    **/
    count<T extends UserStatusCountArgs>(
      args?: Subset<T, UserStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserStatusAggregateArgs>(args: Subset<T, UserStatusAggregateArgs>): Prisma.PrismaPromise<GetUserStatusAggregateType<T>>

    /**
     * Group by UserStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusGroupByArgs} args - Group by arguments.
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
      T extends UserStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStatusGroupByArgs['orderBy'] }
        : { orderBy?: UserStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStatus model
   */
  readonly fields: UserStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserStatus model
   */ 
  interface UserStatusFieldRefs {
    readonly id: FieldRef<"UserStatus", 'String'>
    readonly userId: FieldRef<"UserStatus", 'String'>
    readonly pictureUrl: FieldRef<"UserStatus", 'String'>
    readonly text: FieldRef<"UserStatus", 'String'>
    readonly backgroundImageUrl: FieldRef<"UserStatus", 'String'>
    readonly createdAt: FieldRef<"UserStatus", 'DateTime'>
    readonly updatedAt: FieldRef<"UserStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStatus findUnique
   */
  export type UserStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserStatus to fetch.
     */
    where: UserStatusWhereUniqueInput
  }

  /**
   * UserStatus findUniqueOrThrow
   */
  export type UserStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserStatus to fetch.
     */
    where: UserStatusWhereUniqueInput
  }

  /**
   * UserStatus findFirst
   */
  export type UserStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserStatus to fetch.
     */
    where?: UserStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStatuses to fetch.
     */
    orderBy?: UserStatusOrderByWithRelationInput | UserStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStatuses.
     */
    cursor?: UserStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStatuses.
     */
    distinct?: UserStatusScalarFieldEnum | UserStatusScalarFieldEnum[]
  }

  /**
   * UserStatus findFirstOrThrow
   */
  export type UserStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserStatus to fetch.
     */
    where?: UserStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStatuses to fetch.
     */
    orderBy?: UserStatusOrderByWithRelationInput | UserStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStatuses.
     */
    cursor?: UserStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStatuses.
     */
    distinct?: UserStatusScalarFieldEnum | UserStatusScalarFieldEnum[]
  }

  /**
   * UserStatus findMany
   */
  export type UserStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserStatuses to fetch.
     */
    where?: UserStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStatuses to fetch.
     */
    orderBy?: UserStatusOrderByWithRelationInput | UserStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStatuses.
     */
    cursor?: UserStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStatuses.
     */
    skip?: number
    distinct?: UserStatusScalarFieldEnum | UserStatusScalarFieldEnum[]
  }

  /**
   * UserStatus create
   */
  export type UserStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStatus.
     */
    data: XOR<UserStatusCreateInput, UserStatusUncheckedCreateInput>
  }

  /**
   * UserStatus createMany
   */
  export type UserStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStatuses.
     */
    data: UserStatusCreateManyInput | UserStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStatus createManyAndReturn
   */
  export type UserStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserStatuses.
     */
    data: UserStatusCreateManyInput | UserStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStatus update
   */
  export type UserStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStatus.
     */
    data: XOR<UserStatusUpdateInput, UserStatusUncheckedUpdateInput>
    /**
     * Choose, which UserStatus to update.
     */
    where: UserStatusWhereUniqueInput
  }

  /**
   * UserStatus updateMany
   */
  export type UserStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStatuses.
     */
    data: XOR<UserStatusUpdateManyMutationInput, UserStatusUncheckedUpdateManyInput>
    /**
     * Filter which UserStatuses to update
     */
    where?: UserStatusWhereInput
  }

  /**
   * UserStatus upsert
   */
  export type UserStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStatus to update in case it exists.
     */
    where: UserStatusWhereUniqueInput
    /**
     * In case the UserStatus found by the `where` argument doesn't exist, create a new UserStatus with this data.
     */
    create: XOR<UserStatusCreateInput, UserStatusUncheckedCreateInput>
    /**
     * In case the UserStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStatusUpdateInput, UserStatusUncheckedUpdateInput>
  }

  /**
   * UserStatus delete
   */
  export type UserStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * Filter which UserStatus to delete.
     */
    where: UserStatusWhereUniqueInput
  }

  /**
   * UserStatus deleteMany
   */
  export type UserStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStatuses to delete
     */
    where?: UserStatusWhereInput
  }

  /**
   * UserStatus without action
   */
  export type UserStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    totalLikeCount: number | null
    totalCommentCount: number | null
  }

  export type PostSumAggregateOutputType = {
    totalLikeCount: number | null
    totalCommentCount: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    userId: string | null
    visibility: $Enums.Visibility | null
    totalLikeCount: number | null
    totalCommentCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    visibility: $Enums.Visibility | null
    totalLikeCount: number | null
    totalCommentCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    userId: number
    visibility: number
    text: number
    totalLikeCount: number
    totalCommentCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    totalLikeCount?: true
    totalCommentCount?: true
  }

  export type PostSumAggregateInputType = {
    totalLikeCount?: true
    totalCommentCount?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    userId?: true
    visibility?: true
    totalLikeCount?: true
    totalCommentCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    userId?: true
    visibility?: true
    totalLikeCount?: true
    totalCommentCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    userId?: true
    visibility?: true
    text?: true
    totalLikeCount?: true
    totalCommentCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    userId: string
    visibility: $Enums.Visibility
    text: JsonValue
    totalLikeCount: number
    totalCommentCount: number
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    visibility?: boolean
    text?: boolean
    totalLikeCount?: boolean
    totalCommentCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reactions?: boolean | Post$reactionsArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    visibility?: boolean
    text?: boolean
    totalLikeCount?: boolean
    totalCommentCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    userId?: boolean
    visibility?: boolean
    text?: boolean
    totalLikeCount?: boolean
    totalCommentCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reactions?: boolean | Post$reactionsArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      visibility: $Enums.Visibility
      text: Prisma.JsonValue
      totalLikeCount: number
      totalCommentCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends PostCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    reactions<T extends Post$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Post$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly userId: FieldRef<"Post", 'String'>
    readonly visibility: FieldRef<"Post", 'Visibility'>
    readonly text: FieldRef<"Post", 'Json'>
    readonly totalLikeCount: FieldRef<"Post", 'Int'>
    readonly totalCommentCount: FieldRef<"Post", 'Int'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }

  /**
   * Post.reactions
   */
  export type Post$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Reaction
   */

  export type AggregateReaction = {
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  export type ReactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    reactionType: $Enums.PostReaction | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    reactionType: $Enums.PostReaction | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReactionCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    reactionType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReactionMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    reactionType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReactionMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    reactionType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReactionCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    reactionType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reaction to aggregate.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reactions
    **/
    _count?: true | ReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionMaxAggregateInputType
  }

  export type GetReactionAggregateType<T extends ReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReaction[P]>
      : GetScalarType<T[P], AggregateReaction[P]>
  }




  export type ReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithAggregationInput | ReactionOrderByWithAggregationInput[]
    by: ReactionScalarFieldEnum[] | ReactionScalarFieldEnum
    having?: ReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionCountAggregateInputType | true
    _min?: ReactionMinAggregateInputType
    _max?: ReactionMaxAggregateInputType
  }

  export type ReactionGroupByOutputType = {
    id: string
    userId: string
    postId: string
    reactionType: $Enums.PostReaction
    createdAt: Date
    updatedAt: Date
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  type GetReactionGroupByPayload<T extends ReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionGroupByOutputType[P]>
        }
      >
    >


  export type ReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    reactionType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    reactionType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    reactionType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type ReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $ReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      postId: string
      reactionType: $Enums.PostReaction
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reaction"]>
    composites: {}
  }

  type ReactionGetPayload<S extends boolean | null | undefined | ReactionDefaultArgs> = $Result.GetResult<Prisma.$ReactionPayload, S>

  type ReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReactionCountAggregateInputType | true
    }

  export interface ReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reaction'], meta: { name: 'Reaction' } }
    /**
     * Find zero or one Reaction that matches the filter.
     * @param {ReactionFindUniqueArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReactionFindUniqueArgs<ExtArgs>>
    ): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReactionFindUniqueOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReactionFindFirstArgs<ExtArgs>>
    ): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reactions
     * const reactions = await prisma.reaction.findMany()
     * 
     * // Get first 10 Reactions
     * const reactions = await prisma.reaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reactionWithIdOnly = await prisma.reaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reaction.
     * @param {ReactionCreateArgs} args - Arguments to create a Reaction.
     * @example
     * // Create one Reaction
     * const Reaction = await prisma.reaction.create({
     *   data: {
     *     // ... data to create a Reaction
     *   }
     * })
     * 
    **/
    create<T extends ReactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReactionCreateArgs<ExtArgs>>
    ): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reactions.
     * @param {ReactionCreateManyArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ReactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reactions and returns the data saved in the database.
     * @param {ReactionCreateManyAndReturnArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reactions and only return the `id`
     * const reactionWithIdOnly = await prisma.reaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ReactionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ReactionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Reaction.
     * @param {ReactionDeleteArgs} args - Arguments to delete one Reaction.
     * @example
     * // Delete one Reaction
     * const Reaction = await prisma.reaction.delete({
     *   where: {
     *     // ... filter to delete one Reaction
     *   }
     * })
     * 
    **/
    delete<T extends ReactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReactionDeleteArgs<ExtArgs>>
    ): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reaction.
     * @param {ReactionUpdateArgs} args - Arguments to update one Reaction.
     * @example
     * // Update one Reaction
     * const reaction = await prisma.reaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReactionUpdateArgs<ExtArgs>>
    ): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reactions.
     * @param {ReactionDeleteManyArgs} args - Arguments to filter Reactions to delete.
     * @example
     * // Delete a few Reactions
     * const { count } = await prisma.reaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reaction.
     * @param {ReactionUpsertArgs} args - Arguments to update or create a Reaction.
     * @example
     * // Update or create a Reaction
     * const reaction = await prisma.reaction.upsert({
     *   create: {
     *     // ... data to create a Reaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reaction we want to update
     *   }
     * })
    **/
    upsert<T extends ReactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReactionUpsertArgs<ExtArgs>>
    ): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionCountArgs} args - Arguments to filter Reactions to count.
     * @example
     * // Count the number of Reactions
     * const count = await prisma.reaction.count({
     *   where: {
     *     // ... the filter for the Reactions we want to count
     *   }
     * })
    **/
    count<T extends ReactionCountArgs>(
      args?: Subset<T, ReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReactionAggregateArgs>(args: Subset<T, ReactionAggregateArgs>): Prisma.PrismaPromise<GetReactionAggregateType<T>>

    /**
     * Group by Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionGroupByArgs} args - Group by arguments.
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
      T extends ReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionGroupByArgs['orderBy'] }
        : { orderBy?: ReactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reaction model
   */
  readonly fields: ReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Reaction model
   */ 
  interface ReactionFieldRefs {
    readonly id: FieldRef<"Reaction", 'String'>
    readonly userId: FieldRef<"Reaction", 'String'>
    readonly postId: FieldRef<"Reaction", 'String'>
    readonly reactionType: FieldRef<"Reaction", 'PostReaction'>
    readonly createdAt: FieldRef<"Reaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Reaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reaction findUnique
   */
  export type ReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findUniqueOrThrow
   */
  export type ReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findFirst
   */
  export type ReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findFirstOrThrow
   */
  export type ReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findMany
   */
  export type ReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction create
   */
  export type ReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Reaction.
     */
    data: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
  }

  /**
   * Reaction createMany
   */
  export type ReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reaction createManyAndReturn
   */
  export type ReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reaction update
   */
  export type ReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Reaction.
     */
    data: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
    /**
     * Choose, which Reaction to update.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction updateMany
   */
  export type ReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
  }

  /**
   * Reaction upsert
   */
  export type ReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Reaction to update in case it exists.
     */
    where: ReactionWhereUniqueInput
    /**
     * In case the Reaction found by the `where` argument doesn't exist, create a new Reaction with this data.
     */
    create: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
    /**
     * In case the Reaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
  }

  /**
   * Reaction delete
   */
  export type ReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter which Reaction to delete.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction deleteMany
   */
  export type ReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reactions to delete
     */
    where?: ReactionWhereInput
  }

  /**
   * Reaction without action
   */
  export type ReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    pictureUrl: string | null
    text: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    pictureUrl: string | null
    text: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    userId: number
    pictureUrl: number
    text: number
    postId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    userId?: true
    pictureUrl?: true
    text?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    userId?: true
    pictureUrl?: true
    text?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    userId?: true
    pictureUrl?: true
    text?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    userId: string
    pictureUrl: string | null
    text: string | null
    postId: string
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pictureUrl?: boolean
    text?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pictureUrl?: boolean
    text?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    userId?: boolean
    pictureUrl?: boolean
    text?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      pictureUrl: string | null
      text: string | null
      postId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly pictureUrl: FieldRef<"Comment", 'String'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model PracticeSet
   */

  export type AggregatePracticeSet = {
    _count: PracticeSetCountAggregateOutputType | null
    _avg: PracticeSetAvgAggregateOutputType | null
    _sum: PracticeSetSumAggregateOutputType | null
    _min: PracticeSetMinAggregateOutputType | null
    _max: PracticeSetMaxAggregateOutputType | null
  }

  export type PracticeSetAvgAggregateOutputType = {
    enrollmentCount: number | null
    totalTaskCount: number | null
  }

  export type PracticeSetSumAggregateOutputType = {
    enrollmentCount: number | null
    totalTaskCount: number | null
  }

  export type PracticeSetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    visibility: $Enums.Visibility | null
    status: $Enums.Status | null
    enrollmentCount: number | null
    totalTaskCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PracticeSetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    visibility: $Enums.Visibility | null
    status: $Enums.Status | null
    enrollmentCount: number | null
    totalTaskCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PracticeSetCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    visibility: number
    status: number
    enrollmentCount: number
    totalTaskCount: number
    config: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PracticeSetAvgAggregateInputType = {
    enrollmentCount?: true
    totalTaskCount?: true
  }

  export type PracticeSetSumAggregateInputType = {
    enrollmentCount?: true
    totalTaskCount?: true
  }

  export type PracticeSetMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    visibility?: true
    status?: true
    enrollmentCount?: true
    totalTaskCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PracticeSetMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    visibility?: true
    status?: true
    enrollmentCount?: true
    totalTaskCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PracticeSetCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    visibility?: true
    status?: true
    enrollmentCount?: true
    totalTaskCount?: true
    config?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PracticeSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PracticeSet to aggregate.
     */
    where?: PracticeSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeSets to fetch.
     */
    orderBy?: PracticeSetOrderByWithRelationInput | PracticeSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PracticeSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PracticeSets
    **/
    _count?: true | PracticeSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PracticeSetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PracticeSetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PracticeSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PracticeSetMaxAggregateInputType
  }

  export type GetPracticeSetAggregateType<T extends PracticeSetAggregateArgs> = {
        [P in keyof T & keyof AggregatePracticeSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePracticeSet[P]>
      : GetScalarType<T[P], AggregatePracticeSet[P]>
  }




  export type PracticeSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PracticeSetWhereInput
    orderBy?: PracticeSetOrderByWithAggregationInput | PracticeSetOrderByWithAggregationInput[]
    by: PracticeSetScalarFieldEnum[] | PracticeSetScalarFieldEnum
    having?: PracticeSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PracticeSetCountAggregateInputType | true
    _avg?: PracticeSetAvgAggregateInputType
    _sum?: PracticeSetSumAggregateInputType
    _min?: PracticeSetMinAggregateInputType
    _max?: PracticeSetMaxAggregateInputType
  }

  export type PracticeSetGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: JsonValue | null
    visibility: $Enums.Visibility
    status: $Enums.Status
    enrollmentCount: number
    totalTaskCount: number
    config: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PracticeSetCountAggregateOutputType | null
    _avg: PracticeSetAvgAggregateOutputType | null
    _sum: PracticeSetSumAggregateOutputType | null
    _min: PracticeSetMinAggregateOutputType | null
    _max: PracticeSetMaxAggregateOutputType | null
  }

  type GetPracticeSetGroupByPayload<T extends PracticeSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PracticeSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PracticeSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PracticeSetGroupByOutputType[P]>
            : GetScalarType<T[P], PracticeSetGroupByOutputType[P]>
        }
      >
    >


  export type PracticeSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    visibility?: boolean
    status?: boolean
    enrollmentCount?: boolean
    totalTaskCount?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    practiceTasks?: boolean | PracticeSet$practiceTasksArgs<ExtArgs>
    userSubmitTasks?: boolean | PracticeSet$userSubmitTasksArgs<ExtArgs>
    userPracticeSets?: boolean | PracticeSet$userPracticeSetsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PracticeSetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practiceSet"]>

  export type PracticeSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    visibility?: boolean
    status?: boolean
    enrollmentCount?: boolean
    totalTaskCount?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practiceSet"]>

  export type PracticeSetSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    visibility?: boolean
    status?: boolean
    enrollmentCount?: boolean
    totalTaskCount?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PracticeSetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practiceTasks?: boolean | PracticeSet$practiceTasksArgs<ExtArgs>
    userSubmitTasks?: boolean | PracticeSet$userSubmitTasksArgs<ExtArgs>
    userPracticeSets?: boolean | PracticeSet$userPracticeSetsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PracticeSetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PracticeSetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PracticeSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PracticeSet"
    objects: {
      practiceTasks: Prisma.$PracticeTaskPayload<ExtArgs>[]
      userSubmitTasks: Prisma.$UserSubmitTaskPayload<ExtArgs>[]
      userPracticeSets: Prisma.$UserPracticeSetPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: Prisma.JsonValue | null
      visibility: $Enums.Visibility
      status: $Enums.Status
      enrollmentCount: number
      totalTaskCount: number
      config: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["practiceSet"]>
    composites: {}
  }

  type PracticeSetGetPayload<S extends boolean | null | undefined | PracticeSetDefaultArgs> = $Result.GetResult<Prisma.$PracticeSetPayload, S>

  type PracticeSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PracticeSetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PracticeSetCountAggregateInputType | true
    }

  export interface PracticeSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PracticeSet'], meta: { name: 'PracticeSet' } }
    /**
     * Find zero or one PracticeSet that matches the filter.
     * @param {PracticeSetFindUniqueArgs} args - Arguments to find a PracticeSet
     * @example
     * // Get one PracticeSet
     * const practiceSet = await prisma.practiceSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PracticeSetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PracticeSetFindUniqueArgs<ExtArgs>>
    ): Prisma__PracticeSetClient<$Result.GetResult<Prisma.$PracticeSetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PracticeSet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PracticeSetFindUniqueOrThrowArgs} args - Arguments to find a PracticeSet
     * @example
     * // Get one PracticeSet
     * const practiceSet = await prisma.practiceSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PracticeSetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PracticeSetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PracticeSetClient<$Result.GetResult<Prisma.$PracticeSetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PracticeSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSetFindFirstArgs} args - Arguments to find a PracticeSet
     * @example
     * // Get one PracticeSet
     * const practiceSet = await prisma.practiceSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PracticeSetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PracticeSetFindFirstArgs<ExtArgs>>
    ): Prisma__PracticeSetClient<$Result.GetResult<Prisma.$PracticeSetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PracticeSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSetFindFirstOrThrowArgs} args - Arguments to find a PracticeSet
     * @example
     * // Get one PracticeSet
     * const practiceSet = await prisma.practiceSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PracticeSetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PracticeSetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PracticeSetClient<$Result.GetResult<Prisma.$PracticeSetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PracticeSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PracticeSets
     * const practiceSets = await prisma.practiceSet.findMany()
     * 
     * // Get first 10 PracticeSets
     * const practiceSets = await prisma.practiceSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const practiceSetWithIdOnly = await prisma.practiceSet.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PracticeSetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PracticeSetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeSetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PracticeSet.
     * @param {PracticeSetCreateArgs} args - Arguments to create a PracticeSet.
     * @example
     * // Create one PracticeSet
     * const PracticeSet = await prisma.practiceSet.create({
     *   data: {
     *     // ... data to create a PracticeSet
     *   }
     * })
     * 
    **/
    create<T extends PracticeSetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PracticeSetCreateArgs<ExtArgs>>
    ): Prisma__PracticeSetClient<$Result.GetResult<Prisma.$PracticeSetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PracticeSets.
     * @param {PracticeSetCreateManyArgs} args - Arguments to create many PracticeSets.
     * @example
     * // Create many PracticeSets
     * const practiceSet = await prisma.practiceSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PracticeSetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PracticeSetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PracticeSets and returns the data saved in the database.
     * @param {PracticeSetCreateManyAndReturnArgs} args - Arguments to create many PracticeSets.
     * @example
     * // Create many PracticeSets
     * const practiceSet = await prisma.practiceSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PracticeSets and only return the `id`
     * const practiceSetWithIdOnly = await prisma.practiceSet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends PracticeSetCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PracticeSetCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeSetPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a PracticeSet.
     * @param {PracticeSetDeleteArgs} args - Arguments to delete one PracticeSet.
     * @example
     * // Delete one PracticeSet
     * const PracticeSet = await prisma.practiceSet.delete({
     *   where: {
     *     // ... filter to delete one PracticeSet
     *   }
     * })
     * 
    **/
    delete<T extends PracticeSetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PracticeSetDeleteArgs<ExtArgs>>
    ): Prisma__PracticeSetClient<$Result.GetResult<Prisma.$PracticeSetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PracticeSet.
     * @param {PracticeSetUpdateArgs} args - Arguments to update one PracticeSet.
     * @example
     * // Update one PracticeSet
     * const practiceSet = await prisma.practiceSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PracticeSetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PracticeSetUpdateArgs<ExtArgs>>
    ): Prisma__PracticeSetClient<$Result.GetResult<Prisma.$PracticeSetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PracticeSets.
     * @param {PracticeSetDeleteManyArgs} args - Arguments to filter PracticeSets to delete.
     * @example
     * // Delete a few PracticeSets
     * const { count } = await prisma.practiceSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PracticeSetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PracticeSetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PracticeSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PracticeSets
     * const practiceSet = await prisma.practiceSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PracticeSetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PracticeSetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PracticeSet.
     * @param {PracticeSetUpsertArgs} args - Arguments to update or create a PracticeSet.
     * @example
     * // Update or create a PracticeSet
     * const practiceSet = await prisma.practiceSet.upsert({
     *   create: {
     *     // ... data to create a PracticeSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PracticeSet we want to update
     *   }
     * })
    **/
    upsert<T extends PracticeSetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PracticeSetUpsertArgs<ExtArgs>>
    ): Prisma__PracticeSetClient<$Result.GetResult<Prisma.$PracticeSetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PracticeSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSetCountArgs} args - Arguments to filter PracticeSets to count.
     * @example
     * // Count the number of PracticeSets
     * const count = await prisma.practiceSet.count({
     *   where: {
     *     // ... the filter for the PracticeSets we want to count
     *   }
     * })
    **/
    count<T extends PracticeSetCountArgs>(
      args?: Subset<T, PracticeSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PracticeSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PracticeSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PracticeSetAggregateArgs>(args: Subset<T, PracticeSetAggregateArgs>): Prisma.PrismaPromise<GetPracticeSetAggregateType<T>>

    /**
     * Group by PracticeSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSetGroupByArgs} args - Group by arguments.
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
      T extends PracticeSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PracticeSetGroupByArgs['orderBy'] }
        : { orderBy?: PracticeSetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PracticeSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPracticeSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PracticeSet model
   */
  readonly fields: PracticeSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PracticeSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PracticeSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    practiceTasks<T extends PracticeSet$practiceTasksArgs<ExtArgs> = {}>(args?: Subset<T, PracticeSet$practiceTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    userSubmitTasks<T extends PracticeSet$userSubmitTasksArgs<ExtArgs> = {}>(args?: Subset<T, PracticeSet$userSubmitTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubmitTaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    userPracticeSets<T extends PracticeSet$userPracticeSetsArgs<ExtArgs> = {}>(args?: Subset<T, PracticeSet$userPracticeSetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPracticeSetPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PracticeSet model
   */ 
  interface PracticeSetFieldRefs {
    readonly id: FieldRef<"PracticeSet", 'String'>
    readonly userId: FieldRef<"PracticeSet", 'String'>
    readonly title: FieldRef<"PracticeSet", 'String'>
    readonly description: FieldRef<"PracticeSet", 'Json'>
    readonly visibility: FieldRef<"PracticeSet", 'Visibility'>
    readonly status: FieldRef<"PracticeSet", 'Status'>
    readonly enrollmentCount: FieldRef<"PracticeSet", 'Int'>
    readonly totalTaskCount: FieldRef<"PracticeSet", 'Int'>
    readonly config: FieldRef<"PracticeSet", 'Json'>
    readonly createdAt: FieldRef<"PracticeSet", 'DateTime'>
    readonly updatedAt: FieldRef<"PracticeSet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PracticeSet findUnique
   */
  export type PracticeSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSet
     */
    select?: PracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSetInclude<ExtArgs> | null
    /**
     * Filter, which PracticeSet to fetch.
     */
    where: PracticeSetWhereUniqueInput
  }

  /**
   * PracticeSet findUniqueOrThrow
   */
  export type PracticeSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSet
     */
    select?: PracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSetInclude<ExtArgs> | null
    /**
     * Filter, which PracticeSet to fetch.
     */
    where: PracticeSetWhereUniqueInput
  }

  /**
   * PracticeSet findFirst
   */
  export type PracticeSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSet
     */
    select?: PracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSetInclude<ExtArgs> | null
    /**
     * Filter, which PracticeSet to fetch.
     */
    where?: PracticeSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeSets to fetch.
     */
    orderBy?: PracticeSetOrderByWithRelationInput | PracticeSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PracticeSets.
     */
    cursor?: PracticeSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PracticeSets.
     */
    distinct?: PracticeSetScalarFieldEnum | PracticeSetScalarFieldEnum[]
  }

  /**
   * PracticeSet findFirstOrThrow
   */
  export type PracticeSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSet
     */
    select?: PracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSetInclude<ExtArgs> | null
    /**
     * Filter, which PracticeSet to fetch.
     */
    where?: PracticeSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeSets to fetch.
     */
    orderBy?: PracticeSetOrderByWithRelationInput | PracticeSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PracticeSets.
     */
    cursor?: PracticeSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PracticeSets.
     */
    distinct?: PracticeSetScalarFieldEnum | PracticeSetScalarFieldEnum[]
  }

  /**
   * PracticeSet findMany
   */
  export type PracticeSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSet
     */
    select?: PracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSetInclude<ExtArgs> | null
    /**
     * Filter, which PracticeSets to fetch.
     */
    where?: PracticeSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeSets to fetch.
     */
    orderBy?: PracticeSetOrderByWithRelationInput | PracticeSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PracticeSets.
     */
    cursor?: PracticeSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeSets.
     */
    skip?: number
    distinct?: PracticeSetScalarFieldEnum | PracticeSetScalarFieldEnum[]
  }

  /**
   * PracticeSet create
   */
  export type PracticeSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSet
     */
    select?: PracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSetInclude<ExtArgs> | null
    /**
     * The data needed to create a PracticeSet.
     */
    data: XOR<PracticeSetCreateInput, PracticeSetUncheckedCreateInput>
  }

  /**
   * PracticeSet createMany
   */
  export type PracticeSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PracticeSets.
     */
    data: PracticeSetCreateManyInput | PracticeSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PracticeSet createManyAndReturn
   */
  export type PracticeSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSet
     */
    select?: PracticeSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PracticeSets.
     */
    data: PracticeSetCreateManyInput | PracticeSetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PracticeSet update
   */
  export type PracticeSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSet
     */
    select?: PracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSetInclude<ExtArgs> | null
    /**
     * The data needed to update a PracticeSet.
     */
    data: XOR<PracticeSetUpdateInput, PracticeSetUncheckedUpdateInput>
    /**
     * Choose, which PracticeSet to update.
     */
    where: PracticeSetWhereUniqueInput
  }

  /**
   * PracticeSet updateMany
   */
  export type PracticeSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PracticeSets.
     */
    data: XOR<PracticeSetUpdateManyMutationInput, PracticeSetUncheckedUpdateManyInput>
    /**
     * Filter which PracticeSets to update
     */
    where?: PracticeSetWhereInput
  }

  /**
   * PracticeSet upsert
   */
  export type PracticeSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSet
     */
    select?: PracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSetInclude<ExtArgs> | null
    /**
     * The filter to search for the PracticeSet to update in case it exists.
     */
    where: PracticeSetWhereUniqueInput
    /**
     * In case the PracticeSet found by the `where` argument doesn't exist, create a new PracticeSet with this data.
     */
    create: XOR<PracticeSetCreateInput, PracticeSetUncheckedCreateInput>
    /**
     * In case the PracticeSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PracticeSetUpdateInput, PracticeSetUncheckedUpdateInput>
  }

  /**
   * PracticeSet delete
   */
  export type PracticeSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSet
     */
    select?: PracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSetInclude<ExtArgs> | null
    /**
     * Filter which PracticeSet to delete.
     */
    where: PracticeSetWhereUniqueInput
  }

  /**
   * PracticeSet deleteMany
   */
  export type PracticeSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PracticeSets to delete
     */
    where?: PracticeSetWhereInput
  }

  /**
   * PracticeSet.practiceTasks
   */
  export type PracticeSet$practiceTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTask
     */
    select?: PracticeTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeTaskInclude<ExtArgs> | null
    where?: PracticeTaskWhereInput
    orderBy?: PracticeTaskOrderByWithRelationInput | PracticeTaskOrderByWithRelationInput[]
    cursor?: PracticeTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticeTaskScalarFieldEnum | PracticeTaskScalarFieldEnum[]
  }

  /**
   * PracticeSet.userSubmitTasks
   */
  export type PracticeSet$userSubmitTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskInclude<ExtArgs> | null
    where?: UserSubmitTaskWhereInput
    orderBy?: UserSubmitTaskOrderByWithRelationInput | UserSubmitTaskOrderByWithRelationInput[]
    cursor?: UserSubmitTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubmitTaskScalarFieldEnum | UserSubmitTaskScalarFieldEnum[]
  }

  /**
   * PracticeSet.userPracticeSets
   */
  export type PracticeSet$userPracticeSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPracticeSet
     */
    select?: UserPracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPracticeSetInclude<ExtArgs> | null
    where?: UserPracticeSetWhereInput
    orderBy?: UserPracticeSetOrderByWithRelationInput | UserPracticeSetOrderByWithRelationInput[]
    cursor?: UserPracticeSetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPracticeSetScalarFieldEnum | UserPracticeSetScalarFieldEnum[]
  }

  /**
   * PracticeSet without action
   */
  export type PracticeSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSet
     */
    select?: PracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeSetInclude<ExtArgs> | null
  }


  /**
   * Model UserPracticeSet
   */

  export type AggregateUserPracticeSet = {
    _count: UserPracticeSetCountAggregateOutputType | null
    _min: UserPracticeSetMinAggregateOutputType | null
    _max: UserPracticeSetMaxAggregateOutputType | null
  }

  export type UserPracticeSetMinAggregateOutputType = {
    id: string | null
    practiceSetId: string | null
    userId: string | null
    status: $Enums.Status | null
  }

  export type UserPracticeSetMaxAggregateOutputType = {
    id: string | null
    practiceSetId: string | null
    userId: string | null
    status: $Enums.Status | null
  }

  export type UserPracticeSetCountAggregateOutputType = {
    id: number
    practiceSetId: number
    userId: number
    status: number
    _all: number
  }


  export type UserPracticeSetMinAggregateInputType = {
    id?: true
    practiceSetId?: true
    userId?: true
    status?: true
  }

  export type UserPracticeSetMaxAggregateInputType = {
    id?: true
    practiceSetId?: true
    userId?: true
    status?: true
  }

  export type UserPracticeSetCountAggregateInputType = {
    id?: true
    practiceSetId?: true
    userId?: true
    status?: true
    _all?: true
  }

  export type UserPracticeSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPracticeSet to aggregate.
     */
    where?: UserPracticeSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPracticeSets to fetch.
     */
    orderBy?: UserPracticeSetOrderByWithRelationInput | UserPracticeSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPracticeSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPracticeSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPracticeSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPracticeSets
    **/
    _count?: true | UserPracticeSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPracticeSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPracticeSetMaxAggregateInputType
  }

  export type GetUserPracticeSetAggregateType<T extends UserPracticeSetAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPracticeSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPracticeSet[P]>
      : GetScalarType<T[P], AggregateUserPracticeSet[P]>
  }




  export type UserPracticeSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPracticeSetWhereInput
    orderBy?: UserPracticeSetOrderByWithAggregationInput | UserPracticeSetOrderByWithAggregationInput[]
    by: UserPracticeSetScalarFieldEnum[] | UserPracticeSetScalarFieldEnum
    having?: UserPracticeSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPracticeSetCountAggregateInputType | true
    _min?: UserPracticeSetMinAggregateInputType
    _max?: UserPracticeSetMaxAggregateInputType
  }

  export type UserPracticeSetGroupByOutputType = {
    id: string
    practiceSetId: string
    userId: string
    status: $Enums.Status
    _count: UserPracticeSetCountAggregateOutputType | null
    _min: UserPracticeSetMinAggregateOutputType | null
    _max: UserPracticeSetMaxAggregateOutputType | null
  }

  type GetUserPracticeSetGroupByPayload<T extends UserPracticeSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPracticeSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPracticeSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPracticeSetGroupByOutputType[P]>
            : GetScalarType<T[P], UserPracticeSetGroupByOutputType[P]>
        }
      >
    >


  export type UserPracticeSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    practiceSetId?: boolean
    userId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceSet?: boolean | PracticeSetDefaultArgs<ExtArgs>
    userSubmitTasks?: boolean | UserPracticeSet$userSubmitTasksArgs<ExtArgs>
    _count?: boolean | UserPracticeSetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPracticeSet"]>

  export type UserPracticeSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    practiceSetId?: boolean
    userId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceSet?: boolean | PracticeSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPracticeSet"]>

  export type UserPracticeSetSelectScalar = {
    id?: boolean
    practiceSetId?: boolean
    userId?: boolean
    status?: boolean
  }

  export type UserPracticeSetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceSet?: boolean | PracticeSetDefaultArgs<ExtArgs>
    userSubmitTasks?: boolean | UserPracticeSet$userSubmitTasksArgs<ExtArgs>
    _count?: boolean | UserPracticeSetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserPracticeSetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceSet?: boolean | PracticeSetDefaultArgs<ExtArgs>
  }

  export type $UserPracticeSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPracticeSet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      practiceSet: Prisma.$PracticeSetPayload<ExtArgs>
      userSubmitTasks: Prisma.$UserSubmitTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      practiceSetId: string
      userId: string
      status: $Enums.Status
    }, ExtArgs["result"]["userPracticeSet"]>
    composites: {}
  }

  type UserPracticeSetGetPayload<S extends boolean | null | undefined | UserPracticeSetDefaultArgs> = $Result.GetResult<Prisma.$UserPracticeSetPayload, S>

  type UserPracticeSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPracticeSetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPracticeSetCountAggregateInputType | true
    }

  export interface UserPracticeSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPracticeSet'], meta: { name: 'UserPracticeSet' } }
    /**
     * Find zero or one UserPracticeSet that matches the filter.
     * @param {UserPracticeSetFindUniqueArgs} args - Arguments to find a UserPracticeSet
     * @example
     * // Get one UserPracticeSet
     * const userPracticeSet = await prisma.userPracticeSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserPracticeSetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserPracticeSetFindUniqueArgs<ExtArgs>>
    ): Prisma__UserPracticeSetClient<$Result.GetResult<Prisma.$UserPracticeSetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserPracticeSet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserPracticeSetFindUniqueOrThrowArgs} args - Arguments to find a UserPracticeSet
     * @example
     * // Get one UserPracticeSet
     * const userPracticeSet = await prisma.userPracticeSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserPracticeSetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPracticeSetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserPracticeSetClient<$Result.GetResult<Prisma.$UserPracticeSetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserPracticeSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPracticeSetFindFirstArgs} args - Arguments to find a UserPracticeSet
     * @example
     * // Get one UserPracticeSet
     * const userPracticeSet = await prisma.userPracticeSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserPracticeSetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPracticeSetFindFirstArgs<ExtArgs>>
    ): Prisma__UserPracticeSetClient<$Result.GetResult<Prisma.$UserPracticeSetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserPracticeSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPracticeSetFindFirstOrThrowArgs} args - Arguments to find a UserPracticeSet
     * @example
     * // Get one UserPracticeSet
     * const userPracticeSet = await prisma.userPracticeSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserPracticeSetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPracticeSetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserPracticeSetClient<$Result.GetResult<Prisma.$UserPracticeSetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserPracticeSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPracticeSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPracticeSets
     * const userPracticeSets = await prisma.userPracticeSet.findMany()
     * 
     * // Get first 10 UserPracticeSets
     * const userPracticeSets = await prisma.userPracticeSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPracticeSetWithIdOnly = await prisma.userPracticeSet.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserPracticeSetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPracticeSetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPracticeSetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserPracticeSet.
     * @param {UserPracticeSetCreateArgs} args - Arguments to create a UserPracticeSet.
     * @example
     * // Create one UserPracticeSet
     * const UserPracticeSet = await prisma.userPracticeSet.create({
     *   data: {
     *     // ... data to create a UserPracticeSet
     *   }
     * })
     * 
    **/
    create<T extends UserPracticeSetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserPracticeSetCreateArgs<ExtArgs>>
    ): Prisma__UserPracticeSetClient<$Result.GetResult<Prisma.$UserPracticeSetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserPracticeSets.
     * @param {UserPracticeSetCreateManyArgs} args - Arguments to create many UserPracticeSets.
     * @example
     * // Create many UserPracticeSets
     * const userPracticeSet = await prisma.userPracticeSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserPracticeSetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPracticeSetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPracticeSets and returns the data saved in the database.
     * @param {UserPracticeSetCreateManyAndReturnArgs} args - Arguments to create many UserPracticeSets.
     * @example
     * // Create many UserPracticeSets
     * const userPracticeSet = await prisma.userPracticeSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPracticeSets and only return the `id`
     * const userPracticeSetWithIdOnly = await prisma.userPracticeSet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserPracticeSetCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPracticeSetCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPracticeSetPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a UserPracticeSet.
     * @param {UserPracticeSetDeleteArgs} args - Arguments to delete one UserPracticeSet.
     * @example
     * // Delete one UserPracticeSet
     * const UserPracticeSet = await prisma.userPracticeSet.delete({
     *   where: {
     *     // ... filter to delete one UserPracticeSet
     *   }
     * })
     * 
    **/
    delete<T extends UserPracticeSetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserPracticeSetDeleteArgs<ExtArgs>>
    ): Prisma__UserPracticeSetClient<$Result.GetResult<Prisma.$UserPracticeSetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserPracticeSet.
     * @param {UserPracticeSetUpdateArgs} args - Arguments to update one UserPracticeSet.
     * @example
     * // Update one UserPracticeSet
     * const userPracticeSet = await prisma.userPracticeSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserPracticeSetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserPracticeSetUpdateArgs<ExtArgs>>
    ): Prisma__UserPracticeSetClient<$Result.GetResult<Prisma.$UserPracticeSetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserPracticeSets.
     * @param {UserPracticeSetDeleteManyArgs} args - Arguments to filter UserPracticeSets to delete.
     * @example
     * // Delete a few UserPracticeSets
     * const { count } = await prisma.userPracticeSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserPracticeSetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPracticeSetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPracticeSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPracticeSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPracticeSets
     * const userPracticeSet = await prisma.userPracticeSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserPracticeSetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserPracticeSetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPracticeSet.
     * @param {UserPracticeSetUpsertArgs} args - Arguments to update or create a UserPracticeSet.
     * @example
     * // Update or create a UserPracticeSet
     * const userPracticeSet = await prisma.userPracticeSet.upsert({
     *   create: {
     *     // ... data to create a UserPracticeSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPracticeSet we want to update
     *   }
     * })
    **/
    upsert<T extends UserPracticeSetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserPracticeSetUpsertArgs<ExtArgs>>
    ): Prisma__UserPracticeSetClient<$Result.GetResult<Prisma.$UserPracticeSetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserPracticeSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPracticeSetCountArgs} args - Arguments to filter UserPracticeSets to count.
     * @example
     * // Count the number of UserPracticeSets
     * const count = await prisma.userPracticeSet.count({
     *   where: {
     *     // ... the filter for the UserPracticeSets we want to count
     *   }
     * })
    **/
    count<T extends UserPracticeSetCountArgs>(
      args?: Subset<T, UserPracticeSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPracticeSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPracticeSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPracticeSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPracticeSetAggregateArgs>(args: Subset<T, UserPracticeSetAggregateArgs>): Prisma.PrismaPromise<GetUserPracticeSetAggregateType<T>>

    /**
     * Group by UserPracticeSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPracticeSetGroupByArgs} args - Group by arguments.
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
      T extends UserPracticeSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPracticeSetGroupByArgs['orderBy'] }
        : { orderBy?: UserPracticeSetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPracticeSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPracticeSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPracticeSet model
   */
  readonly fields: UserPracticeSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPracticeSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPracticeSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    practiceSet<T extends PracticeSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PracticeSetDefaultArgs<ExtArgs>>): Prisma__PracticeSetClient<$Result.GetResult<Prisma.$PracticeSetPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    userSubmitTasks<T extends UserPracticeSet$userSubmitTasksArgs<ExtArgs> = {}>(args?: Subset<T, UserPracticeSet$userSubmitTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubmitTaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserPracticeSet model
   */ 
  interface UserPracticeSetFieldRefs {
    readonly id: FieldRef<"UserPracticeSet", 'String'>
    readonly practiceSetId: FieldRef<"UserPracticeSet", 'String'>
    readonly userId: FieldRef<"UserPracticeSet", 'String'>
    readonly status: FieldRef<"UserPracticeSet", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * UserPracticeSet findUnique
   */
  export type UserPracticeSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPracticeSet
     */
    select?: UserPracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPracticeSetInclude<ExtArgs> | null
    /**
     * Filter, which UserPracticeSet to fetch.
     */
    where: UserPracticeSetWhereUniqueInput
  }

  /**
   * UserPracticeSet findUniqueOrThrow
   */
  export type UserPracticeSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPracticeSet
     */
    select?: UserPracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPracticeSetInclude<ExtArgs> | null
    /**
     * Filter, which UserPracticeSet to fetch.
     */
    where: UserPracticeSetWhereUniqueInput
  }

  /**
   * UserPracticeSet findFirst
   */
  export type UserPracticeSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPracticeSet
     */
    select?: UserPracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPracticeSetInclude<ExtArgs> | null
    /**
     * Filter, which UserPracticeSet to fetch.
     */
    where?: UserPracticeSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPracticeSets to fetch.
     */
    orderBy?: UserPracticeSetOrderByWithRelationInput | UserPracticeSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPracticeSets.
     */
    cursor?: UserPracticeSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPracticeSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPracticeSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPracticeSets.
     */
    distinct?: UserPracticeSetScalarFieldEnum | UserPracticeSetScalarFieldEnum[]
  }

  /**
   * UserPracticeSet findFirstOrThrow
   */
  export type UserPracticeSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPracticeSet
     */
    select?: UserPracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPracticeSetInclude<ExtArgs> | null
    /**
     * Filter, which UserPracticeSet to fetch.
     */
    where?: UserPracticeSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPracticeSets to fetch.
     */
    orderBy?: UserPracticeSetOrderByWithRelationInput | UserPracticeSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPracticeSets.
     */
    cursor?: UserPracticeSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPracticeSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPracticeSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPracticeSets.
     */
    distinct?: UserPracticeSetScalarFieldEnum | UserPracticeSetScalarFieldEnum[]
  }

  /**
   * UserPracticeSet findMany
   */
  export type UserPracticeSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPracticeSet
     */
    select?: UserPracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPracticeSetInclude<ExtArgs> | null
    /**
     * Filter, which UserPracticeSets to fetch.
     */
    where?: UserPracticeSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPracticeSets to fetch.
     */
    orderBy?: UserPracticeSetOrderByWithRelationInput | UserPracticeSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPracticeSets.
     */
    cursor?: UserPracticeSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPracticeSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPracticeSets.
     */
    skip?: number
    distinct?: UserPracticeSetScalarFieldEnum | UserPracticeSetScalarFieldEnum[]
  }

  /**
   * UserPracticeSet create
   */
  export type UserPracticeSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPracticeSet
     */
    select?: UserPracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPracticeSetInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPracticeSet.
     */
    data: XOR<UserPracticeSetCreateInput, UserPracticeSetUncheckedCreateInput>
  }

  /**
   * UserPracticeSet createMany
   */
  export type UserPracticeSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPracticeSets.
     */
    data: UserPracticeSetCreateManyInput | UserPracticeSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPracticeSet createManyAndReturn
   */
  export type UserPracticeSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPracticeSet
     */
    select?: UserPracticeSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserPracticeSets.
     */
    data: UserPracticeSetCreateManyInput | UserPracticeSetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPracticeSetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPracticeSet update
   */
  export type UserPracticeSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPracticeSet
     */
    select?: UserPracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPracticeSetInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPracticeSet.
     */
    data: XOR<UserPracticeSetUpdateInput, UserPracticeSetUncheckedUpdateInput>
    /**
     * Choose, which UserPracticeSet to update.
     */
    where: UserPracticeSetWhereUniqueInput
  }

  /**
   * UserPracticeSet updateMany
   */
  export type UserPracticeSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPracticeSets.
     */
    data: XOR<UserPracticeSetUpdateManyMutationInput, UserPracticeSetUncheckedUpdateManyInput>
    /**
     * Filter which UserPracticeSets to update
     */
    where?: UserPracticeSetWhereInput
  }

  /**
   * UserPracticeSet upsert
   */
  export type UserPracticeSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPracticeSet
     */
    select?: UserPracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPracticeSetInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPracticeSet to update in case it exists.
     */
    where: UserPracticeSetWhereUniqueInput
    /**
     * In case the UserPracticeSet found by the `where` argument doesn't exist, create a new UserPracticeSet with this data.
     */
    create: XOR<UserPracticeSetCreateInput, UserPracticeSetUncheckedCreateInput>
    /**
     * In case the UserPracticeSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPracticeSetUpdateInput, UserPracticeSetUncheckedUpdateInput>
  }

  /**
   * UserPracticeSet delete
   */
  export type UserPracticeSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPracticeSet
     */
    select?: UserPracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPracticeSetInclude<ExtArgs> | null
    /**
     * Filter which UserPracticeSet to delete.
     */
    where: UserPracticeSetWhereUniqueInput
  }

  /**
   * UserPracticeSet deleteMany
   */
  export type UserPracticeSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPracticeSets to delete
     */
    where?: UserPracticeSetWhereInput
  }

  /**
   * UserPracticeSet.userSubmitTasks
   */
  export type UserPracticeSet$userSubmitTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskInclude<ExtArgs> | null
    where?: UserSubmitTaskWhereInput
    orderBy?: UserSubmitTaskOrderByWithRelationInput | UserSubmitTaskOrderByWithRelationInput[]
    cursor?: UserSubmitTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubmitTaskScalarFieldEnum | UserSubmitTaskScalarFieldEnum[]
  }

  /**
   * UserPracticeSet without action
   */
  export type UserPracticeSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPracticeSet
     */
    select?: UserPracticeSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPracticeSetInclude<ExtArgs> | null
  }


  /**
   * Model PracticeTask
   */

  export type AggregatePracticeTask = {
    _count: PracticeTaskCountAggregateOutputType | null
    _avg: PracticeTaskAvgAggregateOutputType | null
    _sum: PracticeTaskSumAggregateOutputType | null
    _min: PracticeTaskMinAggregateOutputType | null
    _max: PracticeTaskMaxAggregateOutputType | null
  }

  export type PracticeTaskAvgAggregateOutputType = {
    index: number | null
    completionCount: number | null
  }

  export type PracticeTaskSumAggregateOutputType = {
    index: number | null
    completionCount: number | null
  }

  export type PracticeTaskMinAggregateOutputType = {
    index: number | null
    id: string | null
    userId: string | null
    practiceSetId: string | null
    title: string | null
    visibility: $Enums.Visibility | null
    completionCount: number | null
    status: $Enums.Status | null
    taskType: $Enums.TaskType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PracticeTaskMaxAggregateOutputType = {
    index: number | null
    id: string | null
    userId: string | null
    practiceSetId: string | null
    title: string | null
    visibility: $Enums.Visibility | null
    completionCount: number | null
    status: $Enums.Status | null
    taskType: $Enums.TaskType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PracticeTaskCountAggregateOutputType = {
    index: number
    id: number
    userId: number
    practiceSetId: number
    title: number
    description: number
    visibility: number
    completionCount: number
    status: number
    taskType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PracticeTaskAvgAggregateInputType = {
    index?: true
    completionCount?: true
  }

  export type PracticeTaskSumAggregateInputType = {
    index?: true
    completionCount?: true
  }

  export type PracticeTaskMinAggregateInputType = {
    index?: true
    id?: true
    userId?: true
    practiceSetId?: true
    title?: true
    visibility?: true
    completionCount?: true
    status?: true
    taskType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PracticeTaskMaxAggregateInputType = {
    index?: true
    id?: true
    userId?: true
    practiceSetId?: true
    title?: true
    visibility?: true
    completionCount?: true
    status?: true
    taskType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PracticeTaskCountAggregateInputType = {
    index?: true
    id?: true
    userId?: true
    practiceSetId?: true
    title?: true
    description?: true
    visibility?: true
    completionCount?: true
    status?: true
    taskType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PracticeTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PracticeTask to aggregate.
     */
    where?: PracticeTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeTasks to fetch.
     */
    orderBy?: PracticeTaskOrderByWithRelationInput | PracticeTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PracticeTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PracticeTasks
    **/
    _count?: true | PracticeTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PracticeTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PracticeTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PracticeTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PracticeTaskMaxAggregateInputType
  }

  export type GetPracticeTaskAggregateType<T extends PracticeTaskAggregateArgs> = {
        [P in keyof T & keyof AggregatePracticeTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePracticeTask[P]>
      : GetScalarType<T[P], AggregatePracticeTask[P]>
  }




  export type PracticeTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PracticeTaskWhereInput
    orderBy?: PracticeTaskOrderByWithAggregationInput | PracticeTaskOrderByWithAggregationInput[]
    by: PracticeTaskScalarFieldEnum[] | PracticeTaskScalarFieldEnum
    having?: PracticeTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PracticeTaskCountAggregateInputType | true
    _avg?: PracticeTaskAvgAggregateInputType
    _sum?: PracticeTaskSumAggregateInputType
    _min?: PracticeTaskMinAggregateInputType
    _max?: PracticeTaskMaxAggregateInputType
  }

  export type PracticeTaskGroupByOutputType = {
    index: number
    id: string
    userId: string
    practiceSetId: string
    title: string
    description: JsonValue | null
    visibility: $Enums.Visibility
    completionCount: number
    status: $Enums.Status
    taskType: $Enums.TaskType
    createdAt: Date
    updatedAt: Date
    _count: PracticeTaskCountAggregateOutputType | null
    _avg: PracticeTaskAvgAggregateOutputType | null
    _sum: PracticeTaskSumAggregateOutputType | null
    _min: PracticeTaskMinAggregateOutputType | null
    _max: PracticeTaskMaxAggregateOutputType | null
  }

  type GetPracticeTaskGroupByPayload<T extends PracticeTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PracticeTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PracticeTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PracticeTaskGroupByOutputType[P]>
            : GetScalarType<T[P], PracticeTaskGroupByOutputType[P]>
        }
      >
    >


  export type PracticeTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    id?: boolean
    userId?: boolean
    practiceSetId?: boolean
    title?: boolean
    description?: boolean
    visibility?: boolean
    completionCount?: boolean
    status?: boolean
    taskType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceSet?: boolean | PracticeSetDefaultArgs<ExtArgs>
    userSubmitTasks?: boolean | PracticeTask$userSubmitTasksArgs<ExtArgs>
    userTaskMetadatas?: boolean | PracticeTask$userTaskMetadatasArgs<ExtArgs>
    taskTags?: boolean | PracticeTask$taskTagsArgs<ExtArgs>
    _count?: boolean | PracticeTaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practiceTask"]>

  export type PracticeTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    id?: boolean
    userId?: boolean
    practiceSetId?: boolean
    title?: boolean
    description?: boolean
    visibility?: boolean
    completionCount?: boolean
    status?: boolean
    taskType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceSet?: boolean | PracticeSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practiceTask"]>

  export type PracticeTaskSelectScalar = {
    index?: boolean
    id?: boolean
    userId?: boolean
    practiceSetId?: boolean
    title?: boolean
    description?: boolean
    visibility?: boolean
    completionCount?: boolean
    status?: boolean
    taskType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PracticeTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceSet?: boolean | PracticeSetDefaultArgs<ExtArgs>
    userSubmitTasks?: boolean | PracticeTask$userSubmitTasksArgs<ExtArgs>
    userTaskMetadatas?: boolean | PracticeTask$userTaskMetadatasArgs<ExtArgs>
    taskTags?: boolean | PracticeTask$taskTagsArgs<ExtArgs>
    _count?: boolean | PracticeTaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PracticeTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceSet?: boolean | PracticeSetDefaultArgs<ExtArgs>
  }

  export type $PracticeTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PracticeTask"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      practiceSet: Prisma.$PracticeSetPayload<ExtArgs>
      userSubmitTasks: Prisma.$UserSubmitTaskPayload<ExtArgs>[]
      userTaskMetadatas: Prisma.$UserTaskMetadataPayload<ExtArgs>[]
      taskTags: Prisma.$TaskTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      index: number
      id: string
      userId: string
      practiceSetId: string
      title: string
      description: Prisma.JsonValue | null
      visibility: $Enums.Visibility
      completionCount: number
      status: $Enums.Status
      taskType: $Enums.TaskType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["practiceTask"]>
    composites: {}
  }

  type PracticeTaskGetPayload<S extends boolean | null | undefined | PracticeTaskDefaultArgs> = $Result.GetResult<Prisma.$PracticeTaskPayload, S>

  type PracticeTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PracticeTaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PracticeTaskCountAggregateInputType | true
    }

  export interface PracticeTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PracticeTask'], meta: { name: 'PracticeTask' } }
    /**
     * Find zero or one PracticeTask that matches the filter.
     * @param {PracticeTaskFindUniqueArgs} args - Arguments to find a PracticeTask
     * @example
     * // Get one PracticeTask
     * const practiceTask = await prisma.practiceTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PracticeTaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PracticeTaskFindUniqueArgs<ExtArgs>>
    ): Prisma__PracticeTaskClient<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PracticeTask that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PracticeTaskFindUniqueOrThrowArgs} args - Arguments to find a PracticeTask
     * @example
     * // Get one PracticeTask
     * const practiceTask = await prisma.practiceTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PracticeTaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PracticeTaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PracticeTaskClient<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PracticeTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeTaskFindFirstArgs} args - Arguments to find a PracticeTask
     * @example
     * // Get one PracticeTask
     * const practiceTask = await prisma.practiceTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PracticeTaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PracticeTaskFindFirstArgs<ExtArgs>>
    ): Prisma__PracticeTaskClient<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PracticeTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeTaskFindFirstOrThrowArgs} args - Arguments to find a PracticeTask
     * @example
     * // Get one PracticeTask
     * const practiceTask = await prisma.practiceTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PracticeTaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PracticeTaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PracticeTaskClient<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PracticeTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PracticeTasks
     * const practiceTasks = await prisma.practiceTask.findMany()
     * 
     * // Get first 10 PracticeTasks
     * const practiceTasks = await prisma.practiceTask.findMany({ take: 10 })
     * 
     * // Only select the `index`
     * const practiceTaskWithIndexOnly = await prisma.practiceTask.findMany({ select: { index: true } })
     * 
    **/
    findMany<T extends PracticeTaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PracticeTaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PracticeTask.
     * @param {PracticeTaskCreateArgs} args - Arguments to create a PracticeTask.
     * @example
     * // Create one PracticeTask
     * const PracticeTask = await prisma.practiceTask.create({
     *   data: {
     *     // ... data to create a PracticeTask
     *   }
     * })
     * 
    **/
    create<T extends PracticeTaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PracticeTaskCreateArgs<ExtArgs>>
    ): Prisma__PracticeTaskClient<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PracticeTasks.
     * @param {PracticeTaskCreateManyArgs} args - Arguments to create many PracticeTasks.
     * @example
     * // Create many PracticeTasks
     * const practiceTask = await prisma.practiceTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PracticeTaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PracticeTaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PracticeTasks and returns the data saved in the database.
     * @param {PracticeTaskCreateManyAndReturnArgs} args - Arguments to create many PracticeTasks.
     * @example
     * // Create many PracticeTasks
     * const practiceTask = await prisma.practiceTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PracticeTasks and only return the `index`
     * const practiceTaskWithIndexOnly = await prisma.practiceTask.createManyAndReturn({ 
     *   select: { index: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends PracticeTaskCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PracticeTaskCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a PracticeTask.
     * @param {PracticeTaskDeleteArgs} args - Arguments to delete one PracticeTask.
     * @example
     * // Delete one PracticeTask
     * const PracticeTask = await prisma.practiceTask.delete({
     *   where: {
     *     // ... filter to delete one PracticeTask
     *   }
     * })
     * 
    **/
    delete<T extends PracticeTaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PracticeTaskDeleteArgs<ExtArgs>>
    ): Prisma__PracticeTaskClient<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PracticeTask.
     * @param {PracticeTaskUpdateArgs} args - Arguments to update one PracticeTask.
     * @example
     * // Update one PracticeTask
     * const practiceTask = await prisma.practiceTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PracticeTaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PracticeTaskUpdateArgs<ExtArgs>>
    ): Prisma__PracticeTaskClient<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PracticeTasks.
     * @param {PracticeTaskDeleteManyArgs} args - Arguments to filter PracticeTasks to delete.
     * @example
     * // Delete a few PracticeTasks
     * const { count } = await prisma.practiceTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PracticeTaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PracticeTaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PracticeTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PracticeTasks
     * const practiceTask = await prisma.practiceTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PracticeTaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PracticeTaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PracticeTask.
     * @param {PracticeTaskUpsertArgs} args - Arguments to update or create a PracticeTask.
     * @example
     * // Update or create a PracticeTask
     * const practiceTask = await prisma.practiceTask.upsert({
     *   create: {
     *     // ... data to create a PracticeTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PracticeTask we want to update
     *   }
     * })
    **/
    upsert<T extends PracticeTaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PracticeTaskUpsertArgs<ExtArgs>>
    ): Prisma__PracticeTaskClient<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PracticeTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeTaskCountArgs} args - Arguments to filter PracticeTasks to count.
     * @example
     * // Count the number of PracticeTasks
     * const count = await prisma.practiceTask.count({
     *   where: {
     *     // ... the filter for the PracticeTasks we want to count
     *   }
     * })
    **/
    count<T extends PracticeTaskCountArgs>(
      args?: Subset<T, PracticeTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PracticeTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PracticeTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PracticeTaskAggregateArgs>(args: Subset<T, PracticeTaskAggregateArgs>): Prisma.PrismaPromise<GetPracticeTaskAggregateType<T>>

    /**
     * Group by PracticeTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeTaskGroupByArgs} args - Group by arguments.
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
      T extends PracticeTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PracticeTaskGroupByArgs['orderBy'] }
        : { orderBy?: PracticeTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PracticeTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPracticeTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PracticeTask model
   */
  readonly fields: PracticeTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PracticeTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PracticeTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    practiceSet<T extends PracticeSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PracticeSetDefaultArgs<ExtArgs>>): Prisma__PracticeSetClient<$Result.GetResult<Prisma.$PracticeSetPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    userSubmitTasks<T extends PracticeTask$userSubmitTasksArgs<ExtArgs> = {}>(args?: Subset<T, PracticeTask$userSubmitTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubmitTaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    userTaskMetadatas<T extends PracticeTask$userTaskMetadatasArgs<ExtArgs> = {}>(args?: Subset<T, PracticeTask$userTaskMetadatasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskMetadataPayload<ExtArgs>, T, 'findMany'> | Null>;

    taskTags<T extends PracticeTask$taskTagsArgs<ExtArgs> = {}>(args?: Subset<T, PracticeTask$taskTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PracticeTask model
   */ 
  interface PracticeTaskFieldRefs {
    readonly index: FieldRef<"PracticeTask", 'Int'>
    readonly id: FieldRef<"PracticeTask", 'String'>
    readonly userId: FieldRef<"PracticeTask", 'String'>
    readonly practiceSetId: FieldRef<"PracticeTask", 'String'>
    readonly title: FieldRef<"PracticeTask", 'String'>
    readonly description: FieldRef<"PracticeTask", 'Json'>
    readonly visibility: FieldRef<"PracticeTask", 'Visibility'>
    readonly completionCount: FieldRef<"PracticeTask", 'Int'>
    readonly status: FieldRef<"PracticeTask", 'Status'>
    readonly taskType: FieldRef<"PracticeTask", 'TaskType'>
    readonly createdAt: FieldRef<"PracticeTask", 'DateTime'>
    readonly updatedAt: FieldRef<"PracticeTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PracticeTask findUnique
   */
  export type PracticeTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTask
     */
    select?: PracticeTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeTaskInclude<ExtArgs> | null
    /**
     * Filter, which PracticeTask to fetch.
     */
    where: PracticeTaskWhereUniqueInput
  }

  /**
   * PracticeTask findUniqueOrThrow
   */
  export type PracticeTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTask
     */
    select?: PracticeTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeTaskInclude<ExtArgs> | null
    /**
     * Filter, which PracticeTask to fetch.
     */
    where: PracticeTaskWhereUniqueInput
  }

  /**
   * PracticeTask findFirst
   */
  export type PracticeTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTask
     */
    select?: PracticeTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeTaskInclude<ExtArgs> | null
    /**
     * Filter, which PracticeTask to fetch.
     */
    where?: PracticeTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeTasks to fetch.
     */
    orderBy?: PracticeTaskOrderByWithRelationInput | PracticeTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PracticeTasks.
     */
    cursor?: PracticeTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PracticeTasks.
     */
    distinct?: PracticeTaskScalarFieldEnum | PracticeTaskScalarFieldEnum[]
  }

  /**
   * PracticeTask findFirstOrThrow
   */
  export type PracticeTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTask
     */
    select?: PracticeTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeTaskInclude<ExtArgs> | null
    /**
     * Filter, which PracticeTask to fetch.
     */
    where?: PracticeTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeTasks to fetch.
     */
    orderBy?: PracticeTaskOrderByWithRelationInput | PracticeTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PracticeTasks.
     */
    cursor?: PracticeTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PracticeTasks.
     */
    distinct?: PracticeTaskScalarFieldEnum | PracticeTaskScalarFieldEnum[]
  }

  /**
   * PracticeTask findMany
   */
  export type PracticeTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTask
     */
    select?: PracticeTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeTaskInclude<ExtArgs> | null
    /**
     * Filter, which PracticeTasks to fetch.
     */
    where?: PracticeTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeTasks to fetch.
     */
    orderBy?: PracticeTaskOrderByWithRelationInput | PracticeTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PracticeTasks.
     */
    cursor?: PracticeTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeTasks.
     */
    skip?: number
    distinct?: PracticeTaskScalarFieldEnum | PracticeTaskScalarFieldEnum[]
  }

  /**
   * PracticeTask create
   */
  export type PracticeTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTask
     */
    select?: PracticeTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a PracticeTask.
     */
    data: XOR<PracticeTaskCreateInput, PracticeTaskUncheckedCreateInput>
  }

  /**
   * PracticeTask createMany
   */
  export type PracticeTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PracticeTasks.
     */
    data: PracticeTaskCreateManyInput | PracticeTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PracticeTask createManyAndReturn
   */
  export type PracticeTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTask
     */
    select?: PracticeTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PracticeTasks.
     */
    data: PracticeTaskCreateManyInput | PracticeTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PracticeTask update
   */
  export type PracticeTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTask
     */
    select?: PracticeTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a PracticeTask.
     */
    data: XOR<PracticeTaskUpdateInput, PracticeTaskUncheckedUpdateInput>
    /**
     * Choose, which PracticeTask to update.
     */
    where: PracticeTaskWhereUniqueInput
  }

  /**
   * PracticeTask updateMany
   */
  export type PracticeTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PracticeTasks.
     */
    data: XOR<PracticeTaskUpdateManyMutationInput, PracticeTaskUncheckedUpdateManyInput>
    /**
     * Filter which PracticeTasks to update
     */
    where?: PracticeTaskWhereInput
  }

  /**
   * PracticeTask upsert
   */
  export type PracticeTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTask
     */
    select?: PracticeTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the PracticeTask to update in case it exists.
     */
    where: PracticeTaskWhereUniqueInput
    /**
     * In case the PracticeTask found by the `where` argument doesn't exist, create a new PracticeTask with this data.
     */
    create: XOR<PracticeTaskCreateInput, PracticeTaskUncheckedCreateInput>
    /**
     * In case the PracticeTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PracticeTaskUpdateInput, PracticeTaskUncheckedUpdateInput>
  }

  /**
   * PracticeTask delete
   */
  export type PracticeTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTask
     */
    select?: PracticeTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeTaskInclude<ExtArgs> | null
    /**
     * Filter which PracticeTask to delete.
     */
    where: PracticeTaskWhereUniqueInput
  }

  /**
   * PracticeTask deleteMany
   */
  export type PracticeTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PracticeTasks to delete
     */
    where?: PracticeTaskWhereInput
  }

  /**
   * PracticeTask.userSubmitTasks
   */
  export type PracticeTask$userSubmitTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskInclude<ExtArgs> | null
    where?: UserSubmitTaskWhereInput
    orderBy?: UserSubmitTaskOrderByWithRelationInput | UserSubmitTaskOrderByWithRelationInput[]
    cursor?: UserSubmitTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubmitTaskScalarFieldEnum | UserSubmitTaskScalarFieldEnum[]
  }

  /**
   * PracticeTask.userTaskMetadatas
   */
  export type PracticeTask$userTaskMetadatasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskMetadata
     */
    select?: UserTaskMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskMetadataInclude<ExtArgs> | null
    where?: UserTaskMetadataWhereInput
    orderBy?: UserTaskMetadataOrderByWithRelationInput | UserTaskMetadataOrderByWithRelationInput[]
    cursor?: UserTaskMetadataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTaskMetadataScalarFieldEnum | UserTaskMetadataScalarFieldEnum[]
  }

  /**
   * PracticeTask.taskTags
   */
  export type PracticeTask$taskTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    where?: TaskTagWhereInput
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    cursor?: TaskTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * PracticeTask without action
   */
  export type PracticeTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTask
     */
    select?: PracticeTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeTaskInclude<ExtArgs> | null
  }


  /**
   * Model UserTaskMetadata
   */

  export type AggregateUserTaskMetadata = {
    _count: UserTaskMetadataCountAggregateOutputType | null
    _avg: UserTaskMetadataAvgAggregateOutputType | null
    _sum: UserTaskMetadataSumAggregateOutputType | null
    _min: UserTaskMetadataMinAggregateOutputType | null
    _max: UserTaskMetadataMaxAggregateOutputType | null
  }

  export type UserTaskMetadataAvgAggregateOutputType = {
    submissionCount: number | null
  }

  export type UserTaskMetadataSumAggregateOutputType = {
    submissionCount: number | null
  }

  export type UserTaskMetadataMinAggregateOutputType = {
    id: string | null
    userId: string | null
    practiceTaskId: string | null
    isBookmarked: boolean | null
    isIgnored: boolean | null
    submissionCount: number | null
  }

  export type UserTaskMetadataMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    practiceTaskId: string | null
    isBookmarked: boolean | null
    isIgnored: boolean | null
    submissionCount: number | null
  }

  export type UserTaskMetadataCountAggregateOutputType = {
    id: number
    userId: number
    practiceTaskId: number
    note: number
    isBookmarked: number
    isIgnored: number
    submissionCount: number
    _all: number
  }


  export type UserTaskMetadataAvgAggregateInputType = {
    submissionCount?: true
  }

  export type UserTaskMetadataSumAggregateInputType = {
    submissionCount?: true
  }

  export type UserTaskMetadataMinAggregateInputType = {
    id?: true
    userId?: true
    practiceTaskId?: true
    isBookmarked?: true
    isIgnored?: true
    submissionCount?: true
  }

  export type UserTaskMetadataMaxAggregateInputType = {
    id?: true
    userId?: true
    practiceTaskId?: true
    isBookmarked?: true
    isIgnored?: true
    submissionCount?: true
  }

  export type UserTaskMetadataCountAggregateInputType = {
    id?: true
    userId?: true
    practiceTaskId?: true
    note?: true
    isBookmarked?: true
    isIgnored?: true
    submissionCount?: true
    _all?: true
  }

  export type UserTaskMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTaskMetadata to aggregate.
     */
    where?: UserTaskMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTaskMetadata to fetch.
     */
    orderBy?: UserTaskMetadataOrderByWithRelationInput | UserTaskMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTaskMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTaskMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTaskMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTaskMetadata
    **/
    _count?: true | UserTaskMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTaskMetadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTaskMetadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTaskMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTaskMetadataMaxAggregateInputType
  }

  export type GetUserTaskMetadataAggregateType<T extends UserTaskMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTaskMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTaskMetadata[P]>
      : GetScalarType<T[P], AggregateUserTaskMetadata[P]>
  }




  export type UserTaskMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTaskMetadataWhereInput
    orderBy?: UserTaskMetadataOrderByWithAggregationInput | UserTaskMetadataOrderByWithAggregationInput[]
    by: UserTaskMetadataScalarFieldEnum[] | UserTaskMetadataScalarFieldEnum
    having?: UserTaskMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTaskMetadataCountAggregateInputType | true
    _avg?: UserTaskMetadataAvgAggregateInputType
    _sum?: UserTaskMetadataSumAggregateInputType
    _min?: UserTaskMetadataMinAggregateInputType
    _max?: UserTaskMetadataMaxAggregateInputType
  }

  export type UserTaskMetadataGroupByOutputType = {
    id: string
    userId: string
    practiceTaskId: string
    note: JsonValue | null
    isBookmarked: boolean
    isIgnored: boolean
    submissionCount: number
    _count: UserTaskMetadataCountAggregateOutputType | null
    _avg: UserTaskMetadataAvgAggregateOutputType | null
    _sum: UserTaskMetadataSumAggregateOutputType | null
    _min: UserTaskMetadataMinAggregateOutputType | null
    _max: UserTaskMetadataMaxAggregateOutputType | null
  }

  type GetUserTaskMetadataGroupByPayload<T extends UserTaskMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTaskMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTaskMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTaskMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], UserTaskMetadataGroupByOutputType[P]>
        }
      >
    >


  export type UserTaskMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    practiceTaskId?: boolean
    note?: boolean
    isBookmarked?: boolean
    isIgnored?: boolean
    submissionCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceTask?: boolean | PracticeTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTaskMetadata"]>

  export type UserTaskMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    practiceTaskId?: boolean
    note?: boolean
    isBookmarked?: boolean
    isIgnored?: boolean
    submissionCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceTask?: boolean | PracticeTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTaskMetadata"]>

  export type UserTaskMetadataSelectScalar = {
    id?: boolean
    userId?: boolean
    practiceTaskId?: boolean
    note?: boolean
    isBookmarked?: boolean
    isIgnored?: boolean
    submissionCount?: boolean
  }

  export type UserTaskMetadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceTask?: boolean | PracticeTaskDefaultArgs<ExtArgs>
  }
  export type UserTaskMetadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceTask?: boolean | PracticeTaskDefaultArgs<ExtArgs>
  }

  export type $UserTaskMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTaskMetadata"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      practiceTask: Prisma.$PracticeTaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      practiceTaskId: string
      note: Prisma.JsonValue | null
      isBookmarked: boolean
      isIgnored: boolean
      submissionCount: number
    }, ExtArgs["result"]["userTaskMetadata"]>
    composites: {}
  }

  type UserTaskMetadataGetPayload<S extends boolean | null | undefined | UserTaskMetadataDefaultArgs> = $Result.GetResult<Prisma.$UserTaskMetadataPayload, S>

  type UserTaskMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserTaskMetadataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserTaskMetadataCountAggregateInputType | true
    }

  export interface UserTaskMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTaskMetadata'], meta: { name: 'UserTaskMetadata' } }
    /**
     * Find zero or one UserTaskMetadata that matches the filter.
     * @param {UserTaskMetadataFindUniqueArgs} args - Arguments to find a UserTaskMetadata
     * @example
     * // Get one UserTaskMetadata
     * const userTaskMetadata = await prisma.userTaskMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserTaskMetadataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserTaskMetadataFindUniqueArgs<ExtArgs>>
    ): Prisma__UserTaskMetadataClient<$Result.GetResult<Prisma.$UserTaskMetadataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserTaskMetadata that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserTaskMetadataFindUniqueOrThrowArgs} args - Arguments to find a UserTaskMetadata
     * @example
     * // Get one UserTaskMetadata
     * const userTaskMetadata = await prisma.userTaskMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserTaskMetadataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserTaskMetadataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserTaskMetadataClient<$Result.GetResult<Prisma.$UserTaskMetadataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserTaskMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskMetadataFindFirstArgs} args - Arguments to find a UserTaskMetadata
     * @example
     * // Get one UserTaskMetadata
     * const userTaskMetadata = await prisma.userTaskMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserTaskMetadataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserTaskMetadataFindFirstArgs<ExtArgs>>
    ): Prisma__UserTaskMetadataClient<$Result.GetResult<Prisma.$UserTaskMetadataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserTaskMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskMetadataFindFirstOrThrowArgs} args - Arguments to find a UserTaskMetadata
     * @example
     * // Get one UserTaskMetadata
     * const userTaskMetadata = await prisma.userTaskMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserTaskMetadataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserTaskMetadataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserTaskMetadataClient<$Result.GetResult<Prisma.$UserTaskMetadataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserTaskMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTaskMetadata
     * const userTaskMetadata = await prisma.userTaskMetadata.findMany()
     * 
     * // Get first 10 UserTaskMetadata
     * const userTaskMetadata = await prisma.userTaskMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTaskMetadataWithIdOnly = await prisma.userTaskMetadata.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserTaskMetadataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserTaskMetadataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskMetadataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserTaskMetadata.
     * @param {UserTaskMetadataCreateArgs} args - Arguments to create a UserTaskMetadata.
     * @example
     * // Create one UserTaskMetadata
     * const UserTaskMetadata = await prisma.userTaskMetadata.create({
     *   data: {
     *     // ... data to create a UserTaskMetadata
     *   }
     * })
     * 
    **/
    create<T extends UserTaskMetadataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserTaskMetadataCreateArgs<ExtArgs>>
    ): Prisma__UserTaskMetadataClient<$Result.GetResult<Prisma.$UserTaskMetadataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserTaskMetadata.
     * @param {UserTaskMetadataCreateManyArgs} args - Arguments to create many UserTaskMetadata.
     * @example
     * // Create many UserTaskMetadata
     * const userTaskMetadata = await prisma.userTaskMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserTaskMetadataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserTaskMetadataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTaskMetadata and returns the data saved in the database.
     * @param {UserTaskMetadataCreateManyAndReturnArgs} args - Arguments to create many UserTaskMetadata.
     * @example
     * // Create many UserTaskMetadata
     * const userTaskMetadata = await prisma.userTaskMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTaskMetadata and only return the `id`
     * const userTaskMetadataWithIdOnly = await prisma.userTaskMetadata.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserTaskMetadataCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserTaskMetadataCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskMetadataPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a UserTaskMetadata.
     * @param {UserTaskMetadataDeleteArgs} args - Arguments to delete one UserTaskMetadata.
     * @example
     * // Delete one UserTaskMetadata
     * const UserTaskMetadata = await prisma.userTaskMetadata.delete({
     *   where: {
     *     // ... filter to delete one UserTaskMetadata
     *   }
     * })
     * 
    **/
    delete<T extends UserTaskMetadataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserTaskMetadataDeleteArgs<ExtArgs>>
    ): Prisma__UserTaskMetadataClient<$Result.GetResult<Prisma.$UserTaskMetadataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserTaskMetadata.
     * @param {UserTaskMetadataUpdateArgs} args - Arguments to update one UserTaskMetadata.
     * @example
     * // Update one UserTaskMetadata
     * const userTaskMetadata = await prisma.userTaskMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserTaskMetadataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserTaskMetadataUpdateArgs<ExtArgs>>
    ): Prisma__UserTaskMetadataClient<$Result.GetResult<Prisma.$UserTaskMetadataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserTaskMetadata.
     * @param {UserTaskMetadataDeleteManyArgs} args - Arguments to filter UserTaskMetadata to delete.
     * @example
     * // Delete a few UserTaskMetadata
     * const { count } = await prisma.userTaskMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserTaskMetadataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserTaskMetadataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTaskMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTaskMetadata
     * const userTaskMetadata = await prisma.userTaskMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserTaskMetadataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserTaskMetadataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserTaskMetadata.
     * @param {UserTaskMetadataUpsertArgs} args - Arguments to update or create a UserTaskMetadata.
     * @example
     * // Update or create a UserTaskMetadata
     * const userTaskMetadata = await prisma.userTaskMetadata.upsert({
     *   create: {
     *     // ... data to create a UserTaskMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTaskMetadata we want to update
     *   }
     * })
    **/
    upsert<T extends UserTaskMetadataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserTaskMetadataUpsertArgs<ExtArgs>>
    ): Prisma__UserTaskMetadataClient<$Result.GetResult<Prisma.$UserTaskMetadataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserTaskMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskMetadataCountArgs} args - Arguments to filter UserTaskMetadata to count.
     * @example
     * // Count the number of UserTaskMetadata
     * const count = await prisma.userTaskMetadata.count({
     *   where: {
     *     // ... the filter for the UserTaskMetadata we want to count
     *   }
     * })
    **/
    count<T extends UserTaskMetadataCountArgs>(
      args?: Subset<T, UserTaskMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTaskMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTaskMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserTaskMetadataAggregateArgs>(args: Subset<T, UserTaskMetadataAggregateArgs>): Prisma.PrismaPromise<GetUserTaskMetadataAggregateType<T>>

    /**
     * Group by UserTaskMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskMetadataGroupByArgs} args - Group by arguments.
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
      T extends UserTaskMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTaskMetadataGroupByArgs['orderBy'] }
        : { orderBy?: UserTaskMetadataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserTaskMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTaskMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTaskMetadata model
   */
  readonly fields: UserTaskMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTaskMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTaskMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    practiceTask<T extends PracticeTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PracticeTaskDefaultArgs<ExtArgs>>): Prisma__PracticeTaskClient<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserTaskMetadata model
   */ 
  interface UserTaskMetadataFieldRefs {
    readonly id: FieldRef<"UserTaskMetadata", 'String'>
    readonly userId: FieldRef<"UserTaskMetadata", 'String'>
    readonly practiceTaskId: FieldRef<"UserTaskMetadata", 'String'>
    readonly note: FieldRef<"UserTaskMetadata", 'Json'>
    readonly isBookmarked: FieldRef<"UserTaskMetadata", 'Boolean'>
    readonly isIgnored: FieldRef<"UserTaskMetadata", 'Boolean'>
    readonly submissionCount: FieldRef<"UserTaskMetadata", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserTaskMetadata findUnique
   */
  export type UserTaskMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskMetadata
     */
    select?: UserTaskMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskMetadataInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskMetadata to fetch.
     */
    where: UserTaskMetadataWhereUniqueInput
  }

  /**
   * UserTaskMetadata findUniqueOrThrow
   */
  export type UserTaskMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskMetadata
     */
    select?: UserTaskMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskMetadataInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskMetadata to fetch.
     */
    where: UserTaskMetadataWhereUniqueInput
  }

  /**
   * UserTaskMetadata findFirst
   */
  export type UserTaskMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskMetadata
     */
    select?: UserTaskMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskMetadataInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskMetadata to fetch.
     */
    where?: UserTaskMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTaskMetadata to fetch.
     */
    orderBy?: UserTaskMetadataOrderByWithRelationInput | UserTaskMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTaskMetadata.
     */
    cursor?: UserTaskMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTaskMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTaskMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTaskMetadata.
     */
    distinct?: UserTaskMetadataScalarFieldEnum | UserTaskMetadataScalarFieldEnum[]
  }

  /**
   * UserTaskMetadata findFirstOrThrow
   */
  export type UserTaskMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskMetadata
     */
    select?: UserTaskMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskMetadataInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskMetadata to fetch.
     */
    where?: UserTaskMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTaskMetadata to fetch.
     */
    orderBy?: UserTaskMetadataOrderByWithRelationInput | UserTaskMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTaskMetadata.
     */
    cursor?: UserTaskMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTaskMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTaskMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTaskMetadata.
     */
    distinct?: UserTaskMetadataScalarFieldEnum | UserTaskMetadataScalarFieldEnum[]
  }

  /**
   * UserTaskMetadata findMany
   */
  export type UserTaskMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskMetadata
     */
    select?: UserTaskMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskMetadataInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskMetadata to fetch.
     */
    where?: UserTaskMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTaskMetadata to fetch.
     */
    orderBy?: UserTaskMetadataOrderByWithRelationInput | UserTaskMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTaskMetadata.
     */
    cursor?: UserTaskMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTaskMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTaskMetadata.
     */
    skip?: number
    distinct?: UserTaskMetadataScalarFieldEnum | UserTaskMetadataScalarFieldEnum[]
  }

  /**
   * UserTaskMetadata create
   */
  export type UserTaskMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskMetadata
     */
    select?: UserTaskMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskMetadataInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTaskMetadata.
     */
    data: XOR<UserTaskMetadataCreateInput, UserTaskMetadataUncheckedCreateInput>
  }

  /**
   * UserTaskMetadata createMany
   */
  export type UserTaskMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTaskMetadata.
     */
    data: UserTaskMetadataCreateManyInput | UserTaskMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTaskMetadata createManyAndReturn
   */
  export type UserTaskMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskMetadata
     */
    select?: UserTaskMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserTaskMetadata.
     */
    data: UserTaskMetadataCreateManyInput | UserTaskMetadataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskMetadataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTaskMetadata update
   */
  export type UserTaskMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskMetadata
     */
    select?: UserTaskMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskMetadataInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTaskMetadata.
     */
    data: XOR<UserTaskMetadataUpdateInput, UserTaskMetadataUncheckedUpdateInput>
    /**
     * Choose, which UserTaskMetadata to update.
     */
    where: UserTaskMetadataWhereUniqueInput
  }

  /**
   * UserTaskMetadata updateMany
   */
  export type UserTaskMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTaskMetadata.
     */
    data: XOR<UserTaskMetadataUpdateManyMutationInput, UserTaskMetadataUncheckedUpdateManyInput>
    /**
     * Filter which UserTaskMetadata to update
     */
    where?: UserTaskMetadataWhereInput
  }

  /**
   * UserTaskMetadata upsert
   */
  export type UserTaskMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskMetadata
     */
    select?: UserTaskMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskMetadataInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTaskMetadata to update in case it exists.
     */
    where: UserTaskMetadataWhereUniqueInput
    /**
     * In case the UserTaskMetadata found by the `where` argument doesn't exist, create a new UserTaskMetadata with this data.
     */
    create: XOR<UserTaskMetadataCreateInput, UserTaskMetadataUncheckedCreateInput>
    /**
     * In case the UserTaskMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTaskMetadataUpdateInput, UserTaskMetadataUncheckedUpdateInput>
  }

  /**
   * UserTaskMetadata delete
   */
  export type UserTaskMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskMetadata
     */
    select?: UserTaskMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskMetadataInclude<ExtArgs> | null
    /**
     * Filter which UserTaskMetadata to delete.
     */
    where: UserTaskMetadataWhereUniqueInput
  }

  /**
   * UserTaskMetadata deleteMany
   */
  export type UserTaskMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTaskMetadata to delete
     */
    where?: UserTaskMetadataWhereInput
  }

  /**
   * UserTaskMetadata without action
   */
  export type UserTaskMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskMetadata
     */
    select?: UserTaskMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskMetadataInclude<ExtArgs> | null
  }


  /**
   * Model TaskTag
   */

  export type AggregateTaskTag = {
    _count: TaskTagCountAggregateOutputType | null
    _min: TaskTagMinAggregateOutputType | null
    _max: TaskTagMaxAggregateOutputType | null
  }

  export type TaskTagMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
  }

  export type TaskTagMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
  }

  export type TaskTagCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    _all: number
  }


  export type TaskTagMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type TaskTagMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type TaskTagCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    _all?: true
  }

  export type TaskTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskTag to aggregate.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskTags
    **/
    _count?: true | TaskTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskTagMaxAggregateInputType
  }

  export type GetTaskTagAggregateType<T extends TaskTagAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskTag[P]>
      : GetScalarType<T[P], AggregateTaskTag[P]>
  }




  export type TaskTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTagWhereInput
    orderBy?: TaskTagOrderByWithAggregationInput | TaskTagOrderByWithAggregationInput[]
    by: TaskTagScalarFieldEnum[] | TaskTagScalarFieldEnum
    having?: TaskTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskTagCountAggregateInputType | true
    _min?: TaskTagMinAggregateInputType
    _max?: TaskTagMaxAggregateInputType
  }

  export type TaskTagGroupByOutputType = {
    id: string
    userId: string
    name: string
    _count: TaskTagCountAggregateOutputType | null
    _min: TaskTagMinAggregateOutputType | null
    _max: TaskTagMaxAggregateOutputType | null
  }

  type GetTaskTagGroupByPayload<T extends TaskTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskTagGroupByOutputType[P]>
            : GetScalarType<T[P], TaskTagGroupByOutputType[P]>
        }
      >
    >


  export type TaskTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    PracticeTask?: boolean | TaskTag$PracticeTaskArgs<ExtArgs>
    _count?: boolean | TaskTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTag"]>

  export type TaskTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTag"]>

  export type TaskTagSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
  }

  export type TaskTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    PracticeTask?: boolean | TaskTag$PracticeTaskArgs<ExtArgs>
    _count?: boolean | TaskTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskTag"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      PracticeTask: Prisma.$PracticeTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
    }, ExtArgs["result"]["taskTag"]>
    composites: {}
  }

  type TaskTagGetPayload<S extends boolean | null | undefined | TaskTagDefaultArgs> = $Result.GetResult<Prisma.$TaskTagPayload, S>

  type TaskTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskTagCountAggregateInputType | true
    }

  export interface TaskTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskTag'], meta: { name: 'TaskTag' } }
    /**
     * Find zero or one TaskTag that matches the filter.
     * @param {TaskTagFindUniqueArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaskTagFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TaskTagFindUniqueArgs<ExtArgs>>
    ): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TaskTag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskTagFindUniqueOrThrowArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaskTagFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskTagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TaskTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagFindFirstArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaskTagFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskTagFindFirstArgs<ExtArgs>>
    ): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TaskTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagFindFirstOrThrowArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaskTagFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskTagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TaskTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskTags
     * const taskTags = await prisma.taskTag.findMany()
     * 
     * // Get first 10 TaskTags
     * const taskTags = await prisma.taskTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskTagWithIdOnly = await prisma.taskTag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TaskTagFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskTagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TaskTag.
     * @param {TaskTagCreateArgs} args - Arguments to create a TaskTag.
     * @example
     * // Create one TaskTag
     * const TaskTag = await prisma.taskTag.create({
     *   data: {
     *     // ... data to create a TaskTag
     *   }
     * })
     * 
    **/
    create<T extends TaskTagCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskTagCreateArgs<ExtArgs>>
    ): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TaskTags.
     * @param {TaskTagCreateManyArgs} args - Arguments to create many TaskTags.
     * @example
     * // Create many TaskTags
     * const taskTag = await prisma.taskTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TaskTagCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskTagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskTags and returns the data saved in the database.
     * @param {TaskTagCreateManyAndReturnArgs} args - Arguments to create many TaskTags.
     * @example
     * // Create many TaskTags
     * const taskTag = await prisma.taskTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskTags and only return the `id`
     * const taskTagWithIdOnly = await prisma.taskTag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TaskTagCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskTagCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a TaskTag.
     * @param {TaskTagDeleteArgs} args - Arguments to delete one TaskTag.
     * @example
     * // Delete one TaskTag
     * const TaskTag = await prisma.taskTag.delete({
     *   where: {
     *     // ... filter to delete one TaskTag
     *   }
     * })
     * 
    **/
    delete<T extends TaskTagDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TaskTagDeleteArgs<ExtArgs>>
    ): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TaskTag.
     * @param {TaskTagUpdateArgs} args - Arguments to update one TaskTag.
     * @example
     * // Update one TaskTag
     * const taskTag = await prisma.taskTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaskTagUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskTagUpdateArgs<ExtArgs>>
    ): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TaskTags.
     * @param {TaskTagDeleteManyArgs} args - Arguments to filter TaskTags to delete.
     * @example
     * // Delete a few TaskTags
     * const { count } = await prisma.taskTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaskTagDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskTagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskTags
     * const taskTag = await prisma.taskTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaskTagUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TaskTagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskTag.
     * @param {TaskTagUpsertArgs} args - Arguments to update or create a TaskTag.
     * @example
     * // Update or create a TaskTag
     * const taskTag = await prisma.taskTag.upsert({
     *   create: {
     *     // ... data to create a TaskTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskTag we want to update
     *   }
     * })
    **/
    upsert<T extends TaskTagUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TaskTagUpsertArgs<ExtArgs>>
    ): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TaskTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagCountArgs} args - Arguments to filter TaskTags to count.
     * @example
     * // Count the number of TaskTags
     * const count = await prisma.taskTag.count({
     *   where: {
     *     // ... the filter for the TaskTags we want to count
     *   }
     * })
    **/
    count<T extends TaskTagCountArgs>(
      args?: Subset<T, TaskTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskTagAggregateArgs>(args: Subset<T, TaskTagAggregateArgs>): Prisma.PrismaPromise<GetTaskTagAggregateType<T>>

    /**
     * Group by TaskTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagGroupByArgs} args - Group by arguments.
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
      T extends TaskTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskTagGroupByArgs['orderBy'] }
        : { orderBy?: TaskTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskTag model
   */
  readonly fields: TaskTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    PracticeTask<T extends TaskTag$PracticeTaskArgs<ExtArgs> = {}>(args?: Subset<T, TaskTag$PracticeTaskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TaskTag model
   */ 
  interface TaskTagFieldRefs {
    readonly id: FieldRef<"TaskTag", 'String'>
    readonly userId: FieldRef<"TaskTag", 'String'>
    readonly name: FieldRef<"TaskTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TaskTag findUnique
   */
  export type TaskTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag findUniqueOrThrow
   */
  export type TaskTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag findFirst
   */
  export type TaskTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskTags.
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTags.
     */
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * TaskTag findFirstOrThrow
   */
  export type TaskTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskTags.
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTags.
     */
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * TaskTag findMany
   */
  export type TaskTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTags to fetch.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskTags.
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * TaskTag create
   */
  export type TaskTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskTag.
     */
    data: XOR<TaskTagCreateInput, TaskTagUncheckedCreateInput>
  }

  /**
   * TaskTag createMany
   */
  export type TaskTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskTags.
     */
    data: TaskTagCreateManyInput | TaskTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskTag createManyAndReturn
   */
  export type TaskTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TaskTags.
     */
    data: TaskTagCreateManyInput | TaskTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskTag update
   */
  export type TaskTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskTag.
     */
    data: XOR<TaskTagUpdateInput, TaskTagUncheckedUpdateInput>
    /**
     * Choose, which TaskTag to update.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag updateMany
   */
  export type TaskTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskTags.
     */
    data: XOR<TaskTagUpdateManyMutationInput, TaskTagUncheckedUpdateManyInput>
    /**
     * Filter which TaskTags to update
     */
    where?: TaskTagWhereInput
  }

  /**
   * TaskTag upsert
   */
  export type TaskTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskTag to update in case it exists.
     */
    where: TaskTagWhereUniqueInput
    /**
     * In case the TaskTag found by the `where` argument doesn't exist, create a new TaskTag with this data.
     */
    create: XOR<TaskTagCreateInput, TaskTagUncheckedCreateInput>
    /**
     * In case the TaskTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskTagUpdateInput, TaskTagUncheckedUpdateInput>
  }

  /**
   * TaskTag delete
   */
  export type TaskTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter which TaskTag to delete.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag deleteMany
   */
  export type TaskTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskTags to delete
     */
    where?: TaskTagWhereInput
  }

  /**
   * TaskTag.PracticeTask
   */
  export type TaskTag$PracticeTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeTask
     */
    select?: PracticeTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeTaskInclude<ExtArgs> | null
    where?: PracticeTaskWhereInput
    orderBy?: PracticeTaskOrderByWithRelationInput | PracticeTaskOrderByWithRelationInput[]
    cursor?: PracticeTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticeTaskScalarFieldEnum | PracticeTaskScalarFieldEnum[]
  }

  /**
   * TaskTag without action
   */
  export type TaskTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
  }


  /**
   * Model UserSubmitTask
   */

  export type AggregateUserSubmitTask = {
    _count: UserSubmitTaskCountAggregateOutputType | null
    _min: UserSubmitTaskMinAggregateOutputType | null
    _max: UserSubmitTaskMaxAggregateOutputType | null
  }

  export type UserSubmitTaskMinAggregateOutputType = {
    id: string | null
    userId: string | null
    practiceSetId: string | null
    practiceTaskId: string | null
    userPracticeSetId: string | null
    createdAt: Date | null
    submittedAt: Date | null
    updatedAt: Date | null
  }

  export type UserSubmitTaskMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    practiceSetId: string | null
    practiceTaskId: string | null
    userPracticeSetId: string | null
    createdAt: Date | null
    submittedAt: Date | null
    updatedAt: Date | null
  }

  export type UserSubmitTaskCountAggregateOutputType = {
    id: number
    userId: number
    practiceSetId: number
    practiceTaskId: number
    userPracticeSetId: number
    userResponse: number
    createdAt: number
    submittedAt: number
    updatedAt: number
    _all: number
  }


  export type UserSubmitTaskMinAggregateInputType = {
    id?: true
    userId?: true
    practiceSetId?: true
    practiceTaskId?: true
    userPracticeSetId?: true
    createdAt?: true
    submittedAt?: true
    updatedAt?: true
  }

  export type UserSubmitTaskMaxAggregateInputType = {
    id?: true
    userId?: true
    practiceSetId?: true
    practiceTaskId?: true
    userPracticeSetId?: true
    createdAt?: true
    submittedAt?: true
    updatedAt?: true
  }

  export type UserSubmitTaskCountAggregateInputType = {
    id?: true
    userId?: true
    practiceSetId?: true
    practiceTaskId?: true
    userPracticeSetId?: true
    userResponse?: true
    createdAt?: true
    submittedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSubmitTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubmitTask to aggregate.
     */
    where?: UserSubmitTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubmitTasks to fetch.
     */
    orderBy?: UserSubmitTaskOrderByWithRelationInput | UserSubmitTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSubmitTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubmitTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubmitTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSubmitTasks
    **/
    _count?: true | UserSubmitTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSubmitTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSubmitTaskMaxAggregateInputType
  }

  export type GetUserSubmitTaskAggregateType<T extends UserSubmitTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSubmitTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSubmitTask[P]>
      : GetScalarType<T[P], AggregateUserSubmitTask[P]>
  }




  export type UserSubmitTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubmitTaskWhereInput
    orderBy?: UserSubmitTaskOrderByWithAggregationInput | UserSubmitTaskOrderByWithAggregationInput[]
    by: UserSubmitTaskScalarFieldEnum[] | UserSubmitTaskScalarFieldEnum
    having?: UserSubmitTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSubmitTaskCountAggregateInputType | true
    _min?: UserSubmitTaskMinAggregateInputType
    _max?: UserSubmitTaskMaxAggregateInputType
  }

  export type UserSubmitTaskGroupByOutputType = {
    id: string
    userId: string
    practiceSetId: string
    practiceTaskId: string
    userPracticeSetId: string
    userResponse: JsonValue
    createdAt: Date
    submittedAt: Date
    updatedAt: Date
    _count: UserSubmitTaskCountAggregateOutputType | null
    _min: UserSubmitTaskMinAggregateOutputType | null
    _max: UserSubmitTaskMaxAggregateOutputType | null
  }

  type GetUserSubmitTaskGroupByPayload<T extends UserSubmitTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSubmitTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSubmitTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSubmitTaskGroupByOutputType[P]>
            : GetScalarType<T[P], UserSubmitTaskGroupByOutputType[P]>
        }
      >
    >


  export type UserSubmitTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    practiceSetId?: boolean
    practiceTaskId?: boolean
    userPracticeSetId?: boolean
    userResponse?: boolean
    createdAt?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceSet?: boolean | PracticeSetDefaultArgs<ExtArgs>
    practiceTask?: boolean | PracticeTaskDefaultArgs<ExtArgs>
    userPracticeSet?: boolean | UserPracticeSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubmitTask"]>

  export type UserSubmitTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    practiceSetId?: boolean
    practiceTaskId?: boolean
    userPracticeSetId?: boolean
    userResponse?: boolean
    createdAt?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceSet?: boolean | PracticeSetDefaultArgs<ExtArgs>
    practiceTask?: boolean | PracticeTaskDefaultArgs<ExtArgs>
    userPracticeSet?: boolean | UserPracticeSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubmitTask"]>

  export type UserSubmitTaskSelectScalar = {
    id?: boolean
    userId?: boolean
    practiceSetId?: boolean
    practiceTaskId?: boolean
    userPracticeSetId?: boolean
    userResponse?: boolean
    createdAt?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
  }

  export type UserSubmitTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceSet?: boolean | PracticeSetDefaultArgs<ExtArgs>
    practiceTask?: boolean | PracticeTaskDefaultArgs<ExtArgs>
    userPracticeSet?: boolean | UserPracticeSetDefaultArgs<ExtArgs>
  }
  export type UserSubmitTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    practiceSet?: boolean | PracticeSetDefaultArgs<ExtArgs>
    practiceTask?: boolean | PracticeTaskDefaultArgs<ExtArgs>
    userPracticeSet?: boolean | UserPracticeSetDefaultArgs<ExtArgs>
  }

  export type $UserSubmitTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSubmitTask"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      practiceSet: Prisma.$PracticeSetPayload<ExtArgs>
      practiceTask: Prisma.$PracticeTaskPayload<ExtArgs>
      userPracticeSet: Prisma.$UserPracticeSetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      practiceSetId: string
      practiceTaskId: string
      userPracticeSetId: string
      userResponse: Prisma.JsonValue
      createdAt: Date
      submittedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSubmitTask"]>
    composites: {}
  }

  type UserSubmitTaskGetPayload<S extends boolean | null | undefined | UserSubmitTaskDefaultArgs> = $Result.GetResult<Prisma.$UserSubmitTaskPayload, S>

  type UserSubmitTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserSubmitTaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserSubmitTaskCountAggregateInputType | true
    }

  export interface UserSubmitTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSubmitTask'], meta: { name: 'UserSubmitTask' } }
    /**
     * Find zero or one UserSubmitTask that matches the filter.
     * @param {UserSubmitTaskFindUniqueArgs} args - Arguments to find a UserSubmitTask
     * @example
     * // Get one UserSubmitTask
     * const userSubmitTask = await prisma.userSubmitTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserSubmitTaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserSubmitTaskFindUniqueArgs<ExtArgs>>
    ): Prisma__UserSubmitTaskClient<$Result.GetResult<Prisma.$UserSubmitTaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserSubmitTask that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserSubmitTaskFindUniqueOrThrowArgs} args - Arguments to find a UserSubmitTask
     * @example
     * // Get one UserSubmitTask
     * const userSubmitTask = await prisma.userSubmitTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserSubmitTaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSubmitTaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserSubmitTaskClient<$Result.GetResult<Prisma.$UserSubmitTaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserSubmitTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubmitTaskFindFirstArgs} args - Arguments to find a UserSubmitTask
     * @example
     * // Get one UserSubmitTask
     * const userSubmitTask = await prisma.userSubmitTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserSubmitTaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSubmitTaskFindFirstArgs<ExtArgs>>
    ): Prisma__UserSubmitTaskClient<$Result.GetResult<Prisma.$UserSubmitTaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserSubmitTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubmitTaskFindFirstOrThrowArgs} args - Arguments to find a UserSubmitTask
     * @example
     * // Get one UserSubmitTask
     * const userSubmitTask = await prisma.userSubmitTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserSubmitTaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSubmitTaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserSubmitTaskClient<$Result.GetResult<Prisma.$UserSubmitTaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserSubmitTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubmitTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSubmitTasks
     * const userSubmitTasks = await prisma.userSubmitTask.findMany()
     * 
     * // Get first 10 UserSubmitTasks
     * const userSubmitTasks = await prisma.userSubmitTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSubmitTaskWithIdOnly = await prisma.userSubmitTask.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserSubmitTaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSubmitTaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubmitTaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserSubmitTask.
     * @param {UserSubmitTaskCreateArgs} args - Arguments to create a UserSubmitTask.
     * @example
     * // Create one UserSubmitTask
     * const UserSubmitTask = await prisma.userSubmitTask.create({
     *   data: {
     *     // ... data to create a UserSubmitTask
     *   }
     * })
     * 
    **/
    create<T extends UserSubmitTaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserSubmitTaskCreateArgs<ExtArgs>>
    ): Prisma__UserSubmitTaskClient<$Result.GetResult<Prisma.$UserSubmitTaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserSubmitTasks.
     * @param {UserSubmitTaskCreateManyArgs} args - Arguments to create many UserSubmitTasks.
     * @example
     * // Create many UserSubmitTasks
     * const userSubmitTask = await prisma.userSubmitTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserSubmitTaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSubmitTaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSubmitTasks and returns the data saved in the database.
     * @param {UserSubmitTaskCreateManyAndReturnArgs} args - Arguments to create many UserSubmitTasks.
     * @example
     * // Create many UserSubmitTasks
     * const userSubmitTask = await prisma.userSubmitTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSubmitTasks and only return the `id`
     * const userSubmitTaskWithIdOnly = await prisma.userSubmitTask.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserSubmitTaskCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSubmitTaskCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubmitTaskPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a UserSubmitTask.
     * @param {UserSubmitTaskDeleteArgs} args - Arguments to delete one UserSubmitTask.
     * @example
     * // Delete one UserSubmitTask
     * const UserSubmitTask = await prisma.userSubmitTask.delete({
     *   where: {
     *     // ... filter to delete one UserSubmitTask
     *   }
     * })
     * 
    **/
    delete<T extends UserSubmitTaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserSubmitTaskDeleteArgs<ExtArgs>>
    ): Prisma__UserSubmitTaskClient<$Result.GetResult<Prisma.$UserSubmitTaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserSubmitTask.
     * @param {UserSubmitTaskUpdateArgs} args - Arguments to update one UserSubmitTask.
     * @example
     * // Update one UserSubmitTask
     * const userSubmitTask = await prisma.userSubmitTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserSubmitTaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserSubmitTaskUpdateArgs<ExtArgs>>
    ): Prisma__UserSubmitTaskClient<$Result.GetResult<Prisma.$UserSubmitTaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserSubmitTasks.
     * @param {UserSubmitTaskDeleteManyArgs} args - Arguments to filter UserSubmitTasks to delete.
     * @example
     * // Delete a few UserSubmitTasks
     * const { count } = await prisma.userSubmitTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserSubmitTaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserSubmitTaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubmitTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubmitTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSubmitTasks
     * const userSubmitTask = await prisma.userSubmitTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserSubmitTaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserSubmitTaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSubmitTask.
     * @param {UserSubmitTaskUpsertArgs} args - Arguments to update or create a UserSubmitTask.
     * @example
     * // Update or create a UserSubmitTask
     * const userSubmitTask = await prisma.userSubmitTask.upsert({
     *   create: {
     *     // ... data to create a UserSubmitTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSubmitTask we want to update
     *   }
     * })
    **/
    upsert<T extends UserSubmitTaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserSubmitTaskUpsertArgs<ExtArgs>>
    ): Prisma__UserSubmitTaskClient<$Result.GetResult<Prisma.$UserSubmitTaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserSubmitTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubmitTaskCountArgs} args - Arguments to filter UserSubmitTasks to count.
     * @example
     * // Count the number of UserSubmitTasks
     * const count = await prisma.userSubmitTask.count({
     *   where: {
     *     // ... the filter for the UserSubmitTasks we want to count
     *   }
     * })
    **/
    count<T extends UserSubmitTaskCountArgs>(
      args?: Subset<T, UserSubmitTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSubmitTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSubmitTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubmitTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSubmitTaskAggregateArgs>(args: Subset<T, UserSubmitTaskAggregateArgs>): Prisma.PrismaPromise<GetUserSubmitTaskAggregateType<T>>

    /**
     * Group by UserSubmitTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubmitTaskGroupByArgs} args - Group by arguments.
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
      T extends UserSubmitTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSubmitTaskGroupByArgs['orderBy'] }
        : { orderBy?: UserSubmitTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSubmitTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSubmitTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSubmitTask model
   */
  readonly fields: UserSubmitTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSubmitTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSubmitTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    practiceSet<T extends PracticeSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PracticeSetDefaultArgs<ExtArgs>>): Prisma__PracticeSetClient<$Result.GetResult<Prisma.$PracticeSetPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    practiceTask<T extends PracticeTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PracticeTaskDefaultArgs<ExtArgs>>): Prisma__PracticeTaskClient<$Result.GetResult<Prisma.$PracticeTaskPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    userPracticeSet<T extends UserPracticeSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserPracticeSetDefaultArgs<ExtArgs>>): Prisma__UserPracticeSetClient<$Result.GetResult<Prisma.$UserPracticeSetPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserSubmitTask model
   */ 
  interface UserSubmitTaskFieldRefs {
    readonly id: FieldRef<"UserSubmitTask", 'String'>
    readonly userId: FieldRef<"UserSubmitTask", 'String'>
    readonly practiceSetId: FieldRef<"UserSubmitTask", 'String'>
    readonly practiceTaskId: FieldRef<"UserSubmitTask", 'String'>
    readonly userPracticeSetId: FieldRef<"UserSubmitTask", 'String'>
    readonly userResponse: FieldRef<"UserSubmitTask", 'Json'>
    readonly createdAt: FieldRef<"UserSubmitTask", 'DateTime'>
    readonly submittedAt: FieldRef<"UserSubmitTask", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSubmitTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSubmitTask findUnique
   */
  export type UserSubmitTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserSubmitTask to fetch.
     */
    where: UserSubmitTaskWhereUniqueInput
  }

  /**
   * UserSubmitTask findUniqueOrThrow
   */
  export type UserSubmitTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserSubmitTask to fetch.
     */
    where: UserSubmitTaskWhereUniqueInput
  }

  /**
   * UserSubmitTask findFirst
   */
  export type UserSubmitTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserSubmitTask to fetch.
     */
    where?: UserSubmitTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubmitTasks to fetch.
     */
    orderBy?: UserSubmitTaskOrderByWithRelationInput | UserSubmitTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubmitTasks.
     */
    cursor?: UserSubmitTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubmitTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubmitTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubmitTasks.
     */
    distinct?: UserSubmitTaskScalarFieldEnum | UserSubmitTaskScalarFieldEnum[]
  }

  /**
   * UserSubmitTask findFirstOrThrow
   */
  export type UserSubmitTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserSubmitTask to fetch.
     */
    where?: UserSubmitTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubmitTasks to fetch.
     */
    orderBy?: UserSubmitTaskOrderByWithRelationInput | UserSubmitTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubmitTasks.
     */
    cursor?: UserSubmitTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubmitTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubmitTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubmitTasks.
     */
    distinct?: UserSubmitTaskScalarFieldEnum | UserSubmitTaskScalarFieldEnum[]
  }

  /**
   * UserSubmitTask findMany
   */
  export type UserSubmitTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserSubmitTasks to fetch.
     */
    where?: UserSubmitTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubmitTasks to fetch.
     */
    orderBy?: UserSubmitTaskOrderByWithRelationInput | UserSubmitTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSubmitTasks.
     */
    cursor?: UserSubmitTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubmitTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubmitTasks.
     */
    skip?: number
    distinct?: UserSubmitTaskScalarFieldEnum | UserSubmitTaskScalarFieldEnum[]
  }

  /**
   * UserSubmitTask create
   */
  export type UserSubmitTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSubmitTask.
     */
    data: XOR<UserSubmitTaskCreateInput, UserSubmitTaskUncheckedCreateInput>
  }

  /**
   * UserSubmitTask createMany
   */
  export type UserSubmitTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSubmitTasks.
     */
    data: UserSubmitTaskCreateManyInput | UserSubmitTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSubmitTask createManyAndReturn
   */
  export type UserSubmitTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserSubmitTasks.
     */
    data: UserSubmitTaskCreateManyInput | UserSubmitTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubmitTask update
   */
  export type UserSubmitTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSubmitTask.
     */
    data: XOR<UserSubmitTaskUpdateInput, UserSubmitTaskUncheckedUpdateInput>
    /**
     * Choose, which UserSubmitTask to update.
     */
    where: UserSubmitTaskWhereUniqueInput
  }

  /**
   * UserSubmitTask updateMany
   */
  export type UserSubmitTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSubmitTasks.
     */
    data: XOR<UserSubmitTaskUpdateManyMutationInput, UserSubmitTaskUncheckedUpdateManyInput>
    /**
     * Filter which UserSubmitTasks to update
     */
    where?: UserSubmitTaskWhereInput
  }

  /**
   * UserSubmitTask upsert
   */
  export type UserSubmitTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSubmitTask to update in case it exists.
     */
    where: UserSubmitTaskWhereUniqueInput
    /**
     * In case the UserSubmitTask found by the `where` argument doesn't exist, create a new UserSubmitTask with this data.
     */
    create: XOR<UserSubmitTaskCreateInput, UserSubmitTaskUncheckedCreateInput>
    /**
     * In case the UserSubmitTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSubmitTaskUpdateInput, UserSubmitTaskUncheckedUpdateInput>
  }

  /**
   * UserSubmitTask delete
   */
  export type UserSubmitTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskInclude<ExtArgs> | null
    /**
     * Filter which UserSubmitTask to delete.
     */
    where: UserSubmitTaskWhereUniqueInput
  }

  /**
   * UserSubmitTask deleteMany
   */
  export type UserSubmitTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubmitTasks to delete
     */
    where?: UserSubmitTaskWhereInput
  }

  /**
   * UserSubmitTask without action
   */
  export type UserSubmitTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubmitTask
     */
    select?: UserSubmitTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubmitTaskInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserStatusScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    pictureUrl: 'pictureUrl',
    text: 'text',
    backgroundImageUrl: 'backgroundImageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserStatusScalarFieldEnum = (typeof UserStatusScalarFieldEnum)[keyof typeof UserStatusScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    visibility: 'visibility',
    text: 'text',
    totalLikeCount: 'totalLikeCount',
    totalCommentCount: 'totalCommentCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ReactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    reactionType: 'reactionType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReactionScalarFieldEnum = (typeof ReactionScalarFieldEnum)[keyof typeof ReactionScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    pictureUrl: 'pictureUrl',
    text: 'text',
    postId: 'postId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const PracticeSetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    visibility: 'visibility',
    status: 'status',
    enrollmentCount: 'enrollmentCount',
    totalTaskCount: 'totalTaskCount',
    config: 'config',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PracticeSetScalarFieldEnum = (typeof PracticeSetScalarFieldEnum)[keyof typeof PracticeSetScalarFieldEnum]


  export const UserPracticeSetScalarFieldEnum: {
    id: 'id',
    practiceSetId: 'practiceSetId',
    userId: 'userId',
    status: 'status'
  };

  export type UserPracticeSetScalarFieldEnum = (typeof UserPracticeSetScalarFieldEnum)[keyof typeof UserPracticeSetScalarFieldEnum]


  export const PracticeTaskScalarFieldEnum: {
    index: 'index',
    id: 'id',
    userId: 'userId',
    practiceSetId: 'practiceSetId',
    title: 'title',
    description: 'description',
    visibility: 'visibility',
    completionCount: 'completionCount',
    status: 'status',
    taskType: 'taskType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PracticeTaskScalarFieldEnum = (typeof PracticeTaskScalarFieldEnum)[keyof typeof PracticeTaskScalarFieldEnum]


  export const UserTaskMetadataScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    practiceTaskId: 'practiceTaskId',
    note: 'note',
    isBookmarked: 'isBookmarked',
    isIgnored: 'isIgnored',
    submissionCount: 'submissionCount'
  };

  export type UserTaskMetadataScalarFieldEnum = (typeof UserTaskMetadataScalarFieldEnum)[keyof typeof UserTaskMetadataScalarFieldEnum]


  export const TaskTagScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name'
  };

  export type TaskTagScalarFieldEnum = (typeof TaskTagScalarFieldEnum)[keyof typeof TaskTagScalarFieldEnum]


  export const UserSubmitTaskScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    practiceSetId: 'practiceSetId',
    practiceTaskId: 'practiceTaskId',
    userPracticeSetId: 'userPracticeSetId',
    userResponse: 'userResponse',
    createdAt: 'createdAt',
    submittedAt: 'submittedAt',
    updatedAt: 'updatedAt'
  };

  export type UserSubmitTaskScalarFieldEnum = (typeof UserSubmitTaskScalarFieldEnum)[keyof typeof UserSubmitTaskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Visibility'
   */
  export type EnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility'>
    


  /**
   * Reference to a field of type 'Visibility[]'
   */
  export type ListEnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PostReaction'
   */
  export type EnumPostReactionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostReaction'>
    


  /**
   * Reference to a field of type 'PostReaction[]'
   */
  export type ListEnumPostReactionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostReaction[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'TaskType'
   */
  export type EnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType'>
    


  /**
   * Reference to a field of type 'TaskType[]'
   */
  export type ListEnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
    reactions?: ReactionListRelationFilter
    comments?: CommentListRelationFilter
    userStatuses?: UserStatusListRelationFilter
    practiceSets?: PracticeSetListRelationFilter
    practiceTasks?: PracticeTaskListRelationFilter
    userSubmitTasks?: UserSubmitTaskListRelationFilter
    userPracticeSets?: UserPracticeSetListRelationFilter
    userTaskMetadatas?: UserTaskMetadataListRelationFilter
    taskTag?: TaskTagListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    reactions?: ReactionOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    userStatuses?: UserStatusOrderByRelationAggregateInput
    practiceSets?: PracticeSetOrderByRelationAggregateInput
    practiceTasks?: PracticeTaskOrderByRelationAggregateInput
    userSubmitTasks?: UserSubmitTaskOrderByRelationAggregateInput
    userPracticeSets?: UserPracticeSetOrderByRelationAggregateInput
    userTaskMetadatas?: UserTaskMetadataOrderByRelationAggregateInput
    taskTag?: TaskTagOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
    reactions?: ReactionListRelationFilter
    comments?: CommentListRelationFilter
    userStatuses?: UserStatusListRelationFilter
    practiceSets?: PracticeSetListRelationFilter
    practiceTasks?: PracticeTaskListRelationFilter
    userSubmitTasks?: UserSubmitTaskListRelationFilter
    userPracticeSets?: UserPracticeSetListRelationFilter
    userTaskMetadatas?: UserTaskMetadataListRelationFilter
    taskTag?: TaskTagListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserStatusWhereInput = {
    AND?: UserStatusWhereInput | UserStatusWhereInput[]
    OR?: UserStatusWhereInput[]
    NOT?: UserStatusWhereInput | UserStatusWhereInput[]
    id?: StringFilter<"UserStatus"> | string
    userId?: StringFilter<"UserStatus"> | string
    pictureUrl?: StringNullableFilter<"UserStatus"> | string | null
    text?: StringNullableFilter<"UserStatus"> | string | null
    backgroundImageUrl?: StringNullableFilter<"UserStatus"> | string | null
    createdAt?: DateTimeFilter<"UserStatus"> | Date | string
    updatedAt?: DateTimeFilter<"UserStatus"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserStatusOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    backgroundImageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserStatusWhereInput | UserStatusWhereInput[]
    OR?: UserStatusWhereInput[]
    NOT?: UserStatusWhereInput | UserStatusWhereInput[]
    userId?: StringFilter<"UserStatus"> | string
    pictureUrl?: StringNullableFilter<"UserStatus"> | string | null
    text?: StringNullableFilter<"UserStatus"> | string | null
    backgroundImageUrl?: StringNullableFilter<"UserStatus"> | string | null
    createdAt?: DateTimeFilter<"UserStatus"> | Date | string
    updatedAt?: DateTimeFilter<"UserStatus"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type UserStatusOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    backgroundImageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserStatusCountOrderByAggregateInput
    _max?: UserStatusMaxOrderByAggregateInput
    _min?: UserStatusMinOrderByAggregateInput
  }

  export type UserStatusScalarWhereWithAggregatesInput = {
    AND?: UserStatusScalarWhereWithAggregatesInput | UserStatusScalarWhereWithAggregatesInput[]
    OR?: UserStatusScalarWhereWithAggregatesInput[]
    NOT?: UserStatusScalarWhereWithAggregatesInput | UserStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserStatus"> | string
    userId?: StringWithAggregatesFilter<"UserStatus"> | string
    pictureUrl?: StringNullableWithAggregatesFilter<"UserStatus"> | string | null
    text?: StringNullableWithAggregatesFilter<"UserStatus"> | string | null
    backgroundImageUrl?: StringNullableWithAggregatesFilter<"UserStatus"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserStatus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserStatus"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    visibility?: EnumVisibilityFilter<"Post"> | $Enums.Visibility
    text?: JsonFilter<"Post">
    totalLikeCount?: IntFilter<"Post"> | number
    totalCommentCount?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    reactions?: ReactionListRelationFilter
    comments?: CommentListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    visibility?: SortOrder
    text?: SortOrder
    totalLikeCount?: SortOrder
    totalCommentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reactions?: ReactionOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    userId?: StringFilter<"Post"> | string
    visibility?: EnumVisibilityFilter<"Post"> | $Enums.Visibility
    text?: JsonFilter<"Post">
    totalLikeCount?: IntFilter<"Post"> | number
    totalCommentCount?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    reactions?: ReactionListRelationFilter
    comments?: CommentListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    visibility?: SortOrder
    text?: SortOrder
    totalLikeCount?: SortOrder
    totalCommentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    userId?: StringWithAggregatesFilter<"Post"> | string
    visibility?: EnumVisibilityWithAggregatesFilter<"Post"> | $Enums.Visibility
    text?: JsonWithAggregatesFilter<"Post">
    totalLikeCount?: IntWithAggregatesFilter<"Post"> | number
    totalCommentCount?: IntWithAggregatesFilter<"Post"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type ReactionWhereInput = {
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    id?: StringFilter<"Reaction"> | string
    userId?: StringFilter<"Reaction"> | string
    postId?: StringFilter<"Reaction"> | string
    reactionType?: EnumPostReactionFilter<"Reaction"> | $Enums.PostReaction
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    updatedAt?: DateTimeFilter<"Reaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    post?: XOR<PostRelationFilter, PostWhereInput>
  }

  export type ReactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    reactionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type ReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    userId?: StringFilter<"Reaction"> | string
    postId?: StringFilter<"Reaction"> | string
    reactionType?: EnumPostReactionFilter<"Reaction"> | $Enums.PostReaction
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    updatedAt?: DateTimeFilter<"Reaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    post?: XOR<PostRelationFilter, PostWhereInput>
  }, "id">

  export type ReactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    reactionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReactionCountOrderByAggregateInput
    _max?: ReactionMaxOrderByAggregateInput
    _min?: ReactionMinOrderByAggregateInput
  }

  export type ReactionScalarWhereWithAggregatesInput = {
    AND?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    OR?: ReactionScalarWhereWithAggregatesInput[]
    NOT?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reaction"> | string
    userId?: StringWithAggregatesFilter<"Reaction"> | string
    postId?: StringWithAggregatesFilter<"Reaction"> | string
    reactionType?: EnumPostReactionWithAggregatesFilter<"Reaction"> | $Enums.PostReaction
    createdAt?: DateTimeWithAggregatesFilter<"Reaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reaction"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    pictureUrl?: StringNullableFilter<"Comment"> | string | null
    text?: StringNullableFilter<"Comment"> | string | null
    postId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    post?: XOR<PostRelationFilter, PostWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    userId?: StringFilter<"Comment"> | string
    pictureUrl?: StringNullableFilter<"Comment"> | string | null
    text?: StringNullableFilter<"Comment"> | string | null
    postId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    post?: XOR<PostRelationFilter, PostWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    pictureUrl?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    text?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    postId?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type PracticeSetWhereInput = {
    AND?: PracticeSetWhereInput | PracticeSetWhereInput[]
    OR?: PracticeSetWhereInput[]
    NOT?: PracticeSetWhereInput | PracticeSetWhereInput[]
    id?: StringFilter<"PracticeSet"> | string
    userId?: StringFilter<"PracticeSet"> | string
    title?: StringFilter<"PracticeSet"> | string
    description?: JsonNullableFilter<"PracticeSet">
    visibility?: EnumVisibilityFilter<"PracticeSet"> | $Enums.Visibility
    status?: EnumStatusFilter<"PracticeSet"> | $Enums.Status
    enrollmentCount?: IntFilter<"PracticeSet"> | number
    totalTaskCount?: IntFilter<"PracticeSet"> | number
    config?: JsonNullableFilter<"PracticeSet">
    createdAt?: DateTimeFilter<"PracticeSet"> | Date | string
    updatedAt?: DateTimeFilter<"PracticeSet"> | Date | string
    practiceTasks?: PracticeTaskListRelationFilter
    userSubmitTasks?: UserSubmitTaskListRelationFilter
    userPracticeSets?: UserPracticeSetListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PracticeSetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    visibility?: SortOrder
    status?: SortOrder
    enrollmentCount?: SortOrder
    totalTaskCount?: SortOrder
    config?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    practiceTasks?: PracticeTaskOrderByRelationAggregateInput
    userSubmitTasks?: UserSubmitTaskOrderByRelationAggregateInput
    userPracticeSets?: UserPracticeSetOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PracticeSetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PracticeSetWhereInput | PracticeSetWhereInput[]
    OR?: PracticeSetWhereInput[]
    NOT?: PracticeSetWhereInput | PracticeSetWhereInput[]
    userId?: StringFilter<"PracticeSet"> | string
    title?: StringFilter<"PracticeSet"> | string
    description?: JsonNullableFilter<"PracticeSet">
    visibility?: EnumVisibilityFilter<"PracticeSet"> | $Enums.Visibility
    status?: EnumStatusFilter<"PracticeSet"> | $Enums.Status
    enrollmentCount?: IntFilter<"PracticeSet"> | number
    totalTaskCount?: IntFilter<"PracticeSet"> | number
    config?: JsonNullableFilter<"PracticeSet">
    createdAt?: DateTimeFilter<"PracticeSet"> | Date | string
    updatedAt?: DateTimeFilter<"PracticeSet"> | Date | string
    practiceTasks?: PracticeTaskListRelationFilter
    userSubmitTasks?: UserSubmitTaskListRelationFilter
    userPracticeSets?: UserPracticeSetListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PracticeSetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    visibility?: SortOrder
    status?: SortOrder
    enrollmentCount?: SortOrder
    totalTaskCount?: SortOrder
    config?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PracticeSetCountOrderByAggregateInput
    _avg?: PracticeSetAvgOrderByAggregateInput
    _max?: PracticeSetMaxOrderByAggregateInput
    _min?: PracticeSetMinOrderByAggregateInput
    _sum?: PracticeSetSumOrderByAggregateInput
  }

  export type PracticeSetScalarWhereWithAggregatesInput = {
    AND?: PracticeSetScalarWhereWithAggregatesInput | PracticeSetScalarWhereWithAggregatesInput[]
    OR?: PracticeSetScalarWhereWithAggregatesInput[]
    NOT?: PracticeSetScalarWhereWithAggregatesInput | PracticeSetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PracticeSet"> | string
    userId?: StringWithAggregatesFilter<"PracticeSet"> | string
    title?: StringWithAggregatesFilter<"PracticeSet"> | string
    description?: JsonNullableWithAggregatesFilter<"PracticeSet">
    visibility?: EnumVisibilityWithAggregatesFilter<"PracticeSet"> | $Enums.Visibility
    status?: EnumStatusWithAggregatesFilter<"PracticeSet"> | $Enums.Status
    enrollmentCount?: IntWithAggregatesFilter<"PracticeSet"> | number
    totalTaskCount?: IntWithAggregatesFilter<"PracticeSet"> | number
    config?: JsonNullableWithAggregatesFilter<"PracticeSet">
    createdAt?: DateTimeWithAggregatesFilter<"PracticeSet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PracticeSet"> | Date | string
  }

  export type UserPracticeSetWhereInput = {
    AND?: UserPracticeSetWhereInput | UserPracticeSetWhereInput[]
    OR?: UserPracticeSetWhereInput[]
    NOT?: UserPracticeSetWhereInput | UserPracticeSetWhereInput[]
    id?: StringFilter<"UserPracticeSet"> | string
    practiceSetId?: StringFilter<"UserPracticeSet"> | string
    userId?: StringFilter<"UserPracticeSet"> | string
    status?: EnumStatusFilter<"UserPracticeSet"> | $Enums.Status
    user?: XOR<UserRelationFilter, UserWhereInput>
    practiceSet?: XOR<PracticeSetRelationFilter, PracticeSetWhereInput>
    userSubmitTasks?: UserSubmitTaskListRelationFilter
  }

  export type UserPracticeSetOrderByWithRelationInput = {
    id?: SortOrder
    practiceSetId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    practiceSet?: PracticeSetOrderByWithRelationInput
    userSubmitTasks?: UserSubmitTaskOrderByRelationAggregateInput
  }

  export type UserPracticeSetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserPracticeSetWhereInput | UserPracticeSetWhereInput[]
    OR?: UserPracticeSetWhereInput[]
    NOT?: UserPracticeSetWhereInput | UserPracticeSetWhereInput[]
    practiceSetId?: StringFilter<"UserPracticeSet"> | string
    userId?: StringFilter<"UserPracticeSet"> | string
    status?: EnumStatusFilter<"UserPracticeSet"> | $Enums.Status
    user?: XOR<UserRelationFilter, UserWhereInput>
    practiceSet?: XOR<PracticeSetRelationFilter, PracticeSetWhereInput>
    userSubmitTasks?: UserSubmitTaskListRelationFilter
  }, "id">

  export type UserPracticeSetOrderByWithAggregationInput = {
    id?: SortOrder
    practiceSetId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    _count?: UserPracticeSetCountOrderByAggregateInput
    _max?: UserPracticeSetMaxOrderByAggregateInput
    _min?: UserPracticeSetMinOrderByAggregateInput
  }

  export type UserPracticeSetScalarWhereWithAggregatesInput = {
    AND?: UserPracticeSetScalarWhereWithAggregatesInput | UserPracticeSetScalarWhereWithAggregatesInput[]
    OR?: UserPracticeSetScalarWhereWithAggregatesInput[]
    NOT?: UserPracticeSetScalarWhereWithAggregatesInput | UserPracticeSetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPracticeSet"> | string
    practiceSetId?: StringWithAggregatesFilter<"UserPracticeSet"> | string
    userId?: StringWithAggregatesFilter<"UserPracticeSet"> | string
    status?: EnumStatusWithAggregatesFilter<"UserPracticeSet"> | $Enums.Status
  }

  export type PracticeTaskWhereInput = {
    AND?: PracticeTaskWhereInput | PracticeTaskWhereInput[]
    OR?: PracticeTaskWhereInput[]
    NOT?: PracticeTaskWhereInput | PracticeTaskWhereInput[]
    index?: IntFilter<"PracticeTask"> | number
    id?: StringFilter<"PracticeTask"> | string
    userId?: StringFilter<"PracticeTask"> | string
    practiceSetId?: StringFilter<"PracticeTask"> | string
    title?: StringFilter<"PracticeTask"> | string
    description?: JsonNullableFilter<"PracticeTask">
    visibility?: EnumVisibilityFilter<"PracticeTask"> | $Enums.Visibility
    completionCount?: IntFilter<"PracticeTask"> | number
    status?: EnumStatusFilter<"PracticeTask"> | $Enums.Status
    taskType?: EnumTaskTypeFilter<"PracticeTask"> | $Enums.TaskType
    createdAt?: DateTimeFilter<"PracticeTask"> | Date | string
    updatedAt?: DateTimeFilter<"PracticeTask"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    practiceSet?: XOR<PracticeSetRelationFilter, PracticeSetWhereInput>
    userSubmitTasks?: UserSubmitTaskListRelationFilter
    userTaskMetadatas?: UserTaskMetadataListRelationFilter
    taskTags?: TaskTagListRelationFilter
  }

  export type PracticeTaskOrderByWithRelationInput = {
    index?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    practiceSetId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    visibility?: SortOrder
    completionCount?: SortOrder
    status?: SortOrder
    taskType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    practiceSet?: PracticeSetOrderByWithRelationInput
    userSubmitTasks?: UserSubmitTaskOrderByRelationAggregateInput
    userTaskMetadatas?: UserTaskMetadataOrderByRelationAggregateInput
    taskTags?: TaskTagOrderByRelationAggregateInput
  }

  export type PracticeTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PracticeTaskWhereInput | PracticeTaskWhereInput[]
    OR?: PracticeTaskWhereInput[]
    NOT?: PracticeTaskWhereInput | PracticeTaskWhereInput[]
    index?: IntFilter<"PracticeTask"> | number
    userId?: StringFilter<"PracticeTask"> | string
    practiceSetId?: StringFilter<"PracticeTask"> | string
    title?: StringFilter<"PracticeTask"> | string
    description?: JsonNullableFilter<"PracticeTask">
    visibility?: EnumVisibilityFilter<"PracticeTask"> | $Enums.Visibility
    completionCount?: IntFilter<"PracticeTask"> | number
    status?: EnumStatusFilter<"PracticeTask"> | $Enums.Status
    taskType?: EnumTaskTypeFilter<"PracticeTask"> | $Enums.TaskType
    createdAt?: DateTimeFilter<"PracticeTask"> | Date | string
    updatedAt?: DateTimeFilter<"PracticeTask"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    practiceSet?: XOR<PracticeSetRelationFilter, PracticeSetWhereInput>
    userSubmitTasks?: UserSubmitTaskListRelationFilter
    userTaskMetadatas?: UserTaskMetadataListRelationFilter
    taskTags?: TaskTagListRelationFilter
  }, "id">

  export type PracticeTaskOrderByWithAggregationInput = {
    index?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    practiceSetId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    visibility?: SortOrder
    completionCount?: SortOrder
    status?: SortOrder
    taskType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PracticeTaskCountOrderByAggregateInput
    _avg?: PracticeTaskAvgOrderByAggregateInput
    _max?: PracticeTaskMaxOrderByAggregateInput
    _min?: PracticeTaskMinOrderByAggregateInput
    _sum?: PracticeTaskSumOrderByAggregateInput
  }

  export type PracticeTaskScalarWhereWithAggregatesInput = {
    AND?: PracticeTaskScalarWhereWithAggregatesInput | PracticeTaskScalarWhereWithAggregatesInput[]
    OR?: PracticeTaskScalarWhereWithAggregatesInput[]
    NOT?: PracticeTaskScalarWhereWithAggregatesInput | PracticeTaskScalarWhereWithAggregatesInput[]
    index?: IntWithAggregatesFilter<"PracticeTask"> | number
    id?: StringWithAggregatesFilter<"PracticeTask"> | string
    userId?: StringWithAggregatesFilter<"PracticeTask"> | string
    practiceSetId?: StringWithAggregatesFilter<"PracticeTask"> | string
    title?: StringWithAggregatesFilter<"PracticeTask"> | string
    description?: JsonNullableWithAggregatesFilter<"PracticeTask">
    visibility?: EnumVisibilityWithAggregatesFilter<"PracticeTask"> | $Enums.Visibility
    completionCount?: IntWithAggregatesFilter<"PracticeTask"> | number
    status?: EnumStatusWithAggregatesFilter<"PracticeTask"> | $Enums.Status
    taskType?: EnumTaskTypeWithAggregatesFilter<"PracticeTask"> | $Enums.TaskType
    createdAt?: DateTimeWithAggregatesFilter<"PracticeTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PracticeTask"> | Date | string
  }

  export type UserTaskMetadataWhereInput = {
    AND?: UserTaskMetadataWhereInput | UserTaskMetadataWhereInput[]
    OR?: UserTaskMetadataWhereInput[]
    NOT?: UserTaskMetadataWhereInput | UserTaskMetadataWhereInput[]
    id?: StringFilter<"UserTaskMetadata"> | string
    userId?: StringFilter<"UserTaskMetadata"> | string
    practiceTaskId?: StringFilter<"UserTaskMetadata"> | string
    note?: JsonNullableFilter<"UserTaskMetadata">
    isBookmarked?: BoolFilter<"UserTaskMetadata"> | boolean
    isIgnored?: BoolFilter<"UserTaskMetadata"> | boolean
    submissionCount?: IntFilter<"UserTaskMetadata"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    practiceTask?: XOR<PracticeTaskRelationFilter, PracticeTaskWhereInput>
  }

  export type UserTaskMetadataOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    practiceTaskId?: SortOrder
    note?: SortOrderInput | SortOrder
    isBookmarked?: SortOrder
    isIgnored?: SortOrder
    submissionCount?: SortOrder
    user?: UserOrderByWithRelationInput
    practiceTask?: PracticeTaskOrderByWithRelationInput
  }

  export type UserTaskMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserTaskMetadataWhereInput | UserTaskMetadataWhereInput[]
    OR?: UserTaskMetadataWhereInput[]
    NOT?: UserTaskMetadataWhereInput | UserTaskMetadataWhereInput[]
    userId?: StringFilter<"UserTaskMetadata"> | string
    practiceTaskId?: StringFilter<"UserTaskMetadata"> | string
    note?: JsonNullableFilter<"UserTaskMetadata">
    isBookmarked?: BoolFilter<"UserTaskMetadata"> | boolean
    isIgnored?: BoolFilter<"UserTaskMetadata"> | boolean
    submissionCount?: IntFilter<"UserTaskMetadata"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    practiceTask?: XOR<PracticeTaskRelationFilter, PracticeTaskWhereInput>
  }, "id">

  export type UserTaskMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    practiceTaskId?: SortOrder
    note?: SortOrderInput | SortOrder
    isBookmarked?: SortOrder
    isIgnored?: SortOrder
    submissionCount?: SortOrder
    _count?: UserTaskMetadataCountOrderByAggregateInput
    _avg?: UserTaskMetadataAvgOrderByAggregateInput
    _max?: UserTaskMetadataMaxOrderByAggregateInput
    _min?: UserTaskMetadataMinOrderByAggregateInput
    _sum?: UserTaskMetadataSumOrderByAggregateInput
  }

  export type UserTaskMetadataScalarWhereWithAggregatesInput = {
    AND?: UserTaskMetadataScalarWhereWithAggregatesInput | UserTaskMetadataScalarWhereWithAggregatesInput[]
    OR?: UserTaskMetadataScalarWhereWithAggregatesInput[]
    NOT?: UserTaskMetadataScalarWhereWithAggregatesInput | UserTaskMetadataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserTaskMetadata"> | string
    userId?: StringWithAggregatesFilter<"UserTaskMetadata"> | string
    practiceTaskId?: StringWithAggregatesFilter<"UserTaskMetadata"> | string
    note?: JsonNullableWithAggregatesFilter<"UserTaskMetadata">
    isBookmarked?: BoolWithAggregatesFilter<"UserTaskMetadata"> | boolean
    isIgnored?: BoolWithAggregatesFilter<"UserTaskMetadata"> | boolean
    submissionCount?: IntWithAggregatesFilter<"UserTaskMetadata"> | number
  }

  export type TaskTagWhereInput = {
    AND?: TaskTagWhereInput | TaskTagWhereInput[]
    OR?: TaskTagWhereInput[]
    NOT?: TaskTagWhereInput | TaskTagWhereInput[]
    id?: StringFilter<"TaskTag"> | string
    userId?: StringFilter<"TaskTag"> | string
    name?: StringFilter<"TaskTag"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    PracticeTask?: PracticeTaskListRelationFilter
  }

  export type TaskTagOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    user?: UserOrderByWithRelationInput
    PracticeTask?: PracticeTaskOrderByRelationAggregateInput
  }

  export type TaskTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskTagWhereInput | TaskTagWhereInput[]
    OR?: TaskTagWhereInput[]
    NOT?: TaskTagWhereInput | TaskTagWhereInput[]
    userId?: StringFilter<"TaskTag"> | string
    name?: StringFilter<"TaskTag"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    PracticeTask?: PracticeTaskListRelationFilter
  }, "id">

  export type TaskTagOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    _count?: TaskTagCountOrderByAggregateInput
    _max?: TaskTagMaxOrderByAggregateInput
    _min?: TaskTagMinOrderByAggregateInput
  }

  export type TaskTagScalarWhereWithAggregatesInput = {
    AND?: TaskTagScalarWhereWithAggregatesInput | TaskTagScalarWhereWithAggregatesInput[]
    OR?: TaskTagScalarWhereWithAggregatesInput[]
    NOT?: TaskTagScalarWhereWithAggregatesInput | TaskTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskTag"> | string
    userId?: StringWithAggregatesFilter<"TaskTag"> | string
    name?: StringWithAggregatesFilter<"TaskTag"> | string
  }

  export type UserSubmitTaskWhereInput = {
    AND?: UserSubmitTaskWhereInput | UserSubmitTaskWhereInput[]
    OR?: UserSubmitTaskWhereInput[]
    NOT?: UserSubmitTaskWhereInput | UserSubmitTaskWhereInput[]
    id?: StringFilter<"UserSubmitTask"> | string
    userId?: StringFilter<"UserSubmitTask"> | string
    practiceSetId?: StringFilter<"UserSubmitTask"> | string
    practiceTaskId?: StringFilter<"UserSubmitTask"> | string
    userPracticeSetId?: StringFilter<"UserSubmitTask"> | string
    userResponse?: JsonFilter<"UserSubmitTask">
    createdAt?: DateTimeFilter<"UserSubmitTask"> | Date | string
    submittedAt?: DateTimeFilter<"UserSubmitTask"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubmitTask"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    practiceSet?: XOR<PracticeSetRelationFilter, PracticeSetWhereInput>
    practiceTask?: XOR<PracticeTaskRelationFilter, PracticeTaskWhereInput>
    userPracticeSet?: XOR<UserPracticeSetRelationFilter, UserPracticeSetWhereInput>
  }

  export type UserSubmitTaskOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    practiceSetId?: SortOrder
    practiceTaskId?: SortOrder
    userPracticeSetId?: SortOrder
    userResponse?: SortOrder
    createdAt?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    practiceSet?: PracticeSetOrderByWithRelationInput
    practiceTask?: PracticeTaskOrderByWithRelationInput
    userPracticeSet?: UserPracticeSetOrderByWithRelationInput
  }

  export type UserSubmitTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSubmitTaskWhereInput | UserSubmitTaskWhereInput[]
    OR?: UserSubmitTaskWhereInput[]
    NOT?: UserSubmitTaskWhereInput | UserSubmitTaskWhereInput[]
    userId?: StringFilter<"UserSubmitTask"> | string
    practiceSetId?: StringFilter<"UserSubmitTask"> | string
    practiceTaskId?: StringFilter<"UserSubmitTask"> | string
    userPracticeSetId?: StringFilter<"UserSubmitTask"> | string
    userResponse?: JsonFilter<"UserSubmitTask">
    createdAt?: DateTimeFilter<"UserSubmitTask"> | Date | string
    submittedAt?: DateTimeFilter<"UserSubmitTask"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubmitTask"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    practiceSet?: XOR<PracticeSetRelationFilter, PracticeSetWhereInput>
    practiceTask?: XOR<PracticeTaskRelationFilter, PracticeTaskWhereInput>
    userPracticeSet?: XOR<UserPracticeSetRelationFilter, UserPracticeSetWhereInput>
  }, "id">

  export type UserSubmitTaskOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    practiceSetId?: SortOrder
    practiceTaskId?: SortOrder
    userPracticeSetId?: SortOrder
    userResponse?: SortOrder
    createdAt?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSubmitTaskCountOrderByAggregateInput
    _max?: UserSubmitTaskMaxOrderByAggregateInput
    _min?: UserSubmitTaskMinOrderByAggregateInput
  }

  export type UserSubmitTaskScalarWhereWithAggregatesInput = {
    AND?: UserSubmitTaskScalarWhereWithAggregatesInput | UserSubmitTaskScalarWhereWithAggregatesInput[]
    OR?: UserSubmitTaskScalarWhereWithAggregatesInput[]
    NOT?: UserSubmitTaskScalarWhereWithAggregatesInput | UserSubmitTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSubmitTask"> | string
    userId?: StringWithAggregatesFilter<"UserSubmitTask"> | string
    practiceSetId?: StringWithAggregatesFilter<"UserSubmitTask"> | string
    practiceTaskId?: StringWithAggregatesFilter<"UserSubmitTask"> | string
    userPracticeSetId?: StringWithAggregatesFilter<"UserSubmitTask"> | string
    userResponse?: JsonWithAggregatesFilter<"UserSubmitTask">
    createdAt?: DateTimeWithAggregatesFilter<"UserSubmitTask"> | Date | string
    submittedAt?: DateTimeWithAggregatesFilter<"UserSubmitTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSubmitTask"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutUserInput
    taskTag?: TaskTagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusUncheckedCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetUncheckedCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskUncheckedCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetUncheckedCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutUserInput
    taskTag?: TaskTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUncheckedUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUncheckedUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUncheckedUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUncheckedUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatusCreateInput = {
    id?: string
    pictureUrl?: string | null
    text?: string | null
    backgroundImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserStatusesInput
  }

  export type UserStatusUncheckedCreateInput = {
    id?: string
    userId: string
    pictureUrl?: string | null
    text?: string | null
    backgroundImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserStatusesNestedInput
  }

  export type UserStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatusCreateManyInput = {
    id?: string
    userId: string
    pictureUrl?: string | null
    text?: string | null
    backgroundImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    visibility: $Enums.Visibility
    text: JsonNullValueInput | InputJsonValue
    totalLikeCount?: number
    totalCommentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ReactionCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    userId: string
    visibility: $Enums.Visibility
    text: JsonNullValueInput | InputJsonValue
    totalLikeCount?: number
    totalCommentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ReactionUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    text?: JsonNullValueInput | InputJsonValue
    totalLikeCount?: IntFieldUpdateOperationsInput | number
    totalCommentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ReactionUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    text?: JsonNullValueInput | InputJsonValue
    totalLikeCount?: IntFieldUpdateOperationsInput | number
    totalCommentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ReactionUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    userId: string
    visibility: $Enums.Visibility
    text: JsonNullValueInput | InputJsonValue
    totalLikeCount?: number
    totalCommentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    text?: JsonNullValueInput | InputJsonValue
    totalLikeCount?: IntFieldUpdateOperationsInput | number
    totalCommentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    text?: JsonNullValueInput | InputJsonValue
    totalLikeCount?: IntFieldUpdateOperationsInput | number
    totalCommentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionCreateInput = {
    id?: string
    reactionType: $Enums.PostReaction
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReactionsInput
    post: PostCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateInput = {
    id?: string
    userId: string
    postId: string
    reactionType: $Enums.PostReaction
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reactionType?: EnumPostReactionFieldUpdateOperationsInput | $Enums.PostReaction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
    post?: PostUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    reactionType?: EnumPostReactionFieldUpdateOperationsInput | $Enums.PostReaction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionCreateManyInput = {
    id?: string
    userId: string
    postId: string
    reactionType: $Enums.PostReaction
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reactionType?: EnumPostReactionFieldUpdateOperationsInput | $Enums.PostReaction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    reactionType?: EnumPostReactionFieldUpdateOperationsInput | $Enums.PostReaction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    pictureUrl?: string | null
    text?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    userId: string
    pictureUrl?: string | null
    text?: string | null
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    userId: string
    pictureUrl?: string | null
    text?: string | null
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeSetCreateInput = {
    id?: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    status?: $Enums.Status
    enrollmentCount?: number
    totalTaskCount?: number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceTasks?: PracticeTaskCreateNestedManyWithoutPracticeSetInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutPracticeSetInput
    userPracticeSets?: UserPracticeSetCreateNestedManyWithoutPracticeSetInput
    user: UserCreateNestedOneWithoutPracticeSetsInput
  }

  export type PracticeSetUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    status?: $Enums.Status
    enrollmentCount?: number
    totalTaskCount?: number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceTasks?: PracticeTaskUncheckedCreateNestedManyWithoutPracticeSetInput
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutPracticeSetInput
    userPracticeSets?: UserPracticeSetUncheckedCreateNestedManyWithoutPracticeSetInput
  }

  export type PracticeSetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    totalTaskCount?: IntFieldUpdateOperationsInput | number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceTasks?: PracticeTaskUpdateManyWithoutPracticeSetNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutPracticeSetNestedInput
    userPracticeSets?: UserPracticeSetUpdateManyWithoutPracticeSetNestedInput
    user?: UserUpdateOneRequiredWithoutPracticeSetsNestedInput
  }

  export type PracticeSetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    totalTaskCount?: IntFieldUpdateOperationsInput | number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceTasks?: PracticeTaskUncheckedUpdateManyWithoutPracticeSetNestedInput
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutPracticeSetNestedInput
    userPracticeSets?: UserPracticeSetUncheckedUpdateManyWithoutPracticeSetNestedInput
  }

  export type PracticeSetCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    status?: $Enums.Status
    enrollmentCount?: number
    totalTaskCount?: number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PracticeSetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    totalTaskCount?: IntFieldUpdateOperationsInput | number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeSetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    totalTaskCount?: IntFieldUpdateOperationsInput | number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPracticeSetCreateInput = {
    id?: string
    status?: $Enums.Status
    user: UserCreateNestedOneWithoutUserPracticeSetsInput
    practiceSet: PracticeSetCreateNestedOneWithoutUserPracticeSetsInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutUserPracticeSetInput
  }

  export type UserPracticeSetUncheckedCreateInput = {
    id?: string
    practiceSetId: string
    userId: string
    status?: $Enums.Status
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutUserPracticeSetInput
  }

  export type UserPracticeSetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUpdateOneRequiredWithoutUserPracticeSetsNestedInput
    practiceSet?: PracticeSetUpdateOneRequiredWithoutUserPracticeSetsNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutUserPracticeSetNestedInput
  }

  export type UserPracticeSetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutUserPracticeSetNestedInput
  }

  export type UserPracticeSetCreateManyInput = {
    id?: string
    practiceSetId: string
    userId: string
    status?: $Enums.Status
  }

  export type UserPracticeSetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type UserPracticeSetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type PracticeTaskCreateInput = {
    index?: number
    id?: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPracticeTasksInput
    practiceSet: PracticeSetCreateNestedOneWithoutPracticeTasksInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutPracticeTaskInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutPracticeTaskInput
    taskTags?: TaskTagCreateNestedManyWithoutPracticeTaskInput
  }

  export type PracticeTaskUncheckedCreateInput = {
    index?: number
    id?: string
    userId: string
    practiceSetId: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutPracticeTaskInput
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutPracticeTaskInput
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutPracticeTaskInput
  }

  export type PracticeTaskUpdateInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPracticeTasksNestedInput
    practiceSet?: PracticeSetUpdateOneRequiredWithoutPracticeTasksNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutPracticeTaskNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutPracticeTaskNestedInput
    taskTags?: TaskTagUpdateManyWithoutPracticeTaskNestedInput
  }

  export type PracticeTaskUncheckedUpdateInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutPracticeTaskNestedInput
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutPracticeTaskNestedInput
    taskTags?: TaskTagUncheckedUpdateManyWithoutPracticeTaskNestedInput
  }

  export type PracticeTaskCreateManyInput = {
    index?: number
    id?: string
    userId: string
    practiceSetId: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PracticeTaskUpdateManyMutationInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeTaskUncheckedUpdateManyInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTaskMetadataCreateInput = {
    id?: string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: boolean
    isIgnored?: boolean
    submissionCount?: number
    user: UserCreateNestedOneWithoutUserTaskMetadatasInput
    practiceTask: PracticeTaskCreateNestedOneWithoutUserTaskMetadatasInput
  }

  export type UserTaskMetadataUncheckedCreateInput = {
    id?: string
    userId: string
    practiceTaskId: string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: boolean
    isIgnored?: boolean
    submissionCount?: number
  }

  export type UserTaskMetadataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: BoolFieldUpdateOperationsInput | boolean
    isIgnored?: BoolFieldUpdateOperationsInput | boolean
    submissionCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUserTaskMetadatasNestedInput
    practiceTask?: PracticeTaskUpdateOneRequiredWithoutUserTaskMetadatasNestedInput
  }

  export type UserTaskMetadataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceTaskId?: StringFieldUpdateOperationsInput | string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: BoolFieldUpdateOperationsInput | boolean
    isIgnored?: BoolFieldUpdateOperationsInput | boolean
    submissionCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserTaskMetadataCreateManyInput = {
    id?: string
    userId: string
    practiceTaskId: string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: boolean
    isIgnored?: boolean
    submissionCount?: number
  }

  export type UserTaskMetadataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: BoolFieldUpdateOperationsInput | boolean
    isIgnored?: BoolFieldUpdateOperationsInput | boolean
    submissionCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserTaskMetadataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceTaskId?: StringFieldUpdateOperationsInput | string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: BoolFieldUpdateOperationsInput | boolean
    isIgnored?: BoolFieldUpdateOperationsInput | boolean
    submissionCount?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTagCreateInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutTaskTagInput
    PracticeTask?: PracticeTaskCreateNestedManyWithoutTaskTagsInput
  }

  export type TaskTagUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    PracticeTask?: PracticeTaskUncheckedCreateNestedManyWithoutTaskTagsInput
  }

  export type TaskTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTaskTagNestedInput
    PracticeTask?: PracticeTaskUpdateManyWithoutTaskTagsNestedInput
  }

  export type TaskTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PracticeTask?: PracticeTaskUncheckedUpdateManyWithoutTaskTagsNestedInput
  }

  export type TaskTagCreateManyInput = {
    id?: string
    userId: string
    name: string
  }

  export type TaskTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TaskTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserSubmitTaskCreateInput = {
    id?: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSubmitTasksInput
    practiceSet: PracticeSetCreateNestedOneWithoutUserSubmitTasksInput
    practiceTask: PracticeTaskCreateNestedOneWithoutUserSubmitTasksInput
    userPracticeSet: UserPracticeSetCreateNestedOneWithoutUserSubmitTasksInput
  }

  export type UserSubmitTaskUncheckedCreateInput = {
    id?: string
    userId: string
    practiceSetId: string
    practiceTaskId: string
    userPracticeSetId: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
  }

  export type UserSubmitTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSubmitTasksNestedInput
    practiceSet?: PracticeSetUpdateOneRequiredWithoutUserSubmitTasksNestedInput
    practiceTask?: PracticeTaskUpdateOneRequiredWithoutUserSubmitTasksNestedInput
    userPracticeSet?: UserPracticeSetUpdateOneRequiredWithoutUserSubmitTasksNestedInput
  }

  export type UserSubmitTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    practiceTaskId?: StringFieldUpdateOperationsInput | string
    userPracticeSetId?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubmitTaskCreateManyInput = {
    id?: string
    userId: string
    practiceSetId: string
    practiceTaskId: string
    userPracticeSetId: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
  }

  export type UserSubmitTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubmitTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    practiceTaskId?: StringFieldUpdateOperationsInput | string
    userPracticeSetId?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type ReactionListRelationFilter = {
    every?: ReactionWhereInput
    some?: ReactionWhereInput
    none?: ReactionWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type UserStatusListRelationFilter = {
    every?: UserStatusWhereInput
    some?: UserStatusWhereInput
    none?: UserStatusWhereInput
  }

  export type PracticeSetListRelationFilter = {
    every?: PracticeSetWhereInput
    some?: PracticeSetWhereInput
    none?: PracticeSetWhereInput
  }

  export type PracticeTaskListRelationFilter = {
    every?: PracticeTaskWhereInput
    some?: PracticeTaskWhereInput
    none?: PracticeTaskWhereInput
  }

  export type UserSubmitTaskListRelationFilter = {
    every?: UserSubmitTaskWhereInput
    some?: UserSubmitTaskWhereInput
    none?: UserSubmitTaskWhereInput
  }

  export type UserPracticeSetListRelationFilter = {
    every?: UserPracticeSetWhereInput
    some?: UserPracticeSetWhereInput
    none?: UserPracticeSetWhereInput
  }

  export type UserTaskMetadataListRelationFilter = {
    every?: UserTaskMetadataWhereInput
    some?: UserTaskMetadataWhereInput
    none?: UserTaskMetadataWhereInput
  }

  export type TaskTagListRelationFilter = {
    every?: TaskTagWhereInput
    some?: TaskTagWhereInput
    none?: TaskTagWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PracticeSetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PracticeTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSubmitTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPracticeSetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTaskMetadataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserStatusCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pictureUrl?: SortOrder
    text?: SortOrder
    backgroundImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pictureUrl?: SortOrder
    text?: SortOrder
    backgroundImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatusMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pictureUrl?: SortOrder
    text?: SortOrder
    backgroundImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    visibility?: SortOrder
    text?: SortOrder
    totalLikeCount?: SortOrder
    totalCommentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    totalLikeCount?: SortOrder
    totalCommentCount?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    visibility?: SortOrder
    totalLikeCount?: SortOrder
    totalCommentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    visibility?: SortOrder
    totalLikeCount?: SortOrder
    totalCommentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    totalLikeCount?: SortOrder
    totalCommentCount?: SortOrder
  }

  export type EnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type EnumPostReactionFilter<$PrismaModel = never> = {
    equals?: $Enums.PostReaction | EnumPostReactionFieldRefInput<$PrismaModel>
    in?: $Enums.PostReaction[] | ListEnumPostReactionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostReaction[] | ListEnumPostReactionFieldRefInput<$PrismaModel>
    not?: NestedEnumPostReactionFilter<$PrismaModel> | $Enums.PostReaction
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type ReactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    reactionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    reactionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    reactionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPostReactionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostReaction | EnumPostReactionFieldRefInput<$PrismaModel>
    in?: $Enums.PostReaction[] | ListEnumPostReactionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostReaction[] | ListEnumPostReactionFieldRefInput<$PrismaModel>
    not?: NestedEnumPostReactionWithAggregatesFilter<$PrismaModel> | $Enums.PostReaction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostReactionFilter<$PrismaModel>
    _max?: NestedEnumPostReactionFilter<$PrismaModel>
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pictureUrl?: SortOrder
    text?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pictureUrl?: SortOrder
    text?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pictureUrl?: SortOrder
    text?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type PracticeSetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    enrollmentCount?: SortOrder
    totalTaskCount?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PracticeSetAvgOrderByAggregateInput = {
    enrollmentCount?: SortOrder
    totalTaskCount?: SortOrder
  }

  export type PracticeSetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    enrollmentCount?: SortOrder
    totalTaskCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PracticeSetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    enrollmentCount?: SortOrder
    totalTaskCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PracticeSetSumOrderByAggregateInput = {
    enrollmentCount?: SortOrder
    totalTaskCount?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type PracticeSetRelationFilter = {
    is?: PracticeSetWhereInput
    isNot?: PracticeSetWhereInput
  }

  export type UserPracticeSetCountOrderByAggregateInput = {
    id?: SortOrder
    practiceSetId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type UserPracticeSetMaxOrderByAggregateInput = {
    id?: SortOrder
    practiceSetId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type UserPracticeSetMinOrderByAggregateInput = {
    id?: SortOrder
    practiceSetId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type EnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type PracticeTaskCountOrderByAggregateInput = {
    index?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    practiceSetId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    completionCount?: SortOrder
    status?: SortOrder
    taskType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PracticeTaskAvgOrderByAggregateInput = {
    index?: SortOrder
    completionCount?: SortOrder
  }

  export type PracticeTaskMaxOrderByAggregateInput = {
    index?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    practiceSetId?: SortOrder
    title?: SortOrder
    visibility?: SortOrder
    completionCount?: SortOrder
    status?: SortOrder
    taskType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PracticeTaskMinOrderByAggregateInput = {
    index?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    practiceSetId?: SortOrder
    title?: SortOrder
    visibility?: SortOrder
    completionCount?: SortOrder
    status?: SortOrder
    taskType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PracticeTaskSumOrderByAggregateInput = {
    index?: SortOrder
    completionCount?: SortOrder
  }

  export type EnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PracticeTaskRelationFilter = {
    is?: PracticeTaskWhereInput
    isNot?: PracticeTaskWhereInput
  }

  export type UserTaskMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    practiceTaskId?: SortOrder
    note?: SortOrder
    isBookmarked?: SortOrder
    isIgnored?: SortOrder
    submissionCount?: SortOrder
  }

  export type UserTaskMetadataAvgOrderByAggregateInput = {
    submissionCount?: SortOrder
  }

  export type UserTaskMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    practiceTaskId?: SortOrder
    isBookmarked?: SortOrder
    isIgnored?: SortOrder
    submissionCount?: SortOrder
  }

  export type UserTaskMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    practiceTaskId?: SortOrder
    isBookmarked?: SortOrder
    isIgnored?: SortOrder
    submissionCount?: SortOrder
  }

  export type UserTaskMetadataSumOrderByAggregateInput = {
    submissionCount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TaskTagCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type TaskTagMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type TaskTagMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type UserPracticeSetRelationFilter = {
    is?: UserPracticeSetWhereInput
    isNot?: UserPracticeSetWhereInput
  }

  export type UserSubmitTaskCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    practiceSetId?: SortOrder
    practiceTaskId?: SortOrder
    userPracticeSetId?: SortOrder
    userResponse?: SortOrder
    createdAt?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubmitTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    practiceSetId?: SortOrder
    practiceTaskId?: SortOrder
    userPracticeSetId?: SortOrder
    createdAt?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubmitTaskMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    practiceSetId?: SortOrder
    practiceTaskId?: SortOrder
    userPracticeSetId?: SortOrder
    createdAt?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserStatusCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStatusCreateWithoutUserInput, UserStatusUncheckedCreateWithoutUserInput> | UserStatusCreateWithoutUserInput[] | UserStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStatusCreateOrConnectWithoutUserInput | UserStatusCreateOrConnectWithoutUserInput[]
    createMany?: UserStatusCreateManyUserInputEnvelope
    connect?: UserStatusWhereUniqueInput | UserStatusWhereUniqueInput[]
  }

  export type PracticeSetCreateNestedManyWithoutUserInput = {
    create?: XOR<PracticeSetCreateWithoutUserInput, PracticeSetUncheckedCreateWithoutUserInput> | PracticeSetCreateWithoutUserInput[] | PracticeSetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PracticeSetCreateOrConnectWithoutUserInput | PracticeSetCreateOrConnectWithoutUserInput[]
    createMany?: PracticeSetCreateManyUserInputEnvelope
    connect?: PracticeSetWhereUniqueInput | PracticeSetWhereUniqueInput[]
  }

  export type PracticeTaskCreateNestedManyWithoutUserInput = {
    create?: XOR<PracticeTaskCreateWithoutUserInput, PracticeTaskUncheckedCreateWithoutUserInput> | PracticeTaskCreateWithoutUserInput[] | PracticeTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutUserInput | PracticeTaskCreateOrConnectWithoutUserInput[]
    createMany?: PracticeTaskCreateManyUserInputEnvelope
    connect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
  }

  export type UserSubmitTaskCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubmitTaskCreateWithoutUserInput, UserSubmitTaskUncheckedCreateWithoutUserInput> | UserSubmitTaskCreateWithoutUserInput[] | UserSubmitTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutUserInput | UserSubmitTaskCreateOrConnectWithoutUserInput[]
    createMany?: UserSubmitTaskCreateManyUserInputEnvelope
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
  }

  export type UserPracticeSetCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPracticeSetCreateWithoutUserInput, UserPracticeSetUncheckedCreateWithoutUserInput> | UserPracticeSetCreateWithoutUserInput[] | UserPracticeSetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPracticeSetCreateOrConnectWithoutUserInput | UserPracticeSetCreateOrConnectWithoutUserInput[]
    createMany?: UserPracticeSetCreateManyUserInputEnvelope
    connect?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
  }

  export type UserTaskMetadataCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTaskMetadataCreateWithoutUserInput, UserTaskMetadataUncheckedCreateWithoutUserInput> | UserTaskMetadataCreateWithoutUserInput[] | UserTaskMetadataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskMetadataCreateOrConnectWithoutUserInput | UserTaskMetadataCreateOrConnectWithoutUserInput[]
    createMany?: UserTaskMetadataCreateManyUserInputEnvelope
    connect?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
  }

  export type TaskTagCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskTagCreateWithoutUserInput, TaskTagUncheckedCreateWithoutUserInput> | TaskTagCreateWithoutUserInput[] | TaskTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutUserInput | TaskTagCreateOrConnectWithoutUserInput[]
    createMany?: TaskTagCreateManyUserInputEnvelope
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserStatusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStatusCreateWithoutUserInput, UserStatusUncheckedCreateWithoutUserInput> | UserStatusCreateWithoutUserInput[] | UserStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStatusCreateOrConnectWithoutUserInput | UserStatusCreateOrConnectWithoutUserInput[]
    createMany?: UserStatusCreateManyUserInputEnvelope
    connect?: UserStatusWhereUniqueInput | UserStatusWhereUniqueInput[]
  }

  export type PracticeSetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PracticeSetCreateWithoutUserInput, PracticeSetUncheckedCreateWithoutUserInput> | PracticeSetCreateWithoutUserInput[] | PracticeSetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PracticeSetCreateOrConnectWithoutUserInput | PracticeSetCreateOrConnectWithoutUserInput[]
    createMany?: PracticeSetCreateManyUserInputEnvelope
    connect?: PracticeSetWhereUniqueInput | PracticeSetWhereUniqueInput[]
  }

  export type PracticeTaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PracticeTaskCreateWithoutUserInput, PracticeTaskUncheckedCreateWithoutUserInput> | PracticeTaskCreateWithoutUserInput[] | PracticeTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutUserInput | PracticeTaskCreateOrConnectWithoutUserInput[]
    createMany?: PracticeTaskCreateManyUserInputEnvelope
    connect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
  }

  export type UserSubmitTaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubmitTaskCreateWithoutUserInput, UserSubmitTaskUncheckedCreateWithoutUserInput> | UserSubmitTaskCreateWithoutUserInput[] | UserSubmitTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutUserInput | UserSubmitTaskCreateOrConnectWithoutUserInput[]
    createMany?: UserSubmitTaskCreateManyUserInputEnvelope
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
  }

  export type UserPracticeSetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPracticeSetCreateWithoutUserInput, UserPracticeSetUncheckedCreateWithoutUserInput> | UserPracticeSetCreateWithoutUserInput[] | UserPracticeSetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPracticeSetCreateOrConnectWithoutUserInput | UserPracticeSetCreateOrConnectWithoutUserInput[]
    createMany?: UserPracticeSetCreateManyUserInputEnvelope
    connect?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
  }

  export type UserTaskMetadataUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTaskMetadataCreateWithoutUserInput, UserTaskMetadataUncheckedCreateWithoutUserInput> | UserTaskMetadataCreateWithoutUserInput[] | UserTaskMetadataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskMetadataCreateOrConnectWithoutUserInput | UserTaskMetadataCreateOrConnectWithoutUserInput[]
    createMany?: UserTaskMetadataCreateManyUserInputEnvelope
    connect?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
  }

  export type TaskTagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskTagCreateWithoutUserInput, TaskTagUncheckedCreateWithoutUserInput> | TaskTagCreateWithoutUserInput[] | TaskTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutUserInput | TaskTagCreateOrConnectWithoutUserInput[]
    createMany?: TaskTagCreateManyUserInputEnvelope
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput | ReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutUserInput | ReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutUserInput | ReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserStatusUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStatusCreateWithoutUserInput, UserStatusUncheckedCreateWithoutUserInput> | UserStatusCreateWithoutUserInput[] | UserStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStatusCreateOrConnectWithoutUserInput | UserStatusCreateOrConnectWithoutUserInput[]
    upsert?: UserStatusUpsertWithWhereUniqueWithoutUserInput | UserStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStatusCreateManyUserInputEnvelope
    set?: UserStatusWhereUniqueInput | UserStatusWhereUniqueInput[]
    disconnect?: UserStatusWhereUniqueInput | UserStatusWhereUniqueInput[]
    delete?: UserStatusWhereUniqueInput | UserStatusWhereUniqueInput[]
    connect?: UserStatusWhereUniqueInput | UserStatusWhereUniqueInput[]
    update?: UserStatusUpdateWithWhereUniqueWithoutUserInput | UserStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStatusUpdateManyWithWhereWithoutUserInput | UserStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStatusScalarWhereInput | UserStatusScalarWhereInput[]
  }

  export type PracticeSetUpdateManyWithoutUserNestedInput = {
    create?: XOR<PracticeSetCreateWithoutUserInput, PracticeSetUncheckedCreateWithoutUserInput> | PracticeSetCreateWithoutUserInput[] | PracticeSetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PracticeSetCreateOrConnectWithoutUserInput | PracticeSetCreateOrConnectWithoutUserInput[]
    upsert?: PracticeSetUpsertWithWhereUniqueWithoutUserInput | PracticeSetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PracticeSetCreateManyUserInputEnvelope
    set?: PracticeSetWhereUniqueInput | PracticeSetWhereUniqueInput[]
    disconnect?: PracticeSetWhereUniqueInput | PracticeSetWhereUniqueInput[]
    delete?: PracticeSetWhereUniqueInput | PracticeSetWhereUniqueInput[]
    connect?: PracticeSetWhereUniqueInput | PracticeSetWhereUniqueInput[]
    update?: PracticeSetUpdateWithWhereUniqueWithoutUserInput | PracticeSetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PracticeSetUpdateManyWithWhereWithoutUserInput | PracticeSetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PracticeSetScalarWhereInput | PracticeSetScalarWhereInput[]
  }

  export type PracticeTaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<PracticeTaskCreateWithoutUserInput, PracticeTaskUncheckedCreateWithoutUserInput> | PracticeTaskCreateWithoutUserInput[] | PracticeTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutUserInput | PracticeTaskCreateOrConnectWithoutUserInput[]
    upsert?: PracticeTaskUpsertWithWhereUniqueWithoutUserInput | PracticeTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PracticeTaskCreateManyUserInputEnvelope
    set?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    disconnect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    delete?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    connect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    update?: PracticeTaskUpdateWithWhereUniqueWithoutUserInput | PracticeTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PracticeTaskUpdateManyWithWhereWithoutUserInput | PracticeTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PracticeTaskScalarWhereInput | PracticeTaskScalarWhereInput[]
  }

  export type UserSubmitTaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubmitTaskCreateWithoutUserInput, UserSubmitTaskUncheckedCreateWithoutUserInput> | UserSubmitTaskCreateWithoutUserInput[] | UserSubmitTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutUserInput | UserSubmitTaskCreateOrConnectWithoutUserInput[]
    upsert?: UserSubmitTaskUpsertWithWhereUniqueWithoutUserInput | UserSubmitTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubmitTaskCreateManyUserInputEnvelope
    set?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    disconnect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    delete?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    update?: UserSubmitTaskUpdateWithWhereUniqueWithoutUserInput | UserSubmitTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubmitTaskUpdateManyWithWhereWithoutUserInput | UserSubmitTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubmitTaskScalarWhereInput | UserSubmitTaskScalarWhereInput[]
  }

  export type UserPracticeSetUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPracticeSetCreateWithoutUserInput, UserPracticeSetUncheckedCreateWithoutUserInput> | UserPracticeSetCreateWithoutUserInput[] | UserPracticeSetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPracticeSetCreateOrConnectWithoutUserInput | UserPracticeSetCreateOrConnectWithoutUserInput[]
    upsert?: UserPracticeSetUpsertWithWhereUniqueWithoutUserInput | UserPracticeSetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPracticeSetCreateManyUserInputEnvelope
    set?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    disconnect?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    delete?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    connect?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    update?: UserPracticeSetUpdateWithWhereUniqueWithoutUserInput | UserPracticeSetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPracticeSetUpdateManyWithWhereWithoutUserInput | UserPracticeSetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPracticeSetScalarWhereInput | UserPracticeSetScalarWhereInput[]
  }

  export type UserTaskMetadataUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTaskMetadataCreateWithoutUserInput, UserTaskMetadataUncheckedCreateWithoutUserInput> | UserTaskMetadataCreateWithoutUserInput[] | UserTaskMetadataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskMetadataCreateOrConnectWithoutUserInput | UserTaskMetadataCreateOrConnectWithoutUserInput[]
    upsert?: UserTaskMetadataUpsertWithWhereUniqueWithoutUserInput | UserTaskMetadataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTaskMetadataCreateManyUserInputEnvelope
    set?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    disconnect?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    delete?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    connect?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    update?: UserTaskMetadataUpdateWithWhereUniqueWithoutUserInput | UserTaskMetadataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTaskMetadataUpdateManyWithWhereWithoutUserInput | UserTaskMetadataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTaskMetadataScalarWhereInput | UserTaskMetadataScalarWhereInput[]
  }

  export type TaskTagUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskTagCreateWithoutUserInput, TaskTagUncheckedCreateWithoutUserInput> | TaskTagCreateWithoutUserInput[] | TaskTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutUserInput | TaskTagCreateOrConnectWithoutUserInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutUserInput | TaskTagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskTagCreateManyUserInputEnvelope
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutUserInput | TaskTagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutUserInput | TaskTagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput | ReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutUserInput | ReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutUserInput | ReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserStatusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStatusCreateWithoutUserInput, UserStatusUncheckedCreateWithoutUserInput> | UserStatusCreateWithoutUserInput[] | UserStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStatusCreateOrConnectWithoutUserInput | UserStatusCreateOrConnectWithoutUserInput[]
    upsert?: UserStatusUpsertWithWhereUniqueWithoutUserInput | UserStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStatusCreateManyUserInputEnvelope
    set?: UserStatusWhereUniqueInput | UserStatusWhereUniqueInput[]
    disconnect?: UserStatusWhereUniqueInput | UserStatusWhereUniqueInput[]
    delete?: UserStatusWhereUniqueInput | UserStatusWhereUniqueInput[]
    connect?: UserStatusWhereUniqueInput | UserStatusWhereUniqueInput[]
    update?: UserStatusUpdateWithWhereUniqueWithoutUserInput | UserStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStatusUpdateManyWithWhereWithoutUserInput | UserStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStatusScalarWhereInput | UserStatusScalarWhereInput[]
  }

  export type PracticeSetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PracticeSetCreateWithoutUserInput, PracticeSetUncheckedCreateWithoutUserInput> | PracticeSetCreateWithoutUserInput[] | PracticeSetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PracticeSetCreateOrConnectWithoutUserInput | PracticeSetCreateOrConnectWithoutUserInput[]
    upsert?: PracticeSetUpsertWithWhereUniqueWithoutUserInput | PracticeSetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PracticeSetCreateManyUserInputEnvelope
    set?: PracticeSetWhereUniqueInput | PracticeSetWhereUniqueInput[]
    disconnect?: PracticeSetWhereUniqueInput | PracticeSetWhereUniqueInput[]
    delete?: PracticeSetWhereUniqueInput | PracticeSetWhereUniqueInput[]
    connect?: PracticeSetWhereUniqueInput | PracticeSetWhereUniqueInput[]
    update?: PracticeSetUpdateWithWhereUniqueWithoutUserInput | PracticeSetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PracticeSetUpdateManyWithWhereWithoutUserInput | PracticeSetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PracticeSetScalarWhereInput | PracticeSetScalarWhereInput[]
  }

  export type PracticeTaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PracticeTaskCreateWithoutUserInput, PracticeTaskUncheckedCreateWithoutUserInput> | PracticeTaskCreateWithoutUserInput[] | PracticeTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutUserInput | PracticeTaskCreateOrConnectWithoutUserInput[]
    upsert?: PracticeTaskUpsertWithWhereUniqueWithoutUserInput | PracticeTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PracticeTaskCreateManyUserInputEnvelope
    set?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    disconnect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    delete?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    connect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    update?: PracticeTaskUpdateWithWhereUniqueWithoutUserInput | PracticeTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PracticeTaskUpdateManyWithWhereWithoutUserInput | PracticeTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PracticeTaskScalarWhereInput | PracticeTaskScalarWhereInput[]
  }

  export type UserSubmitTaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubmitTaskCreateWithoutUserInput, UserSubmitTaskUncheckedCreateWithoutUserInput> | UserSubmitTaskCreateWithoutUserInput[] | UserSubmitTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutUserInput | UserSubmitTaskCreateOrConnectWithoutUserInput[]
    upsert?: UserSubmitTaskUpsertWithWhereUniqueWithoutUserInput | UserSubmitTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubmitTaskCreateManyUserInputEnvelope
    set?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    disconnect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    delete?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    update?: UserSubmitTaskUpdateWithWhereUniqueWithoutUserInput | UserSubmitTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubmitTaskUpdateManyWithWhereWithoutUserInput | UserSubmitTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubmitTaskScalarWhereInput | UserSubmitTaskScalarWhereInput[]
  }

  export type UserPracticeSetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPracticeSetCreateWithoutUserInput, UserPracticeSetUncheckedCreateWithoutUserInput> | UserPracticeSetCreateWithoutUserInput[] | UserPracticeSetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPracticeSetCreateOrConnectWithoutUserInput | UserPracticeSetCreateOrConnectWithoutUserInput[]
    upsert?: UserPracticeSetUpsertWithWhereUniqueWithoutUserInput | UserPracticeSetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPracticeSetCreateManyUserInputEnvelope
    set?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    disconnect?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    delete?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    connect?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    update?: UserPracticeSetUpdateWithWhereUniqueWithoutUserInput | UserPracticeSetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPracticeSetUpdateManyWithWhereWithoutUserInput | UserPracticeSetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPracticeSetScalarWhereInput | UserPracticeSetScalarWhereInput[]
  }

  export type UserTaskMetadataUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTaskMetadataCreateWithoutUserInput, UserTaskMetadataUncheckedCreateWithoutUserInput> | UserTaskMetadataCreateWithoutUserInput[] | UserTaskMetadataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskMetadataCreateOrConnectWithoutUserInput | UserTaskMetadataCreateOrConnectWithoutUserInput[]
    upsert?: UserTaskMetadataUpsertWithWhereUniqueWithoutUserInput | UserTaskMetadataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTaskMetadataCreateManyUserInputEnvelope
    set?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    disconnect?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    delete?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    connect?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    update?: UserTaskMetadataUpdateWithWhereUniqueWithoutUserInput | UserTaskMetadataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTaskMetadataUpdateManyWithWhereWithoutUserInput | UserTaskMetadataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTaskMetadataScalarWhereInput | UserTaskMetadataScalarWhereInput[]
  }

  export type TaskTagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskTagCreateWithoutUserInput, TaskTagUncheckedCreateWithoutUserInput> | TaskTagCreateWithoutUserInput[] | TaskTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutUserInput | TaskTagCreateOrConnectWithoutUserInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutUserInput | TaskTagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskTagCreateManyUserInputEnvelope
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutUserInput | TaskTagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutUserInput | TaskTagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserStatusesInput = {
    create?: XOR<UserCreateWithoutUserStatusesInput, UserUncheckedCreateWithoutUserStatusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStatusesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserStatusesNestedInput = {
    create?: XOR<UserCreateWithoutUserStatusesInput, UserUncheckedCreateWithoutUserStatusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStatusesInput
    upsert?: UserUpsertWithoutUserStatusesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserStatusesInput, UserUpdateWithoutUserStatusesInput>, UserUncheckedUpdateWithoutUserStatusesInput>
  }

  export type ReactionCreateNestedManyWithoutPostInput = {
    create?: XOR<ReactionCreateWithoutPostInput, ReactionUncheckedCreateWithoutPostInput> | ReactionCreateWithoutPostInput[] | ReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutPostInput | ReactionCreateOrConnectWithoutPostInput[]
    createMany?: ReactionCreateManyPostInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ReactionUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ReactionCreateWithoutPostInput, ReactionUncheckedCreateWithoutPostInput> | ReactionCreateWithoutPostInput[] | ReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutPostInput | ReactionCreateOrConnectWithoutPostInput[]
    createMany?: ReactionCreateManyPostInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type EnumVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.Visibility
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReactionUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReactionCreateWithoutPostInput, ReactionUncheckedCreateWithoutPostInput> | ReactionCreateWithoutPostInput[] | ReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutPostInput | ReactionCreateOrConnectWithoutPostInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutPostInput | ReactionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReactionCreateManyPostInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutPostInput | ReactionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutPostInput | ReactionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ReactionUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReactionCreateWithoutPostInput, ReactionUncheckedCreateWithoutPostInput> | ReactionCreateWithoutPostInput[] | ReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutPostInput | ReactionCreateOrConnectWithoutPostInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutPostInput | ReactionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReactionCreateManyPostInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutPostInput | ReactionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutPostInput | ReactionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReactionsInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutReactionsInput = {
    create?: XOR<PostCreateWithoutReactionsInput, PostUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutReactionsInput
    connect?: PostWhereUniqueInput
  }

  export type EnumPostReactionFieldUpdateOperationsInput = {
    set?: $Enums.PostReaction
  }

  export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    upsert?: UserUpsertWithoutReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReactionsInput, UserUpdateWithoutReactionsInput>, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type PostUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<PostCreateWithoutReactionsInput, PostUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutReactionsInput
    upsert?: PostUpsertWithoutReactionsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutReactionsInput, PostUpdateWithoutReactionsInput>, PostUncheckedUpdateWithoutReactionsInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PracticeTaskCreateNestedManyWithoutPracticeSetInput = {
    create?: XOR<PracticeTaskCreateWithoutPracticeSetInput, PracticeTaskUncheckedCreateWithoutPracticeSetInput> | PracticeTaskCreateWithoutPracticeSetInput[] | PracticeTaskUncheckedCreateWithoutPracticeSetInput[]
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutPracticeSetInput | PracticeTaskCreateOrConnectWithoutPracticeSetInput[]
    createMany?: PracticeTaskCreateManyPracticeSetInputEnvelope
    connect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
  }

  export type UserSubmitTaskCreateNestedManyWithoutPracticeSetInput = {
    create?: XOR<UserSubmitTaskCreateWithoutPracticeSetInput, UserSubmitTaskUncheckedCreateWithoutPracticeSetInput> | UserSubmitTaskCreateWithoutPracticeSetInput[] | UserSubmitTaskUncheckedCreateWithoutPracticeSetInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutPracticeSetInput | UserSubmitTaskCreateOrConnectWithoutPracticeSetInput[]
    createMany?: UserSubmitTaskCreateManyPracticeSetInputEnvelope
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
  }

  export type UserPracticeSetCreateNestedManyWithoutPracticeSetInput = {
    create?: XOR<UserPracticeSetCreateWithoutPracticeSetInput, UserPracticeSetUncheckedCreateWithoutPracticeSetInput> | UserPracticeSetCreateWithoutPracticeSetInput[] | UserPracticeSetUncheckedCreateWithoutPracticeSetInput[]
    connectOrCreate?: UserPracticeSetCreateOrConnectWithoutPracticeSetInput | UserPracticeSetCreateOrConnectWithoutPracticeSetInput[]
    createMany?: UserPracticeSetCreateManyPracticeSetInputEnvelope
    connect?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPracticeSetsInput = {
    create?: XOR<UserCreateWithoutPracticeSetsInput, UserUncheckedCreateWithoutPracticeSetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPracticeSetsInput
    connect?: UserWhereUniqueInput
  }

  export type PracticeTaskUncheckedCreateNestedManyWithoutPracticeSetInput = {
    create?: XOR<PracticeTaskCreateWithoutPracticeSetInput, PracticeTaskUncheckedCreateWithoutPracticeSetInput> | PracticeTaskCreateWithoutPracticeSetInput[] | PracticeTaskUncheckedCreateWithoutPracticeSetInput[]
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutPracticeSetInput | PracticeTaskCreateOrConnectWithoutPracticeSetInput[]
    createMany?: PracticeTaskCreateManyPracticeSetInputEnvelope
    connect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
  }

  export type UserSubmitTaskUncheckedCreateNestedManyWithoutPracticeSetInput = {
    create?: XOR<UserSubmitTaskCreateWithoutPracticeSetInput, UserSubmitTaskUncheckedCreateWithoutPracticeSetInput> | UserSubmitTaskCreateWithoutPracticeSetInput[] | UserSubmitTaskUncheckedCreateWithoutPracticeSetInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutPracticeSetInput | UserSubmitTaskCreateOrConnectWithoutPracticeSetInput[]
    createMany?: UserSubmitTaskCreateManyPracticeSetInputEnvelope
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
  }

  export type UserPracticeSetUncheckedCreateNestedManyWithoutPracticeSetInput = {
    create?: XOR<UserPracticeSetCreateWithoutPracticeSetInput, UserPracticeSetUncheckedCreateWithoutPracticeSetInput> | UserPracticeSetCreateWithoutPracticeSetInput[] | UserPracticeSetUncheckedCreateWithoutPracticeSetInput[]
    connectOrCreate?: UserPracticeSetCreateOrConnectWithoutPracticeSetInput | UserPracticeSetCreateOrConnectWithoutPracticeSetInput[]
    createMany?: UserPracticeSetCreateManyPracticeSetInputEnvelope
    connect?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type PracticeTaskUpdateManyWithoutPracticeSetNestedInput = {
    create?: XOR<PracticeTaskCreateWithoutPracticeSetInput, PracticeTaskUncheckedCreateWithoutPracticeSetInput> | PracticeTaskCreateWithoutPracticeSetInput[] | PracticeTaskUncheckedCreateWithoutPracticeSetInput[]
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutPracticeSetInput | PracticeTaskCreateOrConnectWithoutPracticeSetInput[]
    upsert?: PracticeTaskUpsertWithWhereUniqueWithoutPracticeSetInput | PracticeTaskUpsertWithWhereUniqueWithoutPracticeSetInput[]
    createMany?: PracticeTaskCreateManyPracticeSetInputEnvelope
    set?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    disconnect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    delete?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    connect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    update?: PracticeTaskUpdateWithWhereUniqueWithoutPracticeSetInput | PracticeTaskUpdateWithWhereUniqueWithoutPracticeSetInput[]
    updateMany?: PracticeTaskUpdateManyWithWhereWithoutPracticeSetInput | PracticeTaskUpdateManyWithWhereWithoutPracticeSetInput[]
    deleteMany?: PracticeTaskScalarWhereInput | PracticeTaskScalarWhereInput[]
  }

  export type UserSubmitTaskUpdateManyWithoutPracticeSetNestedInput = {
    create?: XOR<UserSubmitTaskCreateWithoutPracticeSetInput, UserSubmitTaskUncheckedCreateWithoutPracticeSetInput> | UserSubmitTaskCreateWithoutPracticeSetInput[] | UserSubmitTaskUncheckedCreateWithoutPracticeSetInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutPracticeSetInput | UserSubmitTaskCreateOrConnectWithoutPracticeSetInput[]
    upsert?: UserSubmitTaskUpsertWithWhereUniqueWithoutPracticeSetInput | UserSubmitTaskUpsertWithWhereUniqueWithoutPracticeSetInput[]
    createMany?: UserSubmitTaskCreateManyPracticeSetInputEnvelope
    set?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    disconnect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    delete?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    update?: UserSubmitTaskUpdateWithWhereUniqueWithoutPracticeSetInput | UserSubmitTaskUpdateWithWhereUniqueWithoutPracticeSetInput[]
    updateMany?: UserSubmitTaskUpdateManyWithWhereWithoutPracticeSetInput | UserSubmitTaskUpdateManyWithWhereWithoutPracticeSetInput[]
    deleteMany?: UserSubmitTaskScalarWhereInput | UserSubmitTaskScalarWhereInput[]
  }

  export type UserPracticeSetUpdateManyWithoutPracticeSetNestedInput = {
    create?: XOR<UserPracticeSetCreateWithoutPracticeSetInput, UserPracticeSetUncheckedCreateWithoutPracticeSetInput> | UserPracticeSetCreateWithoutPracticeSetInput[] | UserPracticeSetUncheckedCreateWithoutPracticeSetInput[]
    connectOrCreate?: UserPracticeSetCreateOrConnectWithoutPracticeSetInput | UserPracticeSetCreateOrConnectWithoutPracticeSetInput[]
    upsert?: UserPracticeSetUpsertWithWhereUniqueWithoutPracticeSetInput | UserPracticeSetUpsertWithWhereUniqueWithoutPracticeSetInput[]
    createMany?: UserPracticeSetCreateManyPracticeSetInputEnvelope
    set?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    disconnect?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    delete?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    connect?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    update?: UserPracticeSetUpdateWithWhereUniqueWithoutPracticeSetInput | UserPracticeSetUpdateWithWhereUniqueWithoutPracticeSetInput[]
    updateMany?: UserPracticeSetUpdateManyWithWhereWithoutPracticeSetInput | UserPracticeSetUpdateManyWithWhereWithoutPracticeSetInput[]
    deleteMany?: UserPracticeSetScalarWhereInput | UserPracticeSetScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPracticeSetsNestedInput = {
    create?: XOR<UserCreateWithoutPracticeSetsInput, UserUncheckedCreateWithoutPracticeSetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPracticeSetsInput
    upsert?: UserUpsertWithoutPracticeSetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPracticeSetsInput, UserUpdateWithoutPracticeSetsInput>, UserUncheckedUpdateWithoutPracticeSetsInput>
  }

  export type PracticeTaskUncheckedUpdateManyWithoutPracticeSetNestedInput = {
    create?: XOR<PracticeTaskCreateWithoutPracticeSetInput, PracticeTaskUncheckedCreateWithoutPracticeSetInput> | PracticeTaskCreateWithoutPracticeSetInput[] | PracticeTaskUncheckedCreateWithoutPracticeSetInput[]
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutPracticeSetInput | PracticeTaskCreateOrConnectWithoutPracticeSetInput[]
    upsert?: PracticeTaskUpsertWithWhereUniqueWithoutPracticeSetInput | PracticeTaskUpsertWithWhereUniqueWithoutPracticeSetInput[]
    createMany?: PracticeTaskCreateManyPracticeSetInputEnvelope
    set?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    disconnect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    delete?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    connect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    update?: PracticeTaskUpdateWithWhereUniqueWithoutPracticeSetInput | PracticeTaskUpdateWithWhereUniqueWithoutPracticeSetInput[]
    updateMany?: PracticeTaskUpdateManyWithWhereWithoutPracticeSetInput | PracticeTaskUpdateManyWithWhereWithoutPracticeSetInput[]
    deleteMany?: PracticeTaskScalarWhereInput | PracticeTaskScalarWhereInput[]
  }

  export type UserSubmitTaskUncheckedUpdateManyWithoutPracticeSetNestedInput = {
    create?: XOR<UserSubmitTaskCreateWithoutPracticeSetInput, UserSubmitTaskUncheckedCreateWithoutPracticeSetInput> | UserSubmitTaskCreateWithoutPracticeSetInput[] | UserSubmitTaskUncheckedCreateWithoutPracticeSetInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutPracticeSetInput | UserSubmitTaskCreateOrConnectWithoutPracticeSetInput[]
    upsert?: UserSubmitTaskUpsertWithWhereUniqueWithoutPracticeSetInput | UserSubmitTaskUpsertWithWhereUniqueWithoutPracticeSetInput[]
    createMany?: UserSubmitTaskCreateManyPracticeSetInputEnvelope
    set?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    disconnect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    delete?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    update?: UserSubmitTaskUpdateWithWhereUniqueWithoutPracticeSetInput | UserSubmitTaskUpdateWithWhereUniqueWithoutPracticeSetInput[]
    updateMany?: UserSubmitTaskUpdateManyWithWhereWithoutPracticeSetInput | UserSubmitTaskUpdateManyWithWhereWithoutPracticeSetInput[]
    deleteMany?: UserSubmitTaskScalarWhereInput | UserSubmitTaskScalarWhereInput[]
  }

  export type UserPracticeSetUncheckedUpdateManyWithoutPracticeSetNestedInput = {
    create?: XOR<UserPracticeSetCreateWithoutPracticeSetInput, UserPracticeSetUncheckedCreateWithoutPracticeSetInput> | UserPracticeSetCreateWithoutPracticeSetInput[] | UserPracticeSetUncheckedCreateWithoutPracticeSetInput[]
    connectOrCreate?: UserPracticeSetCreateOrConnectWithoutPracticeSetInput | UserPracticeSetCreateOrConnectWithoutPracticeSetInput[]
    upsert?: UserPracticeSetUpsertWithWhereUniqueWithoutPracticeSetInput | UserPracticeSetUpsertWithWhereUniqueWithoutPracticeSetInput[]
    createMany?: UserPracticeSetCreateManyPracticeSetInputEnvelope
    set?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    disconnect?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    delete?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    connect?: UserPracticeSetWhereUniqueInput | UserPracticeSetWhereUniqueInput[]
    update?: UserPracticeSetUpdateWithWhereUniqueWithoutPracticeSetInput | UserPracticeSetUpdateWithWhereUniqueWithoutPracticeSetInput[]
    updateMany?: UserPracticeSetUpdateManyWithWhereWithoutPracticeSetInput | UserPracticeSetUpdateManyWithWhereWithoutPracticeSetInput[]
    deleteMany?: UserPracticeSetScalarWhereInput | UserPracticeSetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserPracticeSetsInput = {
    create?: XOR<UserCreateWithoutUserPracticeSetsInput, UserUncheckedCreateWithoutUserPracticeSetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPracticeSetsInput
    connect?: UserWhereUniqueInput
  }

  export type PracticeSetCreateNestedOneWithoutUserPracticeSetsInput = {
    create?: XOR<PracticeSetCreateWithoutUserPracticeSetsInput, PracticeSetUncheckedCreateWithoutUserPracticeSetsInput>
    connectOrCreate?: PracticeSetCreateOrConnectWithoutUserPracticeSetsInput
    connect?: PracticeSetWhereUniqueInput
  }

  export type UserSubmitTaskCreateNestedManyWithoutUserPracticeSetInput = {
    create?: XOR<UserSubmitTaskCreateWithoutUserPracticeSetInput, UserSubmitTaskUncheckedCreateWithoutUserPracticeSetInput> | UserSubmitTaskCreateWithoutUserPracticeSetInput[] | UserSubmitTaskUncheckedCreateWithoutUserPracticeSetInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutUserPracticeSetInput | UserSubmitTaskCreateOrConnectWithoutUserPracticeSetInput[]
    createMany?: UserSubmitTaskCreateManyUserPracticeSetInputEnvelope
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
  }

  export type UserSubmitTaskUncheckedCreateNestedManyWithoutUserPracticeSetInput = {
    create?: XOR<UserSubmitTaskCreateWithoutUserPracticeSetInput, UserSubmitTaskUncheckedCreateWithoutUserPracticeSetInput> | UserSubmitTaskCreateWithoutUserPracticeSetInput[] | UserSubmitTaskUncheckedCreateWithoutUserPracticeSetInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutUserPracticeSetInput | UserSubmitTaskCreateOrConnectWithoutUserPracticeSetInput[]
    createMany?: UserSubmitTaskCreateManyUserPracticeSetInputEnvelope
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutUserPracticeSetsNestedInput = {
    create?: XOR<UserCreateWithoutUserPracticeSetsInput, UserUncheckedCreateWithoutUserPracticeSetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPracticeSetsInput
    upsert?: UserUpsertWithoutUserPracticeSetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPracticeSetsInput, UserUpdateWithoutUserPracticeSetsInput>, UserUncheckedUpdateWithoutUserPracticeSetsInput>
  }

  export type PracticeSetUpdateOneRequiredWithoutUserPracticeSetsNestedInput = {
    create?: XOR<PracticeSetCreateWithoutUserPracticeSetsInput, PracticeSetUncheckedCreateWithoutUserPracticeSetsInput>
    connectOrCreate?: PracticeSetCreateOrConnectWithoutUserPracticeSetsInput
    upsert?: PracticeSetUpsertWithoutUserPracticeSetsInput
    connect?: PracticeSetWhereUniqueInput
    update?: XOR<XOR<PracticeSetUpdateToOneWithWhereWithoutUserPracticeSetsInput, PracticeSetUpdateWithoutUserPracticeSetsInput>, PracticeSetUncheckedUpdateWithoutUserPracticeSetsInput>
  }

  export type UserSubmitTaskUpdateManyWithoutUserPracticeSetNestedInput = {
    create?: XOR<UserSubmitTaskCreateWithoutUserPracticeSetInput, UserSubmitTaskUncheckedCreateWithoutUserPracticeSetInput> | UserSubmitTaskCreateWithoutUserPracticeSetInput[] | UserSubmitTaskUncheckedCreateWithoutUserPracticeSetInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutUserPracticeSetInput | UserSubmitTaskCreateOrConnectWithoutUserPracticeSetInput[]
    upsert?: UserSubmitTaskUpsertWithWhereUniqueWithoutUserPracticeSetInput | UserSubmitTaskUpsertWithWhereUniqueWithoutUserPracticeSetInput[]
    createMany?: UserSubmitTaskCreateManyUserPracticeSetInputEnvelope
    set?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    disconnect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    delete?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    update?: UserSubmitTaskUpdateWithWhereUniqueWithoutUserPracticeSetInput | UserSubmitTaskUpdateWithWhereUniqueWithoutUserPracticeSetInput[]
    updateMany?: UserSubmitTaskUpdateManyWithWhereWithoutUserPracticeSetInput | UserSubmitTaskUpdateManyWithWhereWithoutUserPracticeSetInput[]
    deleteMany?: UserSubmitTaskScalarWhereInput | UserSubmitTaskScalarWhereInput[]
  }

  export type UserSubmitTaskUncheckedUpdateManyWithoutUserPracticeSetNestedInput = {
    create?: XOR<UserSubmitTaskCreateWithoutUserPracticeSetInput, UserSubmitTaskUncheckedCreateWithoutUserPracticeSetInput> | UserSubmitTaskCreateWithoutUserPracticeSetInput[] | UserSubmitTaskUncheckedCreateWithoutUserPracticeSetInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutUserPracticeSetInput | UserSubmitTaskCreateOrConnectWithoutUserPracticeSetInput[]
    upsert?: UserSubmitTaskUpsertWithWhereUniqueWithoutUserPracticeSetInput | UserSubmitTaskUpsertWithWhereUniqueWithoutUserPracticeSetInput[]
    createMany?: UserSubmitTaskCreateManyUserPracticeSetInputEnvelope
    set?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    disconnect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    delete?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    update?: UserSubmitTaskUpdateWithWhereUniqueWithoutUserPracticeSetInput | UserSubmitTaskUpdateWithWhereUniqueWithoutUserPracticeSetInput[]
    updateMany?: UserSubmitTaskUpdateManyWithWhereWithoutUserPracticeSetInput | UserSubmitTaskUpdateManyWithWhereWithoutUserPracticeSetInput[]
    deleteMany?: UserSubmitTaskScalarWhereInput | UserSubmitTaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPracticeTasksInput = {
    create?: XOR<UserCreateWithoutPracticeTasksInput, UserUncheckedCreateWithoutPracticeTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPracticeTasksInput
    connect?: UserWhereUniqueInput
  }

  export type PracticeSetCreateNestedOneWithoutPracticeTasksInput = {
    create?: XOR<PracticeSetCreateWithoutPracticeTasksInput, PracticeSetUncheckedCreateWithoutPracticeTasksInput>
    connectOrCreate?: PracticeSetCreateOrConnectWithoutPracticeTasksInput
    connect?: PracticeSetWhereUniqueInput
  }

  export type UserSubmitTaskCreateNestedManyWithoutPracticeTaskInput = {
    create?: XOR<UserSubmitTaskCreateWithoutPracticeTaskInput, UserSubmitTaskUncheckedCreateWithoutPracticeTaskInput> | UserSubmitTaskCreateWithoutPracticeTaskInput[] | UserSubmitTaskUncheckedCreateWithoutPracticeTaskInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutPracticeTaskInput | UserSubmitTaskCreateOrConnectWithoutPracticeTaskInput[]
    createMany?: UserSubmitTaskCreateManyPracticeTaskInputEnvelope
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
  }

  export type UserTaskMetadataCreateNestedManyWithoutPracticeTaskInput = {
    create?: XOR<UserTaskMetadataCreateWithoutPracticeTaskInput, UserTaskMetadataUncheckedCreateWithoutPracticeTaskInput> | UserTaskMetadataCreateWithoutPracticeTaskInput[] | UserTaskMetadataUncheckedCreateWithoutPracticeTaskInput[]
    connectOrCreate?: UserTaskMetadataCreateOrConnectWithoutPracticeTaskInput | UserTaskMetadataCreateOrConnectWithoutPracticeTaskInput[]
    createMany?: UserTaskMetadataCreateManyPracticeTaskInputEnvelope
    connect?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
  }

  export type TaskTagCreateNestedManyWithoutPracticeTaskInput = {
    create?: XOR<TaskTagCreateWithoutPracticeTaskInput, TaskTagUncheckedCreateWithoutPracticeTaskInput> | TaskTagCreateWithoutPracticeTaskInput[] | TaskTagUncheckedCreateWithoutPracticeTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutPracticeTaskInput | TaskTagCreateOrConnectWithoutPracticeTaskInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type UserSubmitTaskUncheckedCreateNestedManyWithoutPracticeTaskInput = {
    create?: XOR<UserSubmitTaskCreateWithoutPracticeTaskInput, UserSubmitTaskUncheckedCreateWithoutPracticeTaskInput> | UserSubmitTaskCreateWithoutPracticeTaskInput[] | UserSubmitTaskUncheckedCreateWithoutPracticeTaskInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutPracticeTaskInput | UserSubmitTaskCreateOrConnectWithoutPracticeTaskInput[]
    createMany?: UserSubmitTaskCreateManyPracticeTaskInputEnvelope
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
  }

  export type UserTaskMetadataUncheckedCreateNestedManyWithoutPracticeTaskInput = {
    create?: XOR<UserTaskMetadataCreateWithoutPracticeTaskInput, UserTaskMetadataUncheckedCreateWithoutPracticeTaskInput> | UserTaskMetadataCreateWithoutPracticeTaskInput[] | UserTaskMetadataUncheckedCreateWithoutPracticeTaskInput[]
    connectOrCreate?: UserTaskMetadataCreateOrConnectWithoutPracticeTaskInput | UserTaskMetadataCreateOrConnectWithoutPracticeTaskInput[]
    createMany?: UserTaskMetadataCreateManyPracticeTaskInputEnvelope
    connect?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
  }

  export type TaskTagUncheckedCreateNestedManyWithoutPracticeTaskInput = {
    create?: XOR<TaskTagCreateWithoutPracticeTaskInput, TaskTagUncheckedCreateWithoutPracticeTaskInput> | TaskTagCreateWithoutPracticeTaskInput[] | TaskTagUncheckedCreateWithoutPracticeTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutPracticeTaskInput | TaskTagCreateOrConnectWithoutPracticeTaskInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type EnumTaskTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaskType
  }

  export type UserUpdateOneRequiredWithoutPracticeTasksNestedInput = {
    create?: XOR<UserCreateWithoutPracticeTasksInput, UserUncheckedCreateWithoutPracticeTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPracticeTasksInput
    upsert?: UserUpsertWithoutPracticeTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPracticeTasksInput, UserUpdateWithoutPracticeTasksInput>, UserUncheckedUpdateWithoutPracticeTasksInput>
  }

  export type PracticeSetUpdateOneRequiredWithoutPracticeTasksNestedInput = {
    create?: XOR<PracticeSetCreateWithoutPracticeTasksInput, PracticeSetUncheckedCreateWithoutPracticeTasksInput>
    connectOrCreate?: PracticeSetCreateOrConnectWithoutPracticeTasksInput
    upsert?: PracticeSetUpsertWithoutPracticeTasksInput
    connect?: PracticeSetWhereUniqueInput
    update?: XOR<XOR<PracticeSetUpdateToOneWithWhereWithoutPracticeTasksInput, PracticeSetUpdateWithoutPracticeTasksInput>, PracticeSetUncheckedUpdateWithoutPracticeTasksInput>
  }

  export type UserSubmitTaskUpdateManyWithoutPracticeTaskNestedInput = {
    create?: XOR<UserSubmitTaskCreateWithoutPracticeTaskInput, UserSubmitTaskUncheckedCreateWithoutPracticeTaskInput> | UserSubmitTaskCreateWithoutPracticeTaskInput[] | UserSubmitTaskUncheckedCreateWithoutPracticeTaskInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutPracticeTaskInput | UserSubmitTaskCreateOrConnectWithoutPracticeTaskInput[]
    upsert?: UserSubmitTaskUpsertWithWhereUniqueWithoutPracticeTaskInput | UserSubmitTaskUpsertWithWhereUniqueWithoutPracticeTaskInput[]
    createMany?: UserSubmitTaskCreateManyPracticeTaskInputEnvelope
    set?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    disconnect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    delete?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    update?: UserSubmitTaskUpdateWithWhereUniqueWithoutPracticeTaskInput | UserSubmitTaskUpdateWithWhereUniqueWithoutPracticeTaskInput[]
    updateMany?: UserSubmitTaskUpdateManyWithWhereWithoutPracticeTaskInput | UserSubmitTaskUpdateManyWithWhereWithoutPracticeTaskInput[]
    deleteMany?: UserSubmitTaskScalarWhereInput | UserSubmitTaskScalarWhereInput[]
  }

  export type UserTaskMetadataUpdateManyWithoutPracticeTaskNestedInput = {
    create?: XOR<UserTaskMetadataCreateWithoutPracticeTaskInput, UserTaskMetadataUncheckedCreateWithoutPracticeTaskInput> | UserTaskMetadataCreateWithoutPracticeTaskInput[] | UserTaskMetadataUncheckedCreateWithoutPracticeTaskInput[]
    connectOrCreate?: UserTaskMetadataCreateOrConnectWithoutPracticeTaskInput | UserTaskMetadataCreateOrConnectWithoutPracticeTaskInput[]
    upsert?: UserTaskMetadataUpsertWithWhereUniqueWithoutPracticeTaskInput | UserTaskMetadataUpsertWithWhereUniqueWithoutPracticeTaskInput[]
    createMany?: UserTaskMetadataCreateManyPracticeTaskInputEnvelope
    set?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    disconnect?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    delete?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    connect?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    update?: UserTaskMetadataUpdateWithWhereUniqueWithoutPracticeTaskInput | UserTaskMetadataUpdateWithWhereUniqueWithoutPracticeTaskInput[]
    updateMany?: UserTaskMetadataUpdateManyWithWhereWithoutPracticeTaskInput | UserTaskMetadataUpdateManyWithWhereWithoutPracticeTaskInput[]
    deleteMany?: UserTaskMetadataScalarWhereInput | UserTaskMetadataScalarWhereInput[]
  }

  export type TaskTagUpdateManyWithoutPracticeTaskNestedInput = {
    create?: XOR<TaskTagCreateWithoutPracticeTaskInput, TaskTagUncheckedCreateWithoutPracticeTaskInput> | TaskTagCreateWithoutPracticeTaskInput[] | TaskTagUncheckedCreateWithoutPracticeTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutPracticeTaskInput | TaskTagCreateOrConnectWithoutPracticeTaskInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutPracticeTaskInput | TaskTagUpsertWithWhereUniqueWithoutPracticeTaskInput[]
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutPracticeTaskInput | TaskTagUpdateWithWhereUniqueWithoutPracticeTaskInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutPracticeTaskInput | TaskTagUpdateManyWithWhereWithoutPracticeTaskInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type UserSubmitTaskUncheckedUpdateManyWithoutPracticeTaskNestedInput = {
    create?: XOR<UserSubmitTaskCreateWithoutPracticeTaskInput, UserSubmitTaskUncheckedCreateWithoutPracticeTaskInput> | UserSubmitTaskCreateWithoutPracticeTaskInput[] | UserSubmitTaskUncheckedCreateWithoutPracticeTaskInput[]
    connectOrCreate?: UserSubmitTaskCreateOrConnectWithoutPracticeTaskInput | UserSubmitTaskCreateOrConnectWithoutPracticeTaskInput[]
    upsert?: UserSubmitTaskUpsertWithWhereUniqueWithoutPracticeTaskInput | UserSubmitTaskUpsertWithWhereUniqueWithoutPracticeTaskInput[]
    createMany?: UserSubmitTaskCreateManyPracticeTaskInputEnvelope
    set?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    disconnect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    delete?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    connect?: UserSubmitTaskWhereUniqueInput | UserSubmitTaskWhereUniqueInput[]
    update?: UserSubmitTaskUpdateWithWhereUniqueWithoutPracticeTaskInput | UserSubmitTaskUpdateWithWhereUniqueWithoutPracticeTaskInput[]
    updateMany?: UserSubmitTaskUpdateManyWithWhereWithoutPracticeTaskInput | UserSubmitTaskUpdateManyWithWhereWithoutPracticeTaskInput[]
    deleteMany?: UserSubmitTaskScalarWhereInput | UserSubmitTaskScalarWhereInput[]
  }

  export type UserTaskMetadataUncheckedUpdateManyWithoutPracticeTaskNestedInput = {
    create?: XOR<UserTaskMetadataCreateWithoutPracticeTaskInput, UserTaskMetadataUncheckedCreateWithoutPracticeTaskInput> | UserTaskMetadataCreateWithoutPracticeTaskInput[] | UserTaskMetadataUncheckedCreateWithoutPracticeTaskInput[]
    connectOrCreate?: UserTaskMetadataCreateOrConnectWithoutPracticeTaskInput | UserTaskMetadataCreateOrConnectWithoutPracticeTaskInput[]
    upsert?: UserTaskMetadataUpsertWithWhereUniqueWithoutPracticeTaskInput | UserTaskMetadataUpsertWithWhereUniqueWithoutPracticeTaskInput[]
    createMany?: UserTaskMetadataCreateManyPracticeTaskInputEnvelope
    set?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    disconnect?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    delete?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    connect?: UserTaskMetadataWhereUniqueInput | UserTaskMetadataWhereUniqueInput[]
    update?: UserTaskMetadataUpdateWithWhereUniqueWithoutPracticeTaskInput | UserTaskMetadataUpdateWithWhereUniqueWithoutPracticeTaskInput[]
    updateMany?: UserTaskMetadataUpdateManyWithWhereWithoutPracticeTaskInput | UserTaskMetadataUpdateManyWithWhereWithoutPracticeTaskInput[]
    deleteMany?: UserTaskMetadataScalarWhereInput | UserTaskMetadataScalarWhereInput[]
  }

  export type TaskTagUncheckedUpdateManyWithoutPracticeTaskNestedInput = {
    create?: XOR<TaskTagCreateWithoutPracticeTaskInput, TaskTagUncheckedCreateWithoutPracticeTaskInput> | TaskTagCreateWithoutPracticeTaskInput[] | TaskTagUncheckedCreateWithoutPracticeTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutPracticeTaskInput | TaskTagCreateOrConnectWithoutPracticeTaskInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutPracticeTaskInput | TaskTagUpsertWithWhereUniqueWithoutPracticeTaskInput[]
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutPracticeTaskInput | TaskTagUpdateWithWhereUniqueWithoutPracticeTaskInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutPracticeTaskInput | TaskTagUpdateManyWithWhereWithoutPracticeTaskInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserTaskMetadatasInput = {
    create?: XOR<UserCreateWithoutUserTaskMetadatasInput, UserUncheckedCreateWithoutUserTaskMetadatasInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTaskMetadatasInput
    connect?: UserWhereUniqueInput
  }

  export type PracticeTaskCreateNestedOneWithoutUserTaskMetadatasInput = {
    create?: XOR<PracticeTaskCreateWithoutUserTaskMetadatasInput, PracticeTaskUncheckedCreateWithoutUserTaskMetadatasInput>
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutUserTaskMetadatasInput
    connect?: PracticeTaskWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUserTaskMetadatasNestedInput = {
    create?: XOR<UserCreateWithoutUserTaskMetadatasInput, UserUncheckedCreateWithoutUserTaskMetadatasInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTaskMetadatasInput
    upsert?: UserUpsertWithoutUserTaskMetadatasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserTaskMetadatasInput, UserUpdateWithoutUserTaskMetadatasInput>, UserUncheckedUpdateWithoutUserTaskMetadatasInput>
  }

  export type PracticeTaskUpdateOneRequiredWithoutUserTaskMetadatasNestedInput = {
    create?: XOR<PracticeTaskCreateWithoutUserTaskMetadatasInput, PracticeTaskUncheckedCreateWithoutUserTaskMetadatasInput>
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutUserTaskMetadatasInput
    upsert?: PracticeTaskUpsertWithoutUserTaskMetadatasInput
    connect?: PracticeTaskWhereUniqueInput
    update?: XOR<XOR<PracticeTaskUpdateToOneWithWhereWithoutUserTaskMetadatasInput, PracticeTaskUpdateWithoutUserTaskMetadatasInput>, PracticeTaskUncheckedUpdateWithoutUserTaskMetadatasInput>
  }

  export type UserCreateNestedOneWithoutTaskTagInput = {
    create?: XOR<UserCreateWithoutTaskTagInput, UserUncheckedCreateWithoutTaskTagInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskTagInput
    connect?: UserWhereUniqueInput
  }

  export type PracticeTaskCreateNestedManyWithoutTaskTagsInput = {
    create?: XOR<PracticeTaskCreateWithoutTaskTagsInput, PracticeTaskUncheckedCreateWithoutTaskTagsInput> | PracticeTaskCreateWithoutTaskTagsInput[] | PracticeTaskUncheckedCreateWithoutTaskTagsInput[]
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutTaskTagsInput | PracticeTaskCreateOrConnectWithoutTaskTagsInput[]
    connect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
  }

  export type PracticeTaskUncheckedCreateNestedManyWithoutTaskTagsInput = {
    create?: XOR<PracticeTaskCreateWithoutTaskTagsInput, PracticeTaskUncheckedCreateWithoutTaskTagsInput> | PracticeTaskCreateWithoutTaskTagsInput[] | PracticeTaskUncheckedCreateWithoutTaskTagsInput[]
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutTaskTagsInput | PracticeTaskCreateOrConnectWithoutTaskTagsInput[]
    connect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTaskTagNestedInput = {
    create?: XOR<UserCreateWithoutTaskTagInput, UserUncheckedCreateWithoutTaskTagInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskTagInput
    upsert?: UserUpsertWithoutTaskTagInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskTagInput, UserUpdateWithoutTaskTagInput>, UserUncheckedUpdateWithoutTaskTagInput>
  }

  export type PracticeTaskUpdateManyWithoutTaskTagsNestedInput = {
    create?: XOR<PracticeTaskCreateWithoutTaskTagsInput, PracticeTaskUncheckedCreateWithoutTaskTagsInput> | PracticeTaskCreateWithoutTaskTagsInput[] | PracticeTaskUncheckedCreateWithoutTaskTagsInput[]
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutTaskTagsInput | PracticeTaskCreateOrConnectWithoutTaskTagsInput[]
    upsert?: PracticeTaskUpsertWithWhereUniqueWithoutTaskTagsInput | PracticeTaskUpsertWithWhereUniqueWithoutTaskTagsInput[]
    set?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    disconnect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    delete?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    connect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    update?: PracticeTaskUpdateWithWhereUniqueWithoutTaskTagsInput | PracticeTaskUpdateWithWhereUniqueWithoutTaskTagsInput[]
    updateMany?: PracticeTaskUpdateManyWithWhereWithoutTaskTagsInput | PracticeTaskUpdateManyWithWhereWithoutTaskTagsInput[]
    deleteMany?: PracticeTaskScalarWhereInput | PracticeTaskScalarWhereInput[]
  }

  export type PracticeTaskUncheckedUpdateManyWithoutTaskTagsNestedInput = {
    create?: XOR<PracticeTaskCreateWithoutTaskTagsInput, PracticeTaskUncheckedCreateWithoutTaskTagsInput> | PracticeTaskCreateWithoutTaskTagsInput[] | PracticeTaskUncheckedCreateWithoutTaskTagsInput[]
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutTaskTagsInput | PracticeTaskCreateOrConnectWithoutTaskTagsInput[]
    upsert?: PracticeTaskUpsertWithWhereUniqueWithoutTaskTagsInput | PracticeTaskUpsertWithWhereUniqueWithoutTaskTagsInput[]
    set?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    disconnect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    delete?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    connect?: PracticeTaskWhereUniqueInput | PracticeTaskWhereUniqueInput[]
    update?: PracticeTaskUpdateWithWhereUniqueWithoutTaskTagsInput | PracticeTaskUpdateWithWhereUniqueWithoutTaskTagsInput[]
    updateMany?: PracticeTaskUpdateManyWithWhereWithoutTaskTagsInput | PracticeTaskUpdateManyWithWhereWithoutTaskTagsInput[]
    deleteMany?: PracticeTaskScalarWhereInput | PracticeTaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserSubmitTasksInput = {
    create?: XOR<UserCreateWithoutUserSubmitTasksInput, UserUncheckedCreateWithoutUserSubmitTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSubmitTasksInput
    connect?: UserWhereUniqueInput
  }

  export type PracticeSetCreateNestedOneWithoutUserSubmitTasksInput = {
    create?: XOR<PracticeSetCreateWithoutUserSubmitTasksInput, PracticeSetUncheckedCreateWithoutUserSubmitTasksInput>
    connectOrCreate?: PracticeSetCreateOrConnectWithoutUserSubmitTasksInput
    connect?: PracticeSetWhereUniqueInput
  }

  export type PracticeTaskCreateNestedOneWithoutUserSubmitTasksInput = {
    create?: XOR<PracticeTaskCreateWithoutUserSubmitTasksInput, PracticeTaskUncheckedCreateWithoutUserSubmitTasksInput>
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutUserSubmitTasksInput
    connect?: PracticeTaskWhereUniqueInput
  }

  export type UserPracticeSetCreateNestedOneWithoutUserSubmitTasksInput = {
    create?: XOR<UserPracticeSetCreateWithoutUserSubmitTasksInput, UserPracticeSetUncheckedCreateWithoutUserSubmitTasksInput>
    connectOrCreate?: UserPracticeSetCreateOrConnectWithoutUserSubmitTasksInput
    connect?: UserPracticeSetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserSubmitTasksNestedInput = {
    create?: XOR<UserCreateWithoutUserSubmitTasksInput, UserUncheckedCreateWithoutUserSubmitTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSubmitTasksInput
    upsert?: UserUpsertWithoutUserSubmitTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSubmitTasksInput, UserUpdateWithoutUserSubmitTasksInput>, UserUncheckedUpdateWithoutUserSubmitTasksInput>
  }

  export type PracticeSetUpdateOneRequiredWithoutUserSubmitTasksNestedInput = {
    create?: XOR<PracticeSetCreateWithoutUserSubmitTasksInput, PracticeSetUncheckedCreateWithoutUserSubmitTasksInput>
    connectOrCreate?: PracticeSetCreateOrConnectWithoutUserSubmitTasksInput
    upsert?: PracticeSetUpsertWithoutUserSubmitTasksInput
    connect?: PracticeSetWhereUniqueInput
    update?: XOR<XOR<PracticeSetUpdateToOneWithWhereWithoutUserSubmitTasksInput, PracticeSetUpdateWithoutUserSubmitTasksInput>, PracticeSetUncheckedUpdateWithoutUserSubmitTasksInput>
  }

  export type PracticeTaskUpdateOneRequiredWithoutUserSubmitTasksNestedInput = {
    create?: XOR<PracticeTaskCreateWithoutUserSubmitTasksInput, PracticeTaskUncheckedCreateWithoutUserSubmitTasksInput>
    connectOrCreate?: PracticeTaskCreateOrConnectWithoutUserSubmitTasksInput
    upsert?: PracticeTaskUpsertWithoutUserSubmitTasksInput
    connect?: PracticeTaskWhereUniqueInput
    update?: XOR<XOR<PracticeTaskUpdateToOneWithWhereWithoutUserSubmitTasksInput, PracticeTaskUpdateWithoutUserSubmitTasksInput>, PracticeTaskUncheckedUpdateWithoutUserSubmitTasksInput>
  }

  export type UserPracticeSetUpdateOneRequiredWithoutUserSubmitTasksNestedInput = {
    create?: XOR<UserPracticeSetCreateWithoutUserSubmitTasksInput, UserPracticeSetUncheckedCreateWithoutUserSubmitTasksInput>
    connectOrCreate?: UserPracticeSetCreateOrConnectWithoutUserSubmitTasksInput
    upsert?: UserPracticeSetUpsertWithoutUserSubmitTasksInput
    connect?: UserPracticeSetWhereUniqueInput
    update?: XOR<XOR<UserPracticeSetUpdateToOneWithWhereWithoutUserSubmitTasksInput, UserPracticeSetUpdateWithoutUserSubmitTasksInput>, UserPracticeSetUncheckedUpdateWithoutUserSubmitTasksInput>
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

  export type NestedEnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }

  export type NestedEnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumPostReactionFilter<$PrismaModel = never> = {
    equals?: $Enums.PostReaction | EnumPostReactionFieldRefInput<$PrismaModel>
    in?: $Enums.PostReaction[] | ListEnumPostReactionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostReaction[] | ListEnumPostReactionFieldRefInput<$PrismaModel>
    not?: NestedEnumPostReactionFilter<$PrismaModel> | $Enums.PostReaction
  }

  export type NestedEnumPostReactionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostReaction | EnumPostReactionFieldRefInput<$PrismaModel>
    in?: $Enums.PostReaction[] | ListEnumPostReactionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostReaction[] | ListEnumPostReactionFieldRefInput<$PrismaModel>
    not?: NestedEnumPostReactionWithAggregatesFilter<$PrismaModel> | $Enums.PostReaction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostReactionFilter<$PrismaModel>
    _max?: NestedEnumPostReactionFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    visibility: $Enums.Visibility
    text: JsonNullValueInput | InputJsonValue
    totalLikeCount?: number
    totalCommentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ReactionCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    visibility: $Enums.Visibility
    text: JsonNullValueInput | InputJsonValue
    totalLikeCount?: number
    totalCommentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ReactionUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReactionCreateWithoutUserInput = {
    id?: string
    reactionType: $Enums.PostReaction
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    reactionType: $Enums.PostReaction
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionCreateOrConnectWithoutUserInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput>
  }

  export type ReactionCreateManyUserInputEnvelope = {
    data: ReactionCreateManyUserInput | ReactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    pictureUrl?: string | null
    text?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    pictureUrl?: string | null
    text?: string | null
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserStatusCreateWithoutUserInput = {
    id?: string
    pictureUrl?: string | null
    text?: string | null
    backgroundImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatusUncheckedCreateWithoutUserInput = {
    id?: string
    pictureUrl?: string | null
    text?: string | null
    backgroundImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatusCreateOrConnectWithoutUserInput = {
    where: UserStatusWhereUniqueInput
    create: XOR<UserStatusCreateWithoutUserInput, UserStatusUncheckedCreateWithoutUserInput>
  }

  export type UserStatusCreateManyUserInputEnvelope = {
    data: UserStatusCreateManyUserInput | UserStatusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PracticeSetCreateWithoutUserInput = {
    id?: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    status?: $Enums.Status
    enrollmentCount?: number
    totalTaskCount?: number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceTasks?: PracticeTaskCreateNestedManyWithoutPracticeSetInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutPracticeSetInput
    userPracticeSets?: UserPracticeSetCreateNestedManyWithoutPracticeSetInput
  }

  export type PracticeSetUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    status?: $Enums.Status
    enrollmentCount?: number
    totalTaskCount?: number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceTasks?: PracticeTaskUncheckedCreateNestedManyWithoutPracticeSetInput
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutPracticeSetInput
    userPracticeSets?: UserPracticeSetUncheckedCreateNestedManyWithoutPracticeSetInput
  }

  export type PracticeSetCreateOrConnectWithoutUserInput = {
    where: PracticeSetWhereUniqueInput
    create: XOR<PracticeSetCreateWithoutUserInput, PracticeSetUncheckedCreateWithoutUserInput>
  }

  export type PracticeSetCreateManyUserInputEnvelope = {
    data: PracticeSetCreateManyUserInput | PracticeSetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PracticeTaskCreateWithoutUserInput = {
    index?: number
    id?: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceSet: PracticeSetCreateNestedOneWithoutPracticeTasksInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutPracticeTaskInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutPracticeTaskInput
    taskTags?: TaskTagCreateNestedManyWithoutPracticeTaskInput
  }

  export type PracticeTaskUncheckedCreateWithoutUserInput = {
    index?: number
    id?: string
    practiceSetId: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutPracticeTaskInput
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutPracticeTaskInput
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutPracticeTaskInput
  }

  export type PracticeTaskCreateOrConnectWithoutUserInput = {
    where: PracticeTaskWhereUniqueInput
    create: XOR<PracticeTaskCreateWithoutUserInput, PracticeTaskUncheckedCreateWithoutUserInput>
  }

  export type PracticeTaskCreateManyUserInputEnvelope = {
    data: PracticeTaskCreateManyUserInput | PracticeTaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSubmitTaskCreateWithoutUserInput = {
    id?: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
    practiceSet: PracticeSetCreateNestedOneWithoutUserSubmitTasksInput
    practiceTask: PracticeTaskCreateNestedOneWithoutUserSubmitTasksInput
    userPracticeSet: UserPracticeSetCreateNestedOneWithoutUserSubmitTasksInput
  }

  export type UserSubmitTaskUncheckedCreateWithoutUserInput = {
    id?: string
    practiceSetId: string
    practiceTaskId: string
    userPracticeSetId: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
  }

  export type UserSubmitTaskCreateOrConnectWithoutUserInput = {
    where: UserSubmitTaskWhereUniqueInput
    create: XOR<UserSubmitTaskCreateWithoutUserInput, UserSubmitTaskUncheckedCreateWithoutUserInput>
  }

  export type UserSubmitTaskCreateManyUserInputEnvelope = {
    data: UserSubmitTaskCreateManyUserInput | UserSubmitTaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPracticeSetCreateWithoutUserInput = {
    id?: string
    status?: $Enums.Status
    practiceSet: PracticeSetCreateNestedOneWithoutUserPracticeSetsInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutUserPracticeSetInput
  }

  export type UserPracticeSetUncheckedCreateWithoutUserInput = {
    id?: string
    practiceSetId: string
    status?: $Enums.Status
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutUserPracticeSetInput
  }

  export type UserPracticeSetCreateOrConnectWithoutUserInput = {
    where: UserPracticeSetWhereUniqueInput
    create: XOR<UserPracticeSetCreateWithoutUserInput, UserPracticeSetUncheckedCreateWithoutUserInput>
  }

  export type UserPracticeSetCreateManyUserInputEnvelope = {
    data: UserPracticeSetCreateManyUserInput | UserPracticeSetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTaskMetadataCreateWithoutUserInput = {
    id?: string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: boolean
    isIgnored?: boolean
    submissionCount?: number
    practiceTask: PracticeTaskCreateNestedOneWithoutUserTaskMetadatasInput
  }

  export type UserTaskMetadataUncheckedCreateWithoutUserInput = {
    id?: string
    practiceTaskId: string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: boolean
    isIgnored?: boolean
    submissionCount?: number
  }

  export type UserTaskMetadataCreateOrConnectWithoutUserInput = {
    where: UserTaskMetadataWhereUniqueInput
    create: XOR<UserTaskMetadataCreateWithoutUserInput, UserTaskMetadataUncheckedCreateWithoutUserInput>
  }

  export type UserTaskMetadataCreateManyUserInputEnvelope = {
    data: UserTaskMetadataCreateManyUserInput | UserTaskMetadataCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskTagCreateWithoutUserInput = {
    id?: string
    name: string
    PracticeTask?: PracticeTaskCreateNestedManyWithoutTaskTagsInput
  }

  export type TaskTagUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    PracticeTask?: PracticeTaskUncheckedCreateNestedManyWithoutTaskTagsInput
  }

  export type TaskTagCreateOrConnectWithoutUserInput = {
    where: TaskTagWhereUniqueInput
    create: XOR<TaskTagCreateWithoutUserInput, TaskTagUncheckedCreateWithoutUserInput>
  }

  export type TaskTagCreateManyUserInputEnvelope = {
    data: TaskTagCreateManyUserInput | TaskTagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    visibility?: EnumVisibilityFilter<"Post"> | $Enums.Visibility
    text?: JsonFilter<"Post">
    totalLikeCount?: IntFilter<"Post"> | number
    totalCommentCount?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type ReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutUserInput, ReactionUncheckedUpdateWithoutUserInput>
    create: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutUserInput, ReactionUncheckedUpdateWithoutUserInput>
  }

  export type ReactionUpdateManyWithWhereWithoutUserInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutUserInput>
  }

  export type ReactionScalarWhereInput = {
    AND?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    OR?: ReactionScalarWhereInput[]
    NOT?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    id?: StringFilter<"Reaction"> | string
    userId?: StringFilter<"Reaction"> | string
    postId?: StringFilter<"Reaction"> | string
    reactionType?: EnumPostReactionFilter<"Reaction"> | $Enums.PostReaction
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    updatedAt?: DateTimeFilter<"Reaction"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    pictureUrl?: StringNullableFilter<"Comment"> | string | null
    text?: StringNullableFilter<"Comment"> | string | null
    postId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type UserStatusUpsertWithWhereUniqueWithoutUserInput = {
    where: UserStatusWhereUniqueInput
    update: XOR<UserStatusUpdateWithoutUserInput, UserStatusUncheckedUpdateWithoutUserInput>
    create: XOR<UserStatusCreateWithoutUserInput, UserStatusUncheckedCreateWithoutUserInput>
  }

  export type UserStatusUpdateWithWhereUniqueWithoutUserInput = {
    where: UserStatusWhereUniqueInput
    data: XOR<UserStatusUpdateWithoutUserInput, UserStatusUncheckedUpdateWithoutUserInput>
  }

  export type UserStatusUpdateManyWithWhereWithoutUserInput = {
    where: UserStatusScalarWhereInput
    data: XOR<UserStatusUpdateManyMutationInput, UserStatusUncheckedUpdateManyWithoutUserInput>
  }

  export type UserStatusScalarWhereInput = {
    AND?: UserStatusScalarWhereInput | UserStatusScalarWhereInput[]
    OR?: UserStatusScalarWhereInput[]
    NOT?: UserStatusScalarWhereInput | UserStatusScalarWhereInput[]
    id?: StringFilter<"UserStatus"> | string
    userId?: StringFilter<"UserStatus"> | string
    pictureUrl?: StringNullableFilter<"UserStatus"> | string | null
    text?: StringNullableFilter<"UserStatus"> | string | null
    backgroundImageUrl?: StringNullableFilter<"UserStatus"> | string | null
    createdAt?: DateTimeFilter<"UserStatus"> | Date | string
    updatedAt?: DateTimeFilter<"UserStatus"> | Date | string
  }

  export type PracticeSetUpsertWithWhereUniqueWithoutUserInput = {
    where: PracticeSetWhereUniqueInput
    update: XOR<PracticeSetUpdateWithoutUserInput, PracticeSetUncheckedUpdateWithoutUserInput>
    create: XOR<PracticeSetCreateWithoutUserInput, PracticeSetUncheckedCreateWithoutUserInput>
  }

  export type PracticeSetUpdateWithWhereUniqueWithoutUserInput = {
    where: PracticeSetWhereUniqueInput
    data: XOR<PracticeSetUpdateWithoutUserInput, PracticeSetUncheckedUpdateWithoutUserInput>
  }

  export type PracticeSetUpdateManyWithWhereWithoutUserInput = {
    where: PracticeSetScalarWhereInput
    data: XOR<PracticeSetUpdateManyMutationInput, PracticeSetUncheckedUpdateManyWithoutUserInput>
  }

  export type PracticeSetScalarWhereInput = {
    AND?: PracticeSetScalarWhereInput | PracticeSetScalarWhereInput[]
    OR?: PracticeSetScalarWhereInput[]
    NOT?: PracticeSetScalarWhereInput | PracticeSetScalarWhereInput[]
    id?: StringFilter<"PracticeSet"> | string
    userId?: StringFilter<"PracticeSet"> | string
    title?: StringFilter<"PracticeSet"> | string
    description?: JsonNullableFilter<"PracticeSet">
    visibility?: EnumVisibilityFilter<"PracticeSet"> | $Enums.Visibility
    status?: EnumStatusFilter<"PracticeSet"> | $Enums.Status
    enrollmentCount?: IntFilter<"PracticeSet"> | number
    totalTaskCount?: IntFilter<"PracticeSet"> | number
    config?: JsonNullableFilter<"PracticeSet">
    createdAt?: DateTimeFilter<"PracticeSet"> | Date | string
    updatedAt?: DateTimeFilter<"PracticeSet"> | Date | string
  }

  export type PracticeTaskUpsertWithWhereUniqueWithoutUserInput = {
    where: PracticeTaskWhereUniqueInput
    update: XOR<PracticeTaskUpdateWithoutUserInput, PracticeTaskUncheckedUpdateWithoutUserInput>
    create: XOR<PracticeTaskCreateWithoutUserInput, PracticeTaskUncheckedCreateWithoutUserInput>
  }

  export type PracticeTaskUpdateWithWhereUniqueWithoutUserInput = {
    where: PracticeTaskWhereUniqueInput
    data: XOR<PracticeTaskUpdateWithoutUserInput, PracticeTaskUncheckedUpdateWithoutUserInput>
  }

  export type PracticeTaskUpdateManyWithWhereWithoutUserInput = {
    where: PracticeTaskScalarWhereInput
    data: XOR<PracticeTaskUpdateManyMutationInput, PracticeTaskUncheckedUpdateManyWithoutUserInput>
  }

  export type PracticeTaskScalarWhereInput = {
    AND?: PracticeTaskScalarWhereInput | PracticeTaskScalarWhereInput[]
    OR?: PracticeTaskScalarWhereInput[]
    NOT?: PracticeTaskScalarWhereInput | PracticeTaskScalarWhereInput[]
    index?: IntFilter<"PracticeTask"> | number
    id?: StringFilter<"PracticeTask"> | string
    userId?: StringFilter<"PracticeTask"> | string
    practiceSetId?: StringFilter<"PracticeTask"> | string
    title?: StringFilter<"PracticeTask"> | string
    description?: JsonNullableFilter<"PracticeTask">
    visibility?: EnumVisibilityFilter<"PracticeTask"> | $Enums.Visibility
    completionCount?: IntFilter<"PracticeTask"> | number
    status?: EnumStatusFilter<"PracticeTask"> | $Enums.Status
    taskType?: EnumTaskTypeFilter<"PracticeTask"> | $Enums.TaskType
    createdAt?: DateTimeFilter<"PracticeTask"> | Date | string
    updatedAt?: DateTimeFilter<"PracticeTask"> | Date | string
  }

  export type UserSubmitTaskUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSubmitTaskWhereUniqueInput
    update: XOR<UserSubmitTaskUpdateWithoutUserInput, UserSubmitTaskUncheckedUpdateWithoutUserInput>
    create: XOR<UserSubmitTaskCreateWithoutUserInput, UserSubmitTaskUncheckedCreateWithoutUserInput>
  }

  export type UserSubmitTaskUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSubmitTaskWhereUniqueInput
    data: XOR<UserSubmitTaskUpdateWithoutUserInput, UserSubmitTaskUncheckedUpdateWithoutUserInput>
  }

  export type UserSubmitTaskUpdateManyWithWhereWithoutUserInput = {
    where: UserSubmitTaskScalarWhereInput
    data: XOR<UserSubmitTaskUpdateManyMutationInput, UserSubmitTaskUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSubmitTaskScalarWhereInput = {
    AND?: UserSubmitTaskScalarWhereInput | UserSubmitTaskScalarWhereInput[]
    OR?: UserSubmitTaskScalarWhereInput[]
    NOT?: UserSubmitTaskScalarWhereInput | UserSubmitTaskScalarWhereInput[]
    id?: StringFilter<"UserSubmitTask"> | string
    userId?: StringFilter<"UserSubmitTask"> | string
    practiceSetId?: StringFilter<"UserSubmitTask"> | string
    practiceTaskId?: StringFilter<"UserSubmitTask"> | string
    userPracticeSetId?: StringFilter<"UserSubmitTask"> | string
    userResponse?: JsonFilter<"UserSubmitTask">
    createdAt?: DateTimeFilter<"UserSubmitTask"> | Date | string
    submittedAt?: DateTimeFilter<"UserSubmitTask"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubmitTask"> | Date | string
  }

  export type UserPracticeSetUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPracticeSetWhereUniqueInput
    update: XOR<UserPracticeSetUpdateWithoutUserInput, UserPracticeSetUncheckedUpdateWithoutUserInput>
    create: XOR<UserPracticeSetCreateWithoutUserInput, UserPracticeSetUncheckedCreateWithoutUserInput>
  }

  export type UserPracticeSetUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPracticeSetWhereUniqueInput
    data: XOR<UserPracticeSetUpdateWithoutUserInput, UserPracticeSetUncheckedUpdateWithoutUserInput>
  }

  export type UserPracticeSetUpdateManyWithWhereWithoutUserInput = {
    where: UserPracticeSetScalarWhereInput
    data: XOR<UserPracticeSetUpdateManyMutationInput, UserPracticeSetUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPracticeSetScalarWhereInput = {
    AND?: UserPracticeSetScalarWhereInput | UserPracticeSetScalarWhereInput[]
    OR?: UserPracticeSetScalarWhereInput[]
    NOT?: UserPracticeSetScalarWhereInput | UserPracticeSetScalarWhereInput[]
    id?: StringFilter<"UserPracticeSet"> | string
    practiceSetId?: StringFilter<"UserPracticeSet"> | string
    userId?: StringFilter<"UserPracticeSet"> | string
    status?: EnumStatusFilter<"UserPracticeSet"> | $Enums.Status
  }

  export type UserTaskMetadataUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTaskMetadataWhereUniqueInput
    update: XOR<UserTaskMetadataUpdateWithoutUserInput, UserTaskMetadataUncheckedUpdateWithoutUserInput>
    create: XOR<UserTaskMetadataCreateWithoutUserInput, UserTaskMetadataUncheckedCreateWithoutUserInput>
  }

  export type UserTaskMetadataUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTaskMetadataWhereUniqueInput
    data: XOR<UserTaskMetadataUpdateWithoutUserInput, UserTaskMetadataUncheckedUpdateWithoutUserInput>
  }

  export type UserTaskMetadataUpdateManyWithWhereWithoutUserInput = {
    where: UserTaskMetadataScalarWhereInput
    data: XOR<UserTaskMetadataUpdateManyMutationInput, UserTaskMetadataUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTaskMetadataScalarWhereInput = {
    AND?: UserTaskMetadataScalarWhereInput | UserTaskMetadataScalarWhereInput[]
    OR?: UserTaskMetadataScalarWhereInput[]
    NOT?: UserTaskMetadataScalarWhereInput | UserTaskMetadataScalarWhereInput[]
    id?: StringFilter<"UserTaskMetadata"> | string
    userId?: StringFilter<"UserTaskMetadata"> | string
    practiceTaskId?: StringFilter<"UserTaskMetadata"> | string
    note?: JsonNullableFilter<"UserTaskMetadata">
    isBookmarked?: BoolFilter<"UserTaskMetadata"> | boolean
    isIgnored?: BoolFilter<"UserTaskMetadata"> | boolean
    submissionCount?: IntFilter<"UserTaskMetadata"> | number
  }

  export type TaskTagUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskTagWhereUniqueInput
    update: XOR<TaskTagUpdateWithoutUserInput, TaskTagUncheckedUpdateWithoutUserInput>
    create: XOR<TaskTagCreateWithoutUserInput, TaskTagUncheckedCreateWithoutUserInput>
  }

  export type TaskTagUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskTagWhereUniqueInput
    data: XOR<TaskTagUpdateWithoutUserInput, TaskTagUncheckedUpdateWithoutUserInput>
  }

  export type TaskTagUpdateManyWithWhereWithoutUserInput = {
    where: TaskTagScalarWhereInput
    data: XOR<TaskTagUpdateManyMutationInput, TaskTagUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskTagScalarWhereInput = {
    AND?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
    OR?: TaskTagScalarWhereInput[]
    NOT?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
    id?: StringFilter<"TaskTag"> | string
    userId?: StringFilter<"TaskTag"> | string
    name?: StringFilter<"TaskTag"> | string
  }

  export type UserCreateWithoutUserStatusesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutUserInput
    taskTag?: TaskTagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserStatusesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetUncheckedCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskUncheckedCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetUncheckedCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutUserInput
    taskTag?: TaskTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserStatusesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserStatusesInput, UserUncheckedCreateWithoutUserStatusesInput>
  }

  export type UserUpsertWithoutUserStatusesInput = {
    update: XOR<UserUpdateWithoutUserStatusesInput, UserUncheckedUpdateWithoutUserStatusesInput>
    create: XOR<UserCreateWithoutUserStatusesInput, UserUncheckedCreateWithoutUserStatusesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserStatusesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserStatusesInput, UserUncheckedUpdateWithoutUserStatusesInput>
  }

  export type UserUpdateWithoutUserStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUncheckedUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUncheckedUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUncheckedUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReactionCreateWithoutPostInput = {
    id?: string
    reactionType: $Enums.PostReaction
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    reactionType: $Enums.PostReaction
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionCreateOrConnectWithoutPostInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutPostInput, ReactionUncheckedCreateWithoutPostInput>
  }

  export type ReactionCreateManyPostInputEnvelope = {
    data: ReactionCreateManyPostInput | ReactionCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    pictureUrl?: string | null
    text?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    pictureUrl?: string | null
    text?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ReactionCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutUserInput
    taskTag?: TaskTagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusUncheckedCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetUncheckedCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskUncheckedCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetUncheckedCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutUserInput
    taskTag?: TaskTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type ReactionUpsertWithWhereUniqueWithoutPostInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutPostInput, ReactionUncheckedUpdateWithoutPostInput>
    create: XOR<ReactionCreateWithoutPostInput, ReactionUncheckedCreateWithoutPostInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutPostInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutPostInput, ReactionUncheckedUpdateWithoutPostInput>
  }

  export type ReactionUpdateManyWithWhereWithoutPostInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutPostInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUncheckedUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUncheckedUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUncheckedUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUncheckedUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReactionsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutUserInput
    taskTag?: TaskTagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReactionsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusUncheckedCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetUncheckedCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskUncheckedCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetUncheckedCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutUserInput
    taskTag?: TaskTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
  }

  export type PostCreateWithoutReactionsInput = {
    id?: string
    visibility: $Enums.Visibility
    text: JsonNullValueInput | InputJsonValue
    totalLikeCount?: number
    totalCommentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutPostInput
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutReactionsInput = {
    id?: string
    userId: string
    visibility: $Enums.Visibility
    text: JsonNullValueInput | InputJsonValue
    totalLikeCount?: number
    totalCommentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutReactionsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutReactionsInput, PostUncheckedCreateWithoutReactionsInput>
  }

  export type UserUpsertWithoutReactionsInput = {
    update: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUncheckedUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUncheckedUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUncheckedUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUncheckedUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutReactionsInput = {
    update: XOR<PostUpdateWithoutReactionsInput, PostUncheckedUpdateWithoutReactionsInput>
    create: XOR<PostCreateWithoutReactionsInput, PostUncheckedCreateWithoutReactionsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutReactionsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutReactionsInput, PostUncheckedUpdateWithoutReactionsInput>
  }

  export type PostUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    text?: JsonNullValueInput | InputJsonValue
    totalLikeCount?: IntFieldUpdateOperationsInput | number
    totalCommentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutPostNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    text?: JsonNullValueInput | InputJsonValue
    totalLikeCount?: IntFieldUpdateOperationsInput | number
    totalCommentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutUserInput
    taskTag?: TaskTagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusUncheckedCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetUncheckedCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskUncheckedCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetUncheckedCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutUserInput
    taskTag?: TaskTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    visibility: $Enums.Visibility
    text: JsonNullValueInput | InputJsonValue
    totalLikeCount?: number
    totalCommentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ReactionCreateNestedManyWithoutPostInput
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    userId: string
    visibility: $Enums.Visibility
    text: JsonNullValueInput | InputJsonValue
    totalLikeCount?: number
    totalCommentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ReactionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUncheckedUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUncheckedUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUncheckedUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUncheckedUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    text?: JsonNullValueInput | InputJsonValue
    totalLikeCount?: IntFieldUpdateOperationsInput | number
    totalCommentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ReactionUpdateManyWithoutPostNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    text?: JsonNullValueInput | InputJsonValue
    totalLikeCount?: IntFieldUpdateOperationsInput | number
    totalCommentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ReactionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PracticeTaskCreateWithoutPracticeSetInput = {
    index?: number
    id?: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPracticeTasksInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutPracticeTaskInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutPracticeTaskInput
    taskTags?: TaskTagCreateNestedManyWithoutPracticeTaskInput
  }

  export type PracticeTaskUncheckedCreateWithoutPracticeSetInput = {
    index?: number
    id?: string
    userId: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutPracticeTaskInput
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutPracticeTaskInput
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutPracticeTaskInput
  }

  export type PracticeTaskCreateOrConnectWithoutPracticeSetInput = {
    where: PracticeTaskWhereUniqueInput
    create: XOR<PracticeTaskCreateWithoutPracticeSetInput, PracticeTaskUncheckedCreateWithoutPracticeSetInput>
  }

  export type PracticeTaskCreateManyPracticeSetInputEnvelope = {
    data: PracticeTaskCreateManyPracticeSetInput | PracticeTaskCreateManyPracticeSetInput[]
    skipDuplicates?: boolean
  }

  export type UserSubmitTaskCreateWithoutPracticeSetInput = {
    id?: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSubmitTasksInput
    practiceTask: PracticeTaskCreateNestedOneWithoutUserSubmitTasksInput
    userPracticeSet: UserPracticeSetCreateNestedOneWithoutUserSubmitTasksInput
  }

  export type UserSubmitTaskUncheckedCreateWithoutPracticeSetInput = {
    id?: string
    userId: string
    practiceTaskId: string
    userPracticeSetId: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
  }

  export type UserSubmitTaskCreateOrConnectWithoutPracticeSetInput = {
    where: UserSubmitTaskWhereUniqueInput
    create: XOR<UserSubmitTaskCreateWithoutPracticeSetInput, UserSubmitTaskUncheckedCreateWithoutPracticeSetInput>
  }

  export type UserSubmitTaskCreateManyPracticeSetInputEnvelope = {
    data: UserSubmitTaskCreateManyPracticeSetInput | UserSubmitTaskCreateManyPracticeSetInput[]
    skipDuplicates?: boolean
  }

  export type UserPracticeSetCreateWithoutPracticeSetInput = {
    id?: string
    status?: $Enums.Status
    user: UserCreateNestedOneWithoutUserPracticeSetsInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutUserPracticeSetInput
  }

  export type UserPracticeSetUncheckedCreateWithoutPracticeSetInput = {
    id?: string
    userId: string
    status?: $Enums.Status
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutUserPracticeSetInput
  }

  export type UserPracticeSetCreateOrConnectWithoutPracticeSetInput = {
    where: UserPracticeSetWhereUniqueInput
    create: XOR<UserPracticeSetCreateWithoutPracticeSetInput, UserPracticeSetUncheckedCreateWithoutPracticeSetInput>
  }

  export type UserPracticeSetCreateManyPracticeSetInputEnvelope = {
    data: UserPracticeSetCreateManyPracticeSetInput | UserPracticeSetCreateManyPracticeSetInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPracticeSetsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutUserInput
    taskTag?: TaskTagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPracticeSetsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusUncheckedCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskUncheckedCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetUncheckedCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutUserInput
    taskTag?: TaskTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPracticeSetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPracticeSetsInput, UserUncheckedCreateWithoutPracticeSetsInput>
  }

  export type PracticeTaskUpsertWithWhereUniqueWithoutPracticeSetInput = {
    where: PracticeTaskWhereUniqueInput
    update: XOR<PracticeTaskUpdateWithoutPracticeSetInput, PracticeTaskUncheckedUpdateWithoutPracticeSetInput>
    create: XOR<PracticeTaskCreateWithoutPracticeSetInput, PracticeTaskUncheckedCreateWithoutPracticeSetInput>
  }

  export type PracticeTaskUpdateWithWhereUniqueWithoutPracticeSetInput = {
    where: PracticeTaskWhereUniqueInput
    data: XOR<PracticeTaskUpdateWithoutPracticeSetInput, PracticeTaskUncheckedUpdateWithoutPracticeSetInput>
  }

  export type PracticeTaskUpdateManyWithWhereWithoutPracticeSetInput = {
    where: PracticeTaskScalarWhereInput
    data: XOR<PracticeTaskUpdateManyMutationInput, PracticeTaskUncheckedUpdateManyWithoutPracticeSetInput>
  }

  export type UserSubmitTaskUpsertWithWhereUniqueWithoutPracticeSetInput = {
    where: UserSubmitTaskWhereUniqueInput
    update: XOR<UserSubmitTaskUpdateWithoutPracticeSetInput, UserSubmitTaskUncheckedUpdateWithoutPracticeSetInput>
    create: XOR<UserSubmitTaskCreateWithoutPracticeSetInput, UserSubmitTaskUncheckedCreateWithoutPracticeSetInput>
  }

  export type UserSubmitTaskUpdateWithWhereUniqueWithoutPracticeSetInput = {
    where: UserSubmitTaskWhereUniqueInput
    data: XOR<UserSubmitTaskUpdateWithoutPracticeSetInput, UserSubmitTaskUncheckedUpdateWithoutPracticeSetInput>
  }

  export type UserSubmitTaskUpdateManyWithWhereWithoutPracticeSetInput = {
    where: UserSubmitTaskScalarWhereInput
    data: XOR<UserSubmitTaskUpdateManyMutationInput, UserSubmitTaskUncheckedUpdateManyWithoutPracticeSetInput>
  }

  export type UserPracticeSetUpsertWithWhereUniqueWithoutPracticeSetInput = {
    where: UserPracticeSetWhereUniqueInput
    update: XOR<UserPracticeSetUpdateWithoutPracticeSetInput, UserPracticeSetUncheckedUpdateWithoutPracticeSetInput>
    create: XOR<UserPracticeSetCreateWithoutPracticeSetInput, UserPracticeSetUncheckedCreateWithoutPracticeSetInput>
  }

  export type UserPracticeSetUpdateWithWhereUniqueWithoutPracticeSetInput = {
    where: UserPracticeSetWhereUniqueInput
    data: XOR<UserPracticeSetUpdateWithoutPracticeSetInput, UserPracticeSetUncheckedUpdateWithoutPracticeSetInput>
  }

  export type UserPracticeSetUpdateManyWithWhereWithoutPracticeSetInput = {
    where: UserPracticeSetScalarWhereInput
    data: XOR<UserPracticeSetUpdateManyMutationInput, UserPracticeSetUncheckedUpdateManyWithoutPracticeSetInput>
  }

  export type UserUpsertWithoutPracticeSetsInput = {
    update: XOR<UserUpdateWithoutPracticeSetsInput, UserUncheckedUpdateWithoutPracticeSetsInput>
    create: XOR<UserCreateWithoutPracticeSetsInput, UserUncheckedCreateWithoutPracticeSetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPracticeSetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPracticeSetsInput, UserUncheckedUpdateWithoutPracticeSetsInput>
  }

  export type UserUpdateWithoutPracticeSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPracticeSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUncheckedUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUncheckedUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUncheckedUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserPracticeSetsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutUserInput
    taskTag?: TaskTagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPracticeSetsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusUncheckedCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetUncheckedCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskUncheckedCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutUserInput
    taskTag?: TaskTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPracticeSetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPracticeSetsInput, UserUncheckedCreateWithoutUserPracticeSetsInput>
  }

  export type PracticeSetCreateWithoutUserPracticeSetsInput = {
    id?: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    status?: $Enums.Status
    enrollmentCount?: number
    totalTaskCount?: number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceTasks?: PracticeTaskCreateNestedManyWithoutPracticeSetInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutPracticeSetInput
    user: UserCreateNestedOneWithoutPracticeSetsInput
  }

  export type PracticeSetUncheckedCreateWithoutUserPracticeSetsInput = {
    id?: string
    userId: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    status?: $Enums.Status
    enrollmentCount?: number
    totalTaskCount?: number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceTasks?: PracticeTaskUncheckedCreateNestedManyWithoutPracticeSetInput
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutPracticeSetInput
  }

  export type PracticeSetCreateOrConnectWithoutUserPracticeSetsInput = {
    where: PracticeSetWhereUniqueInput
    create: XOR<PracticeSetCreateWithoutUserPracticeSetsInput, PracticeSetUncheckedCreateWithoutUserPracticeSetsInput>
  }

  export type UserSubmitTaskCreateWithoutUserPracticeSetInput = {
    id?: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSubmitTasksInput
    practiceSet: PracticeSetCreateNestedOneWithoutUserSubmitTasksInput
    practiceTask: PracticeTaskCreateNestedOneWithoutUserSubmitTasksInput
  }

  export type UserSubmitTaskUncheckedCreateWithoutUserPracticeSetInput = {
    id?: string
    userId: string
    practiceSetId: string
    practiceTaskId: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
  }

  export type UserSubmitTaskCreateOrConnectWithoutUserPracticeSetInput = {
    where: UserSubmitTaskWhereUniqueInput
    create: XOR<UserSubmitTaskCreateWithoutUserPracticeSetInput, UserSubmitTaskUncheckedCreateWithoutUserPracticeSetInput>
  }

  export type UserSubmitTaskCreateManyUserPracticeSetInputEnvelope = {
    data: UserSubmitTaskCreateManyUserPracticeSetInput | UserSubmitTaskCreateManyUserPracticeSetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserPracticeSetsInput = {
    update: XOR<UserUpdateWithoutUserPracticeSetsInput, UserUncheckedUpdateWithoutUserPracticeSetsInput>
    create: XOR<UserCreateWithoutUserPracticeSetsInput, UserUncheckedCreateWithoutUserPracticeSetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPracticeSetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPracticeSetsInput, UserUncheckedUpdateWithoutUserPracticeSetsInput>
  }

  export type UserUpdateWithoutUserPracticeSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPracticeSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUncheckedUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUncheckedUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUncheckedUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PracticeSetUpsertWithoutUserPracticeSetsInput = {
    update: XOR<PracticeSetUpdateWithoutUserPracticeSetsInput, PracticeSetUncheckedUpdateWithoutUserPracticeSetsInput>
    create: XOR<PracticeSetCreateWithoutUserPracticeSetsInput, PracticeSetUncheckedCreateWithoutUserPracticeSetsInput>
    where?: PracticeSetWhereInput
  }

  export type PracticeSetUpdateToOneWithWhereWithoutUserPracticeSetsInput = {
    where?: PracticeSetWhereInput
    data: XOR<PracticeSetUpdateWithoutUserPracticeSetsInput, PracticeSetUncheckedUpdateWithoutUserPracticeSetsInput>
  }

  export type PracticeSetUpdateWithoutUserPracticeSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    totalTaskCount?: IntFieldUpdateOperationsInput | number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceTasks?: PracticeTaskUpdateManyWithoutPracticeSetNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutPracticeSetNestedInput
    user?: UserUpdateOneRequiredWithoutPracticeSetsNestedInput
  }

  export type PracticeSetUncheckedUpdateWithoutUserPracticeSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    totalTaskCount?: IntFieldUpdateOperationsInput | number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceTasks?: PracticeTaskUncheckedUpdateManyWithoutPracticeSetNestedInput
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutPracticeSetNestedInput
  }

  export type UserSubmitTaskUpsertWithWhereUniqueWithoutUserPracticeSetInput = {
    where: UserSubmitTaskWhereUniqueInput
    update: XOR<UserSubmitTaskUpdateWithoutUserPracticeSetInput, UserSubmitTaskUncheckedUpdateWithoutUserPracticeSetInput>
    create: XOR<UserSubmitTaskCreateWithoutUserPracticeSetInput, UserSubmitTaskUncheckedCreateWithoutUserPracticeSetInput>
  }

  export type UserSubmitTaskUpdateWithWhereUniqueWithoutUserPracticeSetInput = {
    where: UserSubmitTaskWhereUniqueInput
    data: XOR<UserSubmitTaskUpdateWithoutUserPracticeSetInput, UserSubmitTaskUncheckedUpdateWithoutUserPracticeSetInput>
  }

  export type UserSubmitTaskUpdateManyWithWhereWithoutUserPracticeSetInput = {
    where: UserSubmitTaskScalarWhereInput
    data: XOR<UserSubmitTaskUpdateManyMutationInput, UserSubmitTaskUncheckedUpdateManyWithoutUserPracticeSetInput>
  }

  export type UserCreateWithoutPracticeTasksInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutUserInput
    taskTag?: TaskTagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPracticeTasksInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusUncheckedCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetUncheckedCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetUncheckedCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutUserInput
    taskTag?: TaskTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPracticeTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPracticeTasksInput, UserUncheckedCreateWithoutPracticeTasksInput>
  }

  export type PracticeSetCreateWithoutPracticeTasksInput = {
    id?: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    status?: $Enums.Status
    enrollmentCount?: number
    totalTaskCount?: number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutPracticeSetInput
    userPracticeSets?: UserPracticeSetCreateNestedManyWithoutPracticeSetInput
    user: UserCreateNestedOneWithoutPracticeSetsInput
  }

  export type PracticeSetUncheckedCreateWithoutPracticeTasksInput = {
    id?: string
    userId: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    status?: $Enums.Status
    enrollmentCount?: number
    totalTaskCount?: number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutPracticeSetInput
    userPracticeSets?: UserPracticeSetUncheckedCreateNestedManyWithoutPracticeSetInput
  }

  export type PracticeSetCreateOrConnectWithoutPracticeTasksInput = {
    where: PracticeSetWhereUniqueInput
    create: XOR<PracticeSetCreateWithoutPracticeTasksInput, PracticeSetUncheckedCreateWithoutPracticeTasksInput>
  }

  export type UserSubmitTaskCreateWithoutPracticeTaskInput = {
    id?: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSubmitTasksInput
    practiceSet: PracticeSetCreateNestedOneWithoutUserSubmitTasksInput
    userPracticeSet: UserPracticeSetCreateNestedOneWithoutUserSubmitTasksInput
  }

  export type UserSubmitTaskUncheckedCreateWithoutPracticeTaskInput = {
    id?: string
    userId: string
    practiceSetId: string
    userPracticeSetId: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
  }

  export type UserSubmitTaskCreateOrConnectWithoutPracticeTaskInput = {
    where: UserSubmitTaskWhereUniqueInput
    create: XOR<UserSubmitTaskCreateWithoutPracticeTaskInput, UserSubmitTaskUncheckedCreateWithoutPracticeTaskInput>
  }

  export type UserSubmitTaskCreateManyPracticeTaskInputEnvelope = {
    data: UserSubmitTaskCreateManyPracticeTaskInput | UserSubmitTaskCreateManyPracticeTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserTaskMetadataCreateWithoutPracticeTaskInput = {
    id?: string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: boolean
    isIgnored?: boolean
    submissionCount?: number
    user: UserCreateNestedOneWithoutUserTaskMetadatasInput
  }

  export type UserTaskMetadataUncheckedCreateWithoutPracticeTaskInput = {
    id?: string
    userId: string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: boolean
    isIgnored?: boolean
    submissionCount?: number
  }

  export type UserTaskMetadataCreateOrConnectWithoutPracticeTaskInput = {
    where: UserTaskMetadataWhereUniqueInput
    create: XOR<UserTaskMetadataCreateWithoutPracticeTaskInput, UserTaskMetadataUncheckedCreateWithoutPracticeTaskInput>
  }

  export type UserTaskMetadataCreateManyPracticeTaskInputEnvelope = {
    data: UserTaskMetadataCreateManyPracticeTaskInput | UserTaskMetadataCreateManyPracticeTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskTagCreateWithoutPracticeTaskInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutTaskTagInput
  }

  export type TaskTagUncheckedCreateWithoutPracticeTaskInput = {
    id?: string
    userId: string
    name: string
  }

  export type TaskTagCreateOrConnectWithoutPracticeTaskInput = {
    where: TaskTagWhereUniqueInput
    create: XOR<TaskTagCreateWithoutPracticeTaskInput, TaskTagUncheckedCreateWithoutPracticeTaskInput>
  }

  export type UserUpsertWithoutPracticeTasksInput = {
    update: XOR<UserUpdateWithoutPracticeTasksInput, UserUncheckedUpdateWithoutPracticeTasksInput>
    create: XOR<UserCreateWithoutPracticeTasksInput, UserUncheckedCreateWithoutPracticeTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPracticeTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPracticeTasksInput, UserUncheckedUpdateWithoutPracticeTasksInput>
  }

  export type UserUpdateWithoutPracticeTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPracticeTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUncheckedUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUncheckedUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUncheckedUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PracticeSetUpsertWithoutPracticeTasksInput = {
    update: XOR<PracticeSetUpdateWithoutPracticeTasksInput, PracticeSetUncheckedUpdateWithoutPracticeTasksInput>
    create: XOR<PracticeSetCreateWithoutPracticeTasksInput, PracticeSetUncheckedCreateWithoutPracticeTasksInput>
    where?: PracticeSetWhereInput
  }

  export type PracticeSetUpdateToOneWithWhereWithoutPracticeTasksInput = {
    where?: PracticeSetWhereInput
    data: XOR<PracticeSetUpdateWithoutPracticeTasksInput, PracticeSetUncheckedUpdateWithoutPracticeTasksInput>
  }

  export type PracticeSetUpdateWithoutPracticeTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    totalTaskCount?: IntFieldUpdateOperationsInput | number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutPracticeSetNestedInput
    userPracticeSets?: UserPracticeSetUpdateManyWithoutPracticeSetNestedInput
    user?: UserUpdateOneRequiredWithoutPracticeSetsNestedInput
  }

  export type PracticeSetUncheckedUpdateWithoutPracticeTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    totalTaskCount?: IntFieldUpdateOperationsInput | number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutPracticeSetNestedInput
    userPracticeSets?: UserPracticeSetUncheckedUpdateManyWithoutPracticeSetNestedInput
  }

  export type UserSubmitTaskUpsertWithWhereUniqueWithoutPracticeTaskInput = {
    where: UserSubmitTaskWhereUniqueInput
    update: XOR<UserSubmitTaskUpdateWithoutPracticeTaskInput, UserSubmitTaskUncheckedUpdateWithoutPracticeTaskInput>
    create: XOR<UserSubmitTaskCreateWithoutPracticeTaskInput, UserSubmitTaskUncheckedCreateWithoutPracticeTaskInput>
  }

  export type UserSubmitTaskUpdateWithWhereUniqueWithoutPracticeTaskInput = {
    where: UserSubmitTaskWhereUniqueInput
    data: XOR<UserSubmitTaskUpdateWithoutPracticeTaskInput, UserSubmitTaskUncheckedUpdateWithoutPracticeTaskInput>
  }

  export type UserSubmitTaskUpdateManyWithWhereWithoutPracticeTaskInput = {
    where: UserSubmitTaskScalarWhereInput
    data: XOR<UserSubmitTaskUpdateManyMutationInput, UserSubmitTaskUncheckedUpdateManyWithoutPracticeTaskInput>
  }

  export type UserTaskMetadataUpsertWithWhereUniqueWithoutPracticeTaskInput = {
    where: UserTaskMetadataWhereUniqueInput
    update: XOR<UserTaskMetadataUpdateWithoutPracticeTaskInput, UserTaskMetadataUncheckedUpdateWithoutPracticeTaskInput>
    create: XOR<UserTaskMetadataCreateWithoutPracticeTaskInput, UserTaskMetadataUncheckedCreateWithoutPracticeTaskInput>
  }

  export type UserTaskMetadataUpdateWithWhereUniqueWithoutPracticeTaskInput = {
    where: UserTaskMetadataWhereUniqueInput
    data: XOR<UserTaskMetadataUpdateWithoutPracticeTaskInput, UserTaskMetadataUncheckedUpdateWithoutPracticeTaskInput>
  }

  export type UserTaskMetadataUpdateManyWithWhereWithoutPracticeTaskInput = {
    where: UserTaskMetadataScalarWhereInput
    data: XOR<UserTaskMetadataUpdateManyMutationInput, UserTaskMetadataUncheckedUpdateManyWithoutPracticeTaskInput>
  }

  export type TaskTagUpsertWithWhereUniqueWithoutPracticeTaskInput = {
    where: TaskTagWhereUniqueInput
    update: XOR<TaskTagUpdateWithoutPracticeTaskInput, TaskTagUncheckedUpdateWithoutPracticeTaskInput>
    create: XOR<TaskTagCreateWithoutPracticeTaskInput, TaskTagUncheckedCreateWithoutPracticeTaskInput>
  }

  export type TaskTagUpdateWithWhereUniqueWithoutPracticeTaskInput = {
    where: TaskTagWhereUniqueInput
    data: XOR<TaskTagUpdateWithoutPracticeTaskInput, TaskTagUncheckedUpdateWithoutPracticeTaskInput>
  }

  export type TaskTagUpdateManyWithWhereWithoutPracticeTaskInput = {
    where: TaskTagScalarWhereInput
    data: XOR<TaskTagUpdateManyMutationInput, TaskTagUncheckedUpdateManyWithoutPracticeTaskInput>
  }

  export type UserCreateWithoutUserTaskMetadatasInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetCreateNestedManyWithoutUserInput
    taskTag?: TaskTagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserTaskMetadatasInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusUncheckedCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetUncheckedCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskUncheckedCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetUncheckedCreateNestedManyWithoutUserInput
    taskTag?: TaskTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserTaskMetadatasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTaskMetadatasInput, UserUncheckedCreateWithoutUserTaskMetadatasInput>
  }

  export type PracticeTaskCreateWithoutUserTaskMetadatasInput = {
    index?: number
    id?: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPracticeTasksInput
    practiceSet: PracticeSetCreateNestedOneWithoutPracticeTasksInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutPracticeTaskInput
    taskTags?: TaskTagCreateNestedManyWithoutPracticeTaskInput
  }

  export type PracticeTaskUncheckedCreateWithoutUserTaskMetadatasInput = {
    index?: number
    id?: string
    userId: string
    practiceSetId: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutPracticeTaskInput
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutPracticeTaskInput
  }

  export type PracticeTaskCreateOrConnectWithoutUserTaskMetadatasInput = {
    where: PracticeTaskWhereUniqueInput
    create: XOR<PracticeTaskCreateWithoutUserTaskMetadatasInput, PracticeTaskUncheckedCreateWithoutUserTaskMetadatasInput>
  }

  export type UserUpsertWithoutUserTaskMetadatasInput = {
    update: XOR<UserUpdateWithoutUserTaskMetadatasInput, UserUncheckedUpdateWithoutUserTaskMetadatasInput>
    create: XOR<UserCreateWithoutUserTaskMetadatasInput, UserUncheckedCreateWithoutUserTaskMetadatasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserTaskMetadatasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserTaskMetadatasInput, UserUncheckedUpdateWithoutUserTaskMetadatasInput>
  }

  export type UserUpdateWithoutUserTaskMetadatasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserTaskMetadatasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUncheckedUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUncheckedUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUncheckedUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUncheckedUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PracticeTaskUpsertWithoutUserTaskMetadatasInput = {
    update: XOR<PracticeTaskUpdateWithoutUserTaskMetadatasInput, PracticeTaskUncheckedUpdateWithoutUserTaskMetadatasInput>
    create: XOR<PracticeTaskCreateWithoutUserTaskMetadatasInput, PracticeTaskUncheckedCreateWithoutUserTaskMetadatasInput>
    where?: PracticeTaskWhereInput
  }

  export type PracticeTaskUpdateToOneWithWhereWithoutUserTaskMetadatasInput = {
    where?: PracticeTaskWhereInput
    data: XOR<PracticeTaskUpdateWithoutUserTaskMetadatasInput, PracticeTaskUncheckedUpdateWithoutUserTaskMetadatasInput>
  }

  export type PracticeTaskUpdateWithoutUserTaskMetadatasInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPracticeTasksNestedInput
    practiceSet?: PracticeSetUpdateOneRequiredWithoutPracticeTasksNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutPracticeTaskNestedInput
    taskTags?: TaskTagUpdateManyWithoutPracticeTaskNestedInput
  }

  export type PracticeTaskUncheckedUpdateWithoutUserTaskMetadatasInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutPracticeTaskNestedInput
    taskTags?: TaskTagUncheckedUpdateManyWithoutPracticeTaskNestedInput
  }

  export type UserCreateWithoutTaskTagInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTaskTagInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusUncheckedCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetUncheckedCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskUncheckedCreateNestedManyWithoutUserInput
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetUncheckedCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTaskTagInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskTagInput, UserUncheckedCreateWithoutTaskTagInput>
  }

  export type PracticeTaskCreateWithoutTaskTagsInput = {
    index?: number
    id?: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPracticeTasksInput
    practiceSet: PracticeSetCreateNestedOneWithoutPracticeTasksInput
    userSubmitTasks?: UserSubmitTaskCreateNestedManyWithoutPracticeTaskInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutPracticeTaskInput
  }

  export type PracticeTaskUncheckedCreateWithoutTaskTagsInput = {
    index?: number
    id?: string
    userId: string
    practiceSetId: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubmitTasks?: UserSubmitTaskUncheckedCreateNestedManyWithoutPracticeTaskInput
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutPracticeTaskInput
  }

  export type PracticeTaskCreateOrConnectWithoutTaskTagsInput = {
    where: PracticeTaskWhereUniqueInput
    create: XOR<PracticeTaskCreateWithoutTaskTagsInput, PracticeTaskUncheckedCreateWithoutTaskTagsInput>
  }

  export type UserUpsertWithoutTaskTagInput = {
    update: XOR<UserUpdateWithoutTaskTagInput, UserUncheckedUpdateWithoutTaskTagInput>
    create: XOR<UserCreateWithoutTaskTagInput, UserUncheckedCreateWithoutTaskTagInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskTagInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskTagInput, UserUncheckedUpdateWithoutTaskTagInput>
  }

  export type UserUpdateWithoutTaskTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUncheckedUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUncheckedUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUncheckedUpdateManyWithoutUserNestedInput
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUncheckedUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PracticeTaskUpsertWithWhereUniqueWithoutTaskTagsInput = {
    where: PracticeTaskWhereUniqueInput
    update: XOR<PracticeTaskUpdateWithoutTaskTagsInput, PracticeTaskUncheckedUpdateWithoutTaskTagsInput>
    create: XOR<PracticeTaskCreateWithoutTaskTagsInput, PracticeTaskUncheckedCreateWithoutTaskTagsInput>
  }

  export type PracticeTaskUpdateWithWhereUniqueWithoutTaskTagsInput = {
    where: PracticeTaskWhereUniqueInput
    data: XOR<PracticeTaskUpdateWithoutTaskTagsInput, PracticeTaskUncheckedUpdateWithoutTaskTagsInput>
  }

  export type PracticeTaskUpdateManyWithWhereWithoutTaskTagsInput = {
    where: PracticeTaskScalarWhereInput
    data: XOR<PracticeTaskUpdateManyMutationInput, PracticeTaskUncheckedUpdateManyWithoutTaskTagsInput>
  }

  export type UserCreateWithoutUserSubmitTasksInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutUserInput
    taskTag?: TaskTagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSubmitTasksInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    userStatuses?: UserStatusUncheckedCreateNestedManyWithoutUserInput
    practiceSets?: PracticeSetUncheckedCreateNestedManyWithoutUserInput
    practiceTasks?: PracticeTaskUncheckedCreateNestedManyWithoutUserInput
    userPracticeSets?: UserPracticeSetUncheckedCreateNestedManyWithoutUserInput
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutUserInput
    taskTag?: TaskTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSubmitTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSubmitTasksInput, UserUncheckedCreateWithoutUserSubmitTasksInput>
  }

  export type PracticeSetCreateWithoutUserSubmitTasksInput = {
    id?: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    status?: $Enums.Status
    enrollmentCount?: number
    totalTaskCount?: number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceTasks?: PracticeTaskCreateNestedManyWithoutPracticeSetInput
    userPracticeSets?: UserPracticeSetCreateNestedManyWithoutPracticeSetInput
    user: UserCreateNestedOneWithoutPracticeSetsInput
  }

  export type PracticeSetUncheckedCreateWithoutUserSubmitTasksInput = {
    id?: string
    userId: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    status?: $Enums.Status
    enrollmentCount?: number
    totalTaskCount?: number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceTasks?: PracticeTaskUncheckedCreateNestedManyWithoutPracticeSetInput
    userPracticeSets?: UserPracticeSetUncheckedCreateNestedManyWithoutPracticeSetInput
  }

  export type PracticeSetCreateOrConnectWithoutUserSubmitTasksInput = {
    where: PracticeSetWhereUniqueInput
    create: XOR<PracticeSetCreateWithoutUserSubmitTasksInput, PracticeSetUncheckedCreateWithoutUserSubmitTasksInput>
  }

  export type PracticeTaskCreateWithoutUserSubmitTasksInput = {
    index?: number
    id?: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPracticeTasksInput
    practiceSet: PracticeSetCreateNestedOneWithoutPracticeTasksInput
    userTaskMetadatas?: UserTaskMetadataCreateNestedManyWithoutPracticeTaskInput
    taskTags?: TaskTagCreateNestedManyWithoutPracticeTaskInput
  }

  export type PracticeTaskUncheckedCreateWithoutUserSubmitTasksInput = {
    index?: number
    id?: string
    userId: string
    practiceSetId: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
    userTaskMetadatas?: UserTaskMetadataUncheckedCreateNestedManyWithoutPracticeTaskInput
    taskTags?: TaskTagUncheckedCreateNestedManyWithoutPracticeTaskInput
  }

  export type PracticeTaskCreateOrConnectWithoutUserSubmitTasksInput = {
    where: PracticeTaskWhereUniqueInput
    create: XOR<PracticeTaskCreateWithoutUserSubmitTasksInput, PracticeTaskUncheckedCreateWithoutUserSubmitTasksInput>
  }

  export type UserPracticeSetCreateWithoutUserSubmitTasksInput = {
    id?: string
    status?: $Enums.Status
    user: UserCreateNestedOneWithoutUserPracticeSetsInput
    practiceSet: PracticeSetCreateNestedOneWithoutUserPracticeSetsInput
  }

  export type UserPracticeSetUncheckedCreateWithoutUserSubmitTasksInput = {
    id?: string
    practiceSetId: string
    userId: string
    status?: $Enums.Status
  }

  export type UserPracticeSetCreateOrConnectWithoutUserSubmitTasksInput = {
    where: UserPracticeSetWhereUniqueInput
    create: XOR<UserPracticeSetCreateWithoutUserSubmitTasksInput, UserPracticeSetUncheckedCreateWithoutUserSubmitTasksInput>
  }

  export type UserUpsertWithoutUserSubmitTasksInput = {
    update: XOR<UserUpdateWithoutUserSubmitTasksInput, UserUncheckedUpdateWithoutUserSubmitTasksInput>
    create: XOR<UserCreateWithoutUserSubmitTasksInput, UserUncheckedCreateWithoutUserSubmitTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSubmitTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSubmitTasksInput, UserUncheckedUpdateWithoutUserSubmitTasksInput>
  }

  export type UserUpdateWithoutUserSubmitTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSubmitTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userStatuses?: UserStatusUncheckedUpdateManyWithoutUserNestedInput
    practiceSets?: PracticeSetUncheckedUpdateManyWithoutUserNestedInput
    practiceTasks?: PracticeTaskUncheckedUpdateManyWithoutUserNestedInput
    userPracticeSets?: UserPracticeSetUncheckedUpdateManyWithoutUserNestedInput
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutUserNestedInput
    taskTag?: TaskTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PracticeSetUpsertWithoutUserSubmitTasksInput = {
    update: XOR<PracticeSetUpdateWithoutUserSubmitTasksInput, PracticeSetUncheckedUpdateWithoutUserSubmitTasksInput>
    create: XOR<PracticeSetCreateWithoutUserSubmitTasksInput, PracticeSetUncheckedCreateWithoutUserSubmitTasksInput>
    where?: PracticeSetWhereInput
  }

  export type PracticeSetUpdateToOneWithWhereWithoutUserSubmitTasksInput = {
    where?: PracticeSetWhereInput
    data: XOR<PracticeSetUpdateWithoutUserSubmitTasksInput, PracticeSetUncheckedUpdateWithoutUserSubmitTasksInput>
  }

  export type PracticeSetUpdateWithoutUserSubmitTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    totalTaskCount?: IntFieldUpdateOperationsInput | number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceTasks?: PracticeTaskUpdateManyWithoutPracticeSetNestedInput
    userPracticeSets?: UserPracticeSetUpdateManyWithoutPracticeSetNestedInput
    user?: UserUpdateOneRequiredWithoutPracticeSetsNestedInput
  }

  export type PracticeSetUncheckedUpdateWithoutUserSubmitTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    totalTaskCount?: IntFieldUpdateOperationsInput | number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceTasks?: PracticeTaskUncheckedUpdateManyWithoutPracticeSetNestedInput
    userPracticeSets?: UserPracticeSetUncheckedUpdateManyWithoutPracticeSetNestedInput
  }

  export type PracticeTaskUpsertWithoutUserSubmitTasksInput = {
    update: XOR<PracticeTaskUpdateWithoutUserSubmitTasksInput, PracticeTaskUncheckedUpdateWithoutUserSubmitTasksInput>
    create: XOR<PracticeTaskCreateWithoutUserSubmitTasksInput, PracticeTaskUncheckedCreateWithoutUserSubmitTasksInput>
    where?: PracticeTaskWhereInput
  }

  export type PracticeTaskUpdateToOneWithWhereWithoutUserSubmitTasksInput = {
    where?: PracticeTaskWhereInput
    data: XOR<PracticeTaskUpdateWithoutUserSubmitTasksInput, PracticeTaskUncheckedUpdateWithoutUserSubmitTasksInput>
  }

  export type PracticeTaskUpdateWithoutUserSubmitTasksInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPracticeTasksNestedInput
    practiceSet?: PracticeSetUpdateOneRequiredWithoutPracticeTasksNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutPracticeTaskNestedInput
    taskTags?: TaskTagUpdateManyWithoutPracticeTaskNestedInput
  }

  export type PracticeTaskUncheckedUpdateWithoutUserSubmitTasksInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutPracticeTaskNestedInput
    taskTags?: TaskTagUncheckedUpdateManyWithoutPracticeTaskNestedInput
  }

  export type UserPracticeSetUpsertWithoutUserSubmitTasksInput = {
    update: XOR<UserPracticeSetUpdateWithoutUserSubmitTasksInput, UserPracticeSetUncheckedUpdateWithoutUserSubmitTasksInput>
    create: XOR<UserPracticeSetCreateWithoutUserSubmitTasksInput, UserPracticeSetUncheckedCreateWithoutUserSubmitTasksInput>
    where?: UserPracticeSetWhereInput
  }

  export type UserPracticeSetUpdateToOneWithWhereWithoutUserSubmitTasksInput = {
    where?: UserPracticeSetWhereInput
    data: XOR<UserPracticeSetUpdateWithoutUserSubmitTasksInput, UserPracticeSetUncheckedUpdateWithoutUserSubmitTasksInput>
  }

  export type UserPracticeSetUpdateWithoutUserSubmitTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUpdateOneRequiredWithoutUserPracticeSetsNestedInput
    practiceSet?: PracticeSetUpdateOneRequiredWithoutUserPracticeSetsNestedInput
  }

  export type UserPracticeSetUncheckedUpdateWithoutUserSubmitTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type PostCreateManyUserInput = {
    id?: string
    visibility: $Enums.Visibility
    text: JsonNullValueInput | InputJsonValue
    totalLikeCount?: number
    totalCommentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionCreateManyUserInput = {
    id?: string
    postId: string
    reactionType: $Enums.PostReaction
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    pictureUrl?: string | null
    text?: string | null
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStatusCreateManyUserInput = {
    id?: string
    pictureUrl?: string | null
    text?: string | null
    backgroundImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PracticeSetCreateManyUserInput = {
    id?: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    status?: $Enums.Status
    enrollmentCount?: number
    totalTaskCount?: number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PracticeTaskCreateManyUserInput = {
    index?: number
    id?: string
    practiceSetId: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubmitTaskCreateManyUserInput = {
    id?: string
    practiceSetId: string
    practiceTaskId: string
    userPracticeSetId: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
  }

  export type UserPracticeSetCreateManyUserInput = {
    id?: string
    practiceSetId: string
    status?: $Enums.Status
  }

  export type UserTaskMetadataCreateManyUserInput = {
    id?: string
    practiceTaskId: string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: boolean
    isIgnored?: boolean
    submissionCount?: number
  }

  export type TaskTagCreateManyUserInput = {
    id?: string
    name: string
  }

  export type PostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    text?: JsonNullValueInput | InputJsonValue
    totalLikeCount?: IntFieldUpdateOperationsInput | number
    totalCommentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ReactionUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    text?: JsonNullValueInput | InputJsonValue
    totalLikeCount?: IntFieldUpdateOperationsInput | number
    totalCommentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ReactionUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    text?: JsonNullValueInput | InputJsonValue
    totalLikeCount?: IntFieldUpdateOperationsInput | number
    totalCommentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reactionType?: EnumPostReactionFieldUpdateOperationsInput | $Enums.PostReaction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    reactionType?: EnumPostReactionFieldUpdateOperationsInput | $Enums.PostReaction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    reactionType?: EnumPostReactionFieldUpdateOperationsInput | $Enums.PostReaction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatusUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatusUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatusUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeSetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    totalTaskCount?: IntFieldUpdateOperationsInput | number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceTasks?: PracticeTaskUpdateManyWithoutPracticeSetNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutPracticeSetNestedInput
    userPracticeSets?: UserPracticeSetUpdateManyWithoutPracticeSetNestedInput
  }

  export type PracticeSetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    totalTaskCount?: IntFieldUpdateOperationsInput | number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceTasks?: PracticeTaskUncheckedUpdateManyWithoutPracticeSetNestedInput
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutPracticeSetNestedInput
    userPracticeSets?: UserPracticeSetUncheckedUpdateManyWithoutPracticeSetNestedInput
  }

  export type PracticeSetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    totalTaskCount?: IntFieldUpdateOperationsInput | number
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeTaskUpdateWithoutUserInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceSet?: PracticeSetUpdateOneRequiredWithoutPracticeTasksNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutPracticeTaskNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutPracticeTaskNestedInput
    taskTags?: TaskTagUpdateManyWithoutPracticeTaskNestedInput
  }

  export type PracticeTaskUncheckedUpdateWithoutUserInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutPracticeTaskNestedInput
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutPracticeTaskNestedInput
    taskTags?: TaskTagUncheckedUpdateManyWithoutPracticeTaskNestedInput
  }

  export type PracticeTaskUncheckedUpdateManyWithoutUserInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubmitTaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceSet?: PracticeSetUpdateOneRequiredWithoutUserSubmitTasksNestedInput
    practiceTask?: PracticeTaskUpdateOneRequiredWithoutUserSubmitTasksNestedInput
    userPracticeSet?: UserPracticeSetUpdateOneRequiredWithoutUserSubmitTasksNestedInput
  }

  export type UserSubmitTaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    practiceTaskId?: StringFieldUpdateOperationsInput | string
    userPracticeSetId?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubmitTaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    practiceTaskId?: StringFieldUpdateOperationsInput | string
    userPracticeSetId?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPracticeSetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    practiceSet?: PracticeSetUpdateOneRequiredWithoutUserPracticeSetsNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutUserPracticeSetNestedInput
  }

  export type UserPracticeSetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutUserPracticeSetNestedInput
  }

  export type UserPracticeSetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type UserTaskMetadataUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: BoolFieldUpdateOperationsInput | boolean
    isIgnored?: BoolFieldUpdateOperationsInput | boolean
    submissionCount?: IntFieldUpdateOperationsInput | number
    practiceTask?: PracticeTaskUpdateOneRequiredWithoutUserTaskMetadatasNestedInput
  }

  export type UserTaskMetadataUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceTaskId?: StringFieldUpdateOperationsInput | string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: BoolFieldUpdateOperationsInput | boolean
    isIgnored?: BoolFieldUpdateOperationsInput | boolean
    submissionCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserTaskMetadataUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceTaskId?: StringFieldUpdateOperationsInput | string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: BoolFieldUpdateOperationsInput | boolean
    isIgnored?: BoolFieldUpdateOperationsInput | boolean
    submissionCount?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTagUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PracticeTask?: PracticeTaskUpdateManyWithoutTaskTagsNestedInput
  }

  export type TaskTagUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PracticeTask?: PracticeTaskUncheckedUpdateManyWithoutTaskTagsNestedInput
  }

  export type TaskTagUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionCreateManyPostInput = {
    id?: string
    userId: string
    reactionType: $Enums.PostReaction
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    userId: string
    pictureUrl?: string | null
    text?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    reactionType?: EnumPostReactionFieldUpdateOperationsInput | $Enums.PostReaction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reactionType?: EnumPostReactionFieldUpdateOperationsInput | $Enums.PostReaction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reactionType?: EnumPostReactionFieldUpdateOperationsInput | $Enums.PostReaction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeTaskCreateManyPracticeSetInput = {
    index?: number
    id?: string
    userId: string
    title: string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility: $Enums.Visibility
    completionCount?: number
    status?: $Enums.Status
    taskType: $Enums.TaskType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubmitTaskCreateManyPracticeSetInput = {
    id?: string
    userId: string
    practiceTaskId: string
    userPracticeSetId: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
  }

  export type UserPracticeSetCreateManyPracticeSetInput = {
    id?: string
    userId: string
    status?: $Enums.Status
  }

  export type PracticeTaskUpdateWithoutPracticeSetInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPracticeTasksNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutPracticeTaskNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutPracticeTaskNestedInput
    taskTags?: TaskTagUpdateManyWithoutPracticeTaskNestedInput
  }

  export type PracticeTaskUncheckedUpdateWithoutPracticeSetInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutPracticeTaskNestedInput
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutPracticeTaskNestedInput
    taskTags?: TaskTagUncheckedUpdateManyWithoutPracticeTaskNestedInput
  }

  export type PracticeTaskUncheckedUpdateManyWithoutPracticeSetInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubmitTaskUpdateWithoutPracticeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSubmitTasksNestedInput
    practiceTask?: PracticeTaskUpdateOneRequiredWithoutUserSubmitTasksNestedInput
    userPracticeSet?: UserPracticeSetUpdateOneRequiredWithoutUserSubmitTasksNestedInput
  }

  export type UserSubmitTaskUncheckedUpdateWithoutPracticeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceTaskId?: StringFieldUpdateOperationsInput | string
    userPracticeSetId?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubmitTaskUncheckedUpdateManyWithoutPracticeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceTaskId?: StringFieldUpdateOperationsInput | string
    userPracticeSetId?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPracticeSetUpdateWithoutPracticeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUpdateOneRequiredWithoutUserPracticeSetsNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutUserPracticeSetNestedInput
  }

  export type UserPracticeSetUncheckedUpdateWithoutPracticeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutUserPracticeSetNestedInput
  }

  export type UserPracticeSetUncheckedUpdateManyWithoutPracticeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type UserSubmitTaskCreateManyUserPracticeSetInput = {
    id?: string
    userId: string
    practiceSetId: string
    practiceTaskId: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
  }

  export type UserSubmitTaskUpdateWithoutUserPracticeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSubmitTasksNestedInput
    practiceSet?: PracticeSetUpdateOneRequiredWithoutUserSubmitTasksNestedInput
    practiceTask?: PracticeTaskUpdateOneRequiredWithoutUserSubmitTasksNestedInput
  }

  export type UserSubmitTaskUncheckedUpdateWithoutUserPracticeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    practiceTaskId?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubmitTaskUncheckedUpdateManyWithoutUserPracticeSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    practiceTaskId?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubmitTaskCreateManyPracticeTaskInput = {
    id?: string
    userId: string
    practiceSetId: string
    userPracticeSetId: string
    userResponse: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    submittedAt: Date | string
    updatedAt?: Date | string
  }

  export type UserTaskMetadataCreateManyPracticeTaskInput = {
    id?: string
    userId: string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: boolean
    isIgnored?: boolean
    submissionCount?: number
  }

  export type UserSubmitTaskUpdateWithoutPracticeTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSubmitTasksNestedInput
    practiceSet?: PracticeSetUpdateOneRequiredWithoutUserSubmitTasksNestedInput
    userPracticeSet?: UserPracticeSetUpdateOneRequiredWithoutUserSubmitTasksNestedInput
  }

  export type UserSubmitTaskUncheckedUpdateWithoutPracticeTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    userPracticeSetId?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubmitTaskUncheckedUpdateManyWithoutPracticeTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    userPracticeSetId?: StringFieldUpdateOperationsInput | string
    userResponse?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTaskMetadataUpdateWithoutPracticeTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: BoolFieldUpdateOperationsInput | boolean
    isIgnored?: BoolFieldUpdateOperationsInput | boolean
    submissionCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutUserTaskMetadatasNestedInput
  }

  export type UserTaskMetadataUncheckedUpdateWithoutPracticeTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: BoolFieldUpdateOperationsInput | boolean
    isIgnored?: BoolFieldUpdateOperationsInput | boolean
    submissionCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserTaskMetadataUncheckedUpdateManyWithoutPracticeTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    note?: NullableJsonNullValueInput | InputJsonValue
    isBookmarked?: BoolFieldUpdateOperationsInput | boolean
    isIgnored?: BoolFieldUpdateOperationsInput | boolean
    submissionCount?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTagUpdateWithoutPracticeTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTaskTagNestedInput
  }

  export type TaskTagUncheckedUpdateWithoutPracticeTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TaskTagUncheckedUpdateManyWithoutPracticeTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PracticeTaskUpdateWithoutTaskTagsInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPracticeTasksNestedInput
    practiceSet?: PracticeSetUpdateOneRequiredWithoutPracticeTasksNestedInput
    userSubmitTasks?: UserSubmitTaskUpdateManyWithoutPracticeTaskNestedInput
    userTaskMetadatas?: UserTaskMetadataUpdateManyWithoutPracticeTaskNestedInput
  }

  export type PracticeTaskUncheckedUpdateWithoutTaskTagsInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubmitTasks?: UserSubmitTaskUncheckedUpdateManyWithoutPracticeTaskNestedInput
    userTaskMetadatas?: UserTaskMetadataUncheckedUpdateManyWithoutPracticeTaskNestedInput
  }

  export type PracticeTaskUncheckedUpdateManyWithoutTaskTagsInput = {
    index?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    practiceSetId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableJsonNullValueInput | InputJsonValue
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    completionCount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostCountOutputTypeDefaultArgs instead
     */
    export type PostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PracticeSetCountOutputTypeDefaultArgs instead
     */
    export type PracticeSetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PracticeSetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPracticeSetCountOutputTypeDefaultArgs instead
     */
    export type UserPracticeSetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPracticeSetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PracticeTaskCountOutputTypeDefaultArgs instead
     */
    export type PracticeTaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PracticeTaskCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskTagCountOutputTypeDefaultArgs instead
     */
    export type TaskTagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskTagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserStatusDefaultArgs instead
     */
    export type UserStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserStatusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReactionDefaultArgs instead
     */
    export type ReactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentDefaultArgs instead
     */
    export type CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PracticeSetDefaultArgs instead
     */
    export type PracticeSetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PracticeSetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPracticeSetDefaultArgs instead
     */
    export type UserPracticeSetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPracticeSetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PracticeTaskDefaultArgs instead
     */
    export type PracticeTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PracticeTaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserTaskMetadataDefaultArgs instead
     */
    export type UserTaskMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserTaskMetadataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskTagDefaultArgs instead
     */
    export type TaskTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskTagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserSubmitTaskDefaultArgs instead
     */
    export type UserSubmitTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserSubmitTaskDefaultArgs<ExtArgs>

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