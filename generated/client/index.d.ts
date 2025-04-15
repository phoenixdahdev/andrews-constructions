
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model user_settings
 * 
 */
export type user_settings = $Result.DefaultSelection<Prisma.$user_settingsPayload>
/**
 * Model login_activity
 * 
 */
export type login_activity = $Result.DefaultSelection<Prisma.$login_activityPayload>
/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model cad_drawing
 * 
 */
export type cad_drawing = $Result.DefaultSelection<Prisma.$cad_drawingPayload>
/**
 * Model measurement
 * 
 */
export type measurement = $Result.DefaultSelection<Prisma.$measurementPayload>
/**
 * Model material_needs
 * 
 */
export type material_needs = $Result.DefaultSelection<Prisma.$material_needsPayload>
/**
 * Model material
 * 
 */
export type material = $Result.DefaultSelection<Prisma.$materialPayload>
/**
 * Model material_order
 * 
 */
export type material_order = $Result.DefaultSelection<Prisma.$material_orderPayload>
/**
 * Model testimonial
 * 
 */
export type testimonial = $Result.DefaultSelection<Prisma.$testimonialPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const user_role: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  CONTRACTOR: 'CONTRACTOR'
};

export type user_role = (typeof user_role)[keyof typeof user_role]


export const login_status: {
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

export type login_status = (typeof login_status)[keyof typeof login_status]


export const order_status: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type order_status = (typeof order_status)[keyof typeof order_status]

}

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

export type login_status = $Enums.login_status

export const login_status: typeof $Enums.login_status

export type order_status = $Enums.order_status

export const order_status: typeof $Enums.order_status

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_settings`: Exposes CRUD operations for the **user_settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_settings
    * const user_settings = await prisma.user_settings.findMany()
    * ```
    */
  get user_settings(): Prisma.user_settingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.login_activity`: Exposes CRUD operations for the **login_activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Login_activities
    * const login_activities = await prisma.login_activity.findMany()
    * ```
    */
  get login_activity(): Prisma.login_activityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cad_drawing`: Exposes CRUD operations for the **cad_drawing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cad_drawings
    * const cad_drawings = await prisma.cad_drawing.findMany()
    * ```
    */
  get cad_drawing(): Prisma.cad_drawingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.measurement`: Exposes CRUD operations for the **measurement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Measurements
    * const measurements = await prisma.measurement.findMany()
    * ```
    */
  get measurement(): Prisma.measurementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material_needs`: Exposes CRUD operations for the **material_needs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Material_needs
    * const material_needs = await prisma.material_needs.findMany()
    * ```
    */
  get material_needs(): Prisma.material_needsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.materialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material_order`: Exposes CRUD operations for the **material_order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Material_orders
    * const material_orders = await prisma.material_order.findMany()
    * ```
    */
  get material_order(): Prisma.material_orderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testimonial`: Exposes CRUD operations for the **testimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonial.findMany()
    * ```
    */
  get testimonial(): Prisma.testimonialDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    user: 'user',
    user_settings: 'user_settings',
    login_activity: 'login_activity',
    project: 'project',
    cad_drawing: 'cad_drawing',
    measurement: 'measurement',
    material_needs: 'material_needs',
    material: 'material',
    material_order: 'material_order',
    testimonial: 'testimonial'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "user_settings" | "login_activity" | "project" | "cad_drawing" | "measurement" | "material_needs" | "material" | "material_order" | "testimonial"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      user_settings: {
        payload: Prisma.$user_settingsPayload<ExtArgs>
        fields: Prisma.user_settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_settingsPayload>
          }
          findFirst: {
            args: Prisma.user_settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_settingsPayload>
          }
          findMany: {
            args: Prisma.user_settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_settingsPayload>[]
          }
          create: {
            args: Prisma.user_settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_settingsPayload>
          }
          createMany: {
            args: Prisma.user_settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_settingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_settingsPayload>[]
          }
          delete: {
            args: Prisma.user_settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_settingsPayload>
          }
          update: {
            args: Prisma.user_settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_settingsPayload>
          }
          deleteMany: {
            args: Prisma.user_settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_settingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_settingsPayload>[]
          }
          upsert: {
            args: Prisma.user_settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_settingsPayload>
          }
          aggregate: {
            args: Prisma.User_settingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_settings>
          }
          groupBy: {
            args: Prisma.user_settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_settingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_settingsCountArgs<ExtArgs>
            result: $Utils.Optional<User_settingsCountAggregateOutputType> | number
          }
        }
      }
      login_activity: {
        payload: Prisma.$login_activityPayload<ExtArgs>
        fields: Prisma.login_activityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.login_activityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_activityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.login_activityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_activityPayload>
          }
          findFirst: {
            args: Prisma.login_activityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_activityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.login_activityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_activityPayload>
          }
          findMany: {
            args: Prisma.login_activityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_activityPayload>[]
          }
          create: {
            args: Prisma.login_activityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_activityPayload>
          }
          createMany: {
            args: Prisma.login_activityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.login_activityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_activityPayload>[]
          }
          delete: {
            args: Prisma.login_activityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_activityPayload>
          }
          update: {
            args: Prisma.login_activityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_activityPayload>
          }
          deleteMany: {
            args: Prisma.login_activityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.login_activityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.login_activityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_activityPayload>[]
          }
          upsert: {
            args: Prisma.login_activityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$login_activityPayload>
          }
          aggregate: {
            args: Prisma.Login_activityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogin_activity>
          }
          groupBy: {
            args: Prisma.login_activityGroupByArgs<ExtArgs>
            result: $Utils.Optional<Login_activityGroupByOutputType>[]
          }
          count: {
            args: Prisma.login_activityCountArgs<ExtArgs>
            result: $Utils.Optional<Login_activityCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      cad_drawing: {
        payload: Prisma.$cad_drawingPayload<ExtArgs>
        fields: Prisma.cad_drawingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cad_drawingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cad_drawingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cad_drawingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cad_drawingPayload>
          }
          findFirst: {
            args: Prisma.cad_drawingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cad_drawingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cad_drawingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cad_drawingPayload>
          }
          findMany: {
            args: Prisma.cad_drawingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cad_drawingPayload>[]
          }
          create: {
            args: Prisma.cad_drawingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cad_drawingPayload>
          }
          createMany: {
            args: Prisma.cad_drawingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cad_drawingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cad_drawingPayload>[]
          }
          delete: {
            args: Prisma.cad_drawingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cad_drawingPayload>
          }
          update: {
            args: Prisma.cad_drawingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cad_drawingPayload>
          }
          deleteMany: {
            args: Prisma.cad_drawingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cad_drawingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cad_drawingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cad_drawingPayload>[]
          }
          upsert: {
            args: Prisma.cad_drawingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cad_drawingPayload>
          }
          aggregate: {
            args: Prisma.Cad_drawingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCad_drawing>
          }
          groupBy: {
            args: Prisma.cad_drawingGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cad_drawingGroupByOutputType>[]
          }
          count: {
            args: Prisma.cad_drawingCountArgs<ExtArgs>
            result: $Utils.Optional<Cad_drawingCountAggregateOutputType> | number
          }
        }
      }
      measurement: {
        payload: Prisma.$measurementPayload<ExtArgs>
        fields: Prisma.measurementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.measurementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.measurementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>
          }
          findFirst: {
            args: Prisma.measurementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.measurementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>
          }
          findMany: {
            args: Prisma.measurementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>[]
          }
          create: {
            args: Prisma.measurementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>
          }
          createMany: {
            args: Prisma.measurementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.measurementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>[]
          }
          delete: {
            args: Prisma.measurementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>
          }
          update: {
            args: Prisma.measurementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>
          }
          deleteMany: {
            args: Prisma.measurementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.measurementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.measurementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>[]
          }
          upsert: {
            args: Prisma.measurementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>
          }
          aggregate: {
            args: Prisma.MeasurementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeasurement>
          }
          groupBy: {
            args: Prisma.measurementGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeasurementGroupByOutputType>[]
          }
          count: {
            args: Prisma.measurementCountArgs<ExtArgs>
            result: $Utils.Optional<MeasurementCountAggregateOutputType> | number
          }
        }
      }
      material_needs: {
        payload: Prisma.$material_needsPayload<ExtArgs>
        fields: Prisma.material_needsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.material_needsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_needsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.material_needsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_needsPayload>
          }
          findFirst: {
            args: Prisma.material_needsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_needsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.material_needsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_needsPayload>
          }
          findMany: {
            args: Prisma.material_needsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_needsPayload>[]
          }
          create: {
            args: Prisma.material_needsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_needsPayload>
          }
          createMany: {
            args: Prisma.material_needsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.material_needsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_needsPayload>[]
          }
          delete: {
            args: Prisma.material_needsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_needsPayload>
          }
          update: {
            args: Prisma.material_needsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_needsPayload>
          }
          deleteMany: {
            args: Prisma.material_needsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.material_needsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.material_needsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_needsPayload>[]
          }
          upsert: {
            args: Prisma.material_needsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_needsPayload>
          }
          aggregate: {
            args: Prisma.Material_needsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial_needs>
          }
          groupBy: {
            args: Prisma.material_needsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Material_needsGroupByOutputType>[]
          }
          count: {
            args: Prisma.material_needsCountArgs<ExtArgs>
            result: $Utils.Optional<Material_needsCountAggregateOutputType> | number
          }
        }
      }
      material: {
        payload: Prisma.$materialPayload<ExtArgs>
        fields: Prisma.materialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.materialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.materialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialPayload>
          }
          findFirst: {
            args: Prisma.materialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.materialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialPayload>
          }
          findMany: {
            args: Prisma.materialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialPayload>[]
          }
          create: {
            args: Prisma.materialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialPayload>
          }
          createMany: {
            args: Prisma.materialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.materialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialPayload>[]
          }
          delete: {
            args: Prisma.materialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialPayload>
          }
          update: {
            args: Prisma.materialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialPayload>
          }
          deleteMany: {
            args: Prisma.materialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.materialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.materialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialPayload>[]
          }
          upsert: {
            args: Prisma.materialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.materialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.materialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      material_order: {
        payload: Prisma.$material_orderPayload<ExtArgs>
        fields: Prisma.material_orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.material_orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.material_orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_orderPayload>
          }
          findFirst: {
            args: Prisma.material_orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.material_orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_orderPayload>
          }
          findMany: {
            args: Prisma.material_orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_orderPayload>[]
          }
          create: {
            args: Prisma.material_orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_orderPayload>
          }
          createMany: {
            args: Prisma.material_orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.material_orderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_orderPayload>[]
          }
          delete: {
            args: Prisma.material_orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_orderPayload>
          }
          update: {
            args: Prisma.material_orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_orderPayload>
          }
          deleteMany: {
            args: Prisma.material_orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.material_orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.material_orderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_orderPayload>[]
          }
          upsert: {
            args: Prisma.material_orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_orderPayload>
          }
          aggregate: {
            args: Prisma.Material_orderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial_order>
          }
          groupBy: {
            args: Prisma.material_orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<Material_orderGroupByOutputType>[]
          }
          count: {
            args: Prisma.material_orderCountArgs<ExtArgs>
            result: $Utils.Optional<Material_orderCountAggregateOutputType> | number
          }
        }
      }
      testimonial: {
        payload: Prisma.$testimonialPayload<ExtArgs>
        fields: Prisma.testimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testimonialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testimonialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>
          }
          findFirst: {
            args: Prisma.testimonialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testimonialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>
          }
          findMany: {
            args: Prisma.testimonialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>[]
          }
          create: {
            args: Prisma.testimonialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>
          }
          createMany: {
            args: Prisma.testimonialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.testimonialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>[]
          }
          delete: {
            args: Prisma.testimonialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>
          }
          update: {
            args: Prisma.testimonialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>
          }
          deleteMany: {
            args: Prisma.testimonialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.testimonialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.testimonialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>[]
          }
          upsert: {
            args: Prisma.testimonialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialPayload>
          }
          aggregate: {
            args: Prisma.TestimonialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonial>
          }
          groupBy: {
            args: Prisma.testimonialGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.testimonialCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    user_settings?: user_settingsOmit
    login_activity?: login_activityOmit
    project?: projectOmit
    cad_drawing?: cad_drawingOmit
    measurement?: measurementOmit
    material_needs?: material_needsOmit
    material?: materialOmit
    material_order?: material_orderOmit
    testimonial?: testimonialOmit
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
    login_activities: number
    projects: number
    cad_drawings: number
    material_orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    login_activities?: boolean | UserCountOutputTypeCountLogin_activitiesArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    cad_drawings?: boolean | UserCountOutputTypeCountCad_drawingsArgs
    material_orders?: boolean | UserCountOutputTypeCountMaterial_ordersArgs
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
  export type UserCountOutputTypeCountLogin_activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: login_activityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCad_drawingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cad_drawingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMaterial_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: material_orderWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    cad_drawings: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cad_drawings?: boolean | ProjectCountOutputTypeCountCad_drawingsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCad_drawingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cad_drawingWhereInput
  }


  /**
   * Count Type Cad_drawingCountOutputType
   */

  export type Cad_drawingCountOutputType = {
    measurements: number
    materials: number
  }

  export type Cad_drawingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    measurements?: boolean | Cad_drawingCountOutputTypeCountMeasurementsArgs
    materials?: boolean | Cad_drawingCountOutputTypeCountMaterialsArgs
  }

  // Custom InputTypes
  /**
   * Cad_drawingCountOutputType without action
   */
  export type Cad_drawingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cad_drawingCountOutputType
     */
    select?: Cad_drawingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Cad_drawingCountOutputType without action
   */
  export type Cad_drawingCountOutputTypeCountMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: measurementWhereInput
  }

  /**
   * Cad_drawingCountOutputType without action
   */
  export type Cad_drawingCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: material_needsWhereInput
  }


  /**
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    material_needs: number
    material_orders: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material_needs?: boolean | MaterialCountOutputTypeCountMaterial_needsArgs
    material_orders?: boolean | MaterialCountOutputTypeCountMaterial_ordersArgs
  }

  // Custom InputTypes
  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountMaterial_needsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: material_needsWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountMaterial_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: material_orderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    provider: string | null
    date_joined: Date | null
    time: string | null
    region: string | null
    country: string | null
    last_seen: Date | null
    two_step_enabled: boolean | null
    profile_image: string | null
    role: $Enums.user_role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    provider: string | null
    date_joined: Date | null
    time: string | null
    region: string | null
    country: string | null
    last_seen: Date | null
    two_step_enabled: boolean | null
    profile_image: string | null
    role: $Enums.user_role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    provider: number
    date_joined: number
    time: number
    region: number
    country: number
    last_seen: number
    two_step_enabled: number
    profile_image: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    provider?: true
    date_joined?: true
    time?: true
    region?: true
    country?: true
    last_seen?: true
    two_step_enabled?: true
    profile_image?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    provider?: true
    date_joined?: true
    time?: true
    region?: true
    country?: true
    last_seen?: true
    two_step_enabled?: true
    profile_image?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    provider?: true
    date_joined?: true
    time?: true
    region?: true
    country?: true
    last_seen?: true
    two_step_enabled?: true
    profile_image?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string | null
    provider: string | null
    date_joined: Date
    time: string | null
    region: string | null
    country: string | null
    last_seen: Date | null
    two_step_enabled: boolean
    profile_image: string | null
    role: $Enums.user_role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    provider?: boolean
    date_joined?: boolean
    time?: boolean
    region?: boolean
    country?: boolean
    last_seen?: boolean
    two_step_enabled?: boolean
    profile_image?: boolean
    role?: boolean
    login_activities?: boolean | user$login_activitiesArgs<ExtArgs>
    projects?: boolean | user$projectsArgs<ExtArgs>
    cad_drawings?: boolean | user$cad_drawingsArgs<ExtArgs>
    material_orders?: boolean | user$material_ordersArgs<ExtArgs>
    settings?: boolean | user$settingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    provider?: boolean
    date_joined?: boolean
    time?: boolean
    region?: boolean
    country?: boolean
    last_seen?: boolean
    two_step_enabled?: boolean
    profile_image?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    provider?: boolean
    date_joined?: boolean
    time?: boolean
    region?: boolean
    country?: boolean
    last_seen?: boolean
    two_step_enabled?: boolean
    profile_image?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    provider?: boolean
    date_joined?: boolean
    time?: boolean
    region?: boolean
    country?: boolean
    last_seen?: boolean
    two_step_enabled?: boolean
    profile_image?: boolean
    role?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "provider" | "date_joined" | "time" | "region" | "country" | "last_seen" | "two_step_enabled" | "profile_image" | "role", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    login_activities?: boolean | user$login_activitiesArgs<ExtArgs>
    projects?: boolean | user$projectsArgs<ExtArgs>
    cad_drawings?: boolean | user$cad_drawingsArgs<ExtArgs>
    material_orders?: boolean | user$material_ordersArgs<ExtArgs>
    settings?: boolean | user$settingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      login_activities: Prisma.$login_activityPayload<ExtArgs>[]
      projects: Prisma.$projectPayload<ExtArgs>[]
      cad_drawings: Prisma.$cad_drawingPayload<ExtArgs>[]
      material_orders: Prisma.$material_orderPayload<ExtArgs>[]
      settings: Prisma.$user_settingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      provider: string | null
      date_joined: Date
      time: string | null
      region: string | null
      country: string | null
      last_seen: Date | null
      two_step_enabled: boolean
      profile_image: string | null
      role: $Enums.user_role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    login_activities<T extends user$login_activitiesArgs<ExtArgs> = {}>(args?: Subset<T, user$login_activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$login_activityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends user$projectsArgs<ExtArgs> = {}>(args?: Subset<T, user$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cad_drawings<T extends user$cad_drawingsArgs<ExtArgs> = {}>(args?: Subset<T, user$cad_drawingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    material_orders<T extends user$material_ordersArgs<ExtArgs> = {}>(args?: Subset<T, user$material_ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends user$settingsArgs<ExtArgs> = {}>(args?: Subset<T, user$settingsArgs<ExtArgs>>): Prisma__user_settingsClient<$Result.GetResult<Prisma.$user_settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly provider: FieldRef<"user", 'String'>
    readonly date_joined: FieldRef<"user", 'DateTime'>
    readonly time: FieldRef<"user", 'String'>
    readonly region: FieldRef<"user", 'String'>
    readonly country: FieldRef<"user", 'String'>
    readonly last_seen: FieldRef<"user", 'DateTime'>
    readonly two_step_enabled: FieldRef<"user", 'Boolean'>
    readonly profile_image: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'user_role'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.login_activities
   */
  export type user$login_activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_activity
     */
    select?: login_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_activity
     */
    omit?: login_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_activityInclude<ExtArgs> | null
    where?: login_activityWhereInput
    orderBy?: login_activityOrderByWithRelationInput | login_activityOrderByWithRelationInput[]
    cursor?: login_activityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Login_activityScalarFieldEnum | Login_activityScalarFieldEnum[]
  }

  /**
   * user.projects
   */
  export type user$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    where?: projectWhereInput
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    cursor?: projectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * user.cad_drawings
   */
  export type user$cad_drawingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cad_drawing
     */
    select?: cad_drawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cad_drawing
     */
    omit?: cad_drawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cad_drawingInclude<ExtArgs> | null
    where?: cad_drawingWhereInput
    orderBy?: cad_drawingOrderByWithRelationInput | cad_drawingOrderByWithRelationInput[]
    cursor?: cad_drawingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cad_drawingScalarFieldEnum | Cad_drawingScalarFieldEnum[]
  }

  /**
   * user.material_orders
   */
  export type user$material_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_order
     */
    select?: material_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_order
     */
    omit?: material_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_orderInclude<ExtArgs> | null
    where?: material_orderWhereInput
    orderBy?: material_orderOrderByWithRelationInput | material_orderOrderByWithRelationInput[]
    cursor?: material_orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Material_orderScalarFieldEnum | Material_orderScalarFieldEnum[]
  }

  /**
   * user.settings
   */
  export type user$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_settings
     */
    select?: user_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_settings
     */
    omit?: user_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_settingsInclude<ExtArgs> | null
    where?: user_settingsWhereInput
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model user_settings
   */

  export type AggregateUser_settings = {
    _count: User_settingsCountAggregateOutputType | null
    _min: User_settingsMinAggregateOutputType | null
    _max: User_settingsMaxAggregateOutputType | null
  }

  export type User_settingsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    enable_notifications: boolean | null
    notify_material_changes: boolean | null
    notify_system_updates: boolean | null
    theme: string | null
    language: string | null
  }

  export type User_settingsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    enable_notifications: boolean | null
    notify_material_changes: boolean | null
    notify_system_updates: boolean | null
    theme: string | null
    language: string | null
  }

  export type User_settingsCountAggregateOutputType = {
    id: number
    user_id: number
    enable_notifications: number
    notify_material_changes: number
    notify_system_updates: number
    theme: number
    language: number
    _all: number
  }


  export type User_settingsMinAggregateInputType = {
    id?: true
    user_id?: true
    enable_notifications?: true
    notify_material_changes?: true
    notify_system_updates?: true
    theme?: true
    language?: true
  }

  export type User_settingsMaxAggregateInputType = {
    id?: true
    user_id?: true
    enable_notifications?: true
    notify_material_changes?: true
    notify_system_updates?: true
    theme?: true
    language?: true
  }

  export type User_settingsCountAggregateInputType = {
    id?: true
    user_id?: true
    enable_notifications?: true
    notify_material_changes?: true
    notify_system_updates?: true
    theme?: true
    language?: true
    _all?: true
  }

  export type User_settingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_settings to aggregate.
     */
    where?: user_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_settings to fetch.
     */
    orderBy?: user_settingsOrderByWithRelationInput | user_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_settings
    **/
    _count?: true | User_settingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_settingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_settingsMaxAggregateInputType
  }

  export type GetUser_settingsAggregateType<T extends User_settingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_settings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_settings[P]>
      : GetScalarType<T[P], AggregateUser_settings[P]>
  }




  export type user_settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_settingsWhereInput
    orderBy?: user_settingsOrderByWithAggregationInput | user_settingsOrderByWithAggregationInput[]
    by: User_settingsScalarFieldEnum[] | User_settingsScalarFieldEnum
    having?: user_settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_settingsCountAggregateInputType | true
    _min?: User_settingsMinAggregateInputType
    _max?: User_settingsMaxAggregateInputType
  }

  export type User_settingsGroupByOutputType = {
    id: string
    user_id: string
    enable_notifications: boolean
    notify_material_changes: boolean
    notify_system_updates: boolean
    theme: string | null
    language: string | null
    _count: User_settingsCountAggregateOutputType | null
    _min: User_settingsMinAggregateOutputType | null
    _max: User_settingsMaxAggregateOutputType | null
  }

  type GetUser_settingsGroupByPayload<T extends user_settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_settingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_settingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_settingsGroupByOutputType[P]>
            : GetScalarType<T[P], User_settingsGroupByOutputType[P]>
        }
      >
    >


  export type user_settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    enable_notifications?: boolean
    notify_material_changes?: boolean
    notify_system_updates?: boolean
    theme?: boolean
    language?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_settings"]>

  export type user_settingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    enable_notifications?: boolean
    notify_material_changes?: boolean
    notify_system_updates?: boolean
    theme?: boolean
    language?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_settings"]>

  export type user_settingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    enable_notifications?: boolean
    notify_material_changes?: boolean
    notify_system_updates?: boolean
    theme?: boolean
    language?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_settings"]>

  export type user_settingsSelectScalar = {
    id?: boolean
    user_id?: boolean
    enable_notifications?: boolean
    notify_material_changes?: boolean
    notify_system_updates?: boolean
    theme?: boolean
    language?: boolean
  }

  export type user_settingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "enable_notifications" | "notify_material_changes" | "notify_system_updates" | "theme" | "language", ExtArgs["result"]["user_settings"]>
  export type user_settingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_settingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_settingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $user_settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_settings"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      enable_notifications: boolean
      notify_material_changes: boolean
      notify_system_updates: boolean
      theme: string | null
      language: string | null
    }, ExtArgs["result"]["user_settings"]>
    composites: {}
  }

  type user_settingsGetPayload<S extends boolean | null | undefined | user_settingsDefaultArgs> = $Result.GetResult<Prisma.$user_settingsPayload, S>

  type user_settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_settingsCountAggregateInputType | true
    }

  export interface user_settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_settings'], meta: { name: 'user_settings' } }
    /**
     * Find zero or one User_settings that matches the filter.
     * @param {user_settingsFindUniqueArgs} args - Arguments to find a User_settings
     * @example
     * // Get one User_settings
     * const user_settings = await prisma.user_settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_settingsFindUniqueArgs>(args: SelectSubset<T, user_settingsFindUniqueArgs<ExtArgs>>): Prisma__user_settingsClient<$Result.GetResult<Prisma.$user_settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_settingsFindUniqueOrThrowArgs} args - Arguments to find a User_settings
     * @example
     * // Get one User_settings
     * const user_settings = await prisma.user_settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_settingsClient<$Result.GetResult<Prisma.$user_settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_settingsFindFirstArgs} args - Arguments to find a User_settings
     * @example
     * // Get one User_settings
     * const user_settings = await prisma.user_settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_settingsFindFirstArgs>(args?: SelectSubset<T, user_settingsFindFirstArgs<ExtArgs>>): Prisma__user_settingsClient<$Result.GetResult<Prisma.$user_settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_settingsFindFirstOrThrowArgs} args - Arguments to find a User_settings
     * @example
     * // Get one User_settings
     * const user_settings = await prisma.user_settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_settingsClient<$Result.GetResult<Prisma.$user_settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_settings
     * const user_settings = await prisma.user_settings.findMany()
     * 
     * // Get first 10 User_settings
     * const user_settings = await prisma.user_settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_settingsWithIdOnly = await prisma.user_settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_settingsFindManyArgs>(args?: SelectSubset<T, user_settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_settings.
     * @param {user_settingsCreateArgs} args - Arguments to create a User_settings.
     * @example
     * // Create one User_settings
     * const User_settings = await prisma.user_settings.create({
     *   data: {
     *     // ... data to create a User_settings
     *   }
     * })
     * 
     */
    create<T extends user_settingsCreateArgs>(args: SelectSubset<T, user_settingsCreateArgs<ExtArgs>>): Prisma__user_settingsClient<$Result.GetResult<Prisma.$user_settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_settings.
     * @param {user_settingsCreateManyArgs} args - Arguments to create many User_settings.
     * @example
     * // Create many User_settings
     * const user_settings = await prisma.user_settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_settingsCreateManyArgs>(args?: SelectSubset<T, user_settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_settings and returns the data saved in the database.
     * @param {user_settingsCreateManyAndReturnArgs} args - Arguments to create many User_settings.
     * @example
     * // Create many User_settings
     * const user_settings = await prisma.user_settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_settings and only return the `id`
     * const user_settingsWithIdOnly = await prisma.user_settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_settingsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_settingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_settingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_settings.
     * @param {user_settingsDeleteArgs} args - Arguments to delete one User_settings.
     * @example
     * // Delete one User_settings
     * const User_settings = await prisma.user_settings.delete({
     *   where: {
     *     // ... filter to delete one User_settings
     *   }
     * })
     * 
     */
    delete<T extends user_settingsDeleteArgs>(args: SelectSubset<T, user_settingsDeleteArgs<ExtArgs>>): Prisma__user_settingsClient<$Result.GetResult<Prisma.$user_settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_settings.
     * @param {user_settingsUpdateArgs} args - Arguments to update one User_settings.
     * @example
     * // Update one User_settings
     * const user_settings = await prisma.user_settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_settingsUpdateArgs>(args: SelectSubset<T, user_settingsUpdateArgs<ExtArgs>>): Prisma__user_settingsClient<$Result.GetResult<Prisma.$user_settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_settings.
     * @param {user_settingsDeleteManyArgs} args - Arguments to filter User_settings to delete.
     * @example
     * // Delete a few User_settings
     * const { count } = await prisma.user_settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_settingsDeleteManyArgs>(args?: SelectSubset<T, user_settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_settings
     * const user_settings = await prisma.user_settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_settingsUpdateManyArgs>(args: SelectSubset<T, user_settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_settings and returns the data updated in the database.
     * @param {user_settingsUpdateManyAndReturnArgs} args - Arguments to update many User_settings.
     * @example
     * // Update many User_settings
     * const user_settings = await prisma.user_settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_settings and only return the `id`
     * const user_settingsWithIdOnly = await prisma.user_settings.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_settingsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_settingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_settingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_settings.
     * @param {user_settingsUpsertArgs} args - Arguments to update or create a User_settings.
     * @example
     * // Update or create a User_settings
     * const user_settings = await prisma.user_settings.upsert({
     *   create: {
     *     // ... data to create a User_settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_settings we want to update
     *   }
     * })
     */
    upsert<T extends user_settingsUpsertArgs>(args: SelectSubset<T, user_settingsUpsertArgs<ExtArgs>>): Prisma__user_settingsClient<$Result.GetResult<Prisma.$user_settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_settingsCountArgs} args - Arguments to filter User_settings to count.
     * @example
     * // Count the number of User_settings
     * const count = await prisma.user_settings.count({
     *   where: {
     *     // ... the filter for the User_settings we want to count
     *   }
     * })
    **/
    count<T extends user_settingsCountArgs>(
      args?: Subset<T, user_settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_settingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_settingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_settingsAggregateArgs>(args: Subset<T, User_settingsAggregateArgs>): Prisma.PrismaPromise<GetUser_settingsAggregateType<T>>

    /**
     * Group by User_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_settingsGroupByArgs} args - Group by arguments.
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
      T extends user_settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_settingsGroupByArgs['orderBy'] }
        : { orderBy?: user_settingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_settingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_settings model
   */
  readonly fields: user_settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_settings model
   */
  interface user_settingsFieldRefs {
    readonly id: FieldRef<"user_settings", 'String'>
    readonly user_id: FieldRef<"user_settings", 'String'>
    readonly enable_notifications: FieldRef<"user_settings", 'Boolean'>
    readonly notify_material_changes: FieldRef<"user_settings", 'Boolean'>
    readonly notify_system_updates: FieldRef<"user_settings", 'Boolean'>
    readonly theme: FieldRef<"user_settings", 'String'>
    readonly language: FieldRef<"user_settings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_settings findUnique
   */
  export type user_settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_settings
     */
    select?: user_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_settings
     */
    omit?: user_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_settingsInclude<ExtArgs> | null
    /**
     * Filter, which user_settings to fetch.
     */
    where: user_settingsWhereUniqueInput
  }

  /**
   * user_settings findUniqueOrThrow
   */
  export type user_settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_settings
     */
    select?: user_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_settings
     */
    omit?: user_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_settingsInclude<ExtArgs> | null
    /**
     * Filter, which user_settings to fetch.
     */
    where: user_settingsWhereUniqueInput
  }

  /**
   * user_settings findFirst
   */
  export type user_settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_settings
     */
    select?: user_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_settings
     */
    omit?: user_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_settingsInclude<ExtArgs> | null
    /**
     * Filter, which user_settings to fetch.
     */
    where?: user_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_settings to fetch.
     */
    orderBy?: user_settingsOrderByWithRelationInput | user_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_settings.
     */
    cursor?: user_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_settings.
     */
    distinct?: User_settingsScalarFieldEnum | User_settingsScalarFieldEnum[]
  }

  /**
   * user_settings findFirstOrThrow
   */
  export type user_settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_settings
     */
    select?: user_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_settings
     */
    omit?: user_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_settingsInclude<ExtArgs> | null
    /**
     * Filter, which user_settings to fetch.
     */
    where?: user_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_settings to fetch.
     */
    orderBy?: user_settingsOrderByWithRelationInput | user_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_settings.
     */
    cursor?: user_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_settings.
     */
    distinct?: User_settingsScalarFieldEnum | User_settingsScalarFieldEnum[]
  }

  /**
   * user_settings findMany
   */
  export type user_settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_settings
     */
    select?: user_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_settings
     */
    omit?: user_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_settingsInclude<ExtArgs> | null
    /**
     * Filter, which user_settings to fetch.
     */
    where?: user_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_settings to fetch.
     */
    orderBy?: user_settingsOrderByWithRelationInput | user_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_settings.
     */
    cursor?: user_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_settings.
     */
    skip?: number
    distinct?: User_settingsScalarFieldEnum | User_settingsScalarFieldEnum[]
  }

  /**
   * user_settings create
   */
  export type user_settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_settings
     */
    select?: user_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_settings
     */
    omit?: user_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_settingsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_settings.
     */
    data: XOR<user_settingsCreateInput, user_settingsUncheckedCreateInput>
  }

  /**
   * user_settings createMany
   */
  export type user_settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_settings.
     */
    data: user_settingsCreateManyInput | user_settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_settings createManyAndReturn
   */
  export type user_settingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_settings
     */
    select?: user_settingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_settings
     */
    omit?: user_settingsOmit<ExtArgs> | null
    /**
     * The data used to create many user_settings.
     */
    data: user_settingsCreateManyInput | user_settingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_settingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_settings update
   */
  export type user_settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_settings
     */
    select?: user_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_settings
     */
    omit?: user_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_settingsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_settings.
     */
    data: XOR<user_settingsUpdateInput, user_settingsUncheckedUpdateInput>
    /**
     * Choose, which user_settings to update.
     */
    where: user_settingsWhereUniqueInput
  }

  /**
   * user_settings updateMany
   */
  export type user_settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_settings.
     */
    data: XOR<user_settingsUpdateManyMutationInput, user_settingsUncheckedUpdateManyInput>
    /**
     * Filter which user_settings to update
     */
    where?: user_settingsWhereInput
    /**
     * Limit how many user_settings to update.
     */
    limit?: number
  }

  /**
   * user_settings updateManyAndReturn
   */
  export type user_settingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_settings
     */
    select?: user_settingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_settings
     */
    omit?: user_settingsOmit<ExtArgs> | null
    /**
     * The data used to update user_settings.
     */
    data: XOR<user_settingsUpdateManyMutationInput, user_settingsUncheckedUpdateManyInput>
    /**
     * Filter which user_settings to update
     */
    where?: user_settingsWhereInput
    /**
     * Limit how many user_settings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_settingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_settings upsert
   */
  export type user_settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_settings
     */
    select?: user_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_settings
     */
    omit?: user_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_settingsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_settings to update in case it exists.
     */
    where: user_settingsWhereUniqueInput
    /**
     * In case the user_settings found by the `where` argument doesn't exist, create a new user_settings with this data.
     */
    create: XOR<user_settingsCreateInput, user_settingsUncheckedCreateInput>
    /**
     * In case the user_settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_settingsUpdateInput, user_settingsUncheckedUpdateInput>
  }

  /**
   * user_settings delete
   */
  export type user_settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_settings
     */
    select?: user_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_settings
     */
    omit?: user_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_settingsInclude<ExtArgs> | null
    /**
     * Filter which user_settings to delete.
     */
    where: user_settingsWhereUniqueInput
  }

  /**
   * user_settings deleteMany
   */
  export type user_settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_settings to delete
     */
    where?: user_settingsWhereInput
    /**
     * Limit how many user_settings to delete.
     */
    limit?: number
  }

  /**
   * user_settings without action
   */
  export type user_settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_settings
     */
    select?: user_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_settings
     */
    omit?: user_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_settingsInclude<ExtArgs> | null
  }


  /**
   * Model login_activity
   */

  export type AggregateLogin_activity = {
    _count: Login_activityCountAggregateOutputType | null
    _min: Login_activityMinAggregateOutputType | null
    _max: Login_activityMaxAggregateOutputType | null
  }

  export type Login_activityMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    login_time: Date | null
    status: $Enums.login_status | null
    ip_address: string | null
    device_info: string | null
    location: string | null
  }

  export type Login_activityMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    login_time: Date | null
    status: $Enums.login_status | null
    ip_address: string | null
    device_info: string | null
    location: string | null
  }

  export type Login_activityCountAggregateOutputType = {
    id: number
    user_id: number
    login_time: number
    status: number
    ip_address: number
    device_info: number
    location: number
    _all: number
  }


  export type Login_activityMinAggregateInputType = {
    id?: true
    user_id?: true
    login_time?: true
    status?: true
    ip_address?: true
    device_info?: true
    location?: true
  }

  export type Login_activityMaxAggregateInputType = {
    id?: true
    user_id?: true
    login_time?: true
    status?: true
    ip_address?: true
    device_info?: true
    location?: true
  }

  export type Login_activityCountAggregateInputType = {
    id?: true
    user_id?: true
    login_time?: true
    status?: true
    ip_address?: true
    device_info?: true
    location?: true
    _all?: true
  }

  export type Login_activityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which login_activity to aggregate.
     */
    where?: login_activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of login_activities to fetch.
     */
    orderBy?: login_activityOrderByWithRelationInput | login_activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: login_activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` login_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` login_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned login_activities
    **/
    _count?: true | Login_activityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Login_activityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Login_activityMaxAggregateInputType
  }

  export type GetLogin_activityAggregateType<T extends Login_activityAggregateArgs> = {
        [P in keyof T & keyof AggregateLogin_activity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogin_activity[P]>
      : GetScalarType<T[P], AggregateLogin_activity[P]>
  }




  export type login_activityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: login_activityWhereInput
    orderBy?: login_activityOrderByWithAggregationInput | login_activityOrderByWithAggregationInput[]
    by: Login_activityScalarFieldEnum[] | Login_activityScalarFieldEnum
    having?: login_activityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Login_activityCountAggregateInputType | true
    _min?: Login_activityMinAggregateInputType
    _max?: Login_activityMaxAggregateInputType
  }

  export type Login_activityGroupByOutputType = {
    id: string
    user_id: string
    login_time: Date
    status: $Enums.login_status
    ip_address: string | null
    device_info: string | null
    location: string | null
    _count: Login_activityCountAggregateOutputType | null
    _min: Login_activityMinAggregateOutputType | null
    _max: Login_activityMaxAggregateOutputType | null
  }

  type GetLogin_activityGroupByPayload<T extends login_activityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Login_activityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Login_activityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Login_activityGroupByOutputType[P]>
            : GetScalarType<T[P], Login_activityGroupByOutputType[P]>
        }
      >
    >


  export type login_activitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    login_time?: boolean
    status?: boolean
    ip_address?: boolean
    device_info?: boolean
    location?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["login_activity"]>

  export type login_activitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    login_time?: boolean
    status?: boolean
    ip_address?: boolean
    device_info?: boolean
    location?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["login_activity"]>

  export type login_activitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    login_time?: boolean
    status?: boolean
    ip_address?: boolean
    device_info?: boolean
    location?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["login_activity"]>

  export type login_activitySelectScalar = {
    id?: boolean
    user_id?: boolean
    login_time?: boolean
    status?: boolean
    ip_address?: boolean
    device_info?: boolean
    location?: boolean
  }

  export type login_activityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "login_time" | "status" | "ip_address" | "device_info" | "location", ExtArgs["result"]["login_activity"]>
  export type login_activityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type login_activityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type login_activityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $login_activityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "login_activity"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      login_time: Date
      status: $Enums.login_status
      ip_address: string | null
      device_info: string | null
      location: string | null
    }, ExtArgs["result"]["login_activity"]>
    composites: {}
  }

  type login_activityGetPayload<S extends boolean | null | undefined | login_activityDefaultArgs> = $Result.GetResult<Prisma.$login_activityPayload, S>

  type login_activityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<login_activityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Login_activityCountAggregateInputType | true
    }

  export interface login_activityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['login_activity'], meta: { name: 'login_activity' } }
    /**
     * Find zero or one Login_activity that matches the filter.
     * @param {login_activityFindUniqueArgs} args - Arguments to find a Login_activity
     * @example
     * // Get one Login_activity
     * const login_activity = await prisma.login_activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends login_activityFindUniqueArgs>(args: SelectSubset<T, login_activityFindUniqueArgs<ExtArgs>>): Prisma__login_activityClient<$Result.GetResult<Prisma.$login_activityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Login_activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {login_activityFindUniqueOrThrowArgs} args - Arguments to find a Login_activity
     * @example
     * // Get one Login_activity
     * const login_activity = await prisma.login_activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends login_activityFindUniqueOrThrowArgs>(args: SelectSubset<T, login_activityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__login_activityClient<$Result.GetResult<Prisma.$login_activityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Login_activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {login_activityFindFirstArgs} args - Arguments to find a Login_activity
     * @example
     * // Get one Login_activity
     * const login_activity = await prisma.login_activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends login_activityFindFirstArgs>(args?: SelectSubset<T, login_activityFindFirstArgs<ExtArgs>>): Prisma__login_activityClient<$Result.GetResult<Prisma.$login_activityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Login_activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {login_activityFindFirstOrThrowArgs} args - Arguments to find a Login_activity
     * @example
     * // Get one Login_activity
     * const login_activity = await prisma.login_activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends login_activityFindFirstOrThrowArgs>(args?: SelectSubset<T, login_activityFindFirstOrThrowArgs<ExtArgs>>): Prisma__login_activityClient<$Result.GetResult<Prisma.$login_activityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Login_activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {login_activityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Login_activities
     * const login_activities = await prisma.login_activity.findMany()
     * 
     * // Get first 10 Login_activities
     * const login_activities = await prisma.login_activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const login_activityWithIdOnly = await prisma.login_activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends login_activityFindManyArgs>(args?: SelectSubset<T, login_activityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$login_activityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Login_activity.
     * @param {login_activityCreateArgs} args - Arguments to create a Login_activity.
     * @example
     * // Create one Login_activity
     * const Login_activity = await prisma.login_activity.create({
     *   data: {
     *     // ... data to create a Login_activity
     *   }
     * })
     * 
     */
    create<T extends login_activityCreateArgs>(args: SelectSubset<T, login_activityCreateArgs<ExtArgs>>): Prisma__login_activityClient<$Result.GetResult<Prisma.$login_activityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Login_activities.
     * @param {login_activityCreateManyArgs} args - Arguments to create many Login_activities.
     * @example
     * // Create many Login_activities
     * const login_activity = await prisma.login_activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends login_activityCreateManyArgs>(args?: SelectSubset<T, login_activityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Login_activities and returns the data saved in the database.
     * @param {login_activityCreateManyAndReturnArgs} args - Arguments to create many Login_activities.
     * @example
     * // Create many Login_activities
     * const login_activity = await prisma.login_activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Login_activities and only return the `id`
     * const login_activityWithIdOnly = await prisma.login_activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends login_activityCreateManyAndReturnArgs>(args?: SelectSubset<T, login_activityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$login_activityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Login_activity.
     * @param {login_activityDeleteArgs} args - Arguments to delete one Login_activity.
     * @example
     * // Delete one Login_activity
     * const Login_activity = await prisma.login_activity.delete({
     *   where: {
     *     // ... filter to delete one Login_activity
     *   }
     * })
     * 
     */
    delete<T extends login_activityDeleteArgs>(args: SelectSubset<T, login_activityDeleteArgs<ExtArgs>>): Prisma__login_activityClient<$Result.GetResult<Prisma.$login_activityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Login_activity.
     * @param {login_activityUpdateArgs} args - Arguments to update one Login_activity.
     * @example
     * // Update one Login_activity
     * const login_activity = await prisma.login_activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends login_activityUpdateArgs>(args: SelectSubset<T, login_activityUpdateArgs<ExtArgs>>): Prisma__login_activityClient<$Result.GetResult<Prisma.$login_activityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Login_activities.
     * @param {login_activityDeleteManyArgs} args - Arguments to filter Login_activities to delete.
     * @example
     * // Delete a few Login_activities
     * const { count } = await prisma.login_activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends login_activityDeleteManyArgs>(args?: SelectSubset<T, login_activityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Login_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {login_activityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Login_activities
     * const login_activity = await prisma.login_activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends login_activityUpdateManyArgs>(args: SelectSubset<T, login_activityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Login_activities and returns the data updated in the database.
     * @param {login_activityUpdateManyAndReturnArgs} args - Arguments to update many Login_activities.
     * @example
     * // Update many Login_activities
     * const login_activity = await prisma.login_activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Login_activities and only return the `id`
     * const login_activityWithIdOnly = await prisma.login_activity.updateManyAndReturn({
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
    updateManyAndReturn<T extends login_activityUpdateManyAndReturnArgs>(args: SelectSubset<T, login_activityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$login_activityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Login_activity.
     * @param {login_activityUpsertArgs} args - Arguments to update or create a Login_activity.
     * @example
     * // Update or create a Login_activity
     * const login_activity = await prisma.login_activity.upsert({
     *   create: {
     *     // ... data to create a Login_activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Login_activity we want to update
     *   }
     * })
     */
    upsert<T extends login_activityUpsertArgs>(args: SelectSubset<T, login_activityUpsertArgs<ExtArgs>>): Prisma__login_activityClient<$Result.GetResult<Prisma.$login_activityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Login_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {login_activityCountArgs} args - Arguments to filter Login_activities to count.
     * @example
     * // Count the number of Login_activities
     * const count = await prisma.login_activity.count({
     *   where: {
     *     // ... the filter for the Login_activities we want to count
     *   }
     * })
    **/
    count<T extends login_activityCountArgs>(
      args?: Subset<T, login_activityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Login_activityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Login_activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Login_activityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Login_activityAggregateArgs>(args: Subset<T, Login_activityAggregateArgs>): Prisma.PrismaPromise<GetLogin_activityAggregateType<T>>

    /**
     * Group by Login_activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {login_activityGroupByArgs} args - Group by arguments.
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
      T extends login_activityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: login_activityGroupByArgs['orderBy'] }
        : { orderBy?: login_activityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, login_activityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogin_activityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the login_activity model
   */
  readonly fields: login_activityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for login_activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__login_activityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the login_activity model
   */
  interface login_activityFieldRefs {
    readonly id: FieldRef<"login_activity", 'String'>
    readonly user_id: FieldRef<"login_activity", 'String'>
    readonly login_time: FieldRef<"login_activity", 'DateTime'>
    readonly status: FieldRef<"login_activity", 'login_status'>
    readonly ip_address: FieldRef<"login_activity", 'String'>
    readonly device_info: FieldRef<"login_activity", 'String'>
    readonly location: FieldRef<"login_activity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * login_activity findUnique
   */
  export type login_activityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_activity
     */
    select?: login_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_activity
     */
    omit?: login_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_activityInclude<ExtArgs> | null
    /**
     * Filter, which login_activity to fetch.
     */
    where: login_activityWhereUniqueInput
  }

  /**
   * login_activity findUniqueOrThrow
   */
  export type login_activityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_activity
     */
    select?: login_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_activity
     */
    omit?: login_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_activityInclude<ExtArgs> | null
    /**
     * Filter, which login_activity to fetch.
     */
    where: login_activityWhereUniqueInput
  }

  /**
   * login_activity findFirst
   */
  export type login_activityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_activity
     */
    select?: login_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_activity
     */
    omit?: login_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_activityInclude<ExtArgs> | null
    /**
     * Filter, which login_activity to fetch.
     */
    where?: login_activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of login_activities to fetch.
     */
    orderBy?: login_activityOrderByWithRelationInput | login_activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for login_activities.
     */
    cursor?: login_activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` login_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` login_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of login_activities.
     */
    distinct?: Login_activityScalarFieldEnum | Login_activityScalarFieldEnum[]
  }

  /**
   * login_activity findFirstOrThrow
   */
  export type login_activityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_activity
     */
    select?: login_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_activity
     */
    omit?: login_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_activityInclude<ExtArgs> | null
    /**
     * Filter, which login_activity to fetch.
     */
    where?: login_activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of login_activities to fetch.
     */
    orderBy?: login_activityOrderByWithRelationInput | login_activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for login_activities.
     */
    cursor?: login_activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` login_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` login_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of login_activities.
     */
    distinct?: Login_activityScalarFieldEnum | Login_activityScalarFieldEnum[]
  }

  /**
   * login_activity findMany
   */
  export type login_activityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_activity
     */
    select?: login_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_activity
     */
    omit?: login_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_activityInclude<ExtArgs> | null
    /**
     * Filter, which login_activities to fetch.
     */
    where?: login_activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of login_activities to fetch.
     */
    orderBy?: login_activityOrderByWithRelationInput | login_activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing login_activities.
     */
    cursor?: login_activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` login_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` login_activities.
     */
    skip?: number
    distinct?: Login_activityScalarFieldEnum | Login_activityScalarFieldEnum[]
  }

  /**
   * login_activity create
   */
  export type login_activityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_activity
     */
    select?: login_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_activity
     */
    omit?: login_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_activityInclude<ExtArgs> | null
    /**
     * The data needed to create a login_activity.
     */
    data: XOR<login_activityCreateInput, login_activityUncheckedCreateInput>
  }

  /**
   * login_activity createMany
   */
  export type login_activityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many login_activities.
     */
    data: login_activityCreateManyInput | login_activityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * login_activity createManyAndReturn
   */
  export type login_activityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_activity
     */
    select?: login_activitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the login_activity
     */
    omit?: login_activityOmit<ExtArgs> | null
    /**
     * The data used to create many login_activities.
     */
    data: login_activityCreateManyInput | login_activityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_activityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * login_activity update
   */
  export type login_activityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_activity
     */
    select?: login_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_activity
     */
    omit?: login_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_activityInclude<ExtArgs> | null
    /**
     * The data needed to update a login_activity.
     */
    data: XOR<login_activityUpdateInput, login_activityUncheckedUpdateInput>
    /**
     * Choose, which login_activity to update.
     */
    where: login_activityWhereUniqueInput
  }

  /**
   * login_activity updateMany
   */
  export type login_activityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update login_activities.
     */
    data: XOR<login_activityUpdateManyMutationInput, login_activityUncheckedUpdateManyInput>
    /**
     * Filter which login_activities to update
     */
    where?: login_activityWhereInput
    /**
     * Limit how many login_activities to update.
     */
    limit?: number
  }

  /**
   * login_activity updateManyAndReturn
   */
  export type login_activityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_activity
     */
    select?: login_activitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the login_activity
     */
    omit?: login_activityOmit<ExtArgs> | null
    /**
     * The data used to update login_activities.
     */
    data: XOR<login_activityUpdateManyMutationInput, login_activityUncheckedUpdateManyInput>
    /**
     * Filter which login_activities to update
     */
    where?: login_activityWhereInput
    /**
     * Limit how many login_activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_activityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * login_activity upsert
   */
  export type login_activityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_activity
     */
    select?: login_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_activity
     */
    omit?: login_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_activityInclude<ExtArgs> | null
    /**
     * The filter to search for the login_activity to update in case it exists.
     */
    where: login_activityWhereUniqueInput
    /**
     * In case the login_activity found by the `where` argument doesn't exist, create a new login_activity with this data.
     */
    create: XOR<login_activityCreateInput, login_activityUncheckedCreateInput>
    /**
     * In case the login_activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<login_activityUpdateInput, login_activityUncheckedUpdateInput>
  }

  /**
   * login_activity delete
   */
  export type login_activityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_activity
     */
    select?: login_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_activity
     */
    omit?: login_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_activityInclude<ExtArgs> | null
    /**
     * Filter which login_activity to delete.
     */
    where: login_activityWhereUniqueInput
  }

  /**
   * login_activity deleteMany
   */
  export type login_activityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which login_activities to delete
     */
    where?: login_activityWhereInput
    /**
     * Limit how many login_activities to delete.
     */
    limit?: number
  }

  /**
   * login_activity without action
   */
  export type login_activityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login_activity
     */
    select?: login_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the login_activity
     */
    omit?: login_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: login_activityInclude<ExtArgs> | null
  }


  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    user_id: string
    created_at: Date
    updated_at: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    cad_drawings?: boolean | project$cad_drawingsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["project"]>
  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    cad_drawings?: boolean | project$cad_drawingsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type projectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      cad_drawings: Prisma.$cad_drawingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      user_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectCreateManyAndReturnArgs>(args?: SelectSubset<T, projectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends projectUpdateManyAndReturnArgs>(args: SelectSubset<T, projectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
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
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cad_drawings<T extends project$cad_drawingsArgs<ExtArgs> = {}>(args?: Subset<T, project$cad_drawingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly id: FieldRef<"project", 'String'>
    readonly name: FieldRef<"project", 'String'>
    readonly description: FieldRef<"project", 'String'>
    readonly user_id: FieldRef<"project", 'String'>
    readonly created_at: FieldRef<"project", 'DateTime'>
    readonly updated_at: FieldRef<"project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project createManyAndReturn
   */
  export type projectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project updateManyAndReturn
   */
  export type projectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * project.cad_drawings
   */
  export type project$cad_drawingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cad_drawing
     */
    select?: cad_drawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cad_drawing
     */
    omit?: cad_drawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cad_drawingInclude<ExtArgs> | null
    where?: cad_drawingWhereInput
    orderBy?: cad_drawingOrderByWithRelationInput | cad_drawingOrderByWithRelationInput[]
    cursor?: cad_drawingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cad_drawingScalarFieldEnum | Cad_drawingScalarFieldEnum[]
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
  }


  /**
   * Model cad_drawing
   */

  export type AggregateCad_drawing = {
    _count: Cad_drawingCountAggregateOutputType | null
    _min: Cad_drawingMinAggregateOutputType | null
    _max: Cad_drawingMaxAggregateOutputType | null
  }

  export type Cad_drawingMinAggregateOutputType = {
    id: string | null
    name: string | null
    file_path: string | null
    project_id: string | null
    user_id: string | null
    uploaded_at: Date | null
  }

  export type Cad_drawingMaxAggregateOutputType = {
    id: string | null
    name: string | null
    file_path: string | null
    project_id: string | null
    user_id: string | null
    uploaded_at: Date | null
  }

  export type Cad_drawingCountAggregateOutputType = {
    id: number
    name: number
    file_path: number
    project_id: number
    user_id: number
    uploaded_at: number
    _all: number
  }


  export type Cad_drawingMinAggregateInputType = {
    id?: true
    name?: true
    file_path?: true
    project_id?: true
    user_id?: true
    uploaded_at?: true
  }

  export type Cad_drawingMaxAggregateInputType = {
    id?: true
    name?: true
    file_path?: true
    project_id?: true
    user_id?: true
    uploaded_at?: true
  }

  export type Cad_drawingCountAggregateInputType = {
    id?: true
    name?: true
    file_path?: true
    project_id?: true
    user_id?: true
    uploaded_at?: true
    _all?: true
  }

  export type Cad_drawingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cad_drawing to aggregate.
     */
    where?: cad_drawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cad_drawings to fetch.
     */
    orderBy?: cad_drawingOrderByWithRelationInput | cad_drawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cad_drawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cad_drawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cad_drawings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cad_drawings
    **/
    _count?: true | Cad_drawingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cad_drawingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cad_drawingMaxAggregateInputType
  }

  export type GetCad_drawingAggregateType<T extends Cad_drawingAggregateArgs> = {
        [P in keyof T & keyof AggregateCad_drawing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCad_drawing[P]>
      : GetScalarType<T[P], AggregateCad_drawing[P]>
  }




  export type cad_drawingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cad_drawingWhereInput
    orderBy?: cad_drawingOrderByWithAggregationInput | cad_drawingOrderByWithAggregationInput[]
    by: Cad_drawingScalarFieldEnum[] | Cad_drawingScalarFieldEnum
    having?: cad_drawingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cad_drawingCountAggregateInputType | true
    _min?: Cad_drawingMinAggregateInputType
    _max?: Cad_drawingMaxAggregateInputType
  }

  export type Cad_drawingGroupByOutputType = {
    id: string
    name: string
    file_path: string
    project_id: string | null
    user_id: string
    uploaded_at: Date
    _count: Cad_drawingCountAggregateOutputType | null
    _min: Cad_drawingMinAggregateOutputType | null
    _max: Cad_drawingMaxAggregateOutputType | null
  }

  type GetCad_drawingGroupByPayload<T extends cad_drawingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cad_drawingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cad_drawingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cad_drawingGroupByOutputType[P]>
            : GetScalarType<T[P], Cad_drawingGroupByOutputType[P]>
        }
      >
    >


  export type cad_drawingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    file_path?: boolean
    project_id?: boolean
    user_id?: boolean
    uploaded_at?: boolean
    project?: boolean | cad_drawing$projectArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    measurements?: boolean | cad_drawing$measurementsArgs<ExtArgs>
    materials?: boolean | cad_drawing$materialsArgs<ExtArgs>
    _count?: boolean | Cad_drawingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cad_drawing"]>

  export type cad_drawingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    file_path?: boolean
    project_id?: boolean
    user_id?: boolean
    uploaded_at?: boolean
    project?: boolean | cad_drawing$projectArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cad_drawing"]>

  export type cad_drawingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    file_path?: boolean
    project_id?: boolean
    user_id?: boolean
    uploaded_at?: boolean
    project?: boolean | cad_drawing$projectArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cad_drawing"]>

  export type cad_drawingSelectScalar = {
    id?: boolean
    name?: boolean
    file_path?: boolean
    project_id?: boolean
    user_id?: boolean
    uploaded_at?: boolean
  }

  export type cad_drawingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "file_path" | "project_id" | "user_id" | "uploaded_at", ExtArgs["result"]["cad_drawing"]>
  export type cad_drawingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | cad_drawing$projectArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    measurements?: boolean | cad_drawing$measurementsArgs<ExtArgs>
    materials?: boolean | cad_drawing$materialsArgs<ExtArgs>
    _count?: boolean | Cad_drawingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cad_drawingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | cad_drawing$projectArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type cad_drawingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | cad_drawing$projectArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $cad_drawingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cad_drawing"
    objects: {
      project: Prisma.$projectPayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs>
      measurements: Prisma.$measurementPayload<ExtArgs>[]
      materials: Prisma.$material_needsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      file_path: string
      project_id: string | null
      user_id: string
      uploaded_at: Date
    }, ExtArgs["result"]["cad_drawing"]>
    composites: {}
  }

  type cad_drawingGetPayload<S extends boolean | null | undefined | cad_drawingDefaultArgs> = $Result.GetResult<Prisma.$cad_drawingPayload, S>

  type cad_drawingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cad_drawingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cad_drawingCountAggregateInputType | true
    }

  export interface cad_drawingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cad_drawing'], meta: { name: 'cad_drawing' } }
    /**
     * Find zero or one Cad_drawing that matches the filter.
     * @param {cad_drawingFindUniqueArgs} args - Arguments to find a Cad_drawing
     * @example
     * // Get one Cad_drawing
     * const cad_drawing = await prisma.cad_drawing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cad_drawingFindUniqueArgs>(args: SelectSubset<T, cad_drawingFindUniqueArgs<ExtArgs>>): Prisma__cad_drawingClient<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cad_drawing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cad_drawingFindUniqueOrThrowArgs} args - Arguments to find a Cad_drawing
     * @example
     * // Get one Cad_drawing
     * const cad_drawing = await prisma.cad_drawing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cad_drawingFindUniqueOrThrowArgs>(args: SelectSubset<T, cad_drawingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cad_drawingClient<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cad_drawing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cad_drawingFindFirstArgs} args - Arguments to find a Cad_drawing
     * @example
     * // Get one Cad_drawing
     * const cad_drawing = await prisma.cad_drawing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cad_drawingFindFirstArgs>(args?: SelectSubset<T, cad_drawingFindFirstArgs<ExtArgs>>): Prisma__cad_drawingClient<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cad_drawing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cad_drawingFindFirstOrThrowArgs} args - Arguments to find a Cad_drawing
     * @example
     * // Get one Cad_drawing
     * const cad_drawing = await prisma.cad_drawing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cad_drawingFindFirstOrThrowArgs>(args?: SelectSubset<T, cad_drawingFindFirstOrThrowArgs<ExtArgs>>): Prisma__cad_drawingClient<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cad_drawings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cad_drawingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cad_drawings
     * const cad_drawings = await prisma.cad_drawing.findMany()
     * 
     * // Get first 10 Cad_drawings
     * const cad_drawings = await prisma.cad_drawing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cad_drawingWithIdOnly = await prisma.cad_drawing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cad_drawingFindManyArgs>(args?: SelectSubset<T, cad_drawingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cad_drawing.
     * @param {cad_drawingCreateArgs} args - Arguments to create a Cad_drawing.
     * @example
     * // Create one Cad_drawing
     * const Cad_drawing = await prisma.cad_drawing.create({
     *   data: {
     *     // ... data to create a Cad_drawing
     *   }
     * })
     * 
     */
    create<T extends cad_drawingCreateArgs>(args: SelectSubset<T, cad_drawingCreateArgs<ExtArgs>>): Prisma__cad_drawingClient<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cad_drawings.
     * @param {cad_drawingCreateManyArgs} args - Arguments to create many Cad_drawings.
     * @example
     * // Create many Cad_drawings
     * const cad_drawing = await prisma.cad_drawing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cad_drawingCreateManyArgs>(args?: SelectSubset<T, cad_drawingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cad_drawings and returns the data saved in the database.
     * @param {cad_drawingCreateManyAndReturnArgs} args - Arguments to create many Cad_drawings.
     * @example
     * // Create many Cad_drawings
     * const cad_drawing = await prisma.cad_drawing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cad_drawings and only return the `id`
     * const cad_drawingWithIdOnly = await prisma.cad_drawing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cad_drawingCreateManyAndReturnArgs>(args?: SelectSubset<T, cad_drawingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cad_drawing.
     * @param {cad_drawingDeleteArgs} args - Arguments to delete one Cad_drawing.
     * @example
     * // Delete one Cad_drawing
     * const Cad_drawing = await prisma.cad_drawing.delete({
     *   where: {
     *     // ... filter to delete one Cad_drawing
     *   }
     * })
     * 
     */
    delete<T extends cad_drawingDeleteArgs>(args: SelectSubset<T, cad_drawingDeleteArgs<ExtArgs>>): Prisma__cad_drawingClient<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cad_drawing.
     * @param {cad_drawingUpdateArgs} args - Arguments to update one Cad_drawing.
     * @example
     * // Update one Cad_drawing
     * const cad_drawing = await prisma.cad_drawing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cad_drawingUpdateArgs>(args: SelectSubset<T, cad_drawingUpdateArgs<ExtArgs>>): Prisma__cad_drawingClient<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cad_drawings.
     * @param {cad_drawingDeleteManyArgs} args - Arguments to filter Cad_drawings to delete.
     * @example
     * // Delete a few Cad_drawings
     * const { count } = await prisma.cad_drawing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cad_drawingDeleteManyArgs>(args?: SelectSubset<T, cad_drawingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cad_drawings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cad_drawingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cad_drawings
     * const cad_drawing = await prisma.cad_drawing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cad_drawingUpdateManyArgs>(args: SelectSubset<T, cad_drawingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cad_drawings and returns the data updated in the database.
     * @param {cad_drawingUpdateManyAndReturnArgs} args - Arguments to update many Cad_drawings.
     * @example
     * // Update many Cad_drawings
     * const cad_drawing = await prisma.cad_drawing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cad_drawings and only return the `id`
     * const cad_drawingWithIdOnly = await prisma.cad_drawing.updateManyAndReturn({
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
    updateManyAndReturn<T extends cad_drawingUpdateManyAndReturnArgs>(args: SelectSubset<T, cad_drawingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cad_drawing.
     * @param {cad_drawingUpsertArgs} args - Arguments to update or create a Cad_drawing.
     * @example
     * // Update or create a Cad_drawing
     * const cad_drawing = await prisma.cad_drawing.upsert({
     *   create: {
     *     // ... data to create a Cad_drawing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cad_drawing we want to update
     *   }
     * })
     */
    upsert<T extends cad_drawingUpsertArgs>(args: SelectSubset<T, cad_drawingUpsertArgs<ExtArgs>>): Prisma__cad_drawingClient<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cad_drawings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cad_drawingCountArgs} args - Arguments to filter Cad_drawings to count.
     * @example
     * // Count the number of Cad_drawings
     * const count = await prisma.cad_drawing.count({
     *   where: {
     *     // ... the filter for the Cad_drawings we want to count
     *   }
     * })
    **/
    count<T extends cad_drawingCountArgs>(
      args?: Subset<T, cad_drawingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cad_drawingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cad_drawing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cad_drawingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cad_drawingAggregateArgs>(args: Subset<T, Cad_drawingAggregateArgs>): Prisma.PrismaPromise<GetCad_drawingAggregateType<T>>

    /**
     * Group by Cad_drawing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cad_drawingGroupByArgs} args - Group by arguments.
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
      T extends cad_drawingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cad_drawingGroupByArgs['orderBy'] }
        : { orderBy?: cad_drawingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cad_drawingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCad_drawingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cad_drawing model
   */
  readonly fields: cad_drawingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cad_drawing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cad_drawingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends cad_drawing$projectArgs<ExtArgs> = {}>(args?: Subset<T, cad_drawing$projectArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    measurements<T extends cad_drawing$measurementsArgs<ExtArgs> = {}>(args?: Subset<T, cad_drawing$measurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    materials<T extends cad_drawing$materialsArgs<ExtArgs> = {}>(args?: Subset<T, cad_drawing$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_needsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cad_drawing model
   */
  interface cad_drawingFieldRefs {
    readonly id: FieldRef<"cad_drawing", 'String'>
    readonly name: FieldRef<"cad_drawing", 'String'>
    readonly file_path: FieldRef<"cad_drawing", 'String'>
    readonly project_id: FieldRef<"cad_drawing", 'String'>
    readonly user_id: FieldRef<"cad_drawing", 'String'>
    readonly uploaded_at: FieldRef<"cad_drawing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cad_drawing findUnique
   */
  export type cad_drawingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cad_drawing
     */
    select?: cad_drawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cad_drawing
     */
    omit?: cad_drawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cad_drawingInclude<ExtArgs> | null
    /**
     * Filter, which cad_drawing to fetch.
     */
    where: cad_drawingWhereUniqueInput
  }

  /**
   * cad_drawing findUniqueOrThrow
   */
  export type cad_drawingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cad_drawing
     */
    select?: cad_drawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cad_drawing
     */
    omit?: cad_drawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cad_drawingInclude<ExtArgs> | null
    /**
     * Filter, which cad_drawing to fetch.
     */
    where: cad_drawingWhereUniqueInput
  }

  /**
   * cad_drawing findFirst
   */
  export type cad_drawingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cad_drawing
     */
    select?: cad_drawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cad_drawing
     */
    omit?: cad_drawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cad_drawingInclude<ExtArgs> | null
    /**
     * Filter, which cad_drawing to fetch.
     */
    where?: cad_drawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cad_drawings to fetch.
     */
    orderBy?: cad_drawingOrderByWithRelationInput | cad_drawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cad_drawings.
     */
    cursor?: cad_drawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cad_drawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cad_drawings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cad_drawings.
     */
    distinct?: Cad_drawingScalarFieldEnum | Cad_drawingScalarFieldEnum[]
  }

  /**
   * cad_drawing findFirstOrThrow
   */
  export type cad_drawingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cad_drawing
     */
    select?: cad_drawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cad_drawing
     */
    omit?: cad_drawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cad_drawingInclude<ExtArgs> | null
    /**
     * Filter, which cad_drawing to fetch.
     */
    where?: cad_drawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cad_drawings to fetch.
     */
    orderBy?: cad_drawingOrderByWithRelationInput | cad_drawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cad_drawings.
     */
    cursor?: cad_drawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cad_drawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cad_drawings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cad_drawings.
     */
    distinct?: Cad_drawingScalarFieldEnum | Cad_drawingScalarFieldEnum[]
  }

  /**
   * cad_drawing findMany
   */
  export type cad_drawingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cad_drawing
     */
    select?: cad_drawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cad_drawing
     */
    omit?: cad_drawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cad_drawingInclude<ExtArgs> | null
    /**
     * Filter, which cad_drawings to fetch.
     */
    where?: cad_drawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cad_drawings to fetch.
     */
    orderBy?: cad_drawingOrderByWithRelationInput | cad_drawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cad_drawings.
     */
    cursor?: cad_drawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cad_drawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cad_drawings.
     */
    skip?: number
    distinct?: Cad_drawingScalarFieldEnum | Cad_drawingScalarFieldEnum[]
  }

  /**
   * cad_drawing create
   */
  export type cad_drawingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cad_drawing
     */
    select?: cad_drawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cad_drawing
     */
    omit?: cad_drawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cad_drawingInclude<ExtArgs> | null
    /**
     * The data needed to create a cad_drawing.
     */
    data: XOR<cad_drawingCreateInput, cad_drawingUncheckedCreateInput>
  }

  /**
   * cad_drawing createMany
   */
  export type cad_drawingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cad_drawings.
     */
    data: cad_drawingCreateManyInput | cad_drawingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cad_drawing createManyAndReturn
   */
  export type cad_drawingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cad_drawing
     */
    select?: cad_drawingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cad_drawing
     */
    omit?: cad_drawingOmit<ExtArgs> | null
    /**
     * The data used to create many cad_drawings.
     */
    data: cad_drawingCreateManyInput | cad_drawingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cad_drawingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cad_drawing update
   */
  export type cad_drawingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cad_drawing
     */
    select?: cad_drawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cad_drawing
     */
    omit?: cad_drawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cad_drawingInclude<ExtArgs> | null
    /**
     * The data needed to update a cad_drawing.
     */
    data: XOR<cad_drawingUpdateInput, cad_drawingUncheckedUpdateInput>
    /**
     * Choose, which cad_drawing to update.
     */
    where: cad_drawingWhereUniqueInput
  }

  /**
   * cad_drawing updateMany
   */
  export type cad_drawingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cad_drawings.
     */
    data: XOR<cad_drawingUpdateManyMutationInput, cad_drawingUncheckedUpdateManyInput>
    /**
     * Filter which cad_drawings to update
     */
    where?: cad_drawingWhereInput
    /**
     * Limit how many cad_drawings to update.
     */
    limit?: number
  }

  /**
   * cad_drawing updateManyAndReturn
   */
  export type cad_drawingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cad_drawing
     */
    select?: cad_drawingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cad_drawing
     */
    omit?: cad_drawingOmit<ExtArgs> | null
    /**
     * The data used to update cad_drawings.
     */
    data: XOR<cad_drawingUpdateManyMutationInput, cad_drawingUncheckedUpdateManyInput>
    /**
     * Filter which cad_drawings to update
     */
    where?: cad_drawingWhereInput
    /**
     * Limit how many cad_drawings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cad_drawingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cad_drawing upsert
   */
  export type cad_drawingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cad_drawing
     */
    select?: cad_drawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cad_drawing
     */
    omit?: cad_drawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cad_drawingInclude<ExtArgs> | null
    /**
     * The filter to search for the cad_drawing to update in case it exists.
     */
    where: cad_drawingWhereUniqueInput
    /**
     * In case the cad_drawing found by the `where` argument doesn't exist, create a new cad_drawing with this data.
     */
    create: XOR<cad_drawingCreateInput, cad_drawingUncheckedCreateInput>
    /**
     * In case the cad_drawing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cad_drawingUpdateInput, cad_drawingUncheckedUpdateInput>
  }

  /**
   * cad_drawing delete
   */
  export type cad_drawingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cad_drawing
     */
    select?: cad_drawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cad_drawing
     */
    omit?: cad_drawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cad_drawingInclude<ExtArgs> | null
    /**
     * Filter which cad_drawing to delete.
     */
    where: cad_drawingWhereUniqueInput
  }

  /**
   * cad_drawing deleteMany
   */
  export type cad_drawingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cad_drawings to delete
     */
    where?: cad_drawingWhereInput
    /**
     * Limit how many cad_drawings to delete.
     */
    limit?: number
  }

  /**
   * cad_drawing.project
   */
  export type cad_drawing$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    where?: projectWhereInput
  }

  /**
   * cad_drawing.measurements
   */
  export type cad_drawing$measurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    where?: measurementWhereInput
    orderBy?: measurementOrderByWithRelationInput | measurementOrderByWithRelationInput[]
    cursor?: measurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * cad_drawing.materials
   */
  export type cad_drawing$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_needs
     */
    select?: material_needsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_needs
     */
    omit?: material_needsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_needsInclude<ExtArgs> | null
    where?: material_needsWhereInput
    orderBy?: material_needsOrderByWithRelationInput | material_needsOrderByWithRelationInput[]
    cursor?: material_needsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Material_needsScalarFieldEnum | Material_needsScalarFieldEnum[]
  }

  /**
   * cad_drawing without action
   */
  export type cad_drawingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cad_drawing
     */
    select?: cad_drawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cad_drawing
     */
    omit?: cad_drawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cad_drawingInclude<ExtArgs> | null
  }


  /**
   * Model measurement
   */

  export type AggregateMeasurement = {
    _count: MeasurementCountAggregateOutputType | null
    _avg: MeasurementAvgAggregateOutputType | null
    _sum: MeasurementSumAggregateOutputType | null
    _min: MeasurementMinAggregateOutputType | null
    _max: MeasurementMaxAggregateOutputType | null
  }

  export type MeasurementAvgAggregateOutputType = {
    value: number | null
    x_coordinate: number | null
    y_coordinate: number | null
  }

  export type MeasurementSumAggregateOutputType = {
    value: number | null
    x_coordinate: number | null
    y_coordinate: number | null
  }

  export type MeasurementMinAggregateOutputType = {
    id: string | null
    drawing_id: string | null
    measurement_type: string | null
    value: number | null
    unit: string | null
    x_coordinate: number | null
    y_coordinate: number | null
    created_at: Date | null
  }

  export type MeasurementMaxAggregateOutputType = {
    id: string | null
    drawing_id: string | null
    measurement_type: string | null
    value: number | null
    unit: string | null
    x_coordinate: number | null
    y_coordinate: number | null
    created_at: Date | null
  }

  export type MeasurementCountAggregateOutputType = {
    id: number
    drawing_id: number
    measurement_type: number
    value: number
    unit: number
    x_coordinate: number
    y_coordinate: number
    created_at: number
    _all: number
  }


  export type MeasurementAvgAggregateInputType = {
    value?: true
    x_coordinate?: true
    y_coordinate?: true
  }

  export type MeasurementSumAggregateInputType = {
    value?: true
    x_coordinate?: true
    y_coordinate?: true
  }

  export type MeasurementMinAggregateInputType = {
    id?: true
    drawing_id?: true
    measurement_type?: true
    value?: true
    unit?: true
    x_coordinate?: true
    y_coordinate?: true
    created_at?: true
  }

  export type MeasurementMaxAggregateInputType = {
    id?: true
    drawing_id?: true
    measurement_type?: true
    value?: true
    unit?: true
    x_coordinate?: true
    y_coordinate?: true
    created_at?: true
  }

  export type MeasurementCountAggregateInputType = {
    id?: true
    drawing_id?: true
    measurement_type?: true
    value?: true
    unit?: true
    x_coordinate?: true
    y_coordinate?: true
    created_at?: true
    _all?: true
  }

  export type MeasurementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which measurement to aggregate.
     */
    where?: measurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of measurements to fetch.
     */
    orderBy?: measurementOrderByWithRelationInput | measurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: measurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned measurements
    **/
    _count?: true | MeasurementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeasurementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeasurementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeasurementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeasurementMaxAggregateInputType
  }

  export type GetMeasurementAggregateType<T extends MeasurementAggregateArgs> = {
        [P in keyof T & keyof AggregateMeasurement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeasurement[P]>
      : GetScalarType<T[P], AggregateMeasurement[P]>
  }




  export type measurementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: measurementWhereInput
    orderBy?: measurementOrderByWithAggregationInput | measurementOrderByWithAggregationInput[]
    by: MeasurementScalarFieldEnum[] | MeasurementScalarFieldEnum
    having?: measurementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeasurementCountAggregateInputType | true
    _avg?: MeasurementAvgAggregateInputType
    _sum?: MeasurementSumAggregateInputType
    _min?: MeasurementMinAggregateInputType
    _max?: MeasurementMaxAggregateInputType
  }

  export type MeasurementGroupByOutputType = {
    id: string
    drawing_id: string
    measurement_type: string
    value: number
    unit: string
    x_coordinate: number | null
    y_coordinate: number | null
    created_at: Date
    _count: MeasurementCountAggregateOutputType | null
    _avg: MeasurementAvgAggregateOutputType | null
    _sum: MeasurementSumAggregateOutputType | null
    _min: MeasurementMinAggregateOutputType | null
    _max: MeasurementMaxAggregateOutputType | null
  }

  type GetMeasurementGroupByPayload<T extends measurementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeasurementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeasurementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeasurementGroupByOutputType[P]>
            : GetScalarType<T[P], MeasurementGroupByOutputType[P]>
        }
      >
    >


  export type measurementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawing_id?: boolean
    measurement_type?: boolean
    value?: boolean
    unit?: boolean
    x_coordinate?: boolean
    y_coordinate?: boolean
    created_at?: boolean
    drawing?: boolean | cad_drawingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type measurementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawing_id?: boolean
    measurement_type?: boolean
    value?: boolean
    unit?: boolean
    x_coordinate?: boolean
    y_coordinate?: boolean
    created_at?: boolean
    drawing?: boolean | cad_drawingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type measurementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawing_id?: boolean
    measurement_type?: boolean
    value?: boolean
    unit?: boolean
    x_coordinate?: boolean
    y_coordinate?: boolean
    created_at?: boolean
    drawing?: boolean | cad_drawingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type measurementSelectScalar = {
    id?: boolean
    drawing_id?: boolean
    measurement_type?: boolean
    value?: boolean
    unit?: boolean
    x_coordinate?: boolean
    y_coordinate?: boolean
    created_at?: boolean
  }

  export type measurementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "drawing_id" | "measurement_type" | "value" | "unit" | "x_coordinate" | "y_coordinate" | "created_at", ExtArgs["result"]["measurement"]>
  export type measurementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drawing?: boolean | cad_drawingDefaultArgs<ExtArgs>
  }
  export type measurementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drawing?: boolean | cad_drawingDefaultArgs<ExtArgs>
  }
  export type measurementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drawing?: boolean | cad_drawingDefaultArgs<ExtArgs>
  }

  export type $measurementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "measurement"
    objects: {
      drawing: Prisma.$cad_drawingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      drawing_id: string
      measurement_type: string
      value: number
      unit: string
      x_coordinate: number | null
      y_coordinate: number | null
      created_at: Date
    }, ExtArgs["result"]["measurement"]>
    composites: {}
  }

  type measurementGetPayload<S extends boolean | null | undefined | measurementDefaultArgs> = $Result.GetResult<Prisma.$measurementPayload, S>

  type measurementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<measurementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeasurementCountAggregateInputType | true
    }

  export interface measurementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['measurement'], meta: { name: 'measurement' } }
    /**
     * Find zero or one Measurement that matches the filter.
     * @param {measurementFindUniqueArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends measurementFindUniqueArgs>(args: SelectSubset<T, measurementFindUniqueArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Measurement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {measurementFindUniqueOrThrowArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends measurementFindUniqueOrThrowArgs>(args: SelectSubset<T, measurementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Measurement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {measurementFindFirstArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends measurementFindFirstArgs>(args?: SelectSubset<T, measurementFindFirstArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Measurement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {measurementFindFirstOrThrowArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends measurementFindFirstOrThrowArgs>(args?: SelectSubset<T, measurementFindFirstOrThrowArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Measurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {measurementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Measurements
     * const measurements = await prisma.measurement.findMany()
     * 
     * // Get first 10 Measurements
     * const measurements = await prisma.measurement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const measurementWithIdOnly = await prisma.measurement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends measurementFindManyArgs>(args?: SelectSubset<T, measurementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Measurement.
     * @param {measurementCreateArgs} args - Arguments to create a Measurement.
     * @example
     * // Create one Measurement
     * const Measurement = await prisma.measurement.create({
     *   data: {
     *     // ... data to create a Measurement
     *   }
     * })
     * 
     */
    create<T extends measurementCreateArgs>(args: SelectSubset<T, measurementCreateArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Measurements.
     * @param {measurementCreateManyArgs} args - Arguments to create many Measurements.
     * @example
     * // Create many Measurements
     * const measurement = await prisma.measurement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends measurementCreateManyArgs>(args?: SelectSubset<T, measurementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Measurements and returns the data saved in the database.
     * @param {measurementCreateManyAndReturnArgs} args - Arguments to create many Measurements.
     * @example
     * // Create many Measurements
     * const measurement = await prisma.measurement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Measurements and only return the `id`
     * const measurementWithIdOnly = await prisma.measurement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends measurementCreateManyAndReturnArgs>(args?: SelectSubset<T, measurementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Measurement.
     * @param {measurementDeleteArgs} args - Arguments to delete one Measurement.
     * @example
     * // Delete one Measurement
     * const Measurement = await prisma.measurement.delete({
     *   where: {
     *     // ... filter to delete one Measurement
     *   }
     * })
     * 
     */
    delete<T extends measurementDeleteArgs>(args: SelectSubset<T, measurementDeleteArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Measurement.
     * @param {measurementUpdateArgs} args - Arguments to update one Measurement.
     * @example
     * // Update one Measurement
     * const measurement = await prisma.measurement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends measurementUpdateArgs>(args: SelectSubset<T, measurementUpdateArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Measurements.
     * @param {measurementDeleteManyArgs} args - Arguments to filter Measurements to delete.
     * @example
     * // Delete a few Measurements
     * const { count } = await prisma.measurement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends measurementDeleteManyArgs>(args?: SelectSubset<T, measurementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {measurementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Measurements
     * const measurement = await prisma.measurement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends measurementUpdateManyArgs>(args: SelectSubset<T, measurementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements and returns the data updated in the database.
     * @param {measurementUpdateManyAndReturnArgs} args - Arguments to update many Measurements.
     * @example
     * // Update many Measurements
     * const measurement = await prisma.measurement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Measurements and only return the `id`
     * const measurementWithIdOnly = await prisma.measurement.updateManyAndReturn({
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
    updateManyAndReturn<T extends measurementUpdateManyAndReturnArgs>(args: SelectSubset<T, measurementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Measurement.
     * @param {measurementUpsertArgs} args - Arguments to update or create a Measurement.
     * @example
     * // Update or create a Measurement
     * const measurement = await prisma.measurement.upsert({
     *   create: {
     *     // ... data to create a Measurement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Measurement we want to update
     *   }
     * })
     */
    upsert<T extends measurementUpsertArgs>(args: SelectSubset<T, measurementUpsertArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {measurementCountArgs} args - Arguments to filter Measurements to count.
     * @example
     * // Count the number of Measurements
     * const count = await prisma.measurement.count({
     *   where: {
     *     // ... the filter for the Measurements we want to count
     *   }
     * })
    **/
    count<T extends measurementCountArgs>(
      args?: Subset<T, measurementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeasurementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Measurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeasurementAggregateArgs>(args: Subset<T, MeasurementAggregateArgs>): Prisma.PrismaPromise<GetMeasurementAggregateType<T>>

    /**
     * Group by Measurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {measurementGroupByArgs} args - Group by arguments.
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
      T extends measurementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: measurementGroupByArgs['orderBy'] }
        : { orderBy?: measurementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, measurementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeasurementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the measurement model
   */
  readonly fields: measurementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for measurement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__measurementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drawing<T extends cad_drawingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cad_drawingDefaultArgs<ExtArgs>>): Prisma__cad_drawingClient<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the measurement model
   */
  interface measurementFieldRefs {
    readonly id: FieldRef<"measurement", 'String'>
    readonly drawing_id: FieldRef<"measurement", 'String'>
    readonly measurement_type: FieldRef<"measurement", 'String'>
    readonly value: FieldRef<"measurement", 'Float'>
    readonly unit: FieldRef<"measurement", 'String'>
    readonly x_coordinate: FieldRef<"measurement", 'Float'>
    readonly y_coordinate: FieldRef<"measurement", 'Float'>
    readonly created_at: FieldRef<"measurement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * measurement findUnique
   */
  export type measurementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * Filter, which measurement to fetch.
     */
    where: measurementWhereUniqueInput
  }

  /**
   * measurement findUniqueOrThrow
   */
  export type measurementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * Filter, which measurement to fetch.
     */
    where: measurementWhereUniqueInput
  }

  /**
   * measurement findFirst
   */
  export type measurementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * Filter, which measurement to fetch.
     */
    where?: measurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of measurements to fetch.
     */
    orderBy?: measurementOrderByWithRelationInput | measurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for measurements.
     */
    cursor?: measurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of measurements.
     */
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * measurement findFirstOrThrow
   */
  export type measurementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * Filter, which measurement to fetch.
     */
    where?: measurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of measurements to fetch.
     */
    orderBy?: measurementOrderByWithRelationInput | measurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for measurements.
     */
    cursor?: measurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of measurements.
     */
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * measurement findMany
   */
  export type measurementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * Filter, which measurements to fetch.
     */
    where?: measurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of measurements to fetch.
     */
    orderBy?: measurementOrderByWithRelationInput | measurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing measurements.
     */
    cursor?: measurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` measurements.
     */
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * measurement create
   */
  export type measurementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * The data needed to create a measurement.
     */
    data: XOR<measurementCreateInput, measurementUncheckedCreateInput>
  }

  /**
   * measurement createMany
   */
  export type measurementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many measurements.
     */
    data: measurementCreateManyInput | measurementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * measurement createManyAndReturn
   */
  export type measurementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * The data used to create many measurements.
     */
    data: measurementCreateManyInput | measurementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * measurement update
   */
  export type measurementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * The data needed to update a measurement.
     */
    data: XOR<measurementUpdateInput, measurementUncheckedUpdateInput>
    /**
     * Choose, which measurement to update.
     */
    where: measurementWhereUniqueInput
  }

  /**
   * measurement updateMany
   */
  export type measurementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update measurements.
     */
    data: XOR<measurementUpdateManyMutationInput, measurementUncheckedUpdateManyInput>
    /**
     * Filter which measurements to update
     */
    where?: measurementWhereInput
    /**
     * Limit how many measurements to update.
     */
    limit?: number
  }

  /**
   * measurement updateManyAndReturn
   */
  export type measurementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * The data used to update measurements.
     */
    data: XOR<measurementUpdateManyMutationInput, measurementUncheckedUpdateManyInput>
    /**
     * Filter which measurements to update
     */
    where?: measurementWhereInput
    /**
     * Limit how many measurements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * measurement upsert
   */
  export type measurementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * The filter to search for the measurement to update in case it exists.
     */
    where: measurementWhereUniqueInput
    /**
     * In case the measurement found by the `where` argument doesn't exist, create a new measurement with this data.
     */
    create: XOR<measurementCreateInput, measurementUncheckedCreateInput>
    /**
     * In case the measurement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<measurementUpdateInput, measurementUncheckedUpdateInput>
  }

  /**
   * measurement delete
   */
  export type measurementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * Filter which measurement to delete.
     */
    where: measurementWhereUniqueInput
  }

  /**
   * measurement deleteMany
   */
  export type measurementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which measurements to delete
     */
    where?: measurementWhereInput
    /**
     * Limit how many measurements to delete.
     */
    limit?: number
  }

  /**
   * measurement without action
   */
  export type measurementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
  }


  /**
   * Model material_needs
   */

  export type AggregateMaterial_needs = {
    _count: Material_needsCountAggregateOutputType | null
    _avg: Material_needsAvgAggregateOutputType | null
    _sum: Material_needsSumAggregateOutputType | null
    _min: Material_needsMinAggregateOutputType | null
    _max: Material_needsMaxAggregateOutputType | null
  }

  export type Material_needsAvgAggregateOutputType = {
    quantity: number | null
  }

  export type Material_needsSumAggregateOutputType = {
    quantity: number | null
  }

  export type Material_needsMinAggregateOutputType = {
    id: string | null
    drawing_id: string | null
    material_id: string | null
    quantity: number | null
    unit: string | null
    created_at: Date | null
  }

  export type Material_needsMaxAggregateOutputType = {
    id: string | null
    drawing_id: string | null
    material_id: string | null
    quantity: number | null
    unit: string | null
    created_at: Date | null
  }

  export type Material_needsCountAggregateOutputType = {
    id: number
    drawing_id: number
    material_id: number
    quantity: number
    unit: number
    created_at: number
    _all: number
  }


  export type Material_needsAvgAggregateInputType = {
    quantity?: true
  }

  export type Material_needsSumAggregateInputType = {
    quantity?: true
  }

  export type Material_needsMinAggregateInputType = {
    id?: true
    drawing_id?: true
    material_id?: true
    quantity?: true
    unit?: true
    created_at?: true
  }

  export type Material_needsMaxAggregateInputType = {
    id?: true
    drawing_id?: true
    material_id?: true
    quantity?: true
    unit?: true
    created_at?: true
  }

  export type Material_needsCountAggregateInputType = {
    id?: true
    drawing_id?: true
    material_id?: true
    quantity?: true
    unit?: true
    created_at?: true
    _all?: true
  }

  export type Material_needsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which material_needs to aggregate.
     */
    where?: material_needsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_needs to fetch.
     */
    orderBy?: material_needsOrderByWithRelationInput | material_needsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: material_needsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_needs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_needs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned material_needs
    **/
    _count?: true | Material_needsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Material_needsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Material_needsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Material_needsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Material_needsMaxAggregateInputType
  }

  export type GetMaterial_needsAggregateType<T extends Material_needsAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial_needs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial_needs[P]>
      : GetScalarType<T[P], AggregateMaterial_needs[P]>
  }




  export type material_needsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: material_needsWhereInput
    orderBy?: material_needsOrderByWithAggregationInput | material_needsOrderByWithAggregationInput[]
    by: Material_needsScalarFieldEnum[] | Material_needsScalarFieldEnum
    having?: material_needsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Material_needsCountAggregateInputType | true
    _avg?: Material_needsAvgAggregateInputType
    _sum?: Material_needsSumAggregateInputType
    _min?: Material_needsMinAggregateInputType
    _max?: Material_needsMaxAggregateInputType
  }

  export type Material_needsGroupByOutputType = {
    id: string
    drawing_id: string
    material_id: string
    quantity: number
    unit: string
    created_at: Date
    _count: Material_needsCountAggregateOutputType | null
    _avg: Material_needsAvgAggregateOutputType | null
    _sum: Material_needsSumAggregateOutputType | null
    _min: Material_needsMinAggregateOutputType | null
    _max: Material_needsMaxAggregateOutputType | null
  }

  type GetMaterial_needsGroupByPayload<T extends material_needsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Material_needsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Material_needsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Material_needsGroupByOutputType[P]>
            : GetScalarType<T[P], Material_needsGroupByOutputType[P]>
        }
      >
    >


  export type material_needsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawing_id?: boolean
    material_id?: boolean
    quantity?: boolean
    unit?: boolean
    created_at?: boolean
    drawing?: boolean | cad_drawingDefaultArgs<ExtArgs>
    material?: boolean | materialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material_needs"]>

  export type material_needsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawing_id?: boolean
    material_id?: boolean
    quantity?: boolean
    unit?: boolean
    created_at?: boolean
    drawing?: boolean | cad_drawingDefaultArgs<ExtArgs>
    material?: boolean | materialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material_needs"]>

  export type material_needsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawing_id?: boolean
    material_id?: boolean
    quantity?: boolean
    unit?: boolean
    created_at?: boolean
    drawing?: boolean | cad_drawingDefaultArgs<ExtArgs>
    material?: boolean | materialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material_needs"]>

  export type material_needsSelectScalar = {
    id?: boolean
    drawing_id?: boolean
    material_id?: boolean
    quantity?: boolean
    unit?: boolean
    created_at?: boolean
  }

  export type material_needsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "drawing_id" | "material_id" | "quantity" | "unit" | "created_at", ExtArgs["result"]["material_needs"]>
  export type material_needsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drawing?: boolean | cad_drawingDefaultArgs<ExtArgs>
    material?: boolean | materialDefaultArgs<ExtArgs>
  }
  export type material_needsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drawing?: boolean | cad_drawingDefaultArgs<ExtArgs>
    material?: boolean | materialDefaultArgs<ExtArgs>
  }
  export type material_needsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drawing?: boolean | cad_drawingDefaultArgs<ExtArgs>
    material?: boolean | materialDefaultArgs<ExtArgs>
  }

  export type $material_needsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "material_needs"
    objects: {
      drawing: Prisma.$cad_drawingPayload<ExtArgs>
      material: Prisma.$materialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      drawing_id: string
      material_id: string
      quantity: number
      unit: string
      created_at: Date
    }, ExtArgs["result"]["material_needs"]>
    composites: {}
  }

  type material_needsGetPayload<S extends boolean | null | undefined | material_needsDefaultArgs> = $Result.GetResult<Prisma.$material_needsPayload, S>

  type material_needsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<material_needsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Material_needsCountAggregateInputType | true
    }

  export interface material_needsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['material_needs'], meta: { name: 'material_needs' } }
    /**
     * Find zero or one Material_needs that matches the filter.
     * @param {material_needsFindUniqueArgs} args - Arguments to find a Material_needs
     * @example
     * // Get one Material_needs
     * const material_needs = await prisma.material_needs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends material_needsFindUniqueArgs>(args: SelectSubset<T, material_needsFindUniqueArgs<ExtArgs>>): Prisma__material_needsClient<$Result.GetResult<Prisma.$material_needsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material_needs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {material_needsFindUniqueOrThrowArgs} args - Arguments to find a Material_needs
     * @example
     * // Get one Material_needs
     * const material_needs = await prisma.material_needs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends material_needsFindUniqueOrThrowArgs>(args: SelectSubset<T, material_needsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__material_needsClient<$Result.GetResult<Prisma.$material_needsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material_needs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_needsFindFirstArgs} args - Arguments to find a Material_needs
     * @example
     * // Get one Material_needs
     * const material_needs = await prisma.material_needs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends material_needsFindFirstArgs>(args?: SelectSubset<T, material_needsFindFirstArgs<ExtArgs>>): Prisma__material_needsClient<$Result.GetResult<Prisma.$material_needsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material_needs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_needsFindFirstOrThrowArgs} args - Arguments to find a Material_needs
     * @example
     * // Get one Material_needs
     * const material_needs = await prisma.material_needs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends material_needsFindFirstOrThrowArgs>(args?: SelectSubset<T, material_needsFindFirstOrThrowArgs<ExtArgs>>): Prisma__material_needsClient<$Result.GetResult<Prisma.$material_needsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Material_needs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_needsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Material_needs
     * const material_needs = await prisma.material_needs.findMany()
     * 
     * // Get first 10 Material_needs
     * const material_needs = await prisma.material_needs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const material_needsWithIdOnly = await prisma.material_needs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends material_needsFindManyArgs>(args?: SelectSubset<T, material_needsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_needsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material_needs.
     * @param {material_needsCreateArgs} args - Arguments to create a Material_needs.
     * @example
     * // Create one Material_needs
     * const Material_needs = await prisma.material_needs.create({
     *   data: {
     *     // ... data to create a Material_needs
     *   }
     * })
     * 
     */
    create<T extends material_needsCreateArgs>(args: SelectSubset<T, material_needsCreateArgs<ExtArgs>>): Prisma__material_needsClient<$Result.GetResult<Prisma.$material_needsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Material_needs.
     * @param {material_needsCreateManyArgs} args - Arguments to create many Material_needs.
     * @example
     * // Create many Material_needs
     * const material_needs = await prisma.material_needs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends material_needsCreateManyArgs>(args?: SelectSubset<T, material_needsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Material_needs and returns the data saved in the database.
     * @param {material_needsCreateManyAndReturnArgs} args - Arguments to create many Material_needs.
     * @example
     * // Create many Material_needs
     * const material_needs = await prisma.material_needs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Material_needs and only return the `id`
     * const material_needsWithIdOnly = await prisma.material_needs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends material_needsCreateManyAndReturnArgs>(args?: SelectSubset<T, material_needsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_needsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material_needs.
     * @param {material_needsDeleteArgs} args - Arguments to delete one Material_needs.
     * @example
     * // Delete one Material_needs
     * const Material_needs = await prisma.material_needs.delete({
     *   where: {
     *     // ... filter to delete one Material_needs
     *   }
     * })
     * 
     */
    delete<T extends material_needsDeleteArgs>(args: SelectSubset<T, material_needsDeleteArgs<ExtArgs>>): Prisma__material_needsClient<$Result.GetResult<Prisma.$material_needsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material_needs.
     * @param {material_needsUpdateArgs} args - Arguments to update one Material_needs.
     * @example
     * // Update one Material_needs
     * const material_needs = await prisma.material_needs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends material_needsUpdateArgs>(args: SelectSubset<T, material_needsUpdateArgs<ExtArgs>>): Prisma__material_needsClient<$Result.GetResult<Prisma.$material_needsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Material_needs.
     * @param {material_needsDeleteManyArgs} args - Arguments to filter Material_needs to delete.
     * @example
     * // Delete a few Material_needs
     * const { count } = await prisma.material_needs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends material_needsDeleteManyArgs>(args?: SelectSubset<T, material_needsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Material_needs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_needsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Material_needs
     * const material_needs = await prisma.material_needs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends material_needsUpdateManyArgs>(args: SelectSubset<T, material_needsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Material_needs and returns the data updated in the database.
     * @param {material_needsUpdateManyAndReturnArgs} args - Arguments to update many Material_needs.
     * @example
     * // Update many Material_needs
     * const material_needs = await prisma.material_needs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Material_needs and only return the `id`
     * const material_needsWithIdOnly = await prisma.material_needs.updateManyAndReturn({
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
    updateManyAndReturn<T extends material_needsUpdateManyAndReturnArgs>(args: SelectSubset<T, material_needsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_needsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material_needs.
     * @param {material_needsUpsertArgs} args - Arguments to update or create a Material_needs.
     * @example
     * // Update or create a Material_needs
     * const material_needs = await prisma.material_needs.upsert({
     *   create: {
     *     // ... data to create a Material_needs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material_needs we want to update
     *   }
     * })
     */
    upsert<T extends material_needsUpsertArgs>(args: SelectSubset<T, material_needsUpsertArgs<ExtArgs>>): Prisma__material_needsClient<$Result.GetResult<Prisma.$material_needsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Material_needs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_needsCountArgs} args - Arguments to filter Material_needs to count.
     * @example
     * // Count the number of Material_needs
     * const count = await prisma.material_needs.count({
     *   where: {
     *     // ... the filter for the Material_needs we want to count
     *   }
     * })
    **/
    count<T extends material_needsCountArgs>(
      args?: Subset<T, material_needsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Material_needsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material_needs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_needsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Material_needsAggregateArgs>(args: Subset<T, Material_needsAggregateArgs>): Prisma.PrismaPromise<GetMaterial_needsAggregateType<T>>

    /**
     * Group by Material_needs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_needsGroupByArgs} args - Group by arguments.
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
      T extends material_needsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: material_needsGroupByArgs['orderBy'] }
        : { orderBy?: material_needsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, material_needsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterial_needsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the material_needs model
   */
  readonly fields: material_needsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for material_needs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__material_needsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drawing<T extends cad_drawingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cad_drawingDefaultArgs<ExtArgs>>): Prisma__cad_drawingClient<$Result.GetResult<Prisma.$cad_drawingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material<T extends materialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, materialDefaultArgs<ExtArgs>>): Prisma__materialClient<$Result.GetResult<Prisma.$materialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the material_needs model
   */
  interface material_needsFieldRefs {
    readonly id: FieldRef<"material_needs", 'String'>
    readonly drawing_id: FieldRef<"material_needs", 'String'>
    readonly material_id: FieldRef<"material_needs", 'String'>
    readonly quantity: FieldRef<"material_needs", 'Float'>
    readonly unit: FieldRef<"material_needs", 'String'>
    readonly created_at: FieldRef<"material_needs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * material_needs findUnique
   */
  export type material_needsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_needs
     */
    select?: material_needsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_needs
     */
    omit?: material_needsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_needsInclude<ExtArgs> | null
    /**
     * Filter, which material_needs to fetch.
     */
    where: material_needsWhereUniqueInput
  }

  /**
   * material_needs findUniqueOrThrow
   */
  export type material_needsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_needs
     */
    select?: material_needsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_needs
     */
    omit?: material_needsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_needsInclude<ExtArgs> | null
    /**
     * Filter, which material_needs to fetch.
     */
    where: material_needsWhereUniqueInput
  }

  /**
   * material_needs findFirst
   */
  export type material_needsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_needs
     */
    select?: material_needsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_needs
     */
    omit?: material_needsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_needsInclude<ExtArgs> | null
    /**
     * Filter, which material_needs to fetch.
     */
    where?: material_needsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_needs to fetch.
     */
    orderBy?: material_needsOrderByWithRelationInput | material_needsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for material_needs.
     */
    cursor?: material_needsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_needs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_needs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of material_needs.
     */
    distinct?: Material_needsScalarFieldEnum | Material_needsScalarFieldEnum[]
  }

  /**
   * material_needs findFirstOrThrow
   */
  export type material_needsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_needs
     */
    select?: material_needsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_needs
     */
    omit?: material_needsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_needsInclude<ExtArgs> | null
    /**
     * Filter, which material_needs to fetch.
     */
    where?: material_needsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_needs to fetch.
     */
    orderBy?: material_needsOrderByWithRelationInput | material_needsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for material_needs.
     */
    cursor?: material_needsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_needs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_needs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of material_needs.
     */
    distinct?: Material_needsScalarFieldEnum | Material_needsScalarFieldEnum[]
  }

  /**
   * material_needs findMany
   */
  export type material_needsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_needs
     */
    select?: material_needsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_needs
     */
    omit?: material_needsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_needsInclude<ExtArgs> | null
    /**
     * Filter, which material_needs to fetch.
     */
    where?: material_needsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_needs to fetch.
     */
    orderBy?: material_needsOrderByWithRelationInput | material_needsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing material_needs.
     */
    cursor?: material_needsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_needs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_needs.
     */
    skip?: number
    distinct?: Material_needsScalarFieldEnum | Material_needsScalarFieldEnum[]
  }

  /**
   * material_needs create
   */
  export type material_needsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_needs
     */
    select?: material_needsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_needs
     */
    omit?: material_needsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_needsInclude<ExtArgs> | null
    /**
     * The data needed to create a material_needs.
     */
    data: XOR<material_needsCreateInput, material_needsUncheckedCreateInput>
  }

  /**
   * material_needs createMany
   */
  export type material_needsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many material_needs.
     */
    data: material_needsCreateManyInput | material_needsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * material_needs createManyAndReturn
   */
  export type material_needsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_needs
     */
    select?: material_needsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the material_needs
     */
    omit?: material_needsOmit<ExtArgs> | null
    /**
     * The data used to create many material_needs.
     */
    data: material_needsCreateManyInput | material_needsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_needsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * material_needs update
   */
  export type material_needsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_needs
     */
    select?: material_needsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_needs
     */
    omit?: material_needsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_needsInclude<ExtArgs> | null
    /**
     * The data needed to update a material_needs.
     */
    data: XOR<material_needsUpdateInput, material_needsUncheckedUpdateInput>
    /**
     * Choose, which material_needs to update.
     */
    where: material_needsWhereUniqueInput
  }

  /**
   * material_needs updateMany
   */
  export type material_needsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update material_needs.
     */
    data: XOR<material_needsUpdateManyMutationInput, material_needsUncheckedUpdateManyInput>
    /**
     * Filter which material_needs to update
     */
    where?: material_needsWhereInput
    /**
     * Limit how many material_needs to update.
     */
    limit?: number
  }

  /**
   * material_needs updateManyAndReturn
   */
  export type material_needsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_needs
     */
    select?: material_needsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the material_needs
     */
    omit?: material_needsOmit<ExtArgs> | null
    /**
     * The data used to update material_needs.
     */
    data: XOR<material_needsUpdateManyMutationInput, material_needsUncheckedUpdateManyInput>
    /**
     * Filter which material_needs to update
     */
    where?: material_needsWhereInput
    /**
     * Limit how many material_needs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_needsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * material_needs upsert
   */
  export type material_needsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_needs
     */
    select?: material_needsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_needs
     */
    omit?: material_needsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_needsInclude<ExtArgs> | null
    /**
     * The filter to search for the material_needs to update in case it exists.
     */
    where: material_needsWhereUniqueInput
    /**
     * In case the material_needs found by the `where` argument doesn't exist, create a new material_needs with this data.
     */
    create: XOR<material_needsCreateInput, material_needsUncheckedCreateInput>
    /**
     * In case the material_needs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<material_needsUpdateInput, material_needsUncheckedUpdateInput>
  }

  /**
   * material_needs delete
   */
  export type material_needsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_needs
     */
    select?: material_needsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_needs
     */
    omit?: material_needsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_needsInclude<ExtArgs> | null
    /**
     * Filter which material_needs to delete.
     */
    where: material_needsWhereUniqueInput
  }

  /**
   * material_needs deleteMany
   */
  export type material_needsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which material_needs to delete
     */
    where?: material_needsWhereInput
    /**
     * Limit how many material_needs to delete.
     */
    limit?: number
  }

  /**
   * material_needs without action
   */
  export type material_needsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_needs
     */
    select?: material_needsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_needs
     */
    omit?: material_needsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_needsInclude<ExtArgs> | null
  }


  /**
   * Model material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    unit_price: number | null
  }

  export type MaterialSumAggregateOutputType = {
    unit_price: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    unit_price: number | null
    currency: string | null
    in_stock: boolean | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    unit_price: number | null
    currency: string | null
    in_stock: boolean | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    name: number
    description: number
    unit_price: number
    currency: number
    in_stock: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    unit_price?: true
  }

  export type MaterialSumAggregateInputType = {
    unit_price?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    unit_price?: true
    currency?: true
    in_stock?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    unit_price?: true
    currency?: true
    in_stock?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    unit_price?: true
    currency?: true
    in_stock?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which material to aggregate.
     */
    where?: materialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialOrderByWithRelationInput | materialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: materialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type materialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: materialWhereInput
    orderBy?: materialOrderByWithAggregationInput | materialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: materialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: string
    name: string
    description: string | null
    unit_price: number
    currency: string
    in_stock: boolean
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends materialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type materialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    unit_price?: boolean
    currency?: boolean
    in_stock?: boolean
    material_needs?: boolean | material$material_needsArgs<ExtArgs>
    material_orders?: boolean | material$material_ordersArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type materialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    unit_price?: boolean
    currency?: boolean
    in_stock?: boolean
  }, ExtArgs["result"]["material"]>

  export type materialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    unit_price?: boolean
    currency?: boolean
    in_stock?: boolean
  }, ExtArgs["result"]["material"]>

  export type materialSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    unit_price?: boolean
    currency?: boolean
    in_stock?: boolean
  }

  export type materialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "unit_price" | "currency" | "in_stock", ExtArgs["result"]["material"]>
  export type materialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material_needs?: boolean | material$material_needsArgs<ExtArgs>
    material_orders?: boolean | material$material_ordersArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type materialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type materialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $materialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "material"
    objects: {
      material_needs: Prisma.$material_needsPayload<ExtArgs>[]
      material_orders: Prisma.$material_orderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      unit_price: number
      currency: string
      in_stock: boolean
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type materialGetPayload<S extends boolean | null | undefined | materialDefaultArgs> = $Result.GetResult<Prisma.$materialPayload, S>

  type materialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<materialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface materialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['material'], meta: { name: 'material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {materialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends materialFindUniqueArgs>(args: SelectSubset<T, materialFindUniqueArgs<ExtArgs>>): Prisma__materialClient<$Result.GetResult<Prisma.$materialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {materialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends materialFindUniqueOrThrowArgs>(args: SelectSubset<T, materialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__materialClient<$Result.GetResult<Prisma.$materialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends materialFindFirstArgs>(args?: SelectSubset<T, materialFindFirstArgs<ExtArgs>>): Prisma__materialClient<$Result.GetResult<Prisma.$materialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends materialFindFirstOrThrowArgs>(args?: SelectSubset<T, materialFindFirstOrThrowArgs<ExtArgs>>): Prisma__materialClient<$Result.GetResult<Prisma.$materialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends materialFindManyArgs>(args?: SelectSubset<T, materialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {materialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends materialCreateArgs>(args: SelectSubset<T, materialCreateArgs<ExtArgs>>): Prisma__materialClient<$Result.GetResult<Prisma.$materialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {materialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends materialCreateManyArgs>(args?: SelectSubset<T, materialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {materialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends materialCreateManyAndReturnArgs>(args?: SelectSubset<T, materialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {materialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends materialDeleteArgs>(args: SelectSubset<T, materialDeleteArgs<ExtArgs>>): Prisma__materialClient<$Result.GetResult<Prisma.$materialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {materialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends materialUpdateArgs>(args: SelectSubset<T, materialUpdateArgs<ExtArgs>>): Prisma__materialClient<$Result.GetResult<Prisma.$materialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {materialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends materialDeleteManyArgs>(args?: SelectSubset<T, materialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends materialUpdateManyArgs>(args: SelectSubset<T, materialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {materialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
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
    updateManyAndReturn<T extends materialUpdateManyAndReturnArgs>(args: SelectSubset<T, materialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {materialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends materialUpsertArgs>(args: SelectSubset<T, materialUpsertArgs<ExtArgs>>): Prisma__materialClient<$Result.GetResult<Prisma.$materialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends materialCountArgs>(
      args?: Subset<T, materialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialGroupByArgs} args - Group by arguments.
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
      T extends materialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: materialGroupByArgs['orderBy'] }
        : { orderBy?: materialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, materialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the material model
   */
  readonly fields: materialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__materialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material_needs<T extends material$material_needsArgs<ExtArgs> = {}>(args?: Subset<T, material$material_needsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_needsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    material_orders<T extends material$material_ordersArgs<ExtArgs> = {}>(args?: Subset<T, material$material_ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the material model
   */
  interface materialFieldRefs {
    readonly id: FieldRef<"material", 'String'>
    readonly name: FieldRef<"material", 'String'>
    readonly description: FieldRef<"material", 'String'>
    readonly unit_price: FieldRef<"material", 'Float'>
    readonly currency: FieldRef<"material", 'String'>
    readonly in_stock: FieldRef<"material", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * material findUnique
   */
  export type materialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material
     */
    select?: materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material
     */
    omit?: materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialInclude<ExtArgs> | null
    /**
     * Filter, which material to fetch.
     */
    where: materialWhereUniqueInput
  }

  /**
   * material findUniqueOrThrow
   */
  export type materialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material
     */
    select?: materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material
     */
    omit?: materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialInclude<ExtArgs> | null
    /**
     * Filter, which material to fetch.
     */
    where: materialWhereUniqueInput
  }

  /**
   * material findFirst
   */
  export type materialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material
     */
    select?: materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material
     */
    omit?: materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialInclude<ExtArgs> | null
    /**
     * Filter, which material to fetch.
     */
    where?: materialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialOrderByWithRelationInput | materialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for materials.
     */
    cursor?: materialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * material findFirstOrThrow
   */
  export type materialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material
     */
    select?: materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material
     */
    omit?: materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialInclude<ExtArgs> | null
    /**
     * Filter, which material to fetch.
     */
    where?: materialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialOrderByWithRelationInput | materialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for materials.
     */
    cursor?: materialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * material findMany
   */
  export type materialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material
     */
    select?: materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material
     */
    omit?: materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where?: materialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialOrderByWithRelationInput | materialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing materials.
     */
    cursor?: materialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * material create
   */
  export type materialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material
     */
    select?: materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material
     */
    omit?: materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialInclude<ExtArgs> | null
    /**
     * The data needed to create a material.
     */
    data: XOR<materialCreateInput, materialUncheckedCreateInput>
  }

  /**
   * material createMany
   */
  export type materialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many materials.
     */
    data: materialCreateManyInput | materialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * material createManyAndReturn
   */
  export type materialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material
     */
    select?: materialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the material
     */
    omit?: materialOmit<ExtArgs> | null
    /**
     * The data used to create many materials.
     */
    data: materialCreateManyInput | materialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * material update
   */
  export type materialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material
     */
    select?: materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material
     */
    omit?: materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialInclude<ExtArgs> | null
    /**
     * The data needed to update a material.
     */
    data: XOR<materialUpdateInput, materialUncheckedUpdateInput>
    /**
     * Choose, which material to update.
     */
    where: materialWhereUniqueInput
  }

  /**
   * material updateMany
   */
  export type materialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update materials.
     */
    data: XOR<materialUpdateManyMutationInput, materialUncheckedUpdateManyInput>
    /**
     * Filter which materials to update
     */
    where?: materialWhereInput
    /**
     * Limit how many materials to update.
     */
    limit?: number
  }

  /**
   * material updateManyAndReturn
   */
  export type materialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material
     */
    select?: materialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the material
     */
    omit?: materialOmit<ExtArgs> | null
    /**
     * The data used to update materials.
     */
    data: XOR<materialUpdateManyMutationInput, materialUncheckedUpdateManyInput>
    /**
     * Filter which materials to update
     */
    where?: materialWhereInput
    /**
     * Limit how many materials to update.
     */
    limit?: number
  }

  /**
   * material upsert
   */
  export type materialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material
     */
    select?: materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material
     */
    omit?: materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialInclude<ExtArgs> | null
    /**
     * The filter to search for the material to update in case it exists.
     */
    where: materialWhereUniqueInput
    /**
     * In case the material found by the `where` argument doesn't exist, create a new material with this data.
     */
    create: XOR<materialCreateInput, materialUncheckedCreateInput>
    /**
     * In case the material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<materialUpdateInput, materialUncheckedUpdateInput>
  }

  /**
   * material delete
   */
  export type materialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material
     */
    select?: materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material
     */
    omit?: materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialInclude<ExtArgs> | null
    /**
     * Filter which material to delete.
     */
    where: materialWhereUniqueInput
  }

  /**
   * material deleteMany
   */
  export type materialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which materials to delete
     */
    where?: materialWhereInput
    /**
     * Limit how many materials to delete.
     */
    limit?: number
  }

  /**
   * material.material_needs
   */
  export type material$material_needsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_needs
     */
    select?: material_needsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_needs
     */
    omit?: material_needsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_needsInclude<ExtArgs> | null
    where?: material_needsWhereInput
    orderBy?: material_needsOrderByWithRelationInput | material_needsOrderByWithRelationInput[]
    cursor?: material_needsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Material_needsScalarFieldEnum | Material_needsScalarFieldEnum[]
  }

  /**
   * material.material_orders
   */
  export type material$material_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_order
     */
    select?: material_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_order
     */
    omit?: material_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_orderInclude<ExtArgs> | null
    where?: material_orderWhereInput
    orderBy?: material_orderOrderByWithRelationInput | material_orderOrderByWithRelationInput[]
    cursor?: material_orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Material_orderScalarFieldEnum | Material_orderScalarFieldEnum[]
  }

  /**
   * material without action
   */
  export type materialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material
     */
    select?: materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material
     */
    omit?: materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialInclude<ExtArgs> | null
  }


  /**
   * Model material_order
   */

  export type AggregateMaterial_order = {
    _count: Material_orderCountAggregateOutputType | null
    _avg: Material_orderAvgAggregateOutputType | null
    _sum: Material_orderSumAggregateOutputType | null
    _min: Material_orderMinAggregateOutputType | null
    _max: Material_orderMaxAggregateOutputType | null
  }

  export type Material_orderAvgAggregateOutputType = {
    quantity: number | null
    total_price: number | null
  }

  export type Material_orderSumAggregateOutputType = {
    quantity: number | null
    total_price: number | null
  }

  export type Material_orderMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    material_id: string | null
    quantity: number | null
    total_price: number | null
    status: $Enums.order_status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Material_orderMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    material_id: string | null
    quantity: number | null
    total_price: number | null
    status: $Enums.order_status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Material_orderCountAggregateOutputType = {
    id: number
    user_id: number
    material_id: number
    quantity: number
    total_price: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Material_orderAvgAggregateInputType = {
    quantity?: true
    total_price?: true
  }

  export type Material_orderSumAggregateInputType = {
    quantity?: true
    total_price?: true
  }

  export type Material_orderMinAggregateInputType = {
    id?: true
    user_id?: true
    material_id?: true
    quantity?: true
    total_price?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Material_orderMaxAggregateInputType = {
    id?: true
    user_id?: true
    material_id?: true
    quantity?: true
    total_price?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Material_orderCountAggregateInputType = {
    id?: true
    user_id?: true
    material_id?: true
    quantity?: true
    total_price?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Material_orderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which material_order to aggregate.
     */
    where?: material_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_orders to fetch.
     */
    orderBy?: material_orderOrderByWithRelationInput | material_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: material_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned material_orders
    **/
    _count?: true | Material_orderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Material_orderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Material_orderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Material_orderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Material_orderMaxAggregateInputType
  }

  export type GetMaterial_orderAggregateType<T extends Material_orderAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial_order]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial_order[P]>
      : GetScalarType<T[P], AggregateMaterial_order[P]>
  }




  export type material_orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: material_orderWhereInput
    orderBy?: material_orderOrderByWithAggregationInput | material_orderOrderByWithAggregationInput[]
    by: Material_orderScalarFieldEnum[] | Material_orderScalarFieldEnum
    having?: material_orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Material_orderCountAggregateInputType | true
    _avg?: Material_orderAvgAggregateInputType
    _sum?: Material_orderSumAggregateInputType
    _min?: Material_orderMinAggregateInputType
    _max?: Material_orderMaxAggregateInputType
  }

  export type Material_orderGroupByOutputType = {
    id: string
    user_id: string
    material_id: string
    quantity: number
    total_price: number
    status: $Enums.order_status
    created_at: Date
    updated_at: Date
    _count: Material_orderCountAggregateOutputType | null
    _avg: Material_orderAvgAggregateOutputType | null
    _sum: Material_orderSumAggregateOutputType | null
    _min: Material_orderMinAggregateOutputType | null
    _max: Material_orderMaxAggregateOutputType | null
  }

  type GetMaterial_orderGroupByPayload<T extends material_orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Material_orderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Material_orderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Material_orderGroupByOutputType[P]>
            : GetScalarType<T[P], Material_orderGroupByOutputType[P]>
        }
      >
    >


  export type material_orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    material_id?: boolean
    quantity?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    material?: boolean | materialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material_order"]>

  export type material_orderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    material_id?: boolean
    quantity?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    material?: boolean | materialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material_order"]>

  export type material_orderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    material_id?: boolean
    quantity?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    material?: boolean | materialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material_order"]>

  export type material_orderSelectScalar = {
    id?: boolean
    user_id?: boolean
    material_id?: boolean
    quantity?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type material_orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "material_id" | "quantity" | "total_price" | "status" | "created_at" | "updated_at", ExtArgs["result"]["material_order"]>
  export type material_orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    material?: boolean | materialDefaultArgs<ExtArgs>
  }
  export type material_orderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    material?: boolean | materialDefaultArgs<ExtArgs>
  }
  export type material_orderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    material?: boolean | materialDefaultArgs<ExtArgs>
  }

  export type $material_orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "material_order"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      material: Prisma.$materialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      material_id: string
      quantity: number
      total_price: number
      status: $Enums.order_status
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["material_order"]>
    composites: {}
  }

  type material_orderGetPayload<S extends boolean | null | undefined | material_orderDefaultArgs> = $Result.GetResult<Prisma.$material_orderPayload, S>

  type material_orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<material_orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Material_orderCountAggregateInputType | true
    }

  export interface material_orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['material_order'], meta: { name: 'material_order' } }
    /**
     * Find zero or one Material_order that matches the filter.
     * @param {material_orderFindUniqueArgs} args - Arguments to find a Material_order
     * @example
     * // Get one Material_order
     * const material_order = await prisma.material_order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends material_orderFindUniqueArgs>(args: SelectSubset<T, material_orderFindUniqueArgs<ExtArgs>>): Prisma__material_orderClient<$Result.GetResult<Prisma.$material_orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material_order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {material_orderFindUniqueOrThrowArgs} args - Arguments to find a Material_order
     * @example
     * // Get one Material_order
     * const material_order = await prisma.material_order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends material_orderFindUniqueOrThrowArgs>(args: SelectSubset<T, material_orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__material_orderClient<$Result.GetResult<Prisma.$material_orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material_order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_orderFindFirstArgs} args - Arguments to find a Material_order
     * @example
     * // Get one Material_order
     * const material_order = await prisma.material_order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends material_orderFindFirstArgs>(args?: SelectSubset<T, material_orderFindFirstArgs<ExtArgs>>): Prisma__material_orderClient<$Result.GetResult<Prisma.$material_orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material_order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_orderFindFirstOrThrowArgs} args - Arguments to find a Material_order
     * @example
     * // Get one Material_order
     * const material_order = await prisma.material_order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends material_orderFindFirstOrThrowArgs>(args?: SelectSubset<T, material_orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__material_orderClient<$Result.GetResult<Prisma.$material_orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Material_orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Material_orders
     * const material_orders = await prisma.material_order.findMany()
     * 
     * // Get first 10 Material_orders
     * const material_orders = await prisma.material_order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const material_orderWithIdOnly = await prisma.material_order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends material_orderFindManyArgs>(args?: SelectSubset<T, material_orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material_order.
     * @param {material_orderCreateArgs} args - Arguments to create a Material_order.
     * @example
     * // Create one Material_order
     * const Material_order = await prisma.material_order.create({
     *   data: {
     *     // ... data to create a Material_order
     *   }
     * })
     * 
     */
    create<T extends material_orderCreateArgs>(args: SelectSubset<T, material_orderCreateArgs<ExtArgs>>): Prisma__material_orderClient<$Result.GetResult<Prisma.$material_orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Material_orders.
     * @param {material_orderCreateManyArgs} args - Arguments to create many Material_orders.
     * @example
     * // Create many Material_orders
     * const material_order = await prisma.material_order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends material_orderCreateManyArgs>(args?: SelectSubset<T, material_orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Material_orders and returns the data saved in the database.
     * @param {material_orderCreateManyAndReturnArgs} args - Arguments to create many Material_orders.
     * @example
     * // Create many Material_orders
     * const material_order = await prisma.material_order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Material_orders and only return the `id`
     * const material_orderWithIdOnly = await prisma.material_order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends material_orderCreateManyAndReturnArgs>(args?: SelectSubset<T, material_orderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_orderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material_order.
     * @param {material_orderDeleteArgs} args - Arguments to delete one Material_order.
     * @example
     * // Delete one Material_order
     * const Material_order = await prisma.material_order.delete({
     *   where: {
     *     // ... filter to delete one Material_order
     *   }
     * })
     * 
     */
    delete<T extends material_orderDeleteArgs>(args: SelectSubset<T, material_orderDeleteArgs<ExtArgs>>): Prisma__material_orderClient<$Result.GetResult<Prisma.$material_orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material_order.
     * @param {material_orderUpdateArgs} args - Arguments to update one Material_order.
     * @example
     * // Update one Material_order
     * const material_order = await prisma.material_order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends material_orderUpdateArgs>(args: SelectSubset<T, material_orderUpdateArgs<ExtArgs>>): Prisma__material_orderClient<$Result.GetResult<Prisma.$material_orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Material_orders.
     * @param {material_orderDeleteManyArgs} args - Arguments to filter Material_orders to delete.
     * @example
     * // Delete a few Material_orders
     * const { count } = await prisma.material_order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends material_orderDeleteManyArgs>(args?: SelectSubset<T, material_orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Material_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Material_orders
     * const material_order = await prisma.material_order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends material_orderUpdateManyArgs>(args: SelectSubset<T, material_orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Material_orders and returns the data updated in the database.
     * @param {material_orderUpdateManyAndReturnArgs} args - Arguments to update many Material_orders.
     * @example
     * // Update many Material_orders
     * const material_order = await prisma.material_order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Material_orders and only return the `id`
     * const material_orderWithIdOnly = await prisma.material_order.updateManyAndReturn({
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
    updateManyAndReturn<T extends material_orderUpdateManyAndReturnArgs>(args: SelectSubset<T, material_orderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_orderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material_order.
     * @param {material_orderUpsertArgs} args - Arguments to update or create a Material_order.
     * @example
     * // Update or create a Material_order
     * const material_order = await prisma.material_order.upsert({
     *   create: {
     *     // ... data to create a Material_order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material_order we want to update
     *   }
     * })
     */
    upsert<T extends material_orderUpsertArgs>(args: SelectSubset<T, material_orderUpsertArgs<ExtArgs>>): Prisma__material_orderClient<$Result.GetResult<Prisma.$material_orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Material_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_orderCountArgs} args - Arguments to filter Material_orders to count.
     * @example
     * // Count the number of Material_orders
     * const count = await prisma.material_order.count({
     *   where: {
     *     // ... the filter for the Material_orders we want to count
     *   }
     * })
    **/
    count<T extends material_orderCountArgs>(
      args?: Subset<T, material_orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Material_orderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material_order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_orderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Material_orderAggregateArgs>(args: Subset<T, Material_orderAggregateArgs>): Prisma.PrismaPromise<GetMaterial_orderAggregateType<T>>

    /**
     * Group by Material_order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_orderGroupByArgs} args - Group by arguments.
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
      T extends material_orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: material_orderGroupByArgs['orderBy'] }
        : { orderBy?: material_orderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, material_orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterial_orderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the material_order model
   */
  readonly fields: material_orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for material_order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__material_orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material<T extends materialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, materialDefaultArgs<ExtArgs>>): Prisma__materialClient<$Result.GetResult<Prisma.$materialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the material_order model
   */
  interface material_orderFieldRefs {
    readonly id: FieldRef<"material_order", 'String'>
    readonly user_id: FieldRef<"material_order", 'String'>
    readonly material_id: FieldRef<"material_order", 'String'>
    readonly quantity: FieldRef<"material_order", 'Float'>
    readonly total_price: FieldRef<"material_order", 'Float'>
    readonly status: FieldRef<"material_order", 'order_status'>
    readonly created_at: FieldRef<"material_order", 'DateTime'>
    readonly updated_at: FieldRef<"material_order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * material_order findUnique
   */
  export type material_orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_order
     */
    select?: material_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_order
     */
    omit?: material_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_orderInclude<ExtArgs> | null
    /**
     * Filter, which material_order to fetch.
     */
    where: material_orderWhereUniqueInput
  }

  /**
   * material_order findUniqueOrThrow
   */
  export type material_orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_order
     */
    select?: material_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_order
     */
    omit?: material_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_orderInclude<ExtArgs> | null
    /**
     * Filter, which material_order to fetch.
     */
    where: material_orderWhereUniqueInput
  }

  /**
   * material_order findFirst
   */
  export type material_orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_order
     */
    select?: material_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_order
     */
    omit?: material_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_orderInclude<ExtArgs> | null
    /**
     * Filter, which material_order to fetch.
     */
    where?: material_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_orders to fetch.
     */
    orderBy?: material_orderOrderByWithRelationInput | material_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for material_orders.
     */
    cursor?: material_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of material_orders.
     */
    distinct?: Material_orderScalarFieldEnum | Material_orderScalarFieldEnum[]
  }

  /**
   * material_order findFirstOrThrow
   */
  export type material_orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_order
     */
    select?: material_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_order
     */
    omit?: material_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_orderInclude<ExtArgs> | null
    /**
     * Filter, which material_order to fetch.
     */
    where?: material_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_orders to fetch.
     */
    orderBy?: material_orderOrderByWithRelationInput | material_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for material_orders.
     */
    cursor?: material_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of material_orders.
     */
    distinct?: Material_orderScalarFieldEnum | Material_orderScalarFieldEnum[]
  }

  /**
   * material_order findMany
   */
  export type material_orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_order
     */
    select?: material_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_order
     */
    omit?: material_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_orderInclude<ExtArgs> | null
    /**
     * Filter, which material_orders to fetch.
     */
    where?: material_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_orders to fetch.
     */
    orderBy?: material_orderOrderByWithRelationInput | material_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing material_orders.
     */
    cursor?: material_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_orders.
     */
    skip?: number
    distinct?: Material_orderScalarFieldEnum | Material_orderScalarFieldEnum[]
  }

  /**
   * material_order create
   */
  export type material_orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_order
     */
    select?: material_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_order
     */
    omit?: material_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_orderInclude<ExtArgs> | null
    /**
     * The data needed to create a material_order.
     */
    data: XOR<material_orderCreateInput, material_orderUncheckedCreateInput>
  }

  /**
   * material_order createMany
   */
  export type material_orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many material_orders.
     */
    data: material_orderCreateManyInput | material_orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * material_order createManyAndReturn
   */
  export type material_orderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_order
     */
    select?: material_orderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the material_order
     */
    omit?: material_orderOmit<ExtArgs> | null
    /**
     * The data used to create many material_orders.
     */
    data: material_orderCreateManyInput | material_orderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_orderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * material_order update
   */
  export type material_orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_order
     */
    select?: material_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_order
     */
    omit?: material_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_orderInclude<ExtArgs> | null
    /**
     * The data needed to update a material_order.
     */
    data: XOR<material_orderUpdateInput, material_orderUncheckedUpdateInput>
    /**
     * Choose, which material_order to update.
     */
    where: material_orderWhereUniqueInput
  }

  /**
   * material_order updateMany
   */
  export type material_orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update material_orders.
     */
    data: XOR<material_orderUpdateManyMutationInput, material_orderUncheckedUpdateManyInput>
    /**
     * Filter which material_orders to update
     */
    where?: material_orderWhereInput
    /**
     * Limit how many material_orders to update.
     */
    limit?: number
  }

  /**
   * material_order updateManyAndReturn
   */
  export type material_orderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_order
     */
    select?: material_orderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the material_order
     */
    omit?: material_orderOmit<ExtArgs> | null
    /**
     * The data used to update material_orders.
     */
    data: XOR<material_orderUpdateManyMutationInput, material_orderUncheckedUpdateManyInput>
    /**
     * Filter which material_orders to update
     */
    where?: material_orderWhereInput
    /**
     * Limit how many material_orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_orderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * material_order upsert
   */
  export type material_orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_order
     */
    select?: material_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_order
     */
    omit?: material_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_orderInclude<ExtArgs> | null
    /**
     * The filter to search for the material_order to update in case it exists.
     */
    where: material_orderWhereUniqueInput
    /**
     * In case the material_order found by the `where` argument doesn't exist, create a new material_order with this data.
     */
    create: XOR<material_orderCreateInput, material_orderUncheckedCreateInput>
    /**
     * In case the material_order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<material_orderUpdateInput, material_orderUncheckedUpdateInput>
  }

  /**
   * material_order delete
   */
  export type material_orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_order
     */
    select?: material_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_order
     */
    omit?: material_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_orderInclude<ExtArgs> | null
    /**
     * Filter which material_order to delete.
     */
    where: material_orderWhereUniqueInput
  }

  /**
   * material_order deleteMany
   */
  export type material_orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which material_orders to delete
     */
    where?: material_orderWhereInput
    /**
     * Limit how many material_orders to delete.
     */
    limit?: number
  }

  /**
   * material_order without action
   */
  export type material_orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_order
     */
    select?: material_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_order
     */
    omit?: material_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_orderInclude<ExtArgs> | null
  }


  /**
   * Model testimonial
   */

  export type AggregateTestimonial = {
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  export type TestimonialAvgAggregateOutputType = {
    rating: number | null
  }

  export type TestimonialSumAggregateOutputType = {
    rating: number | null
  }

  export type TestimonialMinAggregateOutputType = {
    id: string | null
    name: string | null
    position: string | null
    company: string | null
    content: string | null
    rating: number | null
    is_featured: boolean | null
    created_at: Date | null
  }

  export type TestimonialMaxAggregateOutputType = {
    id: string | null
    name: string | null
    position: string | null
    company: string | null
    content: string | null
    rating: number | null
    is_featured: boolean | null
    created_at: Date | null
  }

  export type TestimonialCountAggregateOutputType = {
    id: number
    name: number
    position: number
    company: number
    content: number
    rating: number
    is_featured: number
    created_at: number
    _all: number
  }


  export type TestimonialAvgAggregateInputType = {
    rating?: true
  }

  export type TestimonialSumAggregateInputType = {
    rating?: true
  }

  export type TestimonialMinAggregateInputType = {
    id?: true
    name?: true
    position?: true
    company?: true
    content?: true
    rating?: true
    is_featured?: true
    created_at?: true
  }

  export type TestimonialMaxAggregateInputType = {
    id?: true
    name?: true
    position?: true
    company?: true
    content?: true
    rating?: true
    is_featured?: true
    created_at?: true
  }

  export type TestimonialCountAggregateInputType = {
    id?: true
    name?: true
    position?: true
    company?: true
    content?: true
    rating?: true
    is_featured?: true
    created_at?: true
    _all?: true
  }

  export type TestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testimonial to aggregate.
     */
    where?: testimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialOrderByWithRelationInput | testimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned testimonials
    **/
    _count?: true | TestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestimonialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestimonialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialMaxAggregateInputType
  }

  export type GetTestimonialAggregateType<T extends TestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonial[P]>
      : GetScalarType<T[P], AggregateTestimonial[P]>
  }




  export type testimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testimonialWhereInput
    orderBy?: testimonialOrderByWithAggregationInput | testimonialOrderByWithAggregationInput[]
    by: TestimonialScalarFieldEnum[] | TestimonialScalarFieldEnum
    having?: testimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialCountAggregateInputType | true
    _avg?: TestimonialAvgAggregateInputType
    _sum?: TestimonialSumAggregateInputType
    _min?: TestimonialMinAggregateInputType
    _max?: TestimonialMaxAggregateInputType
  }

  export type TestimonialGroupByOutputType = {
    id: string
    name: string
    position: string | null
    company: string | null
    content: string
    rating: number
    is_featured: boolean
    created_at: Date
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  type GetTestimonialGroupByPayload<T extends testimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
        }
      >
    >


  export type testimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    company?: boolean
    content?: boolean
    rating?: boolean
    is_featured?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type testimonialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    company?: boolean
    content?: boolean
    rating?: boolean
    is_featured?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type testimonialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    company?: boolean
    content?: boolean
    rating?: boolean
    is_featured?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type testimonialSelectScalar = {
    id?: boolean
    name?: boolean
    position?: boolean
    company?: boolean
    content?: boolean
    rating?: boolean
    is_featured?: boolean
    created_at?: boolean
  }

  export type testimonialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "position" | "company" | "content" | "rating" | "is_featured" | "created_at", ExtArgs["result"]["testimonial"]>

  export type $testimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "testimonial"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      position: string | null
      company: string | null
      content: string
      rating: number
      is_featured: boolean
      created_at: Date
    }, ExtArgs["result"]["testimonial"]>
    composites: {}
  }

  type testimonialGetPayload<S extends boolean | null | undefined | testimonialDefaultArgs> = $Result.GetResult<Prisma.$testimonialPayload, S>

  type testimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<testimonialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestimonialCountAggregateInputType | true
    }

  export interface testimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['testimonial'], meta: { name: 'testimonial' } }
    /**
     * Find zero or one Testimonial that matches the filter.
     * @param {testimonialFindUniqueArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends testimonialFindUniqueArgs>(args: SelectSubset<T, testimonialFindUniqueArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testimonial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {testimonialFindUniqueOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends testimonialFindUniqueOrThrowArgs>(args: SelectSubset<T, testimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialFindFirstArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends testimonialFindFirstArgs>(args?: SelectSubset<T, testimonialFindFirstArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialFindFirstOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends testimonialFindFirstOrThrowArgs>(args?: SelectSubset<T, testimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonial.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends testimonialFindManyArgs>(args?: SelectSubset<T, testimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testimonial.
     * @param {testimonialCreateArgs} args - Arguments to create a Testimonial.
     * @example
     * // Create one Testimonial
     * const Testimonial = await prisma.testimonial.create({
     *   data: {
     *     // ... data to create a Testimonial
     *   }
     * })
     * 
     */
    create<T extends testimonialCreateArgs>(args: SelectSubset<T, testimonialCreateArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testimonials.
     * @param {testimonialCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends testimonialCreateManyArgs>(args?: SelectSubset<T, testimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testimonials and returns the data saved in the database.
     * @param {testimonialCreateManyAndReturnArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends testimonialCreateManyAndReturnArgs>(args?: SelectSubset<T, testimonialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Testimonial.
     * @param {testimonialDeleteArgs} args - Arguments to delete one Testimonial.
     * @example
     * // Delete one Testimonial
     * const Testimonial = await prisma.testimonial.delete({
     *   where: {
     *     // ... filter to delete one Testimonial
     *   }
     * })
     * 
     */
    delete<T extends testimonialDeleteArgs>(args: SelectSubset<T, testimonialDeleteArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testimonial.
     * @param {testimonialUpdateArgs} args - Arguments to update one Testimonial.
     * @example
     * // Update one Testimonial
     * const testimonial = await prisma.testimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends testimonialUpdateArgs>(args: SelectSubset<T, testimonialUpdateArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testimonials.
     * @param {testimonialDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends testimonialDeleteManyArgs>(args?: SelectSubset<T, testimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends testimonialUpdateManyArgs>(args: SelectSubset<T, testimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials and returns the data updated in the database.
     * @param {testimonialUpdateManyAndReturnArgs} args - Arguments to update many Testimonials.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.updateManyAndReturn({
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
    updateManyAndReturn<T extends testimonialUpdateManyAndReturnArgs>(args: SelectSubset<T, testimonialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Testimonial.
     * @param {testimonialUpsertArgs} args - Arguments to update or create a Testimonial.
     * @example
     * // Update or create a Testimonial
     * const testimonial = await prisma.testimonial.upsert({
     *   create: {
     *     // ... data to create a Testimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonial we want to update
     *   }
     * })
     */
    upsert<T extends testimonialUpsertArgs>(args: SelectSubset<T, testimonialUpsertArgs<ExtArgs>>): Prisma__testimonialClient<$Result.GetResult<Prisma.$testimonialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonial.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends testimonialCountArgs>(
      args?: Subset<T, testimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestimonialAggregateArgs>(args: Subset<T, TestimonialAggregateArgs>): Prisma.PrismaPromise<GetTestimonialAggregateType<T>>

    /**
     * Group by Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialGroupByArgs} args - Group by arguments.
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
      T extends testimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testimonialGroupByArgs['orderBy'] }
        : { orderBy?: testimonialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, testimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the testimonial model
   */
  readonly fields: testimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for testimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the testimonial model
   */
  interface testimonialFieldRefs {
    readonly id: FieldRef<"testimonial", 'String'>
    readonly name: FieldRef<"testimonial", 'String'>
    readonly position: FieldRef<"testimonial", 'String'>
    readonly company: FieldRef<"testimonial", 'String'>
    readonly content: FieldRef<"testimonial", 'String'>
    readonly rating: FieldRef<"testimonial", 'Int'>
    readonly is_featured: FieldRef<"testimonial", 'Boolean'>
    readonly created_at: FieldRef<"testimonial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * testimonial findUnique
   */
  export type testimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testimonial
     */
    omit?: testimonialOmit<ExtArgs> | null
    /**
     * Filter, which testimonial to fetch.
     */
    where: testimonialWhereUniqueInput
  }

  /**
   * testimonial findUniqueOrThrow
   */
  export type testimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testimonial
     */
    omit?: testimonialOmit<ExtArgs> | null
    /**
     * Filter, which testimonial to fetch.
     */
    where: testimonialWhereUniqueInput
  }

  /**
   * testimonial findFirst
   */
  export type testimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testimonial
     */
    omit?: testimonialOmit<ExtArgs> | null
    /**
     * Filter, which testimonial to fetch.
     */
    where?: testimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialOrderByWithRelationInput | testimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testimonials.
     */
    cursor?: testimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * testimonial findFirstOrThrow
   */
  export type testimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testimonial
     */
    omit?: testimonialOmit<ExtArgs> | null
    /**
     * Filter, which testimonial to fetch.
     */
    where?: testimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialOrderByWithRelationInput | testimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testimonials.
     */
    cursor?: testimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * testimonial findMany
   */
  export type testimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testimonial
     */
    omit?: testimonialOmit<ExtArgs> | null
    /**
     * Filter, which testimonials to fetch.
     */
    where?: testimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialOrderByWithRelationInput | testimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing testimonials.
     */
    cursor?: testimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * testimonial create
   */
  export type testimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testimonial
     */
    omit?: testimonialOmit<ExtArgs> | null
    /**
     * The data needed to create a testimonial.
     */
    data: XOR<testimonialCreateInput, testimonialUncheckedCreateInput>
  }

  /**
   * testimonial createMany
   */
  export type testimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many testimonials.
     */
    data: testimonialCreateManyInput | testimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * testimonial createManyAndReturn
   */
  export type testimonialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the testimonial
     */
    omit?: testimonialOmit<ExtArgs> | null
    /**
     * The data used to create many testimonials.
     */
    data: testimonialCreateManyInput | testimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * testimonial update
   */
  export type testimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testimonial
     */
    omit?: testimonialOmit<ExtArgs> | null
    /**
     * The data needed to update a testimonial.
     */
    data: XOR<testimonialUpdateInput, testimonialUncheckedUpdateInput>
    /**
     * Choose, which testimonial to update.
     */
    where: testimonialWhereUniqueInput
  }

  /**
   * testimonial updateMany
   */
  export type testimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update testimonials.
     */
    data: XOR<testimonialUpdateManyMutationInput, testimonialUncheckedUpdateManyInput>
    /**
     * Filter which testimonials to update
     */
    where?: testimonialWhereInput
    /**
     * Limit how many testimonials to update.
     */
    limit?: number
  }

  /**
   * testimonial updateManyAndReturn
   */
  export type testimonialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the testimonial
     */
    omit?: testimonialOmit<ExtArgs> | null
    /**
     * The data used to update testimonials.
     */
    data: XOR<testimonialUpdateManyMutationInput, testimonialUncheckedUpdateManyInput>
    /**
     * Filter which testimonials to update
     */
    where?: testimonialWhereInput
    /**
     * Limit how many testimonials to update.
     */
    limit?: number
  }

  /**
   * testimonial upsert
   */
  export type testimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testimonial
     */
    omit?: testimonialOmit<ExtArgs> | null
    /**
     * The filter to search for the testimonial to update in case it exists.
     */
    where: testimonialWhereUniqueInput
    /**
     * In case the testimonial found by the `where` argument doesn't exist, create a new testimonial with this data.
     */
    create: XOR<testimonialCreateInput, testimonialUncheckedCreateInput>
    /**
     * In case the testimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testimonialUpdateInput, testimonialUncheckedUpdateInput>
  }

  /**
   * testimonial delete
   */
  export type testimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testimonial
     */
    omit?: testimonialOmit<ExtArgs> | null
    /**
     * Filter which testimonial to delete.
     */
    where: testimonialWhereUniqueInput
  }

  /**
   * testimonial deleteMany
   */
  export type testimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testimonials to delete
     */
    where?: testimonialWhereInput
    /**
     * Limit how many testimonials to delete.
     */
    limit?: number
  }

  /**
   * testimonial without action
   */
  export type testimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonial
     */
    select?: testimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testimonial
     */
    omit?: testimonialOmit<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    provider: 'provider',
    date_joined: 'date_joined',
    time: 'time',
    region: 'region',
    country: 'country',
    last_seen: 'last_seen',
    two_step_enabled: 'two_step_enabled',
    profile_image: 'profile_image',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_settingsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    enable_notifications: 'enable_notifications',
    notify_material_changes: 'notify_material_changes',
    notify_system_updates: 'notify_system_updates',
    theme: 'theme',
    language: 'language'
  };

  export type User_settingsScalarFieldEnum = (typeof User_settingsScalarFieldEnum)[keyof typeof User_settingsScalarFieldEnum]


  export const Login_activityScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    login_time: 'login_time',
    status: 'status',
    ip_address: 'ip_address',
    device_info: 'device_info',
    location: 'location'
  };

  export type Login_activityScalarFieldEnum = (typeof Login_activityScalarFieldEnum)[keyof typeof Login_activityScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const Cad_drawingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    file_path: 'file_path',
    project_id: 'project_id',
    user_id: 'user_id',
    uploaded_at: 'uploaded_at'
  };

  export type Cad_drawingScalarFieldEnum = (typeof Cad_drawingScalarFieldEnum)[keyof typeof Cad_drawingScalarFieldEnum]


  export const MeasurementScalarFieldEnum: {
    id: 'id',
    drawing_id: 'drawing_id',
    measurement_type: 'measurement_type',
    value: 'value',
    unit: 'unit',
    x_coordinate: 'x_coordinate',
    y_coordinate: 'y_coordinate',
    created_at: 'created_at'
  };

  export type MeasurementScalarFieldEnum = (typeof MeasurementScalarFieldEnum)[keyof typeof MeasurementScalarFieldEnum]


  export const Material_needsScalarFieldEnum: {
    id: 'id',
    drawing_id: 'drawing_id',
    material_id: 'material_id',
    quantity: 'quantity',
    unit: 'unit',
    created_at: 'created_at'
  };

  export type Material_needsScalarFieldEnum = (typeof Material_needsScalarFieldEnum)[keyof typeof Material_needsScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    unit_price: 'unit_price',
    currency: 'currency',
    in_stock: 'in_stock'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const Material_orderScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    material_id: 'material_id',
    quantity: 'quantity',
    total_price: 'total_price',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Material_orderScalarFieldEnum = (typeof Material_orderScalarFieldEnum)[keyof typeof Material_orderScalarFieldEnum]


  export const TestimonialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    position: 'position',
    company: 'company',
    content: 'content',
    rating: 'rating',
    is_featured: 'is_featured',
    created_at: 'created_at'
  };

  export type TestimonialScalarFieldEnum = (typeof TestimonialScalarFieldEnum)[keyof typeof TestimonialScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'user_role[]'
   */
  export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>
    


  /**
   * Reference to a field of type 'login_status'
   */
  export type Enumlogin_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'login_status'>
    


  /**
   * Reference to a field of type 'login_status[]'
   */
  export type ListEnumlogin_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'login_status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'order_status'
   */
  export type Enumorder_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_status'>
    


  /**
   * Reference to a field of type 'order_status[]'
   */
  export type ListEnumorder_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringNullableFilter<"user"> | string | null
    provider?: StringNullableFilter<"user"> | string | null
    date_joined?: DateTimeFilter<"user"> | Date | string
    time?: StringNullableFilter<"user"> | string | null
    region?: StringNullableFilter<"user"> | string | null
    country?: StringNullableFilter<"user"> | string | null
    last_seen?: DateTimeNullableFilter<"user"> | Date | string | null
    two_step_enabled?: BoolFilter<"user"> | boolean
    profile_image?: StringNullableFilter<"user"> | string | null
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    login_activities?: Login_activityListRelationFilter
    projects?: ProjectListRelationFilter
    cad_drawings?: Cad_drawingListRelationFilter
    material_orders?: Material_orderListRelationFilter
    settings?: XOR<User_settingsNullableScalarRelationFilter, user_settingsWhereInput> | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    date_joined?: SortOrder
    time?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    last_seen?: SortOrderInput | SortOrder
    two_step_enabled?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    role?: SortOrder
    login_activities?: login_activityOrderByRelationAggregateInput
    projects?: projectOrderByRelationAggregateInput
    cad_drawings?: cad_drawingOrderByRelationAggregateInput
    material_orders?: material_orderOrderByRelationAggregateInput
    settings?: user_settingsOrderByWithRelationInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringNullableFilter<"user"> | string | null
    provider?: StringNullableFilter<"user"> | string | null
    date_joined?: DateTimeFilter<"user"> | Date | string
    time?: StringNullableFilter<"user"> | string | null
    region?: StringNullableFilter<"user"> | string | null
    country?: StringNullableFilter<"user"> | string | null
    last_seen?: DateTimeNullableFilter<"user"> | Date | string | null
    two_step_enabled?: BoolFilter<"user"> | boolean
    profile_image?: StringNullableFilter<"user"> | string | null
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    login_activities?: Login_activityListRelationFilter
    projects?: ProjectListRelationFilter
    cad_drawings?: Cad_drawingListRelationFilter
    material_orders?: Material_orderListRelationFilter
    settings?: XOR<User_settingsNullableScalarRelationFilter, user_settingsWhereInput> | null
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    date_joined?: SortOrder
    time?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    last_seen?: SortOrderInput | SortOrder
    two_step_enabled?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringNullableWithAggregatesFilter<"user"> | string | null
    provider?: StringNullableWithAggregatesFilter<"user"> | string | null
    date_joined?: DateTimeWithAggregatesFilter<"user"> | Date | string
    time?: StringNullableWithAggregatesFilter<"user"> | string | null
    region?: StringNullableWithAggregatesFilter<"user"> | string | null
    country?: StringNullableWithAggregatesFilter<"user"> | string | null
    last_seen?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    two_step_enabled?: BoolWithAggregatesFilter<"user"> | boolean
    profile_image?: StringNullableWithAggregatesFilter<"user"> | string | null
    role?: Enumuser_roleWithAggregatesFilter<"user"> | $Enums.user_role
  }

  export type user_settingsWhereInput = {
    AND?: user_settingsWhereInput | user_settingsWhereInput[]
    OR?: user_settingsWhereInput[]
    NOT?: user_settingsWhereInput | user_settingsWhereInput[]
    id?: StringFilter<"user_settings"> | string
    user_id?: StringFilter<"user_settings"> | string
    enable_notifications?: BoolFilter<"user_settings"> | boolean
    notify_material_changes?: BoolFilter<"user_settings"> | boolean
    notify_system_updates?: BoolFilter<"user_settings"> | boolean
    theme?: StringNullableFilter<"user_settings"> | string | null
    language?: StringNullableFilter<"user_settings"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type user_settingsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    enable_notifications?: SortOrder
    notify_material_changes?: SortOrder
    notify_system_updates?: SortOrder
    theme?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type user_settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: user_settingsWhereInput | user_settingsWhereInput[]
    OR?: user_settingsWhereInput[]
    NOT?: user_settingsWhereInput | user_settingsWhereInput[]
    enable_notifications?: BoolFilter<"user_settings"> | boolean
    notify_material_changes?: BoolFilter<"user_settings"> | boolean
    notify_system_updates?: BoolFilter<"user_settings"> | boolean
    theme?: StringNullableFilter<"user_settings"> | string | null
    language?: StringNullableFilter<"user_settings"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "user_id">

  export type user_settingsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    enable_notifications?: SortOrder
    notify_material_changes?: SortOrder
    notify_system_updates?: SortOrder
    theme?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    _count?: user_settingsCountOrderByAggregateInput
    _max?: user_settingsMaxOrderByAggregateInput
    _min?: user_settingsMinOrderByAggregateInput
  }

  export type user_settingsScalarWhereWithAggregatesInput = {
    AND?: user_settingsScalarWhereWithAggregatesInput | user_settingsScalarWhereWithAggregatesInput[]
    OR?: user_settingsScalarWhereWithAggregatesInput[]
    NOT?: user_settingsScalarWhereWithAggregatesInput | user_settingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_settings"> | string
    user_id?: StringWithAggregatesFilter<"user_settings"> | string
    enable_notifications?: BoolWithAggregatesFilter<"user_settings"> | boolean
    notify_material_changes?: BoolWithAggregatesFilter<"user_settings"> | boolean
    notify_system_updates?: BoolWithAggregatesFilter<"user_settings"> | boolean
    theme?: StringNullableWithAggregatesFilter<"user_settings"> | string | null
    language?: StringNullableWithAggregatesFilter<"user_settings"> | string | null
  }

  export type login_activityWhereInput = {
    AND?: login_activityWhereInput | login_activityWhereInput[]
    OR?: login_activityWhereInput[]
    NOT?: login_activityWhereInput | login_activityWhereInput[]
    id?: StringFilter<"login_activity"> | string
    user_id?: StringFilter<"login_activity"> | string
    login_time?: DateTimeFilter<"login_activity"> | Date | string
    status?: Enumlogin_statusFilter<"login_activity"> | $Enums.login_status
    ip_address?: StringNullableFilter<"login_activity"> | string | null
    device_info?: StringNullableFilter<"login_activity"> | string | null
    location?: StringNullableFilter<"login_activity"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type login_activityOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    login_time?: SortOrder
    status?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    device_info?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type login_activityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: login_activityWhereInput | login_activityWhereInput[]
    OR?: login_activityWhereInput[]
    NOT?: login_activityWhereInput | login_activityWhereInput[]
    user_id?: StringFilter<"login_activity"> | string
    login_time?: DateTimeFilter<"login_activity"> | Date | string
    status?: Enumlogin_statusFilter<"login_activity"> | $Enums.login_status
    ip_address?: StringNullableFilter<"login_activity"> | string | null
    device_info?: StringNullableFilter<"login_activity"> | string | null
    location?: StringNullableFilter<"login_activity"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type login_activityOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    login_time?: SortOrder
    status?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    device_info?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    _count?: login_activityCountOrderByAggregateInput
    _max?: login_activityMaxOrderByAggregateInput
    _min?: login_activityMinOrderByAggregateInput
  }

  export type login_activityScalarWhereWithAggregatesInput = {
    AND?: login_activityScalarWhereWithAggregatesInput | login_activityScalarWhereWithAggregatesInput[]
    OR?: login_activityScalarWhereWithAggregatesInput[]
    NOT?: login_activityScalarWhereWithAggregatesInput | login_activityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"login_activity"> | string
    user_id?: StringWithAggregatesFilter<"login_activity"> | string
    login_time?: DateTimeWithAggregatesFilter<"login_activity"> | Date | string
    status?: Enumlogin_statusWithAggregatesFilter<"login_activity"> | $Enums.login_status
    ip_address?: StringNullableWithAggregatesFilter<"login_activity"> | string | null
    device_info?: StringNullableWithAggregatesFilter<"login_activity"> | string | null
    location?: StringNullableWithAggregatesFilter<"login_activity"> | string | null
  }

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    id?: StringFilter<"project"> | string
    name?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    user_id?: StringFilter<"project"> | string
    created_at?: DateTimeFilter<"project"> | Date | string
    updated_at?: DateTimeFilter<"project"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    cad_drawings?: Cad_drawingListRelationFilter
  }

  export type projectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: userOrderByWithRelationInput
    cad_drawings?: cad_drawingOrderByRelationAggregateInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    name?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    user_id?: StringFilter<"project"> | string
    created_at?: DateTimeFilter<"project"> | Date | string
    updated_at?: DateTimeFilter<"project"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    cad_drawings?: Cad_drawingListRelationFilter
  }, "id">

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: projectCountOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"project"> | string
    name?: StringWithAggregatesFilter<"project"> | string
    description?: StringNullableWithAggregatesFilter<"project"> | string | null
    user_id?: StringWithAggregatesFilter<"project"> | string
    created_at?: DateTimeWithAggregatesFilter<"project"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"project"> | Date | string
  }

  export type cad_drawingWhereInput = {
    AND?: cad_drawingWhereInput | cad_drawingWhereInput[]
    OR?: cad_drawingWhereInput[]
    NOT?: cad_drawingWhereInput | cad_drawingWhereInput[]
    id?: StringFilter<"cad_drawing"> | string
    name?: StringFilter<"cad_drawing"> | string
    file_path?: StringFilter<"cad_drawing"> | string
    project_id?: StringNullableFilter<"cad_drawing"> | string | null
    user_id?: StringFilter<"cad_drawing"> | string
    uploaded_at?: DateTimeFilter<"cad_drawing"> | Date | string
    project?: XOR<ProjectNullableScalarRelationFilter, projectWhereInput> | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    measurements?: MeasurementListRelationFilter
    materials?: Material_needsListRelationFilter
  }

  export type cad_drawingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    file_path?: SortOrder
    project_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
    project?: projectOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    measurements?: measurementOrderByRelationAggregateInput
    materials?: material_needsOrderByRelationAggregateInput
  }

  export type cad_drawingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cad_drawingWhereInput | cad_drawingWhereInput[]
    OR?: cad_drawingWhereInput[]
    NOT?: cad_drawingWhereInput | cad_drawingWhereInput[]
    name?: StringFilter<"cad_drawing"> | string
    file_path?: StringFilter<"cad_drawing"> | string
    project_id?: StringNullableFilter<"cad_drawing"> | string | null
    user_id?: StringFilter<"cad_drawing"> | string
    uploaded_at?: DateTimeFilter<"cad_drawing"> | Date | string
    project?: XOR<ProjectNullableScalarRelationFilter, projectWhereInput> | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    measurements?: MeasurementListRelationFilter
    materials?: Material_needsListRelationFilter
  }, "id">

  export type cad_drawingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    file_path?: SortOrder
    project_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
    _count?: cad_drawingCountOrderByAggregateInput
    _max?: cad_drawingMaxOrderByAggregateInput
    _min?: cad_drawingMinOrderByAggregateInput
  }

  export type cad_drawingScalarWhereWithAggregatesInput = {
    AND?: cad_drawingScalarWhereWithAggregatesInput | cad_drawingScalarWhereWithAggregatesInput[]
    OR?: cad_drawingScalarWhereWithAggregatesInput[]
    NOT?: cad_drawingScalarWhereWithAggregatesInput | cad_drawingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"cad_drawing"> | string
    name?: StringWithAggregatesFilter<"cad_drawing"> | string
    file_path?: StringWithAggregatesFilter<"cad_drawing"> | string
    project_id?: StringNullableWithAggregatesFilter<"cad_drawing"> | string | null
    user_id?: StringWithAggregatesFilter<"cad_drawing"> | string
    uploaded_at?: DateTimeWithAggregatesFilter<"cad_drawing"> | Date | string
  }

  export type measurementWhereInput = {
    AND?: measurementWhereInput | measurementWhereInput[]
    OR?: measurementWhereInput[]
    NOT?: measurementWhereInput | measurementWhereInput[]
    id?: StringFilter<"measurement"> | string
    drawing_id?: StringFilter<"measurement"> | string
    measurement_type?: StringFilter<"measurement"> | string
    value?: FloatFilter<"measurement"> | number
    unit?: StringFilter<"measurement"> | string
    x_coordinate?: FloatNullableFilter<"measurement"> | number | null
    y_coordinate?: FloatNullableFilter<"measurement"> | number | null
    created_at?: DateTimeFilter<"measurement"> | Date | string
    drawing?: XOR<Cad_drawingScalarRelationFilter, cad_drawingWhereInput>
  }

  export type measurementOrderByWithRelationInput = {
    id?: SortOrder
    drawing_id?: SortOrder
    measurement_type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    x_coordinate?: SortOrderInput | SortOrder
    y_coordinate?: SortOrderInput | SortOrder
    created_at?: SortOrder
    drawing?: cad_drawingOrderByWithRelationInput
  }

  export type measurementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: measurementWhereInput | measurementWhereInput[]
    OR?: measurementWhereInput[]
    NOT?: measurementWhereInput | measurementWhereInput[]
    drawing_id?: StringFilter<"measurement"> | string
    measurement_type?: StringFilter<"measurement"> | string
    value?: FloatFilter<"measurement"> | number
    unit?: StringFilter<"measurement"> | string
    x_coordinate?: FloatNullableFilter<"measurement"> | number | null
    y_coordinate?: FloatNullableFilter<"measurement"> | number | null
    created_at?: DateTimeFilter<"measurement"> | Date | string
    drawing?: XOR<Cad_drawingScalarRelationFilter, cad_drawingWhereInput>
  }, "id">

  export type measurementOrderByWithAggregationInput = {
    id?: SortOrder
    drawing_id?: SortOrder
    measurement_type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    x_coordinate?: SortOrderInput | SortOrder
    y_coordinate?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: measurementCountOrderByAggregateInput
    _avg?: measurementAvgOrderByAggregateInput
    _max?: measurementMaxOrderByAggregateInput
    _min?: measurementMinOrderByAggregateInput
    _sum?: measurementSumOrderByAggregateInput
  }

  export type measurementScalarWhereWithAggregatesInput = {
    AND?: measurementScalarWhereWithAggregatesInput | measurementScalarWhereWithAggregatesInput[]
    OR?: measurementScalarWhereWithAggregatesInput[]
    NOT?: measurementScalarWhereWithAggregatesInput | measurementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"measurement"> | string
    drawing_id?: StringWithAggregatesFilter<"measurement"> | string
    measurement_type?: StringWithAggregatesFilter<"measurement"> | string
    value?: FloatWithAggregatesFilter<"measurement"> | number
    unit?: StringWithAggregatesFilter<"measurement"> | string
    x_coordinate?: FloatNullableWithAggregatesFilter<"measurement"> | number | null
    y_coordinate?: FloatNullableWithAggregatesFilter<"measurement"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"measurement"> | Date | string
  }

  export type material_needsWhereInput = {
    AND?: material_needsWhereInput | material_needsWhereInput[]
    OR?: material_needsWhereInput[]
    NOT?: material_needsWhereInput | material_needsWhereInput[]
    id?: StringFilter<"material_needs"> | string
    drawing_id?: StringFilter<"material_needs"> | string
    material_id?: StringFilter<"material_needs"> | string
    quantity?: FloatFilter<"material_needs"> | number
    unit?: StringFilter<"material_needs"> | string
    created_at?: DateTimeFilter<"material_needs"> | Date | string
    drawing?: XOR<Cad_drawingScalarRelationFilter, cad_drawingWhereInput>
    material?: XOR<MaterialScalarRelationFilter, materialWhereInput>
  }

  export type material_needsOrderByWithRelationInput = {
    id?: SortOrder
    drawing_id?: SortOrder
    material_id?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    created_at?: SortOrder
    drawing?: cad_drawingOrderByWithRelationInput
    material?: materialOrderByWithRelationInput
  }

  export type material_needsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: material_needsWhereInput | material_needsWhereInput[]
    OR?: material_needsWhereInput[]
    NOT?: material_needsWhereInput | material_needsWhereInput[]
    drawing_id?: StringFilter<"material_needs"> | string
    material_id?: StringFilter<"material_needs"> | string
    quantity?: FloatFilter<"material_needs"> | number
    unit?: StringFilter<"material_needs"> | string
    created_at?: DateTimeFilter<"material_needs"> | Date | string
    drawing?: XOR<Cad_drawingScalarRelationFilter, cad_drawingWhereInput>
    material?: XOR<MaterialScalarRelationFilter, materialWhereInput>
  }, "id">

  export type material_needsOrderByWithAggregationInput = {
    id?: SortOrder
    drawing_id?: SortOrder
    material_id?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    created_at?: SortOrder
    _count?: material_needsCountOrderByAggregateInput
    _avg?: material_needsAvgOrderByAggregateInput
    _max?: material_needsMaxOrderByAggregateInput
    _min?: material_needsMinOrderByAggregateInput
    _sum?: material_needsSumOrderByAggregateInput
  }

  export type material_needsScalarWhereWithAggregatesInput = {
    AND?: material_needsScalarWhereWithAggregatesInput | material_needsScalarWhereWithAggregatesInput[]
    OR?: material_needsScalarWhereWithAggregatesInput[]
    NOT?: material_needsScalarWhereWithAggregatesInput | material_needsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"material_needs"> | string
    drawing_id?: StringWithAggregatesFilter<"material_needs"> | string
    material_id?: StringWithAggregatesFilter<"material_needs"> | string
    quantity?: FloatWithAggregatesFilter<"material_needs"> | number
    unit?: StringWithAggregatesFilter<"material_needs"> | string
    created_at?: DateTimeWithAggregatesFilter<"material_needs"> | Date | string
  }

  export type materialWhereInput = {
    AND?: materialWhereInput | materialWhereInput[]
    OR?: materialWhereInput[]
    NOT?: materialWhereInput | materialWhereInput[]
    id?: StringFilter<"material"> | string
    name?: StringFilter<"material"> | string
    description?: StringNullableFilter<"material"> | string | null
    unit_price?: FloatFilter<"material"> | number
    currency?: StringFilter<"material"> | string
    in_stock?: BoolFilter<"material"> | boolean
    material_needs?: Material_needsListRelationFilter
    material_orders?: Material_orderListRelationFilter
  }

  export type materialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    unit_price?: SortOrder
    currency?: SortOrder
    in_stock?: SortOrder
    material_needs?: material_needsOrderByRelationAggregateInput
    material_orders?: material_orderOrderByRelationAggregateInput
  }

  export type materialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: materialWhereInput | materialWhereInput[]
    OR?: materialWhereInput[]
    NOT?: materialWhereInput | materialWhereInput[]
    name?: StringFilter<"material"> | string
    description?: StringNullableFilter<"material"> | string | null
    unit_price?: FloatFilter<"material"> | number
    currency?: StringFilter<"material"> | string
    in_stock?: BoolFilter<"material"> | boolean
    material_needs?: Material_needsListRelationFilter
    material_orders?: Material_orderListRelationFilter
  }, "id">

  export type materialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    unit_price?: SortOrder
    currency?: SortOrder
    in_stock?: SortOrder
    _count?: materialCountOrderByAggregateInput
    _avg?: materialAvgOrderByAggregateInput
    _max?: materialMaxOrderByAggregateInput
    _min?: materialMinOrderByAggregateInput
    _sum?: materialSumOrderByAggregateInput
  }

  export type materialScalarWhereWithAggregatesInput = {
    AND?: materialScalarWhereWithAggregatesInput | materialScalarWhereWithAggregatesInput[]
    OR?: materialScalarWhereWithAggregatesInput[]
    NOT?: materialScalarWhereWithAggregatesInput | materialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"material"> | string
    name?: StringWithAggregatesFilter<"material"> | string
    description?: StringNullableWithAggregatesFilter<"material"> | string | null
    unit_price?: FloatWithAggregatesFilter<"material"> | number
    currency?: StringWithAggregatesFilter<"material"> | string
    in_stock?: BoolWithAggregatesFilter<"material"> | boolean
  }

  export type material_orderWhereInput = {
    AND?: material_orderWhereInput | material_orderWhereInput[]
    OR?: material_orderWhereInput[]
    NOT?: material_orderWhereInput | material_orderWhereInput[]
    id?: StringFilter<"material_order"> | string
    user_id?: StringFilter<"material_order"> | string
    material_id?: StringFilter<"material_order"> | string
    quantity?: FloatFilter<"material_order"> | number
    total_price?: FloatFilter<"material_order"> | number
    status?: Enumorder_statusFilter<"material_order"> | $Enums.order_status
    created_at?: DateTimeFilter<"material_order"> | Date | string
    updated_at?: DateTimeFilter<"material_order"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    material?: XOR<MaterialScalarRelationFilter, materialWhereInput>
  }

  export type material_orderOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    material_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: userOrderByWithRelationInput
    material?: materialOrderByWithRelationInput
  }

  export type material_orderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: material_orderWhereInput | material_orderWhereInput[]
    OR?: material_orderWhereInput[]
    NOT?: material_orderWhereInput | material_orderWhereInput[]
    user_id?: StringFilter<"material_order"> | string
    material_id?: StringFilter<"material_order"> | string
    quantity?: FloatFilter<"material_order"> | number
    total_price?: FloatFilter<"material_order"> | number
    status?: Enumorder_statusFilter<"material_order"> | $Enums.order_status
    created_at?: DateTimeFilter<"material_order"> | Date | string
    updated_at?: DateTimeFilter<"material_order"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    material?: XOR<MaterialScalarRelationFilter, materialWhereInput>
  }, "id">

  export type material_orderOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    material_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: material_orderCountOrderByAggregateInput
    _avg?: material_orderAvgOrderByAggregateInput
    _max?: material_orderMaxOrderByAggregateInput
    _min?: material_orderMinOrderByAggregateInput
    _sum?: material_orderSumOrderByAggregateInput
  }

  export type material_orderScalarWhereWithAggregatesInput = {
    AND?: material_orderScalarWhereWithAggregatesInput | material_orderScalarWhereWithAggregatesInput[]
    OR?: material_orderScalarWhereWithAggregatesInput[]
    NOT?: material_orderScalarWhereWithAggregatesInput | material_orderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"material_order"> | string
    user_id?: StringWithAggregatesFilter<"material_order"> | string
    material_id?: StringWithAggregatesFilter<"material_order"> | string
    quantity?: FloatWithAggregatesFilter<"material_order"> | number
    total_price?: FloatWithAggregatesFilter<"material_order"> | number
    status?: Enumorder_statusWithAggregatesFilter<"material_order"> | $Enums.order_status
    created_at?: DateTimeWithAggregatesFilter<"material_order"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"material_order"> | Date | string
  }

  export type testimonialWhereInput = {
    AND?: testimonialWhereInput | testimonialWhereInput[]
    OR?: testimonialWhereInput[]
    NOT?: testimonialWhereInput | testimonialWhereInput[]
    id?: StringFilter<"testimonial"> | string
    name?: StringFilter<"testimonial"> | string
    position?: StringNullableFilter<"testimonial"> | string | null
    company?: StringNullableFilter<"testimonial"> | string | null
    content?: StringFilter<"testimonial"> | string
    rating?: IntFilter<"testimonial"> | number
    is_featured?: BoolFilter<"testimonial"> | boolean
    created_at?: DateTimeFilter<"testimonial"> | Date | string
  }

  export type testimonialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    content?: SortOrder
    rating?: SortOrder
    is_featured?: SortOrder
    created_at?: SortOrder
  }

  export type testimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: testimonialWhereInput | testimonialWhereInput[]
    OR?: testimonialWhereInput[]
    NOT?: testimonialWhereInput | testimonialWhereInput[]
    name?: StringFilter<"testimonial"> | string
    position?: StringNullableFilter<"testimonial"> | string | null
    company?: StringNullableFilter<"testimonial"> | string | null
    content?: StringFilter<"testimonial"> | string
    rating?: IntFilter<"testimonial"> | number
    is_featured?: BoolFilter<"testimonial"> | boolean
    created_at?: DateTimeFilter<"testimonial"> | Date | string
  }, "id">

  export type testimonialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    content?: SortOrder
    rating?: SortOrder
    is_featured?: SortOrder
    created_at?: SortOrder
    _count?: testimonialCountOrderByAggregateInput
    _avg?: testimonialAvgOrderByAggregateInput
    _max?: testimonialMaxOrderByAggregateInput
    _min?: testimonialMinOrderByAggregateInput
    _sum?: testimonialSumOrderByAggregateInput
  }

  export type testimonialScalarWhereWithAggregatesInput = {
    AND?: testimonialScalarWhereWithAggregatesInput | testimonialScalarWhereWithAggregatesInput[]
    OR?: testimonialScalarWhereWithAggregatesInput[]
    NOT?: testimonialScalarWhereWithAggregatesInput | testimonialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"testimonial"> | string
    name?: StringWithAggregatesFilter<"testimonial"> | string
    position?: StringNullableWithAggregatesFilter<"testimonial"> | string | null
    company?: StringNullableWithAggregatesFilter<"testimonial"> | string | null
    content?: StringWithAggregatesFilter<"testimonial"> | string
    rating?: IntWithAggregatesFilter<"testimonial"> | number
    is_featured?: BoolWithAggregatesFilter<"testimonial"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"testimonial"> | Date | string
  }

  export type userCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider?: string | null
    date_joined?: Date | string
    time?: string | null
    region?: string | null
    country?: string | null
    last_seen?: Date | string | null
    two_step_enabled?: boolean
    profile_image?: string | null
    role?: $Enums.user_role
    login_activities?: login_activityCreateNestedManyWithoutUserInput
    projects?: projectCreateNestedManyWithoutUserInput
    cad_drawings?: cad_drawingCreateNestedManyWithoutUserInput
    material_orders?: material_orderCreateNestedManyWithoutUserInput
    settings?: user_settingsCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider?: string | null
    date_joined?: Date | string
    time?: string | null
    region?: string | null
    country?: string | null
    last_seen?: Date | string | null
    two_step_enabled?: boolean
    profile_image?: string | null
    role?: $Enums.user_role
    login_activities?: login_activityUncheckedCreateNestedManyWithoutUserInput
    projects?: projectUncheckedCreateNestedManyWithoutUserInput
    cad_drawings?: cad_drawingUncheckedCreateNestedManyWithoutUserInput
    material_orders?: material_orderUncheckedCreateNestedManyWithoutUserInput
    settings?: user_settingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_step_enabled?: BoolFieldUpdateOperationsInput | boolean
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    login_activities?: login_activityUpdateManyWithoutUserNestedInput
    projects?: projectUpdateManyWithoutUserNestedInput
    cad_drawings?: cad_drawingUpdateManyWithoutUserNestedInput
    material_orders?: material_orderUpdateManyWithoutUserNestedInput
    settings?: user_settingsUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_step_enabled?: BoolFieldUpdateOperationsInput | boolean
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    login_activities?: login_activityUncheckedUpdateManyWithoutUserNestedInput
    projects?: projectUncheckedUpdateManyWithoutUserNestedInput
    cad_drawings?: cad_drawingUncheckedUpdateManyWithoutUserNestedInput
    material_orders?: material_orderUncheckedUpdateManyWithoutUserNestedInput
    settings?: user_settingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider?: string | null
    date_joined?: Date | string
    time?: string | null
    region?: string | null
    country?: string | null
    last_seen?: Date | string | null
    two_step_enabled?: boolean
    profile_image?: string | null
    role?: $Enums.user_role
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_step_enabled?: BoolFieldUpdateOperationsInput | boolean
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_step_enabled?: BoolFieldUpdateOperationsInput | boolean
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
  }

  export type user_settingsCreateInput = {
    id?: string
    enable_notifications?: boolean
    notify_material_changes?: boolean
    notify_system_updates?: boolean
    theme?: string | null
    language?: string | null
    user: userCreateNestedOneWithoutSettingsInput
  }

  export type user_settingsUncheckedCreateInput = {
    id?: string
    user_id: string
    enable_notifications?: boolean
    notify_material_changes?: boolean
    notify_system_updates?: boolean
    theme?: string | null
    language?: string | null
  }

  export type user_settingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enable_notifications?: BoolFieldUpdateOperationsInput | boolean
    notify_material_changes?: BoolFieldUpdateOperationsInput | boolean
    notify_system_updates?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type user_settingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    enable_notifications?: BoolFieldUpdateOperationsInput | boolean
    notify_material_changes?: BoolFieldUpdateOperationsInput | boolean
    notify_system_updates?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_settingsCreateManyInput = {
    id?: string
    user_id: string
    enable_notifications?: boolean
    notify_material_changes?: boolean
    notify_system_updates?: boolean
    theme?: string | null
    language?: string | null
  }

  export type user_settingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    enable_notifications?: BoolFieldUpdateOperationsInput | boolean
    notify_material_changes?: BoolFieldUpdateOperationsInput | boolean
    notify_system_updates?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_settingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    enable_notifications?: BoolFieldUpdateOperationsInput | boolean
    notify_material_changes?: BoolFieldUpdateOperationsInput | boolean
    notify_system_updates?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type login_activityCreateInput = {
    id?: string
    login_time?: Date | string
    status: $Enums.login_status
    ip_address?: string | null
    device_info?: string | null
    location?: string | null
    user: userCreateNestedOneWithoutLogin_activitiesInput
  }

  export type login_activityUncheckedCreateInput = {
    id?: string
    user_id: string
    login_time?: Date | string
    status: $Enums.login_status
    ip_address?: string | null
    device_info?: string | null
    location?: string | null
  }

  export type login_activityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    login_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumlogin_statusFieldUpdateOperationsInput | $Enums.login_status
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutLogin_activitiesNestedInput
  }

  export type login_activityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    login_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumlogin_statusFieldUpdateOperationsInput | $Enums.login_status
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type login_activityCreateManyInput = {
    id?: string
    user_id: string
    login_time?: Date | string
    status: $Enums.login_status
    ip_address?: string | null
    device_info?: string | null
    location?: string | null
  }

  export type login_activityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    login_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumlogin_statusFieldUpdateOperationsInput | $Enums.login_status
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type login_activityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    login_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumlogin_statusFieldUpdateOperationsInput | $Enums.login_status
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutProjectsInput
    cad_drawings?: cad_drawingCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    cad_drawings?: cad_drawingUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProjectsNestedInput
    cad_drawings?: cad_drawingUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cad_drawings?: cad_drawingUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type projectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cad_drawingCreateInput = {
    id?: string
    name: string
    file_path: string
    uploaded_at?: Date | string
    project?: projectCreateNestedOneWithoutCad_drawingsInput
    user: userCreateNestedOneWithoutCad_drawingsInput
    measurements?: measurementCreateNestedManyWithoutDrawingInput
    materials?: material_needsCreateNestedManyWithoutDrawingInput
  }

  export type cad_drawingUncheckedCreateInput = {
    id?: string
    name: string
    file_path: string
    project_id?: string | null
    user_id: string
    uploaded_at?: Date | string
    measurements?: measurementUncheckedCreateNestedManyWithoutDrawingInput
    materials?: material_needsUncheckedCreateNestedManyWithoutDrawingInput
  }

  export type cad_drawingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateOneWithoutCad_drawingsNestedInput
    user?: userUpdateOneRequiredWithoutCad_drawingsNestedInput
    measurements?: measurementUpdateManyWithoutDrawingNestedInput
    materials?: material_needsUpdateManyWithoutDrawingNestedInput
  }

  export type cad_drawingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    measurements?: measurementUncheckedUpdateManyWithoutDrawingNestedInput
    materials?: material_needsUncheckedUpdateManyWithoutDrawingNestedInput
  }

  export type cad_drawingCreateManyInput = {
    id?: string
    name: string
    file_path: string
    project_id?: string | null
    user_id: string
    uploaded_at?: Date | string
  }

  export type cad_drawingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cad_drawingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type measurementCreateInput = {
    id?: string
    measurement_type: string
    value: number
    unit: string
    x_coordinate?: number | null
    y_coordinate?: number | null
    created_at?: Date | string
    drawing: cad_drawingCreateNestedOneWithoutMeasurementsInput
  }

  export type measurementUncheckedCreateInput = {
    id?: string
    drawing_id: string
    measurement_type: string
    value: number
    unit: string
    x_coordinate?: number | null
    y_coordinate?: number | null
    created_at?: Date | string
  }

  export type measurementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    measurement_type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    x_coordinate?: NullableFloatFieldUpdateOperationsInput | number | null
    y_coordinate?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    drawing?: cad_drawingUpdateOneRequiredWithoutMeasurementsNestedInput
  }

  export type measurementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawing_id?: StringFieldUpdateOperationsInput | string
    measurement_type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    x_coordinate?: NullableFloatFieldUpdateOperationsInput | number | null
    y_coordinate?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type measurementCreateManyInput = {
    id?: string
    drawing_id: string
    measurement_type: string
    value: number
    unit: string
    x_coordinate?: number | null
    y_coordinate?: number | null
    created_at?: Date | string
  }

  export type measurementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    measurement_type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    x_coordinate?: NullableFloatFieldUpdateOperationsInput | number | null
    y_coordinate?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type measurementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawing_id?: StringFieldUpdateOperationsInput | string
    measurement_type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    x_coordinate?: NullableFloatFieldUpdateOperationsInput | number | null
    y_coordinate?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_needsCreateInput = {
    id?: string
    quantity: number
    unit: string
    created_at?: Date | string
    drawing: cad_drawingCreateNestedOneWithoutMaterialsInput
    material: materialCreateNestedOneWithoutMaterial_needsInput
  }

  export type material_needsUncheckedCreateInput = {
    id?: string
    drawing_id: string
    material_id: string
    quantity: number
    unit: string
    created_at?: Date | string
  }

  export type material_needsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    drawing?: cad_drawingUpdateOneRequiredWithoutMaterialsNestedInput
    material?: materialUpdateOneRequiredWithoutMaterial_needsNestedInput
  }

  export type material_needsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawing_id?: StringFieldUpdateOperationsInput | string
    material_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_needsCreateManyInput = {
    id?: string
    drawing_id: string
    material_id: string
    quantity: number
    unit: string
    created_at?: Date | string
  }

  export type material_needsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_needsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawing_id?: StringFieldUpdateOperationsInput | string
    material_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type materialCreateInput = {
    id?: string
    name: string
    description?: string | null
    unit_price: number
    currency?: string
    in_stock?: boolean
    material_needs?: material_needsCreateNestedManyWithoutMaterialInput
    material_orders?: material_orderCreateNestedManyWithoutMaterialInput
  }

  export type materialUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    unit_price: number
    currency?: string
    in_stock?: boolean
    material_needs?: material_needsUncheckedCreateNestedManyWithoutMaterialInput
    material_orders?: material_orderUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type materialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    in_stock?: BoolFieldUpdateOperationsInput | boolean
    material_needs?: material_needsUpdateManyWithoutMaterialNestedInput
    material_orders?: material_orderUpdateManyWithoutMaterialNestedInput
  }

  export type materialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    in_stock?: BoolFieldUpdateOperationsInput | boolean
    material_needs?: material_needsUncheckedUpdateManyWithoutMaterialNestedInput
    material_orders?: material_orderUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type materialCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    unit_price: number
    currency?: string
    in_stock?: boolean
  }

  export type materialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    in_stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type materialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    in_stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type material_orderCreateInput = {
    id?: string
    quantity: number
    total_price: number
    status?: $Enums.order_status
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutMaterial_ordersInput
    material: materialCreateNestedOneWithoutMaterial_ordersInput
  }

  export type material_orderUncheckedCreateInput = {
    id?: string
    user_id: string
    material_id: string
    quantity: number
    total_price: number
    status?: $Enums.order_status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type material_orderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutMaterial_ordersNestedInput
    material?: materialUpdateOneRequiredWithoutMaterial_ordersNestedInput
  }

  export type material_orderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    material_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_orderCreateManyInput = {
    id?: string
    user_id: string
    material_id: string
    quantity: number
    total_price: number
    status?: $Enums.order_status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type material_orderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_orderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    material_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testimonialCreateInput = {
    id?: string
    name: string
    position?: string | null
    company?: string | null
    content: string
    rating?: number
    is_featured?: boolean
    created_at?: Date | string
  }

  export type testimonialUncheckedCreateInput = {
    id?: string
    name: string
    position?: string | null
    company?: string | null
    content: string
    rating?: number
    is_featured?: boolean
    created_at?: Date | string
  }

  export type testimonialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    is_featured?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testimonialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    is_featured?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testimonialCreateManyInput = {
    id?: string
    name: string
    position?: string | null
    company?: string | null
    content: string
    rating?: number
    is_featured?: boolean
    created_at?: Date | string
  }

  export type testimonialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    is_featured?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testimonialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    is_featured?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type Login_activityListRelationFilter = {
    every?: login_activityWhereInput
    some?: login_activityWhereInput
    none?: login_activityWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: projectWhereInput
    some?: projectWhereInput
    none?: projectWhereInput
  }

  export type Cad_drawingListRelationFilter = {
    every?: cad_drawingWhereInput
    some?: cad_drawingWhereInput
    none?: cad_drawingWhereInput
  }

  export type Material_orderListRelationFilter = {
    every?: material_orderWhereInput
    some?: material_orderWhereInput
    none?: material_orderWhereInput
  }

  export type User_settingsNullableScalarRelationFilter = {
    is?: user_settingsWhereInput | null
    isNot?: user_settingsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type login_activityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cad_drawingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type material_orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    date_joined?: SortOrder
    time?: SortOrder
    region?: SortOrder
    country?: SortOrder
    last_seen?: SortOrder
    two_step_enabled?: SortOrder
    profile_image?: SortOrder
    role?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    date_joined?: SortOrder
    time?: SortOrder
    region?: SortOrder
    country?: SortOrder
    last_seen?: SortOrder
    two_step_enabled?: SortOrder
    profile_image?: SortOrder
    role?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    provider?: SortOrder
    date_joined?: SortOrder
    time?: SortOrder
    region?: SortOrder
    country?: SortOrder
    last_seen?: SortOrder
    two_step_enabled?: SortOrder
    profile_image?: SortOrder
    role?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type user_settingsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    enable_notifications?: SortOrder
    notify_material_changes?: SortOrder
    notify_system_updates?: SortOrder
    theme?: SortOrder
    language?: SortOrder
  }

  export type user_settingsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    enable_notifications?: SortOrder
    notify_material_changes?: SortOrder
    notify_system_updates?: SortOrder
    theme?: SortOrder
    language?: SortOrder
  }

  export type user_settingsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    enable_notifications?: SortOrder
    notify_material_changes?: SortOrder
    notify_system_updates?: SortOrder
    theme?: SortOrder
    language?: SortOrder
  }

  export type Enumlogin_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.login_status | Enumlogin_statusFieldRefInput<$PrismaModel>
    in?: $Enums.login_status[] | ListEnumlogin_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.login_status[] | ListEnumlogin_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumlogin_statusFilter<$PrismaModel> | $Enums.login_status
  }

  export type login_activityCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    login_time?: SortOrder
    status?: SortOrder
    ip_address?: SortOrder
    device_info?: SortOrder
    location?: SortOrder
  }

  export type login_activityMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    login_time?: SortOrder
    status?: SortOrder
    ip_address?: SortOrder
    device_info?: SortOrder
    location?: SortOrder
  }

  export type login_activityMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    login_time?: SortOrder
    status?: SortOrder
    ip_address?: SortOrder
    device_info?: SortOrder
    location?: SortOrder
  }

  export type Enumlogin_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.login_status | Enumlogin_statusFieldRefInput<$PrismaModel>
    in?: $Enums.login_status[] | ListEnumlogin_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.login_status[] | ListEnumlogin_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumlogin_statusWithAggregatesFilter<$PrismaModel> | $Enums.login_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumlogin_statusFilter<$PrismaModel>
    _max?: NestedEnumlogin_statusFilter<$PrismaModel>
  }

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: projectWhereInput | null
    isNot?: projectWhereInput | null
  }

  export type MeasurementListRelationFilter = {
    every?: measurementWhereInput
    some?: measurementWhereInput
    none?: measurementWhereInput
  }

  export type Material_needsListRelationFilter = {
    every?: material_needsWhereInput
    some?: material_needsWhereInput
    none?: material_needsWhereInput
  }

  export type measurementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type material_needsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cad_drawingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file_path?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
  }

  export type cad_drawingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file_path?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
  }

  export type cad_drawingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file_path?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Cad_drawingScalarRelationFilter = {
    is?: cad_drawingWhereInput
    isNot?: cad_drawingWhereInput
  }

  export type measurementCountOrderByAggregateInput = {
    id?: SortOrder
    drawing_id?: SortOrder
    measurement_type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    x_coordinate?: SortOrder
    y_coordinate?: SortOrder
    created_at?: SortOrder
  }

  export type measurementAvgOrderByAggregateInput = {
    value?: SortOrder
    x_coordinate?: SortOrder
    y_coordinate?: SortOrder
  }

  export type measurementMaxOrderByAggregateInput = {
    id?: SortOrder
    drawing_id?: SortOrder
    measurement_type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    x_coordinate?: SortOrder
    y_coordinate?: SortOrder
    created_at?: SortOrder
  }

  export type measurementMinOrderByAggregateInput = {
    id?: SortOrder
    drawing_id?: SortOrder
    measurement_type?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    x_coordinate?: SortOrder
    y_coordinate?: SortOrder
    created_at?: SortOrder
  }

  export type measurementSumOrderByAggregateInput = {
    value?: SortOrder
    x_coordinate?: SortOrder
    y_coordinate?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MaterialScalarRelationFilter = {
    is?: materialWhereInput
    isNot?: materialWhereInput
  }

  export type material_needsCountOrderByAggregateInput = {
    id?: SortOrder
    drawing_id?: SortOrder
    material_id?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    created_at?: SortOrder
  }

  export type material_needsAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type material_needsMaxOrderByAggregateInput = {
    id?: SortOrder
    drawing_id?: SortOrder
    material_id?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    created_at?: SortOrder
  }

  export type material_needsMinOrderByAggregateInput = {
    id?: SortOrder
    drawing_id?: SortOrder
    material_id?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    created_at?: SortOrder
  }

  export type material_needsSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type materialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit_price?: SortOrder
    currency?: SortOrder
    in_stock?: SortOrder
  }

  export type materialAvgOrderByAggregateInput = {
    unit_price?: SortOrder
  }

  export type materialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit_price?: SortOrder
    currency?: SortOrder
    in_stock?: SortOrder
  }

  export type materialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit_price?: SortOrder
    currency?: SortOrder
    in_stock?: SortOrder
  }

  export type materialSumOrderByAggregateInput = {
    unit_price?: SortOrder
  }

  export type Enumorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_statusFilter<$PrismaModel> | $Enums.order_status
  }

  export type material_orderCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    material_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type material_orderAvgOrderByAggregateInput = {
    quantity?: SortOrder
    total_price?: SortOrder
  }

  export type material_orderMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    material_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type material_orderMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    material_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type material_orderSumOrderByAggregateInput = {
    quantity?: SortOrder
    total_price?: SortOrder
  }

  export type Enumorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.order_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_statusFilter<$PrismaModel>
    _max?: NestedEnumorder_statusFilter<$PrismaModel>
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

  export type testimonialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    company?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    is_featured?: SortOrder
    created_at?: SortOrder
  }

  export type testimonialAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type testimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    company?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    is_featured?: SortOrder
    created_at?: SortOrder
  }

  export type testimonialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    company?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    is_featured?: SortOrder
    created_at?: SortOrder
  }

  export type testimonialSumOrderByAggregateInput = {
    rating?: SortOrder
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

  export type login_activityCreateNestedManyWithoutUserInput = {
    create?: XOR<login_activityCreateWithoutUserInput, login_activityUncheckedCreateWithoutUserInput> | login_activityCreateWithoutUserInput[] | login_activityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: login_activityCreateOrConnectWithoutUserInput | login_activityCreateOrConnectWithoutUserInput[]
    createMany?: login_activityCreateManyUserInputEnvelope
    connect?: login_activityWhereUniqueInput | login_activityWhereUniqueInput[]
  }

  export type projectCreateNestedManyWithoutUserInput = {
    create?: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput> | projectCreateWithoutUserInput[] | projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[]
    createMany?: projectCreateManyUserInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type cad_drawingCreateNestedManyWithoutUserInput = {
    create?: XOR<cad_drawingCreateWithoutUserInput, cad_drawingUncheckedCreateWithoutUserInput> | cad_drawingCreateWithoutUserInput[] | cad_drawingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cad_drawingCreateOrConnectWithoutUserInput | cad_drawingCreateOrConnectWithoutUserInput[]
    createMany?: cad_drawingCreateManyUserInputEnvelope
    connect?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
  }

  export type material_orderCreateNestedManyWithoutUserInput = {
    create?: XOR<material_orderCreateWithoutUserInput, material_orderUncheckedCreateWithoutUserInput> | material_orderCreateWithoutUserInput[] | material_orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: material_orderCreateOrConnectWithoutUserInput | material_orderCreateOrConnectWithoutUserInput[]
    createMany?: material_orderCreateManyUserInputEnvelope
    connect?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
  }

  export type user_settingsCreateNestedOneWithoutUserInput = {
    create?: XOR<user_settingsCreateWithoutUserInput, user_settingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_settingsCreateOrConnectWithoutUserInput
    connect?: user_settingsWhereUniqueInput
  }

  export type login_activityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<login_activityCreateWithoutUserInput, login_activityUncheckedCreateWithoutUserInput> | login_activityCreateWithoutUserInput[] | login_activityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: login_activityCreateOrConnectWithoutUserInput | login_activityCreateOrConnectWithoutUserInput[]
    createMany?: login_activityCreateManyUserInputEnvelope
    connect?: login_activityWhereUniqueInput | login_activityWhereUniqueInput[]
  }

  export type projectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput> | projectCreateWithoutUserInput[] | projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[]
    createMany?: projectCreateManyUserInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type cad_drawingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<cad_drawingCreateWithoutUserInput, cad_drawingUncheckedCreateWithoutUserInput> | cad_drawingCreateWithoutUserInput[] | cad_drawingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cad_drawingCreateOrConnectWithoutUserInput | cad_drawingCreateOrConnectWithoutUserInput[]
    createMany?: cad_drawingCreateManyUserInputEnvelope
    connect?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
  }

  export type material_orderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<material_orderCreateWithoutUserInput, material_orderUncheckedCreateWithoutUserInput> | material_orderCreateWithoutUserInput[] | material_orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: material_orderCreateOrConnectWithoutUserInput | material_orderCreateOrConnectWithoutUserInput[]
    createMany?: material_orderCreateManyUserInputEnvelope
    connect?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
  }

  export type user_settingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<user_settingsCreateWithoutUserInput, user_settingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_settingsCreateOrConnectWithoutUserInput
    connect?: user_settingsWhereUniqueInput
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type login_activityUpdateManyWithoutUserNestedInput = {
    create?: XOR<login_activityCreateWithoutUserInput, login_activityUncheckedCreateWithoutUserInput> | login_activityCreateWithoutUserInput[] | login_activityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: login_activityCreateOrConnectWithoutUserInput | login_activityCreateOrConnectWithoutUserInput[]
    upsert?: login_activityUpsertWithWhereUniqueWithoutUserInput | login_activityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: login_activityCreateManyUserInputEnvelope
    set?: login_activityWhereUniqueInput | login_activityWhereUniqueInput[]
    disconnect?: login_activityWhereUniqueInput | login_activityWhereUniqueInput[]
    delete?: login_activityWhereUniqueInput | login_activityWhereUniqueInput[]
    connect?: login_activityWhereUniqueInput | login_activityWhereUniqueInput[]
    update?: login_activityUpdateWithWhereUniqueWithoutUserInput | login_activityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: login_activityUpdateManyWithWhereWithoutUserInput | login_activityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: login_activityScalarWhereInput | login_activityScalarWhereInput[]
  }

  export type projectUpdateManyWithoutUserNestedInput = {
    create?: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput> | projectCreateWithoutUserInput[] | projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutUserInput | projectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: projectCreateManyUserInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutUserInput | projectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: projectUpdateManyWithWhereWithoutUserInput | projectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type cad_drawingUpdateManyWithoutUserNestedInput = {
    create?: XOR<cad_drawingCreateWithoutUserInput, cad_drawingUncheckedCreateWithoutUserInput> | cad_drawingCreateWithoutUserInput[] | cad_drawingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cad_drawingCreateOrConnectWithoutUserInput | cad_drawingCreateOrConnectWithoutUserInput[]
    upsert?: cad_drawingUpsertWithWhereUniqueWithoutUserInput | cad_drawingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cad_drawingCreateManyUserInputEnvelope
    set?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    disconnect?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    delete?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    connect?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    update?: cad_drawingUpdateWithWhereUniqueWithoutUserInput | cad_drawingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cad_drawingUpdateManyWithWhereWithoutUserInput | cad_drawingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cad_drawingScalarWhereInput | cad_drawingScalarWhereInput[]
  }

  export type material_orderUpdateManyWithoutUserNestedInput = {
    create?: XOR<material_orderCreateWithoutUserInput, material_orderUncheckedCreateWithoutUserInput> | material_orderCreateWithoutUserInput[] | material_orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: material_orderCreateOrConnectWithoutUserInput | material_orderCreateOrConnectWithoutUserInput[]
    upsert?: material_orderUpsertWithWhereUniqueWithoutUserInput | material_orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: material_orderCreateManyUserInputEnvelope
    set?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    disconnect?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    delete?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    connect?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    update?: material_orderUpdateWithWhereUniqueWithoutUserInput | material_orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: material_orderUpdateManyWithWhereWithoutUserInput | material_orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: material_orderScalarWhereInput | material_orderScalarWhereInput[]
  }

  export type user_settingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<user_settingsCreateWithoutUserInput, user_settingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_settingsCreateOrConnectWithoutUserInput
    upsert?: user_settingsUpsertWithoutUserInput
    disconnect?: user_settingsWhereInput | boolean
    delete?: user_settingsWhereInput | boolean
    connect?: user_settingsWhereUniqueInput
    update?: XOR<XOR<user_settingsUpdateToOneWithWhereWithoutUserInput, user_settingsUpdateWithoutUserInput>, user_settingsUncheckedUpdateWithoutUserInput>
  }

  export type login_activityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<login_activityCreateWithoutUserInput, login_activityUncheckedCreateWithoutUserInput> | login_activityCreateWithoutUserInput[] | login_activityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: login_activityCreateOrConnectWithoutUserInput | login_activityCreateOrConnectWithoutUserInput[]
    upsert?: login_activityUpsertWithWhereUniqueWithoutUserInput | login_activityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: login_activityCreateManyUserInputEnvelope
    set?: login_activityWhereUniqueInput | login_activityWhereUniqueInput[]
    disconnect?: login_activityWhereUniqueInput | login_activityWhereUniqueInput[]
    delete?: login_activityWhereUniqueInput | login_activityWhereUniqueInput[]
    connect?: login_activityWhereUniqueInput | login_activityWhereUniqueInput[]
    update?: login_activityUpdateWithWhereUniqueWithoutUserInput | login_activityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: login_activityUpdateManyWithWhereWithoutUserInput | login_activityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: login_activityScalarWhereInput | login_activityScalarWhereInput[]
  }

  export type projectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput> | projectCreateWithoutUserInput[] | projectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutUserInput | projectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: projectCreateManyUserInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutUserInput | projectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: projectUpdateManyWithWhereWithoutUserInput | projectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type cad_drawingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<cad_drawingCreateWithoutUserInput, cad_drawingUncheckedCreateWithoutUserInput> | cad_drawingCreateWithoutUserInput[] | cad_drawingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cad_drawingCreateOrConnectWithoutUserInput | cad_drawingCreateOrConnectWithoutUserInput[]
    upsert?: cad_drawingUpsertWithWhereUniqueWithoutUserInput | cad_drawingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cad_drawingCreateManyUserInputEnvelope
    set?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    disconnect?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    delete?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    connect?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    update?: cad_drawingUpdateWithWhereUniqueWithoutUserInput | cad_drawingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cad_drawingUpdateManyWithWhereWithoutUserInput | cad_drawingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cad_drawingScalarWhereInput | cad_drawingScalarWhereInput[]
  }

  export type material_orderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<material_orderCreateWithoutUserInput, material_orderUncheckedCreateWithoutUserInput> | material_orderCreateWithoutUserInput[] | material_orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: material_orderCreateOrConnectWithoutUserInput | material_orderCreateOrConnectWithoutUserInput[]
    upsert?: material_orderUpsertWithWhereUniqueWithoutUserInput | material_orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: material_orderCreateManyUserInputEnvelope
    set?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    disconnect?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    delete?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    connect?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    update?: material_orderUpdateWithWhereUniqueWithoutUserInput | material_orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: material_orderUpdateManyWithWhereWithoutUserInput | material_orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: material_orderScalarWhereInput | material_orderScalarWhereInput[]
  }

  export type user_settingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<user_settingsCreateWithoutUserInput, user_settingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_settingsCreateOrConnectWithoutUserInput
    upsert?: user_settingsUpsertWithoutUserInput
    disconnect?: user_settingsWhereInput | boolean
    delete?: user_settingsWhereInput | boolean
    connect?: user_settingsWhereUniqueInput
    update?: XOR<XOR<user_settingsUpdateToOneWithWhereWithoutUserInput, user_settingsUpdateWithoutUserInput>, user_settingsUncheckedUpdateWithoutUserInput>
  }

  export type userCreateNestedOneWithoutSettingsInput = {
    create?: XOR<userCreateWithoutSettingsInput, userUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: userCreateOrConnectWithoutSettingsInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<userCreateWithoutSettingsInput, userUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: userCreateOrConnectWithoutSettingsInput
    upsert?: userUpsertWithoutSettingsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSettingsInput, userUpdateWithoutSettingsInput>, userUncheckedUpdateWithoutSettingsInput>
  }

  export type userCreateNestedOneWithoutLogin_activitiesInput = {
    create?: XOR<userCreateWithoutLogin_activitiesInput, userUncheckedCreateWithoutLogin_activitiesInput>
    connectOrCreate?: userCreateOrConnectWithoutLogin_activitiesInput
    connect?: userWhereUniqueInput
  }

  export type Enumlogin_statusFieldUpdateOperationsInput = {
    set?: $Enums.login_status
  }

  export type userUpdateOneRequiredWithoutLogin_activitiesNestedInput = {
    create?: XOR<userCreateWithoutLogin_activitiesInput, userUncheckedCreateWithoutLogin_activitiesInput>
    connectOrCreate?: userCreateOrConnectWithoutLogin_activitiesInput
    upsert?: userUpsertWithoutLogin_activitiesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLogin_activitiesInput, userUpdateWithoutLogin_activitiesInput>, userUncheckedUpdateWithoutLogin_activitiesInput>
  }

  export type userCreateNestedOneWithoutProjectsInput = {
    create?: XOR<userCreateWithoutProjectsInput, userUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: userCreateOrConnectWithoutProjectsInput
    connect?: userWhereUniqueInput
  }

  export type cad_drawingCreateNestedManyWithoutProjectInput = {
    create?: XOR<cad_drawingCreateWithoutProjectInput, cad_drawingUncheckedCreateWithoutProjectInput> | cad_drawingCreateWithoutProjectInput[] | cad_drawingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: cad_drawingCreateOrConnectWithoutProjectInput | cad_drawingCreateOrConnectWithoutProjectInput[]
    createMany?: cad_drawingCreateManyProjectInputEnvelope
    connect?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
  }

  export type cad_drawingUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<cad_drawingCreateWithoutProjectInput, cad_drawingUncheckedCreateWithoutProjectInput> | cad_drawingCreateWithoutProjectInput[] | cad_drawingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: cad_drawingCreateOrConnectWithoutProjectInput | cad_drawingCreateOrConnectWithoutProjectInput[]
    createMany?: cad_drawingCreateManyProjectInputEnvelope
    connect?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<userCreateWithoutProjectsInput, userUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: userCreateOrConnectWithoutProjectsInput
    upsert?: userUpsertWithoutProjectsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutProjectsInput, userUpdateWithoutProjectsInput>, userUncheckedUpdateWithoutProjectsInput>
  }

  export type cad_drawingUpdateManyWithoutProjectNestedInput = {
    create?: XOR<cad_drawingCreateWithoutProjectInput, cad_drawingUncheckedCreateWithoutProjectInput> | cad_drawingCreateWithoutProjectInput[] | cad_drawingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: cad_drawingCreateOrConnectWithoutProjectInput | cad_drawingCreateOrConnectWithoutProjectInput[]
    upsert?: cad_drawingUpsertWithWhereUniqueWithoutProjectInput | cad_drawingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: cad_drawingCreateManyProjectInputEnvelope
    set?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    disconnect?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    delete?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    connect?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    update?: cad_drawingUpdateWithWhereUniqueWithoutProjectInput | cad_drawingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: cad_drawingUpdateManyWithWhereWithoutProjectInput | cad_drawingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: cad_drawingScalarWhereInput | cad_drawingScalarWhereInput[]
  }

  export type cad_drawingUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<cad_drawingCreateWithoutProjectInput, cad_drawingUncheckedCreateWithoutProjectInput> | cad_drawingCreateWithoutProjectInput[] | cad_drawingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: cad_drawingCreateOrConnectWithoutProjectInput | cad_drawingCreateOrConnectWithoutProjectInput[]
    upsert?: cad_drawingUpsertWithWhereUniqueWithoutProjectInput | cad_drawingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: cad_drawingCreateManyProjectInputEnvelope
    set?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    disconnect?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    delete?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    connect?: cad_drawingWhereUniqueInput | cad_drawingWhereUniqueInput[]
    update?: cad_drawingUpdateWithWhereUniqueWithoutProjectInput | cad_drawingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: cad_drawingUpdateManyWithWhereWithoutProjectInput | cad_drawingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: cad_drawingScalarWhereInput | cad_drawingScalarWhereInput[]
  }

  export type projectCreateNestedOneWithoutCad_drawingsInput = {
    create?: XOR<projectCreateWithoutCad_drawingsInput, projectUncheckedCreateWithoutCad_drawingsInput>
    connectOrCreate?: projectCreateOrConnectWithoutCad_drawingsInput
    connect?: projectWhereUniqueInput
  }

  export type userCreateNestedOneWithoutCad_drawingsInput = {
    create?: XOR<userCreateWithoutCad_drawingsInput, userUncheckedCreateWithoutCad_drawingsInput>
    connectOrCreate?: userCreateOrConnectWithoutCad_drawingsInput
    connect?: userWhereUniqueInput
  }

  export type measurementCreateNestedManyWithoutDrawingInput = {
    create?: XOR<measurementCreateWithoutDrawingInput, measurementUncheckedCreateWithoutDrawingInput> | measurementCreateWithoutDrawingInput[] | measurementUncheckedCreateWithoutDrawingInput[]
    connectOrCreate?: measurementCreateOrConnectWithoutDrawingInput | measurementCreateOrConnectWithoutDrawingInput[]
    createMany?: measurementCreateManyDrawingInputEnvelope
    connect?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
  }

  export type material_needsCreateNestedManyWithoutDrawingInput = {
    create?: XOR<material_needsCreateWithoutDrawingInput, material_needsUncheckedCreateWithoutDrawingInput> | material_needsCreateWithoutDrawingInput[] | material_needsUncheckedCreateWithoutDrawingInput[]
    connectOrCreate?: material_needsCreateOrConnectWithoutDrawingInput | material_needsCreateOrConnectWithoutDrawingInput[]
    createMany?: material_needsCreateManyDrawingInputEnvelope
    connect?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
  }

  export type measurementUncheckedCreateNestedManyWithoutDrawingInput = {
    create?: XOR<measurementCreateWithoutDrawingInput, measurementUncheckedCreateWithoutDrawingInput> | measurementCreateWithoutDrawingInput[] | measurementUncheckedCreateWithoutDrawingInput[]
    connectOrCreate?: measurementCreateOrConnectWithoutDrawingInput | measurementCreateOrConnectWithoutDrawingInput[]
    createMany?: measurementCreateManyDrawingInputEnvelope
    connect?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
  }

  export type material_needsUncheckedCreateNestedManyWithoutDrawingInput = {
    create?: XOR<material_needsCreateWithoutDrawingInput, material_needsUncheckedCreateWithoutDrawingInput> | material_needsCreateWithoutDrawingInput[] | material_needsUncheckedCreateWithoutDrawingInput[]
    connectOrCreate?: material_needsCreateOrConnectWithoutDrawingInput | material_needsCreateOrConnectWithoutDrawingInput[]
    createMany?: material_needsCreateManyDrawingInputEnvelope
    connect?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
  }

  export type projectUpdateOneWithoutCad_drawingsNestedInput = {
    create?: XOR<projectCreateWithoutCad_drawingsInput, projectUncheckedCreateWithoutCad_drawingsInput>
    connectOrCreate?: projectCreateOrConnectWithoutCad_drawingsInput
    upsert?: projectUpsertWithoutCad_drawingsInput
    disconnect?: projectWhereInput | boolean
    delete?: projectWhereInput | boolean
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutCad_drawingsInput, projectUpdateWithoutCad_drawingsInput>, projectUncheckedUpdateWithoutCad_drawingsInput>
  }

  export type userUpdateOneRequiredWithoutCad_drawingsNestedInput = {
    create?: XOR<userCreateWithoutCad_drawingsInput, userUncheckedCreateWithoutCad_drawingsInput>
    connectOrCreate?: userCreateOrConnectWithoutCad_drawingsInput
    upsert?: userUpsertWithoutCad_drawingsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCad_drawingsInput, userUpdateWithoutCad_drawingsInput>, userUncheckedUpdateWithoutCad_drawingsInput>
  }

  export type measurementUpdateManyWithoutDrawingNestedInput = {
    create?: XOR<measurementCreateWithoutDrawingInput, measurementUncheckedCreateWithoutDrawingInput> | measurementCreateWithoutDrawingInput[] | measurementUncheckedCreateWithoutDrawingInput[]
    connectOrCreate?: measurementCreateOrConnectWithoutDrawingInput | measurementCreateOrConnectWithoutDrawingInput[]
    upsert?: measurementUpsertWithWhereUniqueWithoutDrawingInput | measurementUpsertWithWhereUniqueWithoutDrawingInput[]
    createMany?: measurementCreateManyDrawingInputEnvelope
    set?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    disconnect?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    delete?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    connect?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    update?: measurementUpdateWithWhereUniqueWithoutDrawingInput | measurementUpdateWithWhereUniqueWithoutDrawingInput[]
    updateMany?: measurementUpdateManyWithWhereWithoutDrawingInput | measurementUpdateManyWithWhereWithoutDrawingInput[]
    deleteMany?: measurementScalarWhereInput | measurementScalarWhereInput[]
  }

  export type material_needsUpdateManyWithoutDrawingNestedInput = {
    create?: XOR<material_needsCreateWithoutDrawingInput, material_needsUncheckedCreateWithoutDrawingInput> | material_needsCreateWithoutDrawingInput[] | material_needsUncheckedCreateWithoutDrawingInput[]
    connectOrCreate?: material_needsCreateOrConnectWithoutDrawingInput | material_needsCreateOrConnectWithoutDrawingInput[]
    upsert?: material_needsUpsertWithWhereUniqueWithoutDrawingInput | material_needsUpsertWithWhereUniqueWithoutDrawingInput[]
    createMany?: material_needsCreateManyDrawingInputEnvelope
    set?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    disconnect?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    delete?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    connect?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    update?: material_needsUpdateWithWhereUniqueWithoutDrawingInput | material_needsUpdateWithWhereUniqueWithoutDrawingInput[]
    updateMany?: material_needsUpdateManyWithWhereWithoutDrawingInput | material_needsUpdateManyWithWhereWithoutDrawingInput[]
    deleteMany?: material_needsScalarWhereInput | material_needsScalarWhereInput[]
  }

  export type measurementUncheckedUpdateManyWithoutDrawingNestedInput = {
    create?: XOR<measurementCreateWithoutDrawingInput, measurementUncheckedCreateWithoutDrawingInput> | measurementCreateWithoutDrawingInput[] | measurementUncheckedCreateWithoutDrawingInput[]
    connectOrCreate?: measurementCreateOrConnectWithoutDrawingInput | measurementCreateOrConnectWithoutDrawingInput[]
    upsert?: measurementUpsertWithWhereUniqueWithoutDrawingInput | measurementUpsertWithWhereUniqueWithoutDrawingInput[]
    createMany?: measurementCreateManyDrawingInputEnvelope
    set?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    disconnect?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    delete?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    connect?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    update?: measurementUpdateWithWhereUniqueWithoutDrawingInput | measurementUpdateWithWhereUniqueWithoutDrawingInput[]
    updateMany?: measurementUpdateManyWithWhereWithoutDrawingInput | measurementUpdateManyWithWhereWithoutDrawingInput[]
    deleteMany?: measurementScalarWhereInput | measurementScalarWhereInput[]
  }

  export type material_needsUncheckedUpdateManyWithoutDrawingNestedInput = {
    create?: XOR<material_needsCreateWithoutDrawingInput, material_needsUncheckedCreateWithoutDrawingInput> | material_needsCreateWithoutDrawingInput[] | material_needsUncheckedCreateWithoutDrawingInput[]
    connectOrCreate?: material_needsCreateOrConnectWithoutDrawingInput | material_needsCreateOrConnectWithoutDrawingInput[]
    upsert?: material_needsUpsertWithWhereUniqueWithoutDrawingInput | material_needsUpsertWithWhereUniqueWithoutDrawingInput[]
    createMany?: material_needsCreateManyDrawingInputEnvelope
    set?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    disconnect?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    delete?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    connect?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    update?: material_needsUpdateWithWhereUniqueWithoutDrawingInput | material_needsUpdateWithWhereUniqueWithoutDrawingInput[]
    updateMany?: material_needsUpdateManyWithWhereWithoutDrawingInput | material_needsUpdateManyWithWhereWithoutDrawingInput[]
    deleteMany?: material_needsScalarWhereInput | material_needsScalarWhereInput[]
  }

  export type cad_drawingCreateNestedOneWithoutMeasurementsInput = {
    create?: XOR<cad_drawingCreateWithoutMeasurementsInput, cad_drawingUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: cad_drawingCreateOrConnectWithoutMeasurementsInput
    connect?: cad_drawingWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cad_drawingUpdateOneRequiredWithoutMeasurementsNestedInput = {
    create?: XOR<cad_drawingCreateWithoutMeasurementsInput, cad_drawingUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: cad_drawingCreateOrConnectWithoutMeasurementsInput
    upsert?: cad_drawingUpsertWithoutMeasurementsInput
    connect?: cad_drawingWhereUniqueInput
    update?: XOR<XOR<cad_drawingUpdateToOneWithWhereWithoutMeasurementsInput, cad_drawingUpdateWithoutMeasurementsInput>, cad_drawingUncheckedUpdateWithoutMeasurementsInput>
  }

  export type cad_drawingCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<cad_drawingCreateWithoutMaterialsInput, cad_drawingUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: cad_drawingCreateOrConnectWithoutMaterialsInput
    connect?: cad_drawingWhereUniqueInput
  }

  export type materialCreateNestedOneWithoutMaterial_needsInput = {
    create?: XOR<materialCreateWithoutMaterial_needsInput, materialUncheckedCreateWithoutMaterial_needsInput>
    connectOrCreate?: materialCreateOrConnectWithoutMaterial_needsInput
    connect?: materialWhereUniqueInput
  }

  export type cad_drawingUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<cad_drawingCreateWithoutMaterialsInput, cad_drawingUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: cad_drawingCreateOrConnectWithoutMaterialsInput
    upsert?: cad_drawingUpsertWithoutMaterialsInput
    connect?: cad_drawingWhereUniqueInput
    update?: XOR<XOR<cad_drawingUpdateToOneWithWhereWithoutMaterialsInput, cad_drawingUpdateWithoutMaterialsInput>, cad_drawingUncheckedUpdateWithoutMaterialsInput>
  }

  export type materialUpdateOneRequiredWithoutMaterial_needsNestedInput = {
    create?: XOR<materialCreateWithoutMaterial_needsInput, materialUncheckedCreateWithoutMaterial_needsInput>
    connectOrCreate?: materialCreateOrConnectWithoutMaterial_needsInput
    upsert?: materialUpsertWithoutMaterial_needsInput
    connect?: materialWhereUniqueInput
    update?: XOR<XOR<materialUpdateToOneWithWhereWithoutMaterial_needsInput, materialUpdateWithoutMaterial_needsInput>, materialUncheckedUpdateWithoutMaterial_needsInput>
  }

  export type material_needsCreateNestedManyWithoutMaterialInput = {
    create?: XOR<material_needsCreateWithoutMaterialInput, material_needsUncheckedCreateWithoutMaterialInput> | material_needsCreateWithoutMaterialInput[] | material_needsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: material_needsCreateOrConnectWithoutMaterialInput | material_needsCreateOrConnectWithoutMaterialInput[]
    createMany?: material_needsCreateManyMaterialInputEnvelope
    connect?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
  }

  export type material_orderCreateNestedManyWithoutMaterialInput = {
    create?: XOR<material_orderCreateWithoutMaterialInput, material_orderUncheckedCreateWithoutMaterialInput> | material_orderCreateWithoutMaterialInput[] | material_orderUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: material_orderCreateOrConnectWithoutMaterialInput | material_orderCreateOrConnectWithoutMaterialInput[]
    createMany?: material_orderCreateManyMaterialInputEnvelope
    connect?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
  }

  export type material_needsUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<material_needsCreateWithoutMaterialInput, material_needsUncheckedCreateWithoutMaterialInput> | material_needsCreateWithoutMaterialInput[] | material_needsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: material_needsCreateOrConnectWithoutMaterialInput | material_needsCreateOrConnectWithoutMaterialInput[]
    createMany?: material_needsCreateManyMaterialInputEnvelope
    connect?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
  }

  export type material_orderUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<material_orderCreateWithoutMaterialInput, material_orderUncheckedCreateWithoutMaterialInput> | material_orderCreateWithoutMaterialInput[] | material_orderUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: material_orderCreateOrConnectWithoutMaterialInput | material_orderCreateOrConnectWithoutMaterialInput[]
    createMany?: material_orderCreateManyMaterialInputEnvelope
    connect?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
  }

  export type material_needsUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<material_needsCreateWithoutMaterialInput, material_needsUncheckedCreateWithoutMaterialInput> | material_needsCreateWithoutMaterialInput[] | material_needsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: material_needsCreateOrConnectWithoutMaterialInput | material_needsCreateOrConnectWithoutMaterialInput[]
    upsert?: material_needsUpsertWithWhereUniqueWithoutMaterialInput | material_needsUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: material_needsCreateManyMaterialInputEnvelope
    set?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    disconnect?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    delete?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    connect?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    update?: material_needsUpdateWithWhereUniqueWithoutMaterialInput | material_needsUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: material_needsUpdateManyWithWhereWithoutMaterialInput | material_needsUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: material_needsScalarWhereInput | material_needsScalarWhereInput[]
  }

  export type material_orderUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<material_orderCreateWithoutMaterialInput, material_orderUncheckedCreateWithoutMaterialInput> | material_orderCreateWithoutMaterialInput[] | material_orderUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: material_orderCreateOrConnectWithoutMaterialInput | material_orderCreateOrConnectWithoutMaterialInput[]
    upsert?: material_orderUpsertWithWhereUniqueWithoutMaterialInput | material_orderUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: material_orderCreateManyMaterialInputEnvelope
    set?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    disconnect?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    delete?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    connect?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    update?: material_orderUpdateWithWhereUniqueWithoutMaterialInput | material_orderUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: material_orderUpdateManyWithWhereWithoutMaterialInput | material_orderUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: material_orderScalarWhereInput | material_orderScalarWhereInput[]
  }

  export type material_needsUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<material_needsCreateWithoutMaterialInput, material_needsUncheckedCreateWithoutMaterialInput> | material_needsCreateWithoutMaterialInput[] | material_needsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: material_needsCreateOrConnectWithoutMaterialInput | material_needsCreateOrConnectWithoutMaterialInput[]
    upsert?: material_needsUpsertWithWhereUniqueWithoutMaterialInput | material_needsUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: material_needsCreateManyMaterialInputEnvelope
    set?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    disconnect?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    delete?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    connect?: material_needsWhereUniqueInput | material_needsWhereUniqueInput[]
    update?: material_needsUpdateWithWhereUniqueWithoutMaterialInput | material_needsUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: material_needsUpdateManyWithWhereWithoutMaterialInput | material_needsUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: material_needsScalarWhereInput | material_needsScalarWhereInput[]
  }

  export type material_orderUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<material_orderCreateWithoutMaterialInput, material_orderUncheckedCreateWithoutMaterialInput> | material_orderCreateWithoutMaterialInput[] | material_orderUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: material_orderCreateOrConnectWithoutMaterialInput | material_orderCreateOrConnectWithoutMaterialInput[]
    upsert?: material_orderUpsertWithWhereUniqueWithoutMaterialInput | material_orderUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: material_orderCreateManyMaterialInputEnvelope
    set?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    disconnect?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    delete?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    connect?: material_orderWhereUniqueInput | material_orderWhereUniqueInput[]
    update?: material_orderUpdateWithWhereUniqueWithoutMaterialInput | material_orderUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: material_orderUpdateManyWithWhereWithoutMaterialInput | material_orderUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: material_orderScalarWhereInput | material_orderScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutMaterial_ordersInput = {
    create?: XOR<userCreateWithoutMaterial_ordersInput, userUncheckedCreateWithoutMaterial_ordersInput>
    connectOrCreate?: userCreateOrConnectWithoutMaterial_ordersInput
    connect?: userWhereUniqueInput
  }

  export type materialCreateNestedOneWithoutMaterial_ordersInput = {
    create?: XOR<materialCreateWithoutMaterial_ordersInput, materialUncheckedCreateWithoutMaterial_ordersInput>
    connectOrCreate?: materialCreateOrConnectWithoutMaterial_ordersInput
    connect?: materialWhereUniqueInput
  }

  export type Enumorder_statusFieldUpdateOperationsInput = {
    set?: $Enums.order_status
  }

  export type userUpdateOneRequiredWithoutMaterial_ordersNestedInput = {
    create?: XOR<userCreateWithoutMaterial_ordersInput, userUncheckedCreateWithoutMaterial_ordersInput>
    connectOrCreate?: userCreateOrConnectWithoutMaterial_ordersInput
    upsert?: userUpsertWithoutMaterial_ordersInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMaterial_ordersInput, userUpdateWithoutMaterial_ordersInput>, userUncheckedUpdateWithoutMaterial_ordersInput>
  }

  export type materialUpdateOneRequiredWithoutMaterial_ordersNestedInput = {
    create?: XOR<materialCreateWithoutMaterial_ordersInput, materialUncheckedCreateWithoutMaterial_ordersInput>
    connectOrCreate?: materialCreateOrConnectWithoutMaterial_ordersInput
    upsert?: materialUpsertWithoutMaterial_ordersInput
    connect?: materialWhereUniqueInput
    update?: XOR<XOR<materialUpdateToOneWithWhereWithoutMaterial_ordersInput, materialUpdateWithoutMaterial_ordersInput>, materialUncheckedUpdateWithoutMaterial_ordersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type NestedEnumlogin_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.login_status | Enumlogin_statusFieldRefInput<$PrismaModel>
    in?: $Enums.login_status[] | ListEnumlogin_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.login_status[] | ListEnumlogin_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumlogin_statusFilter<$PrismaModel> | $Enums.login_status
  }

  export type NestedEnumlogin_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.login_status | Enumlogin_statusFieldRefInput<$PrismaModel>
    in?: $Enums.login_status[] | ListEnumlogin_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.login_status[] | ListEnumlogin_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumlogin_statusWithAggregatesFilter<$PrismaModel> | $Enums.login_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumlogin_statusFilter<$PrismaModel>
    _max?: NestedEnumlogin_statusFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_statusFilter<$PrismaModel> | $Enums.order_status
  }

  export type NestedEnumorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.order_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_statusFilter<$PrismaModel>
    _max?: NestedEnumorder_statusFilter<$PrismaModel>
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

  export type login_activityCreateWithoutUserInput = {
    id?: string
    login_time?: Date | string
    status: $Enums.login_status
    ip_address?: string | null
    device_info?: string | null
    location?: string | null
  }

  export type login_activityUncheckedCreateWithoutUserInput = {
    id?: string
    login_time?: Date | string
    status: $Enums.login_status
    ip_address?: string | null
    device_info?: string | null
    location?: string | null
  }

  export type login_activityCreateOrConnectWithoutUserInput = {
    where: login_activityWhereUniqueInput
    create: XOR<login_activityCreateWithoutUserInput, login_activityUncheckedCreateWithoutUserInput>
  }

  export type login_activityCreateManyUserInputEnvelope = {
    data: login_activityCreateManyUserInput | login_activityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type projectCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cad_drawings?: cad_drawingCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cad_drawings?: cad_drawingUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutUserInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
  }

  export type projectCreateManyUserInputEnvelope = {
    data: projectCreateManyUserInput | projectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type cad_drawingCreateWithoutUserInput = {
    id?: string
    name: string
    file_path: string
    uploaded_at?: Date | string
    project?: projectCreateNestedOneWithoutCad_drawingsInput
    measurements?: measurementCreateNestedManyWithoutDrawingInput
    materials?: material_needsCreateNestedManyWithoutDrawingInput
  }

  export type cad_drawingUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    file_path: string
    project_id?: string | null
    uploaded_at?: Date | string
    measurements?: measurementUncheckedCreateNestedManyWithoutDrawingInput
    materials?: material_needsUncheckedCreateNestedManyWithoutDrawingInput
  }

  export type cad_drawingCreateOrConnectWithoutUserInput = {
    where: cad_drawingWhereUniqueInput
    create: XOR<cad_drawingCreateWithoutUserInput, cad_drawingUncheckedCreateWithoutUserInput>
  }

  export type cad_drawingCreateManyUserInputEnvelope = {
    data: cad_drawingCreateManyUserInput | cad_drawingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type material_orderCreateWithoutUserInput = {
    id?: string
    quantity: number
    total_price: number
    status?: $Enums.order_status
    created_at?: Date | string
    updated_at?: Date | string
    material: materialCreateNestedOneWithoutMaterial_ordersInput
  }

  export type material_orderUncheckedCreateWithoutUserInput = {
    id?: string
    material_id: string
    quantity: number
    total_price: number
    status?: $Enums.order_status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type material_orderCreateOrConnectWithoutUserInput = {
    where: material_orderWhereUniqueInput
    create: XOR<material_orderCreateWithoutUserInput, material_orderUncheckedCreateWithoutUserInput>
  }

  export type material_orderCreateManyUserInputEnvelope = {
    data: material_orderCreateManyUserInput | material_orderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_settingsCreateWithoutUserInput = {
    id?: string
    enable_notifications?: boolean
    notify_material_changes?: boolean
    notify_system_updates?: boolean
    theme?: string | null
    language?: string | null
  }

  export type user_settingsUncheckedCreateWithoutUserInput = {
    id?: string
    enable_notifications?: boolean
    notify_material_changes?: boolean
    notify_system_updates?: boolean
    theme?: string | null
    language?: string | null
  }

  export type user_settingsCreateOrConnectWithoutUserInput = {
    where: user_settingsWhereUniqueInput
    create: XOR<user_settingsCreateWithoutUserInput, user_settingsUncheckedCreateWithoutUserInput>
  }

  export type login_activityUpsertWithWhereUniqueWithoutUserInput = {
    where: login_activityWhereUniqueInput
    update: XOR<login_activityUpdateWithoutUserInput, login_activityUncheckedUpdateWithoutUserInput>
    create: XOR<login_activityCreateWithoutUserInput, login_activityUncheckedCreateWithoutUserInput>
  }

  export type login_activityUpdateWithWhereUniqueWithoutUserInput = {
    where: login_activityWhereUniqueInput
    data: XOR<login_activityUpdateWithoutUserInput, login_activityUncheckedUpdateWithoutUserInput>
  }

  export type login_activityUpdateManyWithWhereWithoutUserInput = {
    where: login_activityScalarWhereInput
    data: XOR<login_activityUpdateManyMutationInput, login_activityUncheckedUpdateManyWithoutUserInput>
  }

  export type login_activityScalarWhereInput = {
    AND?: login_activityScalarWhereInput | login_activityScalarWhereInput[]
    OR?: login_activityScalarWhereInput[]
    NOT?: login_activityScalarWhereInput | login_activityScalarWhereInput[]
    id?: StringFilter<"login_activity"> | string
    user_id?: StringFilter<"login_activity"> | string
    login_time?: DateTimeFilter<"login_activity"> | Date | string
    status?: Enumlogin_statusFilter<"login_activity"> | $Enums.login_status
    ip_address?: StringNullableFilter<"login_activity"> | string | null
    device_info?: StringNullableFilter<"login_activity"> | string | null
    location?: StringNullableFilter<"login_activity"> | string | null
  }

  export type projectUpsertWithWhereUniqueWithoutUserInput = {
    where: projectWhereUniqueInput
    update: XOR<projectUpdateWithoutUserInput, projectUncheckedUpdateWithoutUserInput>
    create: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
  }

  export type projectUpdateWithWhereUniqueWithoutUserInput = {
    where: projectWhereUniqueInput
    data: XOR<projectUpdateWithoutUserInput, projectUncheckedUpdateWithoutUserInput>
  }

  export type projectUpdateManyWithWhereWithoutUserInput = {
    where: projectScalarWhereInput
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutUserInput>
  }

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[]
    OR?: projectScalarWhereInput[]
    NOT?: projectScalarWhereInput | projectScalarWhereInput[]
    id?: StringFilter<"project"> | string
    name?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    user_id?: StringFilter<"project"> | string
    created_at?: DateTimeFilter<"project"> | Date | string
    updated_at?: DateTimeFilter<"project"> | Date | string
  }

  export type cad_drawingUpsertWithWhereUniqueWithoutUserInput = {
    where: cad_drawingWhereUniqueInput
    update: XOR<cad_drawingUpdateWithoutUserInput, cad_drawingUncheckedUpdateWithoutUserInput>
    create: XOR<cad_drawingCreateWithoutUserInput, cad_drawingUncheckedCreateWithoutUserInput>
  }

  export type cad_drawingUpdateWithWhereUniqueWithoutUserInput = {
    where: cad_drawingWhereUniqueInput
    data: XOR<cad_drawingUpdateWithoutUserInput, cad_drawingUncheckedUpdateWithoutUserInput>
  }

  export type cad_drawingUpdateManyWithWhereWithoutUserInput = {
    where: cad_drawingScalarWhereInput
    data: XOR<cad_drawingUpdateManyMutationInput, cad_drawingUncheckedUpdateManyWithoutUserInput>
  }

  export type cad_drawingScalarWhereInput = {
    AND?: cad_drawingScalarWhereInput | cad_drawingScalarWhereInput[]
    OR?: cad_drawingScalarWhereInput[]
    NOT?: cad_drawingScalarWhereInput | cad_drawingScalarWhereInput[]
    id?: StringFilter<"cad_drawing"> | string
    name?: StringFilter<"cad_drawing"> | string
    file_path?: StringFilter<"cad_drawing"> | string
    project_id?: StringNullableFilter<"cad_drawing"> | string | null
    user_id?: StringFilter<"cad_drawing"> | string
    uploaded_at?: DateTimeFilter<"cad_drawing"> | Date | string
  }

  export type material_orderUpsertWithWhereUniqueWithoutUserInput = {
    where: material_orderWhereUniqueInput
    update: XOR<material_orderUpdateWithoutUserInput, material_orderUncheckedUpdateWithoutUserInput>
    create: XOR<material_orderCreateWithoutUserInput, material_orderUncheckedCreateWithoutUserInput>
  }

  export type material_orderUpdateWithWhereUniqueWithoutUserInput = {
    where: material_orderWhereUniqueInput
    data: XOR<material_orderUpdateWithoutUserInput, material_orderUncheckedUpdateWithoutUserInput>
  }

  export type material_orderUpdateManyWithWhereWithoutUserInput = {
    where: material_orderScalarWhereInput
    data: XOR<material_orderUpdateManyMutationInput, material_orderUncheckedUpdateManyWithoutUserInput>
  }

  export type material_orderScalarWhereInput = {
    AND?: material_orderScalarWhereInput | material_orderScalarWhereInput[]
    OR?: material_orderScalarWhereInput[]
    NOT?: material_orderScalarWhereInput | material_orderScalarWhereInput[]
    id?: StringFilter<"material_order"> | string
    user_id?: StringFilter<"material_order"> | string
    material_id?: StringFilter<"material_order"> | string
    quantity?: FloatFilter<"material_order"> | number
    total_price?: FloatFilter<"material_order"> | number
    status?: Enumorder_statusFilter<"material_order"> | $Enums.order_status
    created_at?: DateTimeFilter<"material_order"> | Date | string
    updated_at?: DateTimeFilter<"material_order"> | Date | string
  }

  export type user_settingsUpsertWithoutUserInput = {
    update: XOR<user_settingsUpdateWithoutUserInput, user_settingsUncheckedUpdateWithoutUserInput>
    create: XOR<user_settingsCreateWithoutUserInput, user_settingsUncheckedCreateWithoutUserInput>
    where?: user_settingsWhereInput
  }

  export type user_settingsUpdateToOneWithWhereWithoutUserInput = {
    where?: user_settingsWhereInput
    data: XOR<user_settingsUpdateWithoutUserInput, user_settingsUncheckedUpdateWithoutUserInput>
  }

  export type user_settingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    enable_notifications?: BoolFieldUpdateOperationsInput | boolean
    notify_material_changes?: BoolFieldUpdateOperationsInput | boolean
    notify_system_updates?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_settingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    enable_notifications?: BoolFieldUpdateOperationsInput | boolean
    notify_material_changes?: BoolFieldUpdateOperationsInput | boolean
    notify_system_updates?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateWithoutSettingsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider?: string | null
    date_joined?: Date | string
    time?: string | null
    region?: string | null
    country?: string | null
    last_seen?: Date | string | null
    two_step_enabled?: boolean
    profile_image?: string | null
    role?: $Enums.user_role
    login_activities?: login_activityCreateNestedManyWithoutUserInput
    projects?: projectCreateNestedManyWithoutUserInput
    cad_drawings?: cad_drawingCreateNestedManyWithoutUserInput
    material_orders?: material_orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutSettingsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider?: string | null
    date_joined?: Date | string
    time?: string | null
    region?: string | null
    country?: string | null
    last_seen?: Date | string | null
    two_step_enabled?: boolean
    profile_image?: string | null
    role?: $Enums.user_role
    login_activities?: login_activityUncheckedCreateNestedManyWithoutUserInput
    projects?: projectUncheckedCreateNestedManyWithoutUserInput
    cad_drawings?: cad_drawingUncheckedCreateNestedManyWithoutUserInput
    material_orders?: material_orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutSettingsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSettingsInput, userUncheckedCreateWithoutSettingsInput>
  }

  export type userUpsertWithoutSettingsInput = {
    update: XOR<userUpdateWithoutSettingsInput, userUncheckedUpdateWithoutSettingsInput>
    create: XOR<userCreateWithoutSettingsInput, userUncheckedCreateWithoutSettingsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSettingsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSettingsInput, userUncheckedUpdateWithoutSettingsInput>
  }

  export type userUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_step_enabled?: BoolFieldUpdateOperationsInput | boolean
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    login_activities?: login_activityUpdateManyWithoutUserNestedInput
    projects?: projectUpdateManyWithoutUserNestedInput
    cad_drawings?: cad_drawingUpdateManyWithoutUserNestedInput
    material_orders?: material_orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_step_enabled?: BoolFieldUpdateOperationsInput | boolean
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    login_activities?: login_activityUncheckedUpdateManyWithoutUserNestedInput
    projects?: projectUncheckedUpdateManyWithoutUserNestedInput
    cad_drawings?: cad_drawingUncheckedUpdateManyWithoutUserNestedInput
    material_orders?: material_orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutLogin_activitiesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider?: string | null
    date_joined?: Date | string
    time?: string | null
    region?: string | null
    country?: string | null
    last_seen?: Date | string | null
    two_step_enabled?: boolean
    profile_image?: string | null
    role?: $Enums.user_role
    projects?: projectCreateNestedManyWithoutUserInput
    cad_drawings?: cad_drawingCreateNestedManyWithoutUserInput
    material_orders?: material_orderCreateNestedManyWithoutUserInput
    settings?: user_settingsCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutLogin_activitiesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider?: string | null
    date_joined?: Date | string
    time?: string | null
    region?: string | null
    country?: string | null
    last_seen?: Date | string | null
    two_step_enabled?: boolean
    profile_image?: string | null
    role?: $Enums.user_role
    projects?: projectUncheckedCreateNestedManyWithoutUserInput
    cad_drawings?: cad_drawingUncheckedCreateNestedManyWithoutUserInput
    material_orders?: material_orderUncheckedCreateNestedManyWithoutUserInput
    settings?: user_settingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutLogin_activitiesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLogin_activitiesInput, userUncheckedCreateWithoutLogin_activitiesInput>
  }

  export type userUpsertWithoutLogin_activitiesInput = {
    update: XOR<userUpdateWithoutLogin_activitiesInput, userUncheckedUpdateWithoutLogin_activitiesInput>
    create: XOR<userCreateWithoutLogin_activitiesInput, userUncheckedCreateWithoutLogin_activitiesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLogin_activitiesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLogin_activitiesInput, userUncheckedUpdateWithoutLogin_activitiesInput>
  }

  export type userUpdateWithoutLogin_activitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_step_enabled?: BoolFieldUpdateOperationsInput | boolean
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    projects?: projectUpdateManyWithoutUserNestedInput
    cad_drawings?: cad_drawingUpdateManyWithoutUserNestedInput
    material_orders?: material_orderUpdateManyWithoutUserNestedInput
    settings?: user_settingsUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLogin_activitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_step_enabled?: BoolFieldUpdateOperationsInput | boolean
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    projects?: projectUncheckedUpdateManyWithoutUserNestedInput
    cad_drawings?: cad_drawingUncheckedUpdateManyWithoutUserNestedInput
    material_orders?: material_orderUncheckedUpdateManyWithoutUserNestedInput
    settings?: user_settingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateWithoutProjectsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider?: string | null
    date_joined?: Date | string
    time?: string | null
    region?: string | null
    country?: string | null
    last_seen?: Date | string | null
    two_step_enabled?: boolean
    profile_image?: string | null
    role?: $Enums.user_role
    login_activities?: login_activityCreateNestedManyWithoutUserInput
    cad_drawings?: cad_drawingCreateNestedManyWithoutUserInput
    material_orders?: material_orderCreateNestedManyWithoutUserInput
    settings?: user_settingsCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider?: string | null
    date_joined?: Date | string
    time?: string | null
    region?: string | null
    country?: string | null
    last_seen?: Date | string | null
    two_step_enabled?: boolean
    profile_image?: string | null
    role?: $Enums.user_role
    login_activities?: login_activityUncheckedCreateNestedManyWithoutUserInput
    cad_drawings?: cad_drawingUncheckedCreateNestedManyWithoutUserInput
    material_orders?: material_orderUncheckedCreateNestedManyWithoutUserInput
    settings?: user_settingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutProjectsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutProjectsInput, userUncheckedCreateWithoutProjectsInput>
  }

  export type cad_drawingCreateWithoutProjectInput = {
    id?: string
    name: string
    file_path: string
    uploaded_at?: Date | string
    user: userCreateNestedOneWithoutCad_drawingsInput
    measurements?: measurementCreateNestedManyWithoutDrawingInput
    materials?: material_needsCreateNestedManyWithoutDrawingInput
  }

  export type cad_drawingUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    file_path: string
    user_id: string
    uploaded_at?: Date | string
    measurements?: measurementUncheckedCreateNestedManyWithoutDrawingInput
    materials?: material_needsUncheckedCreateNestedManyWithoutDrawingInput
  }

  export type cad_drawingCreateOrConnectWithoutProjectInput = {
    where: cad_drawingWhereUniqueInput
    create: XOR<cad_drawingCreateWithoutProjectInput, cad_drawingUncheckedCreateWithoutProjectInput>
  }

  export type cad_drawingCreateManyProjectInputEnvelope = {
    data: cad_drawingCreateManyProjectInput | cad_drawingCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutProjectsInput = {
    update: XOR<userUpdateWithoutProjectsInput, userUncheckedUpdateWithoutProjectsInput>
    create: XOR<userCreateWithoutProjectsInput, userUncheckedCreateWithoutProjectsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutProjectsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutProjectsInput, userUncheckedUpdateWithoutProjectsInput>
  }

  export type userUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_step_enabled?: BoolFieldUpdateOperationsInput | boolean
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    login_activities?: login_activityUpdateManyWithoutUserNestedInput
    cad_drawings?: cad_drawingUpdateManyWithoutUserNestedInput
    material_orders?: material_orderUpdateManyWithoutUserNestedInput
    settings?: user_settingsUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_step_enabled?: BoolFieldUpdateOperationsInput | boolean
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    login_activities?: login_activityUncheckedUpdateManyWithoutUserNestedInput
    cad_drawings?: cad_drawingUncheckedUpdateManyWithoutUserNestedInput
    material_orders?: material_orderUncheckedUpdateManyWithoutUserNestedInput
    settings?: user_settingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type cad_drawingUpsertWithWhereUniqueWithoutProjectInput = {
    where: cad_drawingWhereUniqueInput
    update: XOR<cad_drawingUpdateWithoutProjectInput, cad_drawingUncheckedUpdateWithoutProjectInput>
    create: XOR<cad_drawingCreateWithoutProjectInput, cad_drawingUncheckedCreateWithoutProjectInput>
  }

  export type cad_drawingUpdateWithWhereUniqueWithoutProjectInput = {
    where: cad_drawingWhereUniqueInput
    data: XOR<cad_drawingUpdateWithoutProjectInput, cad_drawingUncheckedUpdateWithoutProjectInput>
  }

  export type cad_drawingUpdateManyWithWhereWithoutProjectInput = {
    where: cad_drawingScalarWhereInput
    data: XOR<cad_drawingUpdateManyMutationInput, cad_drawingUncheckedUpdateManyWithoutProjectInput>
  }

  export type projectCreateWithoutCad_drawingsInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutProjectsInput
  }

  export type projectUncheckedCreateWithoutCad_drawingsInput = {
    id?: string
    name: string
    description?: string | null
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type projectCreateOrConnectWithoutCad_drawingsInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutCad_drawingsInput, projectUncheckedCreateWithoutCad_drawingsInput>
  }

  export type userCreateWithoutCad_drawingsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider?: string | null
    date_joined?: Date | string
    time?: string | null
    region?: string | null
    country?: string | null
    last_seen?: Date | string | null
    two_step_enabled?: boolean
    profile_image?: string | null
    role?: $Enums.user_role
    login_activities?: login_activityCreateNestedManyWithoutUserInput
    projects?: projectCreateNestedManyWithoutUserInput
    material_orders?: material_orderCreateNestedManyWithoutUserInput
    settings?: user_settingsCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutCad_drawingsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider?: string | null
    date_joined?: Date | string
    time?: string | null
    region?: string | null
    country?: string | null
    last_seen?: Date | string | null
    two_step_enabled?: boolean
    profile_image?: string | null
    role?: $Enums.user_role
    login_activities?: login_activityUncheckedCreateNestedManyWithoutUserInput
    projects?: projectUncheckedCreateNestedManyWithoutUserInput
    material_orders?: material_orderUncheckedCreateNestedManyWithoutUserInput
    settings?: user_settingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutCad_drawingsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCad_drawingsInput, userUncheckedCreateWithoutCad_drawingsInput>
  }

  export type measurementCreateWithoutDrawingInput = {
    id?: string
    measurement_type: string
    value: number
    unit: string
    x_coordinate?: number | null
    y_coordinate?: number | null
    created_at?: Date | string
  }

  export type measurementUncheckedCreateWithoutDrawingInput = {
    id?: string
    measurement_type: string
    value: number
    unit: string
    x_coordinate?: number | null
    y_coordinate?: number | null
    created_at?: Date | string
  }

  export type measurementCreateOrConnectWithoutDrawingInput = {
    where: measurementWhereUniqueInput
    create: XOR<measurementCreateWithoutDrawingInput, measurementUncheckedCreateWithoutDrawingInput>
  }

  export type measurementCreateManyDrawingInputEnvelope = {
    data: measurementCreateManyDrawingInput | measurementCreateManyDrawingInput[]
    skipDuplicates?: boolean
  }

  export type material_needsCreateWithoutDrawingInput = {
    id?: string
    quantity: number
    unit: string
    created_at?: Date | string
    material: materialCreateNestedOneWithoutMaterial_needsInput
  }

  export type material_needsUncheckedCreateWithoutDrawingInput = {
    id?: string
    material_id: string
    quantity: number
    unit: string
    created_at?: Date | string
  }

  export type material_needsCreateOrConnectWithoutDrawingInput = {
    where: material_needsWhereUniqueInput
    create: XOR<material_needsCreateWithoutDrawingInput, material_needsUncheckedCreateWithoutDrawingInput>
  }

  export type material_needsCreateManyDrawingInputEnvelope = {
    data: material_needsCreateManyDrawingInput | material_needsCreateManyDrawingInput[]
    skipDuplicates?: boolean
  }

  export type projectUpsertWithoutCad_drawingsInput = {
    update: XOR<projectUpdateWithoutCad_drawingsInput, projectUncheckedUpdateWithoutCad_drawingsInput>
    create: XOR<projectCreateWithoutCad_drawingsInput, projectUncheckedCreateWithoutCad_drawingsInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutCad_drawingsInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutCad_drawingsInput, projectUncheckedUpdateWithoutCad_drawingsInput>
  }

  export type projectUpdateWithoutCad_drawingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type projectUncheckedUpdateWithoutCad_drawingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUpsertWithoutCad_drawingsInput = {
    update: XOR<userUpdateWithoutCad_drawingsInput, userUncheckedUpdateWithoutCad_drawingsInput>
    create: XOR<userCreateWithoutCad_drawingsInput, userUncheckedCreateWithoutCad_drawingsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCad_drawingsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCad_drawingsInput, userUncheckedUpdateWithoutCad_drawingsInput>
  }

  export type userUpdateWithoutCad_drawingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_step_enabled?: BoolFieldUpdateOperationsInput | boolean
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    login_activities?: login_activityUpdateManyWithoutUserNestedInput
    projects?: projectUpdateManyWithoutUserNestedInput
    material_orders?: material_orderUpdateManyWithoutUserNestedInput
    settings?: user_settingsUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCad_drawingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_step_enabled?: BoolFieldUpdateOperationsInput | boolean
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    login_activities?: login_activityUncheckedUpdateManyWithoutUserNestedInput
    projects?: projectUncheckedUpdateManyWithoutUserNestedInput
    material_orders?: material_orderUncheckedUpdateManyWithoutUserNestedInput
    settings?: user_settingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type measurementUpsertWithWhereUniqueWithoutDrawingInput = {
    where: measurementWhereUniqueInput
    update: XOR<measurementUpdateWithoutDrawingInput, measurementUncheckedUpdateWithoutDrawingInput>
    create: XOR<measurementCreateWithoutDrawingInput, measurementUncheckedCreateWithoutDrawingInput>
  }

  export type measurementUpdateWithWhereUniqueWithoutDrawingInput = {
    where: measurementWhereUniqueInput
    data: XOR<measurementUpdateWithoutDrawingInput, measurementUncheckedUpdateWithoutDrawingInput>
  }

  export type measurementUpdateManyWithWhereWithoutDrawingInput = {
    where: measurementScalarWhereInput
    data: XOR<measurementUpdateManyMutationInput, measurementUncheckedUpdateManyWithoutDrawingInput>
  }

  export type measurementScalarWhereInput = {
    AND?: measurementScalarWhereInput | measurementScalarWhereInput[]
    OR?: measurementScalarWhereInput[]
    NOT?: measurementScalarWhereInput | measurementScalarWhereInput[]
    id?: StringFilter<"measurement"> | string
    drawing_id?: StringFilter<"measurement"> | string
    measurement_type?: StringFilter<"measurement"> | string
    value?: FloatFilter<"measurement"> | number
    unit?: StringFilter<"measurement"> | string
    x_coordinate?: FloatNullableFilter<"measurement"> | number | null
    y_coordinate?: FloatNullableFilter<"measurement"> | number | null
    created_at?: DateTimeFilter<"measurement"> | Date | string
  }

  export type material_needsUpsertWithWhereUniqueWithoutDrawingInput = {
    where: material_needsWhereUniqueInput
    update: XOR<material_needsUpdateWithoutDrawingInput, material_needsUncheckedUpdateWithoutDrawingInput>
    create: XOR<material_needsCreateWithoutDrawingInput, material_needsUncheckedCreateWithoutDrawingInput>
  }

  export type material_needsUpdateWithWhereUniqueWithoutDrawingInput = {
    where: material_needsWhereUniqueInput
    data: XOR<material_needsUpdateWithoutDrawingInput, material_needsUncheckedUpdateWithoutDrawingInput>
  }

  export type material_needsUpdateManyWithWhereWithoutDrawingInput = {
    where: material_needsScalarWhereInput
    data: XOR<material_needsUpdateManyMutationInput, material_needsUncheckedUpdateManyWithoutDrawingInput>
  }

  export type material_needsScalarWhereInput = {
    AND?: material_needsScalarWhereInput | material_needsScalarWhereInput[]
    OR?: material_needsScalarWhereInput[]
    NOT?: material_needsScalarWhereInput | material_needsScalarWhereInput[]
    id?: StringFilter<"material_needs"> | string
    drawing_id?: StringFilter<"material_needs"> | string
    material_id?: StringFilter<"material_needs"> | string
    quantity?: FloatFilter<"material_needs"> | number
    unit?: StringFilter<"material_needs"> | string
    created_at?: DateTimeFilter<"material_needs"> | Date | string
  }

  export type cad_drawingCreateWithoutMeasurementsInput = {
    id?: string
    name: string
    file_path: string
    uploaded_at?: Date | string
    project?: projectCreateNestedOneWithoutCad_drawingsInput
    user: userCreateNestedOneWithoutCad_drawingsInput
    materials?: material_needsCreateNestedManyWithoutDrawingInput
  }

  export type cad_drawingUncheckedCreateWithoutMeasurementsInput = {
    id?: string
    name: string
    file_path: string
    project_id?: string | null
    user_id: string
    uploaded_at?: Date | string
    materials?: material_needsUncheckedCreateNestedManyWithoutDrawingInput
  }

  export type cad_drawingCreateOrConnectWithoutMeasurementsInput = {
    where: cad_drawingWhereUniqueInput
    create: XOR<cad_drawingCreateWithoutMeasurementsInput, cad_drawingUncheckedCreateWithoutMeasurementsInput>
  }

  export type cad_drawingUpsertWithoutMeasurementsInput = {
    update: XOR<cad_drawingUpdateWithoutMeasurementsInput, cad_drawingUncheckedUpdateWithoutMeasurementsInput>
    create: XOR<cad_drawingCreateWithoutMeasurementsInput, cad_drawingUncheckedCreateWithoutMeasurementsInput>
    where?: cad_drawingWhereInput
  }

  export type cad_drawingUpdateToOneWithWhereWithoutMeasurementsInput = {
    where?: cad_drawingWhereInput
    data: XOR<cad_drawingUpdateWithoutMeasurementsInput, cad_drawingUncheckedUpdateWithoutMeasurementsInput>
  }

  export type cad_drawingUpdateWithoutMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateOneWithoutCad_drawingsNestedInput
    user?: userUpdateOneRequiredWithoutCad_drawingsNestedInput
    materials?: material_needsUpdateManyWithoutDrawingNestedInput
  }

  export type cad_drawingUncheckedUpdateWithoutMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: material_needsUncheckedUpdateManyWithoutDrawingNestedInput
  }

  export type cad_drawingCreateWithoutMaterialsInput = {
    id?: string
    name: string
    file_path: string
    uploaded_at?: Date | string
    project?: projectCreateNestedOneWithoutCad_drawingsInput
    user: userCreateNestedOneWithoutCad_drawingsInput
    measurements?: measurementCreateNestedManyWithoutDrawingInput
  }

  export type cad_drawingUncheckedCreateWithoutMaterialsInput = {
    id?: string
    name: string
    file_path: string
    project_id?: string | null
    user_id: string
    uploaded_at?: Date | string
    measurements?: measurementUncheckedCreateNestedManyWithoutDrawingInput
  }

  export type cad_drawingCreateOrConnectWithoutMaterialsInput = {
    where: cad_drawingWhereUniqueInput
    create: XOR<cad_drawingCreateWithoutMaterialsInput, cad_drawingUncheckedCreateWithoutMaterialsInput>
  }

  export type materialCreateWithoutMaterial_needsInput = {
    id?: string
    name: string
    description?: string | null
    unit_price: number
    currency?: string
    in_stock?: boolean
    material_orders?: material_orderCreateNestedManyWithoutMaterialInput
  }

  export type materialUncheckedCreateWithoutMaterial_needsInput = {
    id?: string
    name: string
    description?: string | null
    unit_price: number
    currency?: string
    in_stock?: boolean
    material_orders?: material_orderUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type materialCreateOrConnectWithoutMaterial_needsInput = {
    where: materialWhereUniqueInput
    create: XOR<materialCreateWithoutMaterial_needsInput, materialUncheckedCreateWithoutMaterial_needsInput>
  }

  export type cad_drawingUpsertWithoutMaterialsInput = {
    update: XOR<cad_drawingUpdateWithoutMaterialsInput, cad_drawingUncheckedUpdateWithoutMaterialsInput>
    create: XOR<cad_drawingCreateWithoutMaterialsInput, cad_drawingUncheckedCreateWithoutMaterialsInput>
    where?: cad_drawingWhereInput
  }

  export type cad_drawingUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: cad_drawingWhereInput
    data: XOR<cad_drawingUpdateWithoutMaterialsInput, cad_drawingUncheckedUpdateWithoutMaterialsInput>
  }

  export type cad_drawingUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateOneWithoutCad_drawingsNestedInput
    user?: userUpdateOneRequiredWithoutCad_drawingsNestedInput
    measurements?: measurementUpdateManyWithoutDrawingNestedInput
  }

  export type cad_drawingUncheckedUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    measurements?: measurementUncheckedUpdateManyWithoutDrawingNestedInput
  }

  export type materialUpsertWithoutMaterial_needsInput = {
    update: XOR<materialUpdateWithoutMaterial_needsInput, materialUncheckedUpdateWithoutMaterial_needsInput>
    create: XOR<materialCreateWithoutMaterial_needsInput, materialUncheckedCreateWithoutMaterial_needsInput>
    where?: materialWhereInput
  }

  export type materialUpdateToOneWithWhereWithoutMaterial_needsInput = {
    where?: materialWhereInput
    data: XOR<materialUpdateWithoutMaterial_needsInput, materialUncheckedUpdateWithoutMaterial_needsInput>
  }

  export type materialUpdateWithoutMaterial_needsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    in_stock?: BoolFieldUpdateOperationsInput | boolean
    material_orders?: material_orderUpdateManyWithoutMaterialNestedInput
  }

  export type materialUncheckedUpdateWithoutMaterial_needsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    in_stock?: BoolFieldUpdateOperationsInput | boolean
    material_orders?: material_orderUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type material_needsCreateWithoutMaterialInput = {
    id?: string
    quantity: number
    unit: string
    created_at?: Date | string
    drawing: cad_drawingCreateNestedOneWithoutMaterialsInput
  }

  export type material_needsUncheckedCreateWithoutMaterialInput = {
    id?: string
    drawing_id: string
    quantity: number
    unit: string
    created_at?: Date | string
  }

  export type material_needsCreateOrConnectWithoutMaterialInput = {
    where: material_needsWhereUniqueInput
    create: XOR<material_needsCreateWithoutMaterialInput, material_needsUncheckedCreateWithoutMaterialInput>
  }

  export type material_needsCreateManyMaterialInputEnvelope = {
    data: material_needsCreateManyMaterialInput | material_needsCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type material_orderCreateWithoutMaterialInput = {
    id?: string
    quantity: number
    total_price: number
    status?: $Enums.order_status
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutMaterial_ordersInput
  }

  export type material_orderUncheckedCreateWithoutMaterialInput = {
    id?: string
    user_id: string
    quantity: number
    total_price: number
    status?: $Enums.order_status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type material_orderCreateOrConnectWithoutMaterialInput = {
    where: material_orderWhereUniqueInput
    create: XOR<material_orderCreateWithoutMaterialInput, material_orderUncheckedCreateWithoutMaterialInput>
  }

  export type material_orderCreateManyMaterialInputEnvelope = {
    data: material_orderCreateManyMaterialInput | material_orderCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type material_needsUpsertWithWhereUniqueWithoutMaterialInput = {
    where: material_needsWhereUniqueInput
    update: XOR<material_needsUpdateWithoutMaterialInput, material_needsUncheckedUpdateWithoutMaterialInput>
    create: XOR<material_needsCreateWithoutMaterialInput, material_needsUncheckedCreateWithoutMaterialInput>
  }

  export type material_needsUpdateWithWhereUniqueWithoutMaterialInput = {
    where: material_needsWhereUniqueInput
    data: XOR<material_needsUpdateWithoutMaterialInput, material_needsUncheckedUpdateWithoutMaterialInput>
  }

  export type material_needsUpdateManyWithWhereWithoutMaterialInput = {
    where: material_needsScalarWhereInput
    data: XOR<material_needsUpdateManyMutationInput, material_needsUncheckedUpdateManyWithoutMaterialInput>
  }

  export type material_orderUpsertWithWhereUniqueWithoutMaterialInput = {
    where: material_orderWhereUniqueInput
    update: XOR<material_orderUpdateWithoutMaterialInput, material_orderUncheckedUpdateWithoutMaterialInput>
    create: XOR<material_orderCreateWithoutMaterialInput, material_orderUncheckedCreateWithoutMaterialInput>
  }

  export type material_orderUpdateWithWhereUniqueWithoutMaterialInput = {
    where: material_orderWhereUniqueInput
    data: XOR<material_orderUpdateWithoutMaterialInput, material_orderUncheckedUpdateWithoutMaterialInput>
  }

  export type material_orderUpdateManyWithWhereWithoutMaterialInput = {
    where: material_orderScalarWhereInput
    data: XOR<material_orderUpdateManyMutationInput, material_orderUncheckedUpdateManyWithoutMaterialInput>
  }

  export type userCreateWithoutMaterial_ordersInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider?: string | null
    date_joined?: Date | string
    time?: string | null
    region?: string | null
    country?: string | null
    last_seen?: Date | string | null
    two_step_enabled?: boolean
    profile_image?: string | null
    role?: $Enums.user_role
    login_activities?: login_activityCreateNestedManyWithoutUserInput
    projects?: projectCreateNestedManyWithoutUserInput
    cad_drawings?: cad_drawingCreateNestedManyWithoutUserInput
    settings?: user_settingsCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutMaterial_ordersInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    provider?: string | null
    date_joined?: Date | string
    time?: string | null
    region?: string | null
    country?: string | null
    last_seen?: Date | string | null
    two_step_enabled?: boolean
    profile_image?: string | null
    role?: $Enums.user_role
    login_activities?: login_activityUncheckedCreateNestedManyWithoutUserInput
    projects?: projectUncheckedCreateNestedManyWithoutUserInput
    cad_drawings?: cad_drawingUncheckedCreateNestedManyWithoutUserInput
    settings?: user_settingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutMaterial_ordersInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMaterial_ordersInput, userUncheckedCreateWithoutMaterial_ordersInput>
  }

  export type materialCreateWithoutMaterial_ordersInput = {
    id?: string
    name: string
    description?: string | null
    unit_price: number
    currency?: string
    in_stock?: boolean
    material_needs?: material_needsCreateNestedManyWithoutMaterialInput
  }

  export type materialUncheckedCreateWithoutMaterial_ordersInput = {
    id?: string
    name: string
    description?: string | null
    unit_price: number
    currency?: string
    in_stock?: boolean
    material_needs?: material_needsUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type materialCreateOrConnectWithoutMaterial_ordersInput = {
    where: materialWhereUniqueInput
    create: XOR<materialCreateWithoutMaterial_ordersInput, materialUncheckedCreateWithoutMaterial_ordersInput>
  }

  export type userUpsertWithoutMaterial_ordersInput = {
    update: XOR<userUpdateWithoutMaterial_ordersInput, userUncheckedUpdateWithoutMaterial_ordersInput>
    create: XOR<userCreateWithoutMaterial_ordersInput, userUncheckedCreateWithoutMaterial_ordersInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMaterial_ordersInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMaterial_ordersInput, userUncheckedUpdateWithoutMaterial_ordersInput>
  }

  export type userUpdateWithoutMaterial_ordersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_step_enabled?: BoolFieldUpdateOperationsInput | boolean
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    login_activities?: login_activityUpdateManyWithoutUserNestedInput
    projects?: projectUpdateManyWithoutUserNestedInput
    cad_drawings?: cad_drawingUpdateManyWithoutUserNestedInput
    settings?: user_settingsUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutMaterial_ordersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    two_step_enabled?: BoolFieldUpdateOperationsInput | boolean
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    login_activities?: login_activityUncheckedUpdateManyWithoutUserNestedInput
    projects?: projectUncheckedUpdateManyWithoutUserNestedInput
    cad_drawings?: cad_drawingUncheckedUpdateManyWithoutUserNestedInput
    settings?: user_settingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type materialUpsertWithoutMaterial_ordersInput = {
    update: XOR<materialUpdateWithoutMaterial_ordersInput, materialUncheckedUpdateWithoutMaterial_ordersInput>
    create: XOR<materialCreateWithoutMaterial_ordersInput, materialUncheckedCreateWithoutMaterial_ordersInput>
    where?: materialWhereInput
  }

  export type materialUpdateToOneWithWhereWithoutMaterial_ordersInput = {
    where?: materialWhereInput
    data: XOR<materialUpdateWithoutMaterial_ordersInput, materialUncheckedUpdateWithoutMaterial_ordersInput>
  }

  export type materialUpdateWithoutMaterial_ordersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    in_stock?: BoolFieldUpdateOperationsInput | boolean
    material_needs?: material_needsUpdateManyWithoutMaterialNestedInput
  }

  export type materialUncheckedUpdateWithoutMaterial_ordersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    in_stock?: BoolFieldUpdateOperationsInput | boolean
    material_needs?: material_needsUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type login_activityCreateManyUserInput = {
    id?: string
    login_time?: Date | string
    status: $Enums.login_status
    ip_address?: string | null
    device_info?: string | null
    location?: string | null
  }

  export type projectCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cad_drawingCreateManyUserInput = {
    id?: string
    name: string
    file_path: string
    project_id?: string | null
    uploaded_at?: Date | string
  }

  export type material_orderCreateManyUserInput = {
    id?: string
    material_id: string
    quantity: number
    total_price: number
    status?: $Enums.order_status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type login_activityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    login_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumlogin_statusFieldUpdateOperationsInput | $Enums.login_status
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type login_activityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    login_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumlogin_statusFieldUpdateOperationsInput | $Enums.login_status
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type login_activityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    login_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumlogin_statusFieldUpdateOperationsInput | $Enums.login_status
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cad_drawings?: cad_drawingUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cad_drawings?: cad_drawingUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cad_drawingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateOneWithoutCad_drawingsNestedInput
    measurements?: measurementUpdateManyWithoutDrawingNestedInput
    materials?: material_needsUpdateManyWithoutDrawingNestedInput
  }

  export type cad_drawingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    measurements?: measurementUncheckedUpdateManyWithoutDrawingNestedInput
    materials?: material_needsUncheckedUpdateManyWithoutDrawingNestedInput
  }

  export type cad_drawingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_orderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: materialUpdateOneRequiredWithoutMaterial_ordersNestedInput
  }

  export type material_orderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    material_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_orderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    material_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cad_drawingCreateManyProjectInput = {
    id?: string
    name: string
    file_path: string
    user_id: string
    uploaded_at?: Date | string
  }

  export type cad_drawingUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutCad_drawingsNestedInput
    measurements?: measurementUpdateManyWithoutDrawingNestedInput
    materials?: material_needsUpdateManyWithoutDrawingNestedInput
  }

  export type cad_drawingUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    measurements?: measurementUncheckedUpdateManyWithoutDrawingNestedInput
    materials?: material_needsUncheckedUpdateManyWithoutDrawingNestedInput
  }

  export type cad_drawingUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type measurementCreateManyDrawingInput = {
    id?: string
    measurement_type: string
    value: number
    unit: string
    x_coordinate?: number | null
    y_coordinate?: number | null
    created_at?: Date | string
  }

  export type material_needsCreateManyDrawingInput = {
    id?: string
    material_id: string
    quantity: number
    unit: string
    created_at?: Date | string
  }

  export type measurementUpdateWithoutDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    measurement_type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    x_coordinate?: NullableFloatFieldUpdateOperationsInput | number | null
    y_coordinate?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type measurementUncheckedUpdateWithoutDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    measurement_type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    x_coordinate?: NullableFloatFieldUpdateOperationsInput | number | null
    y_coordinate?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type measurementUncheckedUpdateManyWithoutDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    measurement_type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    x_coordinate?: NullableFloatFieldUpdateOperationsInput | number | null
    y_coordinate?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_needsUpdateWithoutDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: materialUpdateOneRequiredWithoutMaterial_needsNestedInput
  }

  export type material_needsUncheckedUpdateWithoutDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    material_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_needsUncheckedUpdateManyWithoutDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    material_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_needsCreateManyMaterialInput = {
    id?: string
    drawing_id: string
    quantity: number
    unit: string
    created_at?: Date | string
  }

  export type material_orderCreateManyMaterialInput = {
    id?: string
    user_id: string
    quantity: number
    total_price: number
    status?: $Enums.order_status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type material_needsUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    drawing?: cad_drawingUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type material_needsUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawing_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_needsUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawing_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_orderUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutMaterial_ordersNestedInput
  }

  export type material_orderUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type material_orderUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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