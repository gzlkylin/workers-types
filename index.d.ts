// This file is auto-generated. DO NOT MODIFY.
// Please refer to the Auto-Generation section of the README.md.

declare class AbortController {
  constructor();
  readonly signal: AbortSignal;
  abort(reason?: any): void;
}

declare class AbortSignal extends EventTarget {
  constructor();
  static abort(reason?: any): AbortSignal;
  static timeout(delay: number): AbortSignal;
  readonly aborted: boolean;
  readonly reason: any;
  throwIfAborted(): void;
}

interface BasicImageTransformations {
  /**
   * Maximum width in image pixels. The value must be an integer.
   */
  width?: number;
  /**
   * Maximum height in image pixels. The value must be an integer.
   */
  height?: number;
  /**
   * Resizing mode as a string. It affects interpretation of width and height
   * options:
   *  - scale-down: Similar to contain, but the image is never enlarged. If
   *    the image is larger than given width or height, it will be resized.
   *    Otherwise its original size will be kept.
   *  - contain: Resizes to maximum size that fits within the given width and
   *    height. If only a single dimension is given (e.g. only width), the
   *    image will be shrunk or enlarged to exactly match that dimension.
   *    Aspect ratio is always preserved.
   *  - cover: Resizes (shrinks or enlarges) to fill the entire area of width
   *    and height. If the image has an aspect ratio different from the ratio
   *    of width and height, it will be cropped to fit.
   *  - crop: The image will be shrunk and cropped to fit within the area
   *    specified by width and height. The image will not be enlarged. For images
   *    smaller than the given dimensions it's the same as scale-down. For
   *    images larger than the given dimensions, it's the same as cover.
   *    See also trim.
   *  - pad: Resizes to the maximum size that fits within the given width and
   *    height, and then fills the remaining area with a background color
   *    (white by default). Use of this mode is not recommended, as the same
   *    effect can be more efficiently achieved with the contain mode and the
   *    CSS object-fit: contain property.
   */
  fit?: "scale-down" | "contain" | "cover" | "crop" | "pad";
  /**
   * When cropping with fit: "cover", this defines the side or point that should
   * be left uncropped. The value is either a string
   * "left", "right", "top", "bottom", "auto", or "center" (the default),
   * or an object {x, y} containing focal point coordinates in the original
   * image expressed as fractions ranging from 0.0 (top or left) to 1.0
   * (bottom or right), 0.5 being the center. {fit: "cover", gravity: "top"} will
   * crop bottom or left and right sides as necessary, but won’t crop anything
   * from the top. {fit: "cover", gravity: {x:0.5, y:0.2}} will crop each side to
   * preserve as much as possible around a point at 20% of the height of the
   * source image.
   */
  gravity?:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "center"
    | "auto"
    | BasicImageTransformationsGravityCoordinates;
  /**
   * Background color to add underneath the image. Applies only to images with
   * transparency (such as PNG). Accepts any CSS color (#RRGGBB, rgba(…),
   * hsl(…), etc.)
   */
  background?: string;
  /**
   * Number of degrees (90, 180, 270) to rotate the image by. width and height
   * options refer to axes after rotation.
   */
  rotate?: 0 | 90 | 180 | 270 | 360;
}

interface BasicImageTransformationsGravityCoordinates {
  x: number;
  y: number;
}

declare class Blob {
  constructor(bits?: BlobBits, options?: BlobOptions);
  readonly size: number;
  readonly type: string;
  slice(start?: number, end?: number, type?: string): Blob;
  arrayBuffer(): Promise<ArrayBuffer>;
  text(): Promise<string>;
  stream(): ReadableStream;
}

declare type BlobBits = (ArrayBuffer | string | Blob)[];

interface BlobOptions {
  type?: string;
}

declare abstract class Body {
  readonly body: ReadableStream | null;
  readonly bodyUsed: boolean;
  arrayBuffer(): Promise<ArrayBuffer>;
  text(): Promise<string>;
  json<T>(): Promise<T>;
  formData(): Promise<FormData>;
  blob(): Promise<Blob>;
}

declare type BodyInit =
  | ReadableStream
  | string
  | ArrayBuffer
  | Blob
  | URLSearchParams
  | FormData;

/**
 * Back compat for code migrating to older definitions.
 * @deprecated Use BodyInit instead.
 */
declare type BodyInitializer = BodyInit;

declare class ByteLengthQueuingStrategy {
  constructor(init: QueuingStrategyInit);
  readonly highWaterMark: number;
  size(chunk?: any): number;
}

declare abstract class Cache {
  delete(
    request: Request | string,
    options?: CacheQueryOptions
  ): Promise<boolean>;
  match(
    request: Request | string,
    options?: CacheQueryOptions
  ): Promise<Response | undefined>;
  put(request: Request | string, response: Response): Promise<void>;
}

interface CacheQueryOptions {
  ignoreMethod?: boolean;
}

declare abstract class CacheStorage {
  open(cacheName: string): Promise<Cache>;
  readonly default: Cache;
}

interface CfRequestInit extends Omit<RequestInit, "cf"> {
  cf?: RequestInitCfProperties;
}

/**
 * Back compat support with older types.
 * @deprecated Use CfRequestInit instead.
 */
declare type CfRequestInitializerDict = CfRequestInit;

declare class CloseEvent extends Event {
  constructor(type: string, initializer: CloseEventInit);
  readonly code: number;
  readonly reason: string;
  readonly wasClean: boolean;
}

interface CloseEventInit {
  code?: number;
  reason?: string;
  wasClean?: boolean;
}

/**
 * Back compat for code migrating from older definitions.
 * @deprecated Use CloseEventInit instead.
 */
declare type CloseEventInitializer = CloseEventInit;

interface Comment {
  text: string;
  readonly removed: boolean;
  before(content: Content, options?: ContentOptions): Comment;
  after(content: Content, options?: ContentOptions): Comment;
  replace(content: Content, options?: ContentOptions): Comment;
  remove(): Comment;
}

declare class CompressionStream extends TransformStream {
  constructor(format: "gzip" | "deflate");
}

interface Console {
  debug(...data: any[]): void;
  error(...data: any[]): void;
  info(...data: any[]): void;
  log(...data: any[]): void;
  warn(...data: any[]): void;
}

declare type Content = string | ReadableStream | Response;

interface ContentOptions {
  html?: boolean;
}

declare class CountQueuingStrategy {
  constructor(init: QueuingStrategyInit);
  readonly highWaterMark: number;
  size(chunk?: any): number;
}

declare abstract class Crypto {
  readonly subtle: SubtleCrypto;
  getRandomValues<
    T extends
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array
      | BigInt64Array
      | BigUint64Array
  >(buffer: T): T;
  randomUUID(): string;
  DigestStream: typeof DigestStream;
}

declare abstract class CryptoKey {
  readonly type: string;
  readonly extractable: boolean;
  readonly algorithm: CryptoKeyAlgorithmVariant;
  readonly usages: string[];
}

interface CryptoKeyAesKeyAlgorithm {
  name: string;
  length: number;
}

declare type CryptoKeyAlgorithmVariant =
  | CryptoKeyKeyAlgorithm
  | CryptoKeyAesKeyAlgorithm
  | CryptoKeyHmacKeyAlgorithm
  | CryptoKeyRsaKeyAlgorithm
  | CryptoKeyEllipticKeyAlgorithm
  | CryptoKeyVoprfKeyAlgorithm
  | CryptoKeyOprfKeyAlgorithm;

interface CryptoKeyEllipticKeyAlgorithm {
  name: string;
  namedCurve: string;
}

interface CryptoKeyHmacKeyAlgorithm {
  name: string;
  hash: CryptoKeyKeyAlgorithm;
  length: number;
}

interface CryptoKeyKeyAlgorithm {
  name: string;
}

interface CryptoKeyOprfKeyAlgorithm {
  name: string;
  namedCurve: string;
}

interface CryptoKeyPair {
  publicKey: CryptoKey;
  privateKey: CryptoKey;
}

interface CryptoKeyRsaKeyAlgorithm {
  name: string;
  modulusLength: number;
  publicExponent: ArrayBuffer;
  hash?: CryptoKeyKeyAlgorithm;
}

interface CryptoKeyVoprfKeyAlgorithm {
  name: string;
  hash: CryptoKeyKeyAlgorithm;
  namedCurve: string;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
  dump(): Promise<ArrayBuffer>;
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
  exec<T = unknown>(query: string): Promise<D1Result<T>>;
}

interface D1PreparedStatement {
  bind(...values: any[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T>;
  run<T = unknown>(): Promise<D1Result<T>>;
  all<T = unknown>(): Promise<D1Result<T[]>>;
  raw<T = unknown>(): Promise<T[]>;
}

declare type D1Result<T = unknown> = {
  results?: T[];
  lastRowId: number | null;
  changes: number;
  duration: number;
  error?: string;
};

declare class DOMException extends Error {
  constructor(message?: string, name?: string);
  readonly code: number;
  static readonly INDEX_SIZE_ERR: number;
  static readonly DOMSTRING_SIZE_ERR: number;
  static readonly HIERARCHY_REQUEST_ERR: number;
  static readonly WRONG_DOCUMENT_ERR: number;
  static readonly INVALID_CHARACTER_ERR: number;
  static readonly NO_DATA_ALLOWED_ERR: number;
  static readonly NO_MODIFICATION_ALLOWED_ERR: number;
  static readonly NOT_FOUND_ERR: number;
  static readonly NOT_SUPPORTED_ERR: number;
  static readonly INUSE_ATTRIBUTE_ERR: number;
  static readonly INVALID_STATE_ERR: number;
  static readonly SYNTAX_ERR: number;
  static readonly INVALID_MODIFICATION_ERR: number;
  static readonly NAMESPACE_ERR: number;
  static readonly INVALID_ACCESS_ERR: number;
  static readonly VALIDATION_ERR: number;
  static readonly TYPE_MISMATCH_ERR: number;
  static readonly SECURITY_ERR: number;
  static readonly NETWORK_ERR: number;
  static readonly ABORT_ERR: number;
  static readonly URL_MISMATCH_ERR: number;
  static readonly QUOTA_EXCEEDED_ERR: number;
  static readonly TIMEOUT_ERR: number;
  static readonly INVALID_NODE_TYPE_ERR: number;
  static readonly DATA_CLONE_ERR: number;
}

declare class DecompressionStream extends TransformStream {
  constructor(format: "gzip" | "deflate");
}

declare class DigestStream extends WritableStream {
  constructor(algorithm: string | SubtleCryptoHashAlgorithm);
  readonly digest: Promise<ArrayBuffer>;
}

interface Doctype {
  readonly name: string | null;
  readonly publicId: string | null;
  readonly systemId: string | null;
}

interface DocumentEnd {
  append(content: Content, options?: ContentOptions): DocumentEnd;
}

interface DurableObject {
  fetch(request: Request): Promise<Response>;
  alarm?(): Promise<void>;
}

interface DurableObjectGetAlarmOptions {
  allowConcurrency?: boolean;
}

interface DurableObjectGetOptions {
  allowConcurrency?: boolean;
  noCache?: boolean;
}

interface DurableObjectId {
  toString(): string;
  equals(other: DurableObjectId): boolean;
  readonly name?: string;
}

interface DurableObjectListOptions {
  start?: string;
  startAfter?: string;
  end?: string;
  prefix?: string;
  reverse?: boolean;
  limit?: number;
  allowConcurrency?: boolean;
  noCache?: boolean;
}

interface DurableObjectNamespace {
  newUniqueId(
    options?: DurableObjectNamespaceNewUniqueIdOptions
  ): DurableObjectId;
  idFromName(name: string): DurableObjectId;
  idFromString(id: string): DurableObjectId;
  get(id: DurableObjectId): DurableObjectStub;
}

interface DurableObjectNamespaceNewUniqueIdOptions {
  jurisdiction?: string;
}

interface DurableObjectPutOptions {
  allowConcurrency?: boolean;
  allowUnconfirmed?: boolean;
  noCache?: boolean;
}

interface DurableObjectSetAlarmOptions {
  allowConcurrency?: boolean;
  allowUnconfirmed?: boolean;
}

interface DurableObjectState {
  waitUntil(promise: Promise<any>): void;
  id: DurableObjectId;
  readonly storage: DurableObjectStorage;
  blockConcurrencyWhile<T>(callback: () => Promise<T>): Promise<T>;
}

interface DurableObjectStorage {
  get<T = unknown>(
    key: string,
    options?: DurableObjectGetOptions
  ): Promise<T | undefined>;
  get<T = unknown>(
    keys: string[],
    options?: DurableObjectGetOptions
  ): Promise<Map<string, T>>;
  list<T = unknown>(
    options?: DurableObjectListOptions
  ): Promise<Map<string, T>>;
  put<T>(
    key: string,
    value: T,
    options?: DurableObjectPutOptions
  ): Promise<void>;
  put<T>(
    entries: Record<string, T>,
    options?: DurableObjectPutOptions
  ): Promise<void>;
  delete(key: string, options?: DurableObjectPutOptions): Promise<boolean>;
  delete(keys: string[], options?: DurableObjectPutOptions): Promise<number>;
  deleteAll(options?: DurableObjectPutOptions): Promise<void>;
  transaction<T>(
    closure: (txn: DurableObjectTransaction) => Promise<T>
  ): Promise<T>;
  getAlarm(options?: DurableObjectGetAlarmOptions): Promise<number | null>;
  setAlarm(
    scheduledTime: number | Date,
    options?: DurableObjectSetAlarmOptions
  ): Promise<void>;
  deleteAlarm(options?: DurableObjectSetAlarmOptions): Promise<void>;
}

/**
 *
 * @deprecated Don't use. Introduced incidentally in workers-types 3.x. Scheduled for removal.
 */
declare type DurableObjectStorageOperationsGetOptions = DurableObjectGetOptions;

/**
 *
 * @deprecated Don't use. Introduced incidentally in workers-types 3.x. Scheduled for removal.
 */
declare type DurableObjectStorageOperationsListOptions =
  DurableObjectListOptions;

/**
 *
 * @deprecated Don't use. Introduced incidentally in workers-types 3.x. Scheduled for removal.
 */
declare type DurableObjectStorageOperationsPutOptions = DurableObjectPutOptions;

interface DurableObjectStub extends Fetcher {
  readonly id: DurableObjectId;
  readonly name?: string;
}

interface DurableObjectTransaction {
  get<T = unknown>(
    key: string,
    options?: DurableObjectGetOptions
  ): Promise<T | undefined>;
  get<T = unknown>(
    keys: string[],
    options?: DurableObjectGetOptions
  ): Promise<Map<string, T>>;
  list<T = unknown>(
    options?: DurableObjectListOptions
  ): Promise<Map<string, T>>;
  put<T>(
    key: string,
    value: T,
    options?: DurableObjectPutOptions
  ): Promise<void>;
  put<T>(
    entries: Record<string, T>,
    options?: DurableObjectPutOptions
  ): Promise<void>;
  delete(key: string, options?: DurableObjectPutOptions): Promise<boolean>;
  delete(keys: string[], options?: DurableObjectPutOptions): Promise<number>;
  rollback(): void;
  getAlarm(options?: DurableObjectGetAlarmOptions): Promise<number | null>;
  setAlarm(
    scheduledTime: number | Date,
    options?: DurableObjectSetAlarmOptions
  ): Promise<void>;
  deleteAlarm(options?: DurableObjectSetAlarmOptions): Promise<void>;
}

interface Element {
  tagName: string;
  readonly attributes: IterableIterator<string[]>;
  readonly removed: boolean;
  readonly namespaceURI: string;
  getAttribute(name: string): string | null;
  hasAttribute(name: string): boolean;
  setAttribute(name: string, value: string): Element;
  removeAttribute(name: string): Element;
  before(content: Content, options?: ContentOptions): Element;
  after(content: Content, options?: ContentOptions): Element;
  prepend(content: Content, options?: ContentOptions): Element;
  append(content: Content, options?: ContentOptions): Element;
  replace(content: Content, options?: ContentOptions): Element;
  remove(): Element;
  removeAndKeepContent(): Element;
  setInnerContent(content: Content, options?: ContentOptions): Element;
  onEndTag(handler: (tag: EndTag) => void | Promise<void>): void;
}

interface EndTag {
  name: string;
  before(content: Content, options?: ContentOptions): EndTag;
  after(content: Content, options?: ContentOptions): EndTag;
  remove(): EndTag;
}

interface ErrorEvent extends Event {
  readonly filename: string;
  readonly message: string;
  readonly lineno: number;
  readonly colno: number;
  readonly error: any;
}

declare class Event {
  constructor(type: string, init?: EventInit);
  readonly type: string;
  readonly eventPhase: number;
  readonly composed: boolean;
  readonly bubbles: boolean;
  readonly cancelable: boolean;
  readonly defaultPrevented: boolean;
  readonly returnValue: boolean;
  readonly currentTarget?: EventTarget;
  readonly srcElement?: EventTarget;
  readonly timeStamp: number;
  readonly isTrusted: boolean;
  cancelBubble: boolean;
  stopImmediatePropagation(): void;
  preventDefault(): void;
  stopPropagation(): void;
  composedPath(): EventTarget[];
  static readonly NONE: number;
  static readonly CAPTURING_PHASE: number;
  static readonly AT_TARGET: number;
  static readonly BUBBLING_PHASE: number;
}

interface EventInit {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
}

declare type EventListener<EventType extends Event = Event> = (
  event: EventType
) => void;

interface EventListenerObject<EventType extends Event = Event> {
  handleEvent(event: EventType): void;
}

declare type EventListenerOrEventListenerObject<
  EventType extends Event = Event
> = EventListener<EventType> | EventListenerObject<EventType>;

declare class EventTarget<
  EventMap extends Record<string, Event> = Record<string, Event>
> {
  constructor();
  addEventListener<Type extends keyof EventMap>(
    type: Type,
    handler: EventListenerOrEventListenerObject<EventMap[Type]>,
    options?: EventTargetAddEventListenerOptions | boolean
  ): void;
  removeEventListener<Type extends keyof EventMap>(
    type: Type,
    handler: EventListenerOrEventListenerObject<EventMap[Type]>,
    options?: EventTargetEventListenerOptions | boolean
  ): void;
  dispatchEvent(event: EventMap[keyof EventMap]): boolean;
}

interface EventTargetAddEventListenerOptions {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
  signal?: AbortSignal;
}

interface EventTargetEventListenerOptions {
  capture?: boolean;
}

interface EventTargetHandlerObject {
  handleEvent(arg1: Event): any | undefined;
}

interface ExecutionContext {
  waitUntil(promise: Promise<any>): void;
  passThroughOnException(): void;
}

interface ExportedHandler<Env = unknown> {
  fetch?: ExportedHandlerFetchHandler<Env>;
  scheduled?: ExportedHandlerScheduledHandler<Env>;
}

declare type ExportedHandlerFetchHandler<Env = unknown> = (
  request: Request,
  env: Env,
  ctx: ExecutionContext
) => Response | Promise<Response>;

declare type ExportedHandlerScheduledHandler<Env = unknown> = (
  controller: ScheduledController,
  env: Env,
  ctx: ExecutionContext
) => void | Promise<void>;

declare class ExtendableEvent extends Event {
  constructor(type: string, init?: EventInit);
  waitUntil(promise: Promise<any>): void;
}

declare abstract class FetchEvent extends ExtendableEvent {
  readonly request: Request;
  respondWith(promise: Response | Promise<Response>): void;
  passThroughOnException(): void;
}

declare abstract class Fetcher {
  fetch(
    requestOrUrl: Request | string,
    requestInit?: RequestInit | Request
  ): Promise<Response>;
}

declare class File extends Blob {
  constructor(bits?: BlobBits, name?: string, options?: FileOptions);
  readonly name: string;
  readonly lastModified: number;
}

interface FileOptions {
  type?: string;
  lastModified?: number;
}

declare class FixedLengthStream extends IdentityTransformStream {
  constructor(expectedLength: number | bigint);
}

declare class FormData {
  constructor();
  append(name: string, value: string): void;
  append(name: string, value: Blob, filename?: string): void;
  delete(name: string): void;
  get(name: string): File | string | null;
  getAll(name: string): (File | string)[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  set(name: string, value: Blob, filename?: string): void;
  entries(): IterableIterator<[key: string, value: File | string]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string | File>;
  forEach<This = unknown>(
    callback: (
      this: This,
      key: string,
      value: File | string,
      parent: FormData
    ) => void,
    thisArg?: This
  ): void;
  [Symbol.iterator](): IterableIterator<[key: string, value: File | string]>;
}

declare class HTMLRewriter {
  constructor();
  on(
    selector: string,
    handlers: HTMLRewriterElementContentHandlers
  ): HTMLRewriter;
  onDocument(handlers: HTMLRewriterDocumentContentHandlers): HTMLRewriter;
  transform(response: Response): Response;
}

interface HTMLRewriterDocumentContentHandlers {
  doctype?(doctype: Doctype): void | Promise<void>;
  comments?(comment: Comment): void | Promise<void>;
  text?(text: Text): void | Promise<void>;
  end?(end: DocumentEnd): void | Promise<void>;
}

interface HTMLRewriterElementContentHandlers {
  element?(element: Element): void | Promise<void>;
  comments?(comment: Comment): void | Promise<void>;
  text?(text: Text): void | Promise<void>;
}

declare class Headers {
  constructor(init?: HeadersInit);
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  append(name: string, value: string): void;
  delete(name: string): void;
  forEach<This = unknown>(
    callback: (this: This, key: string, value: string, parent: Headers) => void,
    thisArg?: This
  ): void;
  entries(): IterableIterator<[key: string, value: string]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string>;
  [Symbol.iterator](): IterableIterator<[key: string, value: string]>;
}

declare type HeadersInit =
  | Headers
  | Record<string, string>
  | [key: string, value: string][];

/**
 * Back compat for code migrating to older definitions.
 * @deprecated Use HeadersInit instead.
 */
declare type HeadersInitializer = HeadersInit;

declare class IdentityTransformStream extends TransformStream {
  constructor();
}

/**
 * In addition to the properties on the standard Request object,
 * the cf object contains extra information about the request provided
 * by Cloudflare's edge.
 *
 * Note: Currently, settings in the cf object cannot be accessed in the
 * playground.
 */
interface IncomingRequestCfProperties {
  /**
   * (e.g. 395747)
   */
  asn: number;
  /**
   * The organisation which owns the ASN of the incoming request.
   * (e.g. Google Cloud)
   */
  asOrganization: string;
  botManagement?: IncomingRequestCfPropertiesBotManagement;
  city?: string;
  clientAcceptEncoding?: string;
  clientTcpRtt: number;
  clientTrustScore?: number;
  /**
   * The three-letter airport code of the data center that the request
   * hit. (e.g. "DFW")
   */
  colo: string;
  continent?: string;
  /**
   * The two-letter country code in the request. This is the same value
   * as that provided in the CF-IPCountry header. (e.g. "US")
   */
  country: string;
  httpProtocol: string;
  isEUCountry?: string;
  latitude?: string;
  longitude?: string;
  /**
   * DMA metro code from which the request was issued, e.g. "635"
   */
  metroCode?: string;
  postalCode?: string;
  /**
   * e.g. "Texas"
   */
  region?: string;
  /**
   * e.g. "TX"
   */
  regionCode?: string;
  /**
   * e.g. "weight=256;exclusive=1"
   */
  requestPriority: string;
  /**
   * e.g. "America/Chicago"
   */
  timezone?: string;
  tlsVersion: string;
  tlsCipher: string;
  tlsClientAuth: IncomingRequestCfPropertiesTLSClientAuth;
}

interface IncomingRequestCfPropertiesBotManagement {
  score: number;
  staticResource: boolean;
  verifiedBot: boolean;
}

interface IncomingRequestCfPropertiesTLSClientAuth {
  certIssuerDNLegacy: string;
  certIssuerDN: string;
  certIssuerDNRFC2253: string;
  certIssuerSKI: string;
  certIssuerSerial: string;
  certPresented: "0" | "1";
  certSubjectDNLegacy: string;
  certSubjectDN: string;
  certSubjectDNRFC2253: string;
  /**
   * In format "Dec 22 19:39:00 2018 GMT"
   */
  certNotBefore: string;
  /**
   * In format "Dec 22 19:39:00 2018 GMT"
   */
  certNotAfter: string;
  certSerial: string;
  certFingerprintSHA1: string;
  /**
   * "SUCCESS", "FAILED:reason", "NONE"
   */
  certVerified: string;
  certRevoked: string;
  certSKI: string;
}

interface JsonWebKey {
  kty: string;
  use?: string;
  key_ops?: string[];
  alg?: string;
  ext?: boolean;
  crv?: string;
  x?: string;
  y?: string;
  d?: string;
  n?: string;
  e?: string;
  p?: string;
  q?: string;
  dp?: string;
  dq?: string;
  qi?: string;
  oth?: RsaOtherPrimesInfo[];
  k?: string;
}

/**
 * Workers KV is a global, low-latency, key-value data store. It supports exceptionally high read volumes with low-latency,
 * making it possible to build highly dynamic APIs and websites which respond as quickly as a cached static file would.
 */
interface KVNamespace<K extends string = string> {
  get(
    key: K,
    options?: Partial<KVNamespaceGetOptions<undefined>>
  ): Promise<string | null>;
  get(key: K, type: "text"): Promise<string | null>;
  get<ExpectedValue = unknown>(
    key: K,
    type: "json"
  ): Promise<ExpectedValue | null>;
  get(key: K, type: "arrayBuffer"): Promise<ArrayBuffer | null>;
  get(key: K, type: "stream"): Promise<ReadableStream | null>;
  get(key: K, options: KVNamespaceGetOptions<"text">): Promise<string | null>;
  get<ExpectedValue = unknown>(
    key: string,
    options: KVNamespaceGetOptions<"json">
  ): Promise<ExpectedValue | null>;
  get(
    key: K,
    options: KVNamespaceGetOptions<"arrayBuffer">
  ): Promise<ArrayBuffer | null>;
  get(
    key: K,
    options: KVNamespaceGetOptions<"stream">
  ): Promise<ReadableStream | null>;
  list<Metadata = unknown>(
    options?: KVNamespaceListOptions
  ): Promise<KVNamespaceListResult<Metadata>>;
  /**
   * Creates a new key-value pair, or updates the value for a particular key.
   * @param key key to associate with the value. A key cannot be empty, `.` or `..`. All other keys are valid.
   * @param value value to store. The type is inferred. The maximum size of a value is 25MB.
   * @returns Returns a `Promise` that you should `await` on in order to verify a successful update.
   * @example
   * await NAMESPACE.put(key, value);
   */
  put(
    key: K,
    value: string | ArrayBuffer | ArrayBufferView | ReadableStream,
    options?: KVNamespacePutOptions
  ): Promise<void>;
  getWithMetadata<Metadata = unknown>(
    key: K,
    options?: Partial<KVNamespaceGetOptions<undefined>>
  ): Promise<KVNamespaceGetWithMetadataResult<string, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: K,
    type: "text"
  ): Promise<KVNamespaceGetWithMetadataResult<string, Metadata>>;
  getWithMetadata<ExpectedValue = unknown, Metadata = unknown>(
    key: K,
    type: "json"
  ): Promise<KVNamespaceGetWithMetadataResult<ExpectedValue, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: K,
    type: "arrayBuffer"
  ): Promise<KVNamespaceGetWithMetadataResult<ArrayBuffer, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: K,
    type: "stream"
  ): Promise<KVNamespaceGetWithMetadataResult<ReadableStream, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: K,
    options: KVNamespaceGetOptions<"text">
  ): Promise<KVNamespaceGetWithMetadataResult<string, Metadata>>;
  getWithMetadata<ExpectedValue = unknown, Metadata = unknown>(
    key: K,
    options: KVNamespaceGetOptions<"json">
  ): Promise<KVNamespaceGetWithMetadataResult<ExpectedValue, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: K,
    options: KVNamespaceGetOptions<"arrayBuffer">
  ): Promise<KVNamespaceGetWithMetadataResult<ArrayBuffer, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: K,
    options: KVNamespaceGetOptions<"stream">
  ): Promise<KVNamespaceGetWithMetadataResult<ReadableStream, Metadata>>;
  delete(name: string): Promise<void>;
}

interface KVNamespaceGetOptions<Type> {
  type: Type;
  cacheTtl?: number;
}

interface KVNamespaceGetWithMetadataResult<Value, Metadata> {
  value: Value | null;
  metadata: Metadata | null;
}

interface KVNamespaceListKey<Metadata> {
  name: string;
  expiration?: number;
  metadata?: Metadata;
}

interface KVNamespaceListOptions {
  limit?: number;
  prefix?: string | null;
  cursor?: string | null;
}

interface KVNamespaceListResult<Metadata> {
  keys: KVNamespaceListKey<Metadata>[];
  list_complete: boolean;
  cursor?: string;
}

interface KVNamespacePutOptions {
  expiration?: number;
  expirationTtl?: number;
  metadata?: any | null;
}

declare class MessageEvent extends Event {
  constructor(type: string, initializer: MessageEventInit);
  readonly data: ArrayBuffer | string;
}

interface MessageEventInit {
  data: ArrayBuffer | string;
}

/**
 * Back compat for code migrating from older definitions.
 * @deprecated Use MessageEventInit instead.
 */
declare type MessageEventInitializer = MessageEventInit;

declare abstract class Navigator {
  readonly userAgent: string;
}

/**
 * Transitionary name.
 * @deprecated Use StreamPipeOptions
 */
interface PipeToOptions {
  preventClose?: boolean;
  preventAbort?: boolean;
  preventCancel?: boolean;
  signal?: AbortSignal;
}

declare abstract class PromiseRejectionEvent extends Event {
  readonly promise: Promise<any>;
  readonly reason: any;
}

interface QueuingStrategyInit {
  highWaterMark: number;
}

/**
 * An instance of the R2 bucket binding.
 */
interface R2Bucket {
  head(key: string): Promise<R2Object | null>;
  get(key: string): Promise<R2ObjectBody | null>;
  /**
   * Returns R2Object on a failure of the conditional specified in onlyIf.
   */
  get(
    key: string,
    options: R2GetOptions
  ): Promise<R2ObjectBody | R2Object | null>;
  get(
    key: string,
    options?: R2GetOptions
  ): Promise<R2ObjectBody | R2Object | null>;
  put(
    key: string,
    value:
      | ReadableStream
      | ArrayBuffer
      | ArrayBufferView
      | string
      | null
      | Blob,
    options?: R2PutOptions
  ): Promise<R2Object>;
  delete(key: string): Promise<void>;
  list(options?: R2ListOptions): Promise<R2Objects>;
}

/**
 * Perform the operation conditionally based on meeting the defined criteria.
 */
interface R2Conditional {
  etagMatches?: string;
  etagDoesNotMatch?: string;
  uploadedBefore?: Date;
  uploadedAfter?: Date;
  secondsGranularity?: boolean;
}

/**
 * Options for retrieving the object metadata nad payload.
 */
interface R2GetOptions {
  onlyIf?: R2Conditional | Headers;
  range?: R2Range | Headers;
}

/**
 * Metadata that's automatically rendered into R2 HTTP API endpoints.
 * ```
 * * contentType -> content-type
 * * contentLanguage -> content-language
 * etc...
 * ```
 * This data is echoed back on GET responses based on what was originally
 * assigned to the object (and can typically also be overriden when issuing
 * the GET request).
 */
interface R2HTTPMetadata {
  contentType?: string;
  contentLanguage?: string;
  contentDisposition?: string;
  contentEncoding?: string;
  cacheControl?: string;
  cacheExpiry?: Date;
}

interface R2ListOptions {
  limit?: number;
  prefix?: string;
  cursor?: string;
  delimiter?: string;
  startAfter?: string;
  /**
   * If you populate this array, then items returned will include this metadata.
   * A tradeoff is that fewer results may be returned depending on how big this
   * data is. For now the caps are TBD but expect the total memory usage for a list
   * operation may need to be <1MB or even <128kb depending on how many list operations
   * you are sending into one bucket. Make sure to look at `truncated` for the result
   * rather than having logic like
   * ```
   * while (listed.length < limit) {
   *   listed = myBucket.list({ limit, include: ['customMetadata'] })
   * }
   * ```
   */
  include?: ("httpMetadata" | "customMetadata")[];
}

/**
 * The metadata for the object.
 */
declare abstract class R2Object {
  readonly key: string;
  readonly version: string;
  readonly size: number;
  readonly etag: string;
  readonly httpEtag: string;
  readonly uploaded: Date;
  readonly httpMetadata?: R2HTTPMetadata;
  readonly customMetadata?: Record<string, string>;
  readonly range?: R2Range;
  writeHttpMetadata(headers: Headers): void;
}

/**
 * The metadata for the object and the body of the payload.
 */
interface R2ObjectBody extends R2Object {
  readonly body: ReadableStream;
  readonly bodyUsed: boolean;
  arrayBuffer(): Promise<ArrayBuffer>;
  text(): Promise<string>;
  json<T>(): Promise<T>;
  blob(): Promise<Blob>;
}

interface R2Objects {
  objects: R2Object[];
  truncated: boolean;
  cursor?: string;
  delimitedPrefixes: string[];
}

interface R2PutOptions {
  httpMetadata?: R2HTTPMetadata | Headers;
  customMetadata?: Record<string, string>;
  md5?: ArrayBuffer | string;
}

declare type R2Range =
  | { offset: number; length?: number }
  | { offset?: number; length: number }
  | { suffix: number };

interface ReadResult {
  value?: any;
  done: boolean;
}

declare abstract class ReadableByteStreamController {
  readonly byobRequest: ReadableStreamBYOBRequest | null;
  readonly desiredSize: number | null;
  close(): void;
  enqueue(chunk: ArrayBuffer | ArrayBufferView): void;
  error(reason: any): void;
}

declare class ReadableStream {
  constructor(
    underlyingSource?: UnderlyingSource,
    queuingStrategy?: StreamQueuingStrategy
  );
  readonly locked: boolean;
  cancel(reason?: any): Promise<void>;
  getReader(options: ReadableStreamGetReaderOptions): ReadableStreamBYOBReader;
  getReader(): ReadableStreamDefaultReader;
  pipeThrough(
    transform: ReadableStreamTransform,
    options?: PipeToOptions
  ): ReadableStream;
  pipeTo(destination: WritableStream, options?: PipeToOptions): Promise<void>;
  tee(): [ReadableStream, ReadableStream];
  values(options?: ReadableStreamValuesOptions): AsyncIterableIterator<any>;
  [Symbol.asyncIterator](
    options?: ReadableStreamValuesOptions
  ): AsyncIterableIterator<any>;
}

declare class ReadableStreamBYOBReader {
  constructor(stream: ReadableStream);
  readonly closed: Promise<void>;
  cancel(reason?: any): Promise<void>;
  read<T extends ArrayBufferView>(
    view: T
  ): Promise<ReadableStreamReadResult<T>>;
  releaseLock(): void;
  readAtLeast(
    minBytes: number,
    view: Uint8Array
  ): Promise<ReadableStreamReadResult<Uint8Array>>;
}

declare abstract class ReadableStreamBYOBRequest {
  readonly view: Uint8Array | null;
  respond(bytesWritten: number): void;
  respondWithNewView(view: ArrayBuffer | ArrayBufferView): void;
  readonly atLeast: number | null;
}

declare abstract class ReadableStreamDefaultController {
  readonly desiredSize: number | null;
  close(): void;
  enqueue(chunk?: any): void;
  error(reason: any): void;
}

declare class ReadableStreamDefaultReader {
  constructor(stream: ReadableStream);
  readonly closed: Promise<void>;
  cancel(reason?: any): Promise<void>;
  read(): Promise<ReadableStreamReadResult<any>>;
  releaseLock(): void;
}

interface ReadableStreamGetReaderOptions {
  mode: string;
}

/**
 * Back-compat alias.
 * @deprecated Use StreamPipeOptions
 */
declare type ReadableStreamPipeToOptions = PipeToOptions;

declare type ReadableStreamReadResult<T = any> =
  | { done: true; value: undefined }
  | { done: false; value: T };

/**
 * Back-compat alias.
 * @deprecated Use ReadableStreamBYOBReader
 */
declare type ReadableStreamReadableStreamBYOBReader = ReadableStreamBYOBReader;

/**
 * Back-compat alias.
 * @deprecated Use ReadableStreamDefaultReader
 */
declare type ReadableStreamReadableStreamDefaultReader =
  ReadableStreamDefaultReader;

interface ReadableStreamTransform {
  writable: WritableStream;
  readable: ReadableStream;
}

interface ReadableStreamValuesOptions {
  preventCancel?: boolean;
}

declare class Request extends Body {
  constructor(input: Request | string, init?: RequestInit | Request);
  clone(): Request;
  readonly method: string;
  readonly url: string;
  readonly headers: Headers;
  readonly redirect: string;
  readonly fetcher: Fetcher | null;
  readonly signal: AbortSignal;
  readonly cf?: IncomingRequestCfProperties;
}

interface RequestInit {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
  redirect?: string;
  fetcher?: Fetcher | null;
  /**
   * cf is a union of these two types because there are multiple
   * scenarios in which it might be one or the other.
   *
   * IncomingRequestCfProperties is required to allow
   *   new Request(someUrl, event.request)
   *
   * RequestInitCfProperties is required to allow
   *   new Request(event.request, {cf: { ... } })
   *   fetch(someUrl, {cf: { ... } })
   */
  cf?: IncomingRequestCfProperties | RequestInitCfProperties;
  signal?: AbortSignal | null;
}

/**
 * In addition to the properties you can set in the RequestInit dict
 * that you pass as an argument to the Request constructor, you can
 * set certain properties of a `cf` object to control how Cloudflare
 * features are applied to that new Request.
 *
 * Note: Currently, these properties cannot be tested in the
 * playground.
 */
interface RequestInitCfProperties {
  cacheEverything?: boolean;
  /**
   * A request's cache key is what determines if two requests are
   * "the same" for caching purposes. If a request has the same cache key
   * as some previous request, then we can serve the same cached response for
   * both. (e.g. 'some-key')
   *
   * Only available for Enterprise customers.
   */
  cacheKey?: string;
  /**
   * This allows you to append additional Cache-Tag response headers
   * to the origin response without modifications to the origin server.
   * This will allow for greater control over the Purge by Cache Tag feature
   * utilizing changes only in the Workers process.
   *
   * Only available for Enterprise customers.
   */
  cacheTags?: string[];
  /**
   * Force response to be cached for a given number of seconds. (e.g. 300)
   */
  cacheTtl?: number;
  /**
   * Force response to be cached for a given number of seconds based on the Origin status code.
   * (e.g. { '200-299': 86400, '404': 1, '500-599': 0 })
   */
  cacheTtlByStatus?: Record<string, number>;
  scrapeShield?: boolean;
  apps?: boolean;
  image?: RequestInitCfPropertiesImage;
  minify?: RequestInitCfPropertiesImageMinify;
  mirage?: boolean;
  polish?: "lossy" | "lossless" | "off";
  /**
   * Redirects the request to an alternate origin server. You can use this,
   * for example, to implement load balancing across several origins.
   * (e.g.us-east.example.com)
   *
   * Note - For security reasons, the hostname set in resolveOverride must
   * be proxied on the same Cloudflare zone of the incoming request.
   * Otherwise, the setting is ignored. CNAME hosts are allowed, so to
   * resolve to a host under a different domain or a DNS only domain first
   * declare a CNAME record within your own zone’s DNS mapping to the
   * external hostname, set proxy on Cloudflare, then set resolveOverride
   * to point to that CNAME record.
   */
  resolveOverride?: string;
}

interface RequestInitCfPropertiesImage extends BasicImageTransformations {
  /**
   * Device Pixel Ratio. Default 1. Multiplier for width/height that makes it
   * easier to specify higher-DPI sizes in <img srcset>.
   */
  dpr?: number;
  /**
   * An object with four properties {left, top, right, bottom} that specify
   * a number of pixels to cut off on each side. Allows removal of borders
   * or cutting out a specific fragment of an image. Trimming is performed
   * before resizing or rotation. Takes dpr into account.
   */
  trim?: { left?: number; top?: number; right?: number; bottom?: number };
  /**
   * Quality setting from 1-100 (useful values are in 60-90 range). Lower values
   * make images look worse, but load faster. The default is 85. It applies only
   * to JPEG and WebP images. It doesn’t have any effect on PNG.
   */
  quality?: number;
  /**
   * Output format to generate. It can be:
   *  - avif: generate images in AVIF format.
   *  - webp: generate images in Google WebP format. Set quality to 100 to get
   *    the WebP-lossless format.
   *  - json: instead of generating an image, outputs information about the
   *    image, in JSON format. The JSON object will contain image size
   *    (before and after resizing), source image’s MIME type, file size, etc.
   */
  format?: "avif" | "webp" | "json";
  /**
   * Whether to preserve animation frames from input files. Default is true.
   * Setting it to false reduces animations to still images. This setting is
   * recommended when enlarging images or processing arbitrary user content,
   * because large GIF animations can weigh tens or even hundreds of megabytes.
   * It is also useful to set anim:false when using format:"json" to get the
   * response quicker without the number of frames.
   */
  anim?: boolean;
  /**
   * What EXIF data should be preserved in the output image. Note that EXIF
   * rotation and embedded color profiles are always applied ("baked in" into
   * the image), and aren't affected by this option. Note that if the Polish
   * feature is enabled, all metadata may have been removed already and this
   * option may have no effect.
   *  - keep: Preserve most of EXIF metadata, including GPS location if there's
   *    any.
   *  - copyright: Only keep the copyright tag, and discard everything else.
   *    This is the default behavior for JPEG files.
   *  - none: Discard all invisible EXIF metadata. Currently WebP and PNG
   *    output formats always discard metadata.
   */
  metadata?: "keep" | "copyright" | "none";
  /**
   * Strength of sharpening filter to apply to the image. Floating-point
   * number between 0 (no sharpening, default) and 10 (maximum). 1.0 is a
   * recommended value for downscaled images.
   */
  sharpen?: number;
  /**
   * Radius of a blur filter (approximate gaussian). Maximum supported radius
   * is 250.
   */
  blur?: number;
  /**
   * Overlays are drawn in the order they appear in the array (last array
   * entry is the topmost layer).
   */
  draw?: RequestInitCfPropertiesImageDraw[];
}

interface RequestInitCfPropertiesImageDraw extends BasicImageTransformations {
  /**
   * Absolute URL of the image file to use for the drawing. It can be any of
   * the supported file formats. For drawing of watermarks or non-rectangular
   * overlays we recommend using PNG or WebP images.
   */
  url: string;
  /**
   * Floating-point number between 0 (transparent) and 1 (opaque).
   * For example, opacity: 0.5 makes overlay semitransparent.
   */
  opacity?: number;
  /**
   * - If set to true, the overlay image will be tiled to cover the entire
   *   area. This is useful for stock-photo-like watermarks.
   * - If set to "x", the overlay image will be tiled horizontally only
   *   (form a line).
   * - If set to "y", the overlay image will be tiled vertically only
   *   (form a line).
   */
  repeat?: true | "x" | "y";
  /**
   * Position of the overlay image relative to a given edge. Each property is
   * an offset in pixels. 0 aligns exactly to the edge. For example, left: 10
   * positions left side of the overlay 10 pixels from the left edge of the
   * image it's drawn over. bottom: 0 aligns bottom of the overlay with bottom
   * of the background image.
   *
   * Setting both left & right, or both top & bottom is an error.
   *
   * If no position is specified, the image will be centered.
   */
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface RequestInitCfPropertiesImageMinify {
  javascript?: boolean;
  css?: boolean;
  html?: boolean;
}

/**
 * Back compat for code migrating from older definitions.
 * @deprecated Use RequestInit instead.
 */
declare type RequestInitializerDict = RequestInit;

declare class Response extends Body {
  constructor(bodyInit?: BodyInit | null, maybeInit?: ResponseInit | Response);
  static redirect(url: string, status?: number): Response;
  static json(any: any, maybeInit?: ResponseInit | Response): Response;
  clone(): Response;
  readonly status: number;
  readonly statusText: string;
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly url: string;
  readonly webSocket: WebSocket | null;
  readonly cf?: Object;
}

interface ResponseInit {
  status?: number;
  statusText?: string;
  headers?: HeadersInit;
  cf?: Object;
  webSocket?: WebSocket | null;
  encodeBody?: string;
}

/**
 * Back compat for code migrating from older definitions.
 * @deprecated Use ResponseInit instead.
 */
declare type ResponseInitializerDict = ResponseInit;

interface RsaOtherPrimesInfo {
  r?: string;
  d?: string;
  t?: string;
}

interface ScheduledController {
  readonly scheduledTime: number;
  readonly cron: string;
  noRetry(): void;
}

declare abstract class ScheduledEvent extends ExtendableEvent {
  readonly scheduledTime: number;
  readonly cron: string;
  noRetry(): void;
}

interface Scheduler {
  wait(delay: number, maybeOptions?: SchedulerWaitOptions): Promise<void>;
}

interface SchedulerWaitOptions {
  signal?: AbortSignal;
}

interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
  btoa(data: string): string;
  atob(data: string): string;
  setTimeout<Args extends any[]>(
    callback: (...args: Args) => void,
    msDelay?: number,
    ...args: Args
  ): number;
  clearTimeout(timeoutId: number | null): void;
  setInterval<Args extends any[]>(
    callback: (...args: Args) => void,
    msDelay?: number,
    ...args: Args
  ): number;
  clearInterval(timeoutId: number | null): void;
  queueMicrotask(task: Function): void;
  structuredClone(
    value: any,
    options?: ServiceWorkerGlobalScopeStructuredCloneOptions
  ): any;
  fetch(
    request: Request | string,
    requestInitr?: RequestInit | Request
  ): Promise<Response>;
  self: ServiceWorkerGlobalScope;
  crypto: Crypto;
  caches: CacheStorage;
  scheduler: Scheduler;
  navigator: Navigator;
  readonly console: Console;
  origin: void;
}

interface ServiceWorkerGlobalScopeStructuredCloneOptions {
  transfer?: any[];
}

declare type StreamPipeOptions = PipeToOptions;

interface StreamQueuingStrategy {
  highWaterMark?: number;
  size(chunk: any): number;
}

declare abstract class SubtleCrypto {
  encrypt(
    algorithm: string | SubtleCryptoEncryptAlgorithm,
    key: CryptoKey,
    plainText: ArrayBuffer | ArrayBufferView
  ): Promise<ArrayBuffer>;
  decrypt(
    algorithm: string | SubtleCryptoEncryptAlgorithm,
    key: CryptoKey,
    cipherText: ArrayBuffer | ArrayBufferView
  ): Promise<ArrayBuffer>;
  sign(
    algorithm: string | SubtleCryptoSignAlgorithm,
    key: CryptoKey,
    data: ArrayBuffer | ArrayBufferView
  ): Promise<ArrayBuffer>;
  verify(
    algorithm: string | SubtleCryptoSignAlgorithm,
    key: CryptoKey,
    signature: ArrayBuffer | ArrayBufferView,
    data: ArrayBuffer | ArrayBufferView
  ): Promise<boolean>;
  digest(
    algorithm: string | SubtleCryptoHashAlgorithm,
    data: ArrayBuffer | ArrayBufferView
  ): Promise<ArrayBuffer>;
  generateKey(
    algorithm: string | SubtleCryptoGenerateKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[]
  ): Promise<CryptoKey | CryptoKeyPair>;
  deriveKey(
    algorithm: string | SubtleCryptoDeriveKeyAlgorithm,
    baseKey: CryptoKey,
    derivedKeyAlgorithm: string | SubtleCryptoImportKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[]
  ): Promise<CryptoKey>;
  deriveBits(
    algorithm: string | SubtleCryptoDeriveKeyAlgorithm,
    baseKey: CryptoKey,
    length: number | null
  ): Promise<ArrayBuffer>;
  importKey(
    format: string,
    keyData: ArrayBuffer | JsonWebKey,
    algorithm: string | SubtleCryptoImportKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[]
  ): Promise<CryptoKey>;
  exportKey(format: string, key: CryptoKey): Promise<ArrayBuffer | JsonWebKey>;
  wrapKey(
    format: string,
    key: CryptoKey,
    wrappingKey: CryptoKey,
    wrapAlgorithm: string | SubtleCryptoEncryptAlgorithm
  ): Promise<ArrayBuffer>;
  unwrapKey(
    format: string,
    wrappedKey: ArrayBuffer | ArrayBufferView,
    unwrappingKey: CryptoKey,
    unwrapAlgorithm: string | SubtleCryptoEncryptAlgorithm,
    unwrappedKeyAlgorithm: string | SubtleCryptoImportKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[]
  ): Promise<CryptoKey>;
  timingSafeEqual(
    a: ArrayBuffer | ArrayBufferView,
    b: ArrayBuffer | ArrayBufferView
  ): boolean;
}

interface SubtleCryptoDeriveKeyAlgorithm {
  name: string;
  salt?: ArrayBuffer;
  iterations?: number;
  hash?: string | SubtleCryptoHashAlgorithm;
  public?: CryptoKey;
  info?: ArrayBuffer;
}

interface SubtleCryptoEncryptAlgorithm {
  name: string;
  iv?: ArrayBuffer;
  additionalData?: ArrayBuffer;
  tagLength?: number;
  counter?: ArrayBuffer;
  length?: number;
  label?: ArrayBuffer;
}

interface SubtleCryptoGenerateKeyAlgorithm {
  name: string;
  hash?: string | SubtleCryptoHashAlgorithm;
  modulusLength?: number;
  publicExponent?: ArrayBuffer;
  length?: number;
  namedCurve?: string;
}

interface SubtleCryptoHashAlgorithm {
  name: string;
}

interface SubtleCryptoImportKeyAlgorithm {
  name: string;
  hash?: string | SubtleCryptoHashAlgorithm;
  length?: number;
  namedCurve?: string;
  compressed?: boolean;
}

/**
 *
 * @deprecated Don't use. Introduced incidentally in 3.x. Scheduled for removal.
 */
declare type SubtleCryptoJsonWebKey = JsonWebKey;

/**
 *
 * @deprecated Don't use. Introduced incidentally in 3.x. Scheduled for removal.
 */
declare type SubtleCryptoJsonWebKeyRsaOtherPrimesInfo = RsaOtherPrimesInfo;

interface SubtleCryptoSignAlgorithm {
  name: string;
  hash?: string | SubtleCryptoHashAlgorithm;
  dataLength?: number;
  saltLength?: number;
}

interface Text {
  readonly text: string;
  readonly lastInTextNode: boolean;
  readonly removed: boolean;
  before(content: Content, options?: ContentOptions): Text;
  after(content: Content, options?: ContentOptions): Text;
  replace(content: Content, options?: ContentOptions): Text;
  remove(): Text;
}

declare class TextDecoder {
  constructor(
    label?: "utf-8" | "utf8" | "unicode-1-1-utf-8",
    options?: TextDecoderConstructorOptions
  );
  decode(
    input?: ArrayBuffer | ArrayBufferView,
    options?: TextDecoderDecodeOptions
  ): string;
  readonly encoding: string;
  readonly fatal: boolean;
  readonly ignoreBOM: boolean;
}

interface TextDecoderConstructorOptions {
  fatal: boolean;
  ignoreBOM: boolean;
}

interface TextDecoderDecodeOptions {
  stream: boolean;
}

declare class TextDecoderStream extends TransformStream {
  constructor(label?: string, options?: TextDecoderStreamTextDecoderStreamInit);
}

interface TextDecoderStreamTextDecoderStreamInit {
  fatal?: boolean;
}

declare class TextEncoder {
  constructor();
  encode(input?: string): Uint8Array;
  encodeInto(input: string, buffer: Uint8Array): TextEncoderEncodeIntoResult;
  readonly encoding: string;
}

interface TextEncoderEncodeIntoResult {
  read: number;
  written: number;
}

declare class TextEncoderStream extends TransformStream {
  constructor();
}

declare class TransformStream {
  constructor(
    maybeTransformer?: Transformer,
    maybeWritableStrategy?: StreamQueuingStrategy,
    maybeReadableStrategy?: StreamQueuingStrategy
  );
  readonly readable: ReadableStream;
  readonly writable: WritableStream;
}

interface TransformStreamDefaultController {
  readonly desiredSize: number | null;
  enqueue(chunk: any): void;
  error(reason: any): void;
  terminate(): void;
}

interface Transformer {
  readableType?: string;
  writableType?: string;
  start?(controller: TransformStreamDefaultController): any;
  transform?(chunk: any, controller: TransformStreamDefaultController): any;
  flush?(controller: TransformStreamDefaultController): any;
}

declare class URL {
  constructor(url: string, base?: string);
  href: string;
  readonly origin: string;
  protocol: string;
  username: string;
  password: string;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  readonly searchParams: URLSearchParams;
  hash: string;
  toString(): string;
  toJSON(): string;
}

declare class URLPattern {
  constructor(input?: string | URLPatternURLPatternInit, baseURL?: string);
  readonly protocol: string;
  readonly username: string;
  readonly password: string;
  readonly hostname: string;
  readonly port: string;
  readonly pathname: string;
  readonly search: string;
  readonly hash: string;
  test(input?: string | URLPatternURLPatternInit, baseURL?: string): boolean;
  exec(
    input?: string | URLPatternURLPatternInit,
    baseURL?: string
  ): URLPatternURLPatternResult | null;
}

interface URLPatternURLPatternComponentResult {
  input: string;
  groups: Record<string, string>;
}

interface URLPatternURLPatternInit {
  protocol?: string;
  username?: string;
  password?: string;
  hostname?: string;
  port?: string;
  pathname?: string;
  search?: string;
  hash?: string;
  baseURL?: string;
}

interface URLPatternURLPatternResult {
  inputs: (string | URLPatternURLPatternInit)[];
  protocol: URLPatternURLPatternComponentResult;
  username: URLPatternURLPatternComponentResult;
  password: URLPatternURLPatternComponentResult;
  hostname: URLPatternURLPatternComponentResult;
  port: URLPatternURLPatternComponentResult;
  pathname: URLPatternURLPatternComponentResult;
  search: URLPatternURLPatternComponentResult;
  hash: URLPatternURLPatternComponentResult;
}

declare class URLSearchParams {
  constructor(init?: URLSearchParamsInit);
  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  sort(): void;
  entries(): IterableIterator<[key: string, value: string]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string>;
  forEach<This = unknown>(
    callback: (
      this: This,
      key: string,
      value: string,
      parent: URLSearchParams
    ) => void,
    thisArg?: This
  ): void;
  [Symbol.iterator](): IterableIterator<[key: string, value: string]>;
  toString(): string;
}

declare type URLSearchParamsInit =
  | URLSearchParams
  | string
  | Record<string, string>
  | [key: string, value: string][];

/**
 * Back compat for code migrating to older definitions.
 * This technically isn't part of a standard either way, but the naming
 * is more consistent.
 * @deprecated Use URLSearchParamsInit instead.
 */
declare type URLSearchParamsInitializer = URLSearchParamsInit;

interface UnderlyingSink {
  type?: string;
  start?(controller: WritableStreamDefaultController): any;
  write?(chunk: any, controller: WritableStreamDefaultController): any;
  abort?(reason: any): any;
  close?(): any;
}

interface UnderlyingSource {
  type?: string;
  autoAllocateChunkSize?: number;
  start?(
    controller: ReadableStreamDefaultController | ReadableByteStreamController
  ): any;
  pull?(
    controller: ReadableStreamDefaultController | ReadableByteStreamController
  ): any;
  cancel?(reason?: any): any;
}

declare class WebSocket extends EventTarget<WebSocketEventMap> {
  constructor(url: string, protocols?: string[] | string);
  accept(): void;
  send(message: ArrayBuffer | ArrayBufferView | string): void;
  close(code?: number, reason?: string): void;
  static readonly READY_STATE_CONNECTING: number;
  static readonly READY_STATE_OPEN: number;
  static readonly READY_STATE_CLOSING: number;
  static readonly READY_STATE_CLOSED: number;
  readonly readyState: number;
  readonly url: string | null;
  readonly protocol: string | null;
  readonly extensions: string | null;
}

declare type WebSocketEventMap = {
  close: CloseEvent;
  message: MessageEvent;
  open: Event;
  error: ErrorEvent;
};

declare const WebSocketPair: { new (): { 0: WebSocket; 1: WebSocket } };

declare abstract class WorkerGlobalScope extends EventTarget<WorkerGlobalScopeEventMap> {}

declare type WorkerGlobalScopeEventMap = {
  fetch: FetchEvent;
  scheduled: ScheduledEvent;
  unhandledrejection: PromiseRejectionEvent;
  rejectionhandled: PromiseRejectionEvent;
};

declare class WritableStream {
  constructor(
    underlyingSink?: UnderlyingSink,
    queuingStrategy?: StreamQueuingStrategy
  );
  readonly locked: boolean;
  abort(reason: any): Promise<void>;
  close(): Promise<void>;
  getWriter(): WritableStreamDefaultWriter;
}

declare abstract class WritableStreamDefaultController {
  readonly signal: AbortSignal;
  error(reason?: any): void;
}

declare class WritableStreamDefaultWriter {
  constructor(stream: WritableStream);
  readonly closed: Promise<void>;
  readonly ready: Promise<void>;
  readonly desiredSize: number | null;
  abort(reason: any): Promise<void>;
  close(): Promise<void>;
  write(chunk: any): Promise<void>;
  releaseLock(): void;
}

/**
 * Back-compat alias.
 * @deprecated Use WritableStreamDefaultWriter
 */
declare type WritableStreamWritableStreamDefaultWriter =
  WritableStreamDefaultWriter;

declare function addEventListener<Type extends keyof WorkerGlobalScopeEventMap>(
  type: Type,
  handler: EventListenerOrEventListenerObject<WorkerGlobalScopeEventMap[Type]>,
  options?: EventTargetAddEventListenerOptions | boolean
): void;

declare function atob(data: string): string;

declare function btoa(data: string): string;

declare const caches: CacheStorage;

declare function clearInterval(timeoutId: number | null): void;

declare function clearTimeout(timeoutId: number | null): void;

declare const console: Console;

declare const crypto: Crypto;

declare function dispatchEvent(
  event: WorkerGlobalScopeEventMap[keyof WorkerGlobalScopeEventMap]
): boolean;

declare function fetch(
  request: Request | string,
  requestInitr?: RequestInit | Request
): Promise<Response>;

declare const navigator: Navigator;

declare const origin: void;

declare function queueMicrotask(task: Function): void;

declare function removeEventListener<
  Type extends keyof WorkerGlobalScopeEventMap
>(
  type: Type,
  handler: EventListenerOrEventListenerObject<WorkerGlobalScopeEventMap[Type]>,
  options?: EventTargetEventListenerOptions | boolean
): void;

declare const scheduler: Scheduler;

declare const self: ServiceWorkerGlobalScope;

declare function setInterval<Args extends any[]>(
  callback: (...args: Args) => void,
  msDelay?: number,
  ...args: Args
): number;

declare function setTimeout<Args extends any[]>(
  callback: (...args: Args) => void,
  msDelay?: number,
  ...args: Args
): number;

declare function structuredClone(
  value: any,
  options?: ServiceWorkerGlobalScopeStructuredCloneOptions
): any;

/*** Injected pages.d.ts ***/
type Params<P extends string = any> = Record<P, string | string[]>;

type EventContext<Env, P extends string, Data> = {
  request: Request;
  functionPath: string;
  waitUntil: (promise: Promise<any>) => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  env: Env & { ASSETS: { fetch: typeof fetch } };
  params: Params<P>;
  data: Data;
};

declare type PagesFunction<
  Env = unknown,
  Params extends string = any,
  Data extends Record<string, unknown> = Record<string, unknown>
> = (context: EventContext<Env, Params, Data>) => Response | Promise<Response>;

type EventPluginContext<Env, P extends string, Data, PluginArgs> = {
  request: Request;
  functionPath: string;
  waitUntil: (promise: Promise<any>) => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  env: Env & { ASSETS: { fetch: typeof fetch } };
  params: Params<P>;
  data: Data;
  pluginArgs: PluginArgs;
};

declare type PagesPluginFunction<
  Env = unknown,
  Params extends string = any,
  Data extends Record<string, unknown> = Record<string, unknown>,
  PluginArgs = unknown
> = (
  context: EventPluginContext<Env, Params, Data, PluginArgs>
) => Response | Promise<Response>;

declare module "assets:*" {
  export const onRequest: PagesFunction;
}
