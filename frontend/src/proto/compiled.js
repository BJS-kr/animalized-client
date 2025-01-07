/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const input = $root.input = (() => {

    /**
     * Namespace input.
     * @exports input
     * @namespace
     */
    const input = {};

    input.Input = (function() {

        /**
         * Properties of an Input.
         * @memberof input
         * @interface IInput
         * @property {string|null} [userId] Input userId
         * @property {input.IInit|null} [init] Input init
         * @property {input.IOperation|null} [op] Input op
         * @property {input.ILobby|null} [lobby] Input lobby
         * @property {input.IRoom|null} [room] Input room
         * @property {input.IGameResult|null} [gameResult] Input gameResult
         */

        /**
         * Constructs a new Input.
         * @memberof input
         * @classdesc Represents an Input.
         * @implements IInput
         * @constructor
         * @param {input.IInput=} [properties] Properties to set
         */
        function Input(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Input userId.
         * @member {string} userId
         * @memberof input.Input
         * @instance
         */
        Input.prototype.userId = "";

        /**
         * Input init.
         * @member {input.IInit|null|undefined} init
         * @memberof input.Input
         * @instance
         */
        Input.prototype.init = null;

        /**
         * Input op.
         * @member {input.IOperation|null|undefined} op
         * @memberof input.Input
         * @instance
         */
        Input.prototype.op = null;

        /**
         * Input lobby.
         * @member {input.ILobby|null|undefined} lobby
         * @memberof input.Input
         * @instance
         */
        Input.prototype.lobby = null;

        /**
         * Input room.
         * @member {input.IRoom|null|undefined} room
         * @memberof input.Input
         * @instance
         */
        Input.prototype.room = null;

        /**
         * Input gameResult.
         * @member {input.IGameResult|null|undefined} gameResult
         * @memberof input.Input
         * @instance
         */
        Input.prototype.gameResult = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Input kind.
         * @member {"init"|"op"|"lobby"|"room"|"gameResult"|undefined} kind
         * @memberof input.Input
         * @instance
         */
        Object.defineProperty(Input.prototype, "kind", {
            get: $util.oneOfGetter($oneOfFields = ["init", "op", "lobby", "room", "gameResult"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Input instance using the specified properties.
         * @function create
         * @memberof input.Input
         * @static
         * @param {input.IInput=} [properties] Properties to set
         * @returns {input.Input} Input instance
         */
        Input.create = function create(properties) {
            return new Input(properties);
        };

        /**
         * Encodes the specified Input message. Does not implicitly {@link input.Input.verify|verify} messages.
         * @function encode
         * @memberof input.Input
         * @static
         * @param {input.IInput} message Input message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Input.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            if (message.init != null && Object.hasOwnProperty.call(message, "init"))
                $root.input.Init.encode(message.init, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.op != null && Object.hasOwnProperty.call(message, "op"))
                $root.input.Operation.encode(message.op, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.lobby != null && Object.hasOwnProperty.call(message, "lobby"))
                $root.input.Lobby.encode(message.lobby, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                $root.input.Room.encode(message.room, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.gameResult != null && Object.hasOwnProperty.call(message, "gameResult"))
                $root.input.GameResult.encode(message.gameResult, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Input message, length delimited. Does not implicitly {@link input.Input.verify|verify} messages.
         * @function encodeDelimited
         * @memberof input.Input
         * @static
         * @param {input.IInput} message Input message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Input.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @function decode
         * @memberof input.Input
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {input.Input} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Input.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.input.Input();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                case 2: {
                        message.init = $root.input.Init.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.op = $root.input.Operation.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.lobby = $root.input.Lobby.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.room = $root.input.Room.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.gameResult = $root.input.GameResult.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Input message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof input.Input
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {input.Input} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Input.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Input message.
         * @function verify
         * @memberof input.Input
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Input.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.init != null && message.hasOwnProperty("init")) {
                properties.kind = 1;
                {
                    let error = $root.input.Init.verify(message.init);
                    if (error)
                        return "init." + error;
                }
            }
            if (message.op != null && message.hasOwnProperty("op")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.input.Operation.verify(message.op);
                    if (error)
                        return "op." + error;
                }
            }
            if (message.lobby != null && message.hasOwnProperty("lobby")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.input.Lobby.verify(message.lobby);
                    if (error)
                        return "lobby." + error;
                }
            }
            if (message.room != null && message.hasOwnProperty("room")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.input.Room.verify(message.room);
                    if (error)
                        return "room." + error;
                }
            }
            if (message.gameResult != null && message.hasOwnProperty("gameResult")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.input.GameResult.verify(message.gameResult);
                    if (error)
                        return "gameResult." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof input.Input
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {input.Input} Input
         */
        Input.fromObject = function fromObject(object) {
            if (object instanceof $root.input.Input)
                return object;
            let message = new $root.input.Input();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.init != null) {
                if (typeof object.init !== "object")
                    throw TypeError(".input.Input.init: object expected");
                message.init = $root.input.Init.fromObject(object.init);
            }
            if (object.op != null) {
                if (typeof object.op !== "object")
                    throw TypeError(".input.Input.op: object expected");
                message.op = $root.input.Operation.fromObject(object.op);
            }
            if (object.lobby != null) {
                if (typeof object.lobby !== "object")
                    throw TypeError(".input.Input.lobby: object expected");
                message.lobby = $root.input.Lobby.fromObject(object.lobby);
            }
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".input.Input.room: object expected");
                message.room = $root.input.Room.fromObject(object.room);
            }
            if (object.gameResult != null) {
                if (typeof object.gameResult !== "object")
                    throw TypeError(".input.Input.gameResult: object expected");
                message.gameResult = $root.input.GameResult.fromObject(object.gameResult);
            }
            return message;
        };

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @function toObject
         * @memberof input.Input
         * @static
         * @param {input.Input} message Input
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Input.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.init != null && message.hasOwnProperty("init")) {
                object.init = $root.input.Init.toObject(message.init, options);
                if (options.oneofs)
                    object.kind = "init";
            }
            if (message.op != null && message.hasOwnProperty("op")) {
                object.op = $root.input.Operation.toObject(message.op, options);
                if (options.oneofs)
                    object.kind = "op";
            }
            if (message.lobby != null && message.hasOwnProperty("lobby")) {
                object.lobby = $root.input.Lobby.toObject(message.lobby, options);
                if (options.oneofs)
                    object.kind = "lobby";
            }
            if (message.room != null && message.hasOwnProperty("room")) {
                object.room = $root.input.Room.toObject(message.room, options);
                if (options.oneofs)
                    object.kind = "room";
            }
            if (message.gameResult != null && message.hasOwnProperty("gameResult")) {
                object.gameResult = $root.input.GameResult.toObject(message.gameResult, options);
                if (options.oneofs)
                    object.kind = "gameResult";
            }
            return object;
        };

        /**
         * Converts this Input to JSON.
         * @function toJSON
         * @memberof input.Input
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Input.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Input
         * @function getTypeUrl
         * @memberof input.Input
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Input.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/input.Input";
        };

        return Input;
    })();

    input.Init = (function() {

        /**
         * Properties of an Init.
         * @memberof input
         * @interface IInit
         */

        /**
         * Constructs a new Init.
         * @memberof input
         * @classdesc Represents an Init.
         * @implements IInit
         * @constructor
         * @param {input.IInit=} [properties] Properties to set
         */
        function Init(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Init instance using the specified properties.
         * @function create
         * @memberof input.Init
         * @static
         * @param {input.IInit=} [properties] Properties to set
         * @returns {input.Init} Init instance
         */
        Init.create = function create(properties) {
            return new Init(properties);
        };

        /**
         * Encodes the specified Init message. Does not implicitly {@link input.Init.verify|verify} messages.
         * @function encode
         * @memberof input.Init
         * @static
         * @param {input.IInit} message Init message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Init.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Init message, length delimited. Does not implicitly {@link input.Init.verify|verify} messages.
         * @function encodeDelimited
         * @memberof input.Init
         * @static
         * @param {input.IInit} message Init message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Init.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Init message from the specified reader or buffer.
         * @function decode
         * @memberof input.Init
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {input.Init} Init
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Init.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.input.Init();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Init message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof input.Init
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {input.Init} Init
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Init.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Init message.
         * @function verify
         * @memberof input.Init
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Init.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Init message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof input.Init
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {input.Init} Init
         */
        Init.fromObject = function fromObject(object) {
            if (object instanceof $root.input.Init)
                return object;
            return new $root.input.Init();
        };

        /**
         * Creates a plain object from an Init message. Also converts values to other types if specified.
         * @function toObject
         * @memberof input.Init
         * @static
         * @param {input.Init} message Init
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Init.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Init to JSON.
         * @function toJSON
         * @memberof input.Init
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Init.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Init
         * @function getTypeUrl
         * @memberof input.Init
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Init.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/input.Init";
        };

        return Init;
    })();

    input.Position = (function() {

        /**
         * Properties of a Position.
         * @memberof input
         * @interface IPosition
         * @property {number|null} [x] Position x
         * @property {number|null} [y] Position y
         */

        /**
         * Constructs a new Position.
         * @memberof input
         * @classdesc Represents a Position.
         * @implements IPosition
         * @constructor
         * @param {input.IPosition=} [properties] Properties to set
         */
        function Position(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Position x.
         * @member {number} x
         * @memberof input.Position
         * @instance
         */
        Position.prototype.x = 0;

        /**
         * Position y.
         * @member {number} y
         * @memberof input.Position
         * @instance
         */
        Position.prototype.y = 0;

        /**
         * Creates a new Position instance using the specified properties.
         * @function create
         * @memberof input.Position
         * @static
         * @param {input.IPosition=} [properties] Properties to set
         * @returns {input.Position} Position instance
         */
        Position.create = function create(properties) {
            return new Position(properties);
        };

        /**
         * Encodes the specified Position message. Does not implicitly {@link input.Position.verify|verify} messages.
         * @function encode
         * @memberof input.Position
         * @static
         * @param {input.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            return writer;
        };

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link input.Position.verify|verify} messages.
         * @function encodeDelimited
         * @memberof input.Position
         * @static
         * @param {input.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @function decode
         * @memberof input.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {input.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.input.Position();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.int32();
                        break;
                    }
                case 2: {
                        message.y = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof input.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {input.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Position message.
         * @function verify
         * @memberof input.Position
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Position.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof input.Position
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {input.Position} Position
         */
        Position.fromObject = function fromObject(object) {
            if (object instanceof $root.input.Position)
                return object;
            let message = new $root.input.Position();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            return message;
        };

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @function toObject
         * @memberof input.Position
         * @static
         * @param {input.Position} message Position
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Position.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this Position to JSON.
         * @function toJSON
         * @memberof input.Position
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Position.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Position
         * @function getTypeUrl
         * @memberof input.Position
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Position.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/input.Position";
        };

        return Position;
    })();

    input.Operation = (function() {

        /**
         * Properties of an Operation.
         * @memberof input
         * @interface IOperation
         * @property {input.Operation.OperationType|null} [type] Operation type
         * @property {input.Operation.Direction|null} [direction] Operation direction
         * @property {input.Operation.IHitRange|null} [hitRange] Operation hitRange
         * @property {input.Operation.IGameState|null} [gameState] Operation gameState
         * @property {string|null} [targetUserId] Operation targetUserId
         * @property {number|null} [targetTerrainId] Operation targetTerrainId
         * @property {number|null} [projectileId] Operation projectileId
         * @property {number|Long|null} [context] Operation context
         * @property {number|Long|null} [prevContext] Operation prevContext
         */

        /**
         * Constructs a new Operation.
         * @memberof input
         * @classdesc Represents an Operation.
         * @implements IOperation
         * @constructor
         * @param {input.IOperation=} [properties] Properties to set
         */
        function Operation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Operation type.
         * @member {input.Operation.OperationType} type
         * @memberof input.Operation
         * @instance
         */
        Operation.prototype.type = 0;

        /**
         * Operation direction.
         * @member {input.Operation.Direction} direction
         * @memberof input.Operation
         * @instance
         */
        Operation.prototype.direction = 0;

        /**
         * Operation hitRange.
         * @member {input.Operation.IHitRange|null|undefined} hitRange
         * @memberof input.Operation
         * @instance
         */
        Operation.prototype.hitRange = null;

        /**
         * Operation gameState.
         * @member {input.Operation.IGameState|null|undefined} gameState
         * @memberof input.Operation
         * @instance
         */
        Operation.prototype.gameState = null;

        /**
         * Operation targetUserId.
         * @member {string} targetUserId
         * @memberof input.Operation
         * @instance
         */
        Operation.prototype.targetUserId = "";

        /**
         * Operation targetTerrainId.
         * @member {number} targetTerrainId
         * @memberof input.Operation
         * @instance
         */
        Operation.prototype.targetTerrainId = 0;

        /**
         * Operation projectileId.
         * @member {number} projectileId
         * @memberof input.Operation
         * @instance
         */
        Operation.prototype.projectileId = 0;

        /**
         * Operation context.
         * @member {number|Long} context
         * @memberof input.Operation
         * @instance
         */
        Operation.prototype.context = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Operation prevContext.
         * @member {number|Long} prevContext
         * @memberof input.Operation
         * @instance
         */
        Operation.prototype.prevContext = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Operation instance using the specified properties.
         * @function create
         * @memberof input.Operation
         * @static
         * @param {input.IOperation=} [properties] Properties to set
         * @returns {input.Operation} Operation instance
         */
        Operation.create = function create(properties) {
            return new Operation(properties);
        };

        /**
         * Encodes the specified Operation message. Does not implicitly {@link input.Operation.verify|verify} messages.
         * @function encode
         * @memberof input.Operation
         * @static
         * @param {input.IOperation} message Operation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.direction);
            if (message.hitRange != null && Object.hasOwnProperty.call(message, "hitRange"))
                $root.input.Operation.HitRange.encode(message.hitRange, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.gameState != null && Object.hasOwnProperty.call(message, "gameState"))
                $root.input.Operation.GameState.encode(message.gameState, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.targetUserId != null && Object.hasOwnProperty.call(message, "targetUserId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.targetUserId);
            if (message.targetTerrainId != null && Object.hasOwnProperty.call(message, "targetTerrainId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.targetTerrainId);
            if (message.projectileId != null && Object.hasOwnProperty.call(message, "projectileId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.projectileId);
            if (message.context != null && Object.hasOwnProperty.call(message, "context"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.context);
            if (message.prevContext != null && Object.hasOwnProperty.call(message, "prevContext"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.prevContext);
            return writer;
        };

        /**
         * Encodes the specified Operation message, length delimited. Does not implicitly {@link input.Operation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof input.Operation
         * @static
         * @param {input.IOperation} message Operation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Operation message from the specified reader or buffer.
         * @function decode
         * @memberof input.Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {input.Operation} Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.input.Operation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.direction = reader.int32();
                        break;
                    }
                case 3: {
                        message.hitRange = $root.input.Operation.HitRange.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.gameState = $root.input.Operation.GameState.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.targetUserId = reader.string();
                        break;
                    }
                case 6: {
                        message.targetTerrainId = reader.int32();
                        break;
                    }
                case 7: {
                        message.projectileId = reader.int32();
                        break;
                    }
                case 8: {
                        message.context = reader.int64();
                        break;
                    }
                case 9: {
                        message.prevContext = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Operation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof input.Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {input.Operation} Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Operation message.
         * @function verify
         * @memberof input.Operation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Operation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.direction != null && message.hasOwnProperty("direction"))
                switch (message.direction) {
                default:
                    return "direction: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.hitRange != null && message.hasOwnProperty("hitRange")) {
                let error = $root.input.Operation.HitRange.verify(message.hitRange);
                if (error)
                    return "hitRange." + error;
            }
            if (message.gameState != null && message.hasOwnProperty("gameState")) {
                let error = $root.input.Operation.GameState.verify(message.gameState);
                if (error)
                    return "gameState." + error;
            }
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                if (!$util.isString(message.targetUserId))
                    return "targetUserId: string expected";
            if (message.targetTerrainId != null && message.hasOwnProperty("targetTerrainId"))
                if (!$util.isInteger(message.targetTerrainId))
                    return "targetTerrainId: integer expected";
            if (message.projectileId != null && message.hasOwnProperty("projectileId"))
                if (!$util.isInteger(message.projectileId))
                    return "projectileId: integer expected";
            if (message.context != null && message.hasOwnProperty("context"))
                if (!$util.isInteger(message.context) && !(message.context && $util.isInteger(message.context.low) && $util.isInteger(message.context.high)))
                    return "context: integer|Long expected";
            if (message.prevContext != null && message.hasOwnProperty("prevContext"))
                if (!$util.isInteger(message.prevContext) && !(message.prevContext && $util.isInteger(message.prevContext.low) && $util.isInteger(message.prevContext.high)))
                    return "prevContext: integer|Long expected";
            return null;
        };

        /**
         * Creates an Operation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof input.Operation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {input.Operation} Operation
         */
        Operation.fromObject = function fromObject(object) {
            if (object instanceof $root.input.Operation)
                return object;
            let message = new $root.input.Operation();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "OPERATION_UNSPECIFIED":
            case 0:
                message.type = 0;
                break;
            case "MOVE":
            case 1:
                message.type = 1;
                break;
            case "ATTACK":
            case 2:
                message.type = 2;
                break;
            case "HIT":
            case 3:
                message.type = 3;
                break;
            case "GAME_STATE":
            case 4:
                message.type = 4;
                break;
            }
            switch (object.direction) {
            default:
                if (typeof object.direction === "number") {
                    message.direction = object.direction;
                    break;
                }
                break;
            case "DIRECTION_UNSPECIFIED":
            case 0:
                message.direction = 0;
                break;
            case "UP":
            case 1:
                message.direction = 1;
                break;
            case "DOWN":
            case 2:
                message.direction = 2;
                break;
            case "LEFT":
            case 3:
                message.direction = 3;
                break;
            case "RIGHT":
            case 4:
                message.direction = 4;
                break;
            }
            if (object.hitRange != null) {
                if (typeof object.hitRange !== "object")
                    throw TypeError(".input.Operation.hitRange: object expected");
                message.hitRange = $root.input.Operation.HitRange.fromObject(object.hitRange);
            }
            if (object.gameState != null) {
                if (typeof object.gameState !== "object")
                    throw TypeError(".input.Operation.gameState: object expected");
                message.gameState = $root.input.Operation.GameState.fromObject(object.gameState);
            }
            if (object.targetUserId != null)
                message.targetUserId = String(object.targetUserId);
            if (object.targetTerrainId != null)
                message.targetTerrainId = object.targetTerrainId | 0;
            if (object.projectileId != null)
                message.projectileId = object.projectileId | 0;
            if (object.context != null)
                if ($util.Long)
                    (message.context = $util.Long.fromValue(object.context)).unsigned = false;
                else if (typeof object.context === "string")
                    message.context = parseInt(object.context, 10);
                else if (typeof object.context === "number")
                    message.context = object.context;
                else if (typeof object.context === "object")
                    message.context = new $util.LongBits(object.context.low >>> 0, object.context.high >>> 0).toNumber();
            if (object.prevContext != null)
                if ($util.Long)
                    (message.prevContext = $util.Long.fromValue(object.prevContext)).unsigned = false;
                else if (typeof object.prevContext === "string")
                    message.prevContext = parseInt(object.prevContext, 10);
                else if (typeof object.prevContext === "number")
                    message.prevContext = object.prevContext;
                else if (typeof object.prevContext === "object")
                    message.prevContext = new $util.LongBits(object.prevContext.low >>> 0, object.prevContext.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an Operation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof input.Operation
         * @static
         * @param {input.Operation} message Operation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Operation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "OPERATION_UNSPECIFIED" : 0;
                object.direction = options.enums === String ? "DIRECTION_UNSPECIFIED" : 0;
                object.hitRange = null;
                object.gameState = null;
                object.targetUserId = "";
                object.targetTerrainId = 0;
                object.projectileId = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.context = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.context = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.prevContext = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.prevContext = options.longs === String ? "0" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.input.Operation.OperationType[message.type] === undefined ? message.type : $root.input.Operation.OperationType[message.type] : message.type;
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = options.enums === String ? $root.input.Operation.Direction[message.direction] === undefined ? message.direction : $root.input.Operation.Direction[message.direction] : message.direction;
            if (message.hitRange != null && message.hasOwnProperty("hitRange"))
                object.hitRange = $root.input.Operation.HitRange.toObject(message.hitRange, options);
            if (message.gameState != null && message.hasOwnProperty("gameState"))
                object.gameState = $root.input.Operation.GameState.toObject(message.gameState, options);
            if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
                object.targetUserId = message.targetUserId;
            if (message.targetTerrainId != null && message.hasOwnProperty("targetTerrainId"))
                object.targetTerrainId = message.targetTerrainId;
            if (message.projectileId != null && message.hasOwnProperty("projectileId"))
                object.projectileId = message.projectileId;
            if (message.context != null && message.hasOwnProperty("context"))
                if (typeof message.context === "number")
                    object.context = options.longs === String ? String(message.context) : message.context;
                else
                    object.context = options.longs === String ? $util.Long.prototype.toString.call(message.context) : options.longs === Number ? new $util.LongBits(message.context.low >>> 0, message.context.high >>> 0).toNumber() : message.context;
            if (message.prevContext != null && message.hasOwnProperty("prevContext"))
                if (typeof message.prevContext === "number")
                    object.prevContext = options.longs === String ? String(message.prevContext) : message.prevContext;
                else
                    object.prevContext = options.longs === String ? $util.Long.prototype.toString.call(message.prevContext) : options.longs === Number ? new $util.LongBits(message.prevContext.low >>> 0, message.prevContext.high >>> 0).toNumber() : message.prevContext;
            return object;
        };

        /**
         * Converts this Operation to JSON.
         * @function toJSON
         * @memberof input.Operation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Operation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Operation
         * @function getTypeUrl
         * @memberof input.Operation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Operation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/input.Operation";
        };

        /**
         * Direction enum.
         * @name input.Operation.Direction
         * @enum {number}
         * @property {number} DIRECTION_UNSPECIFIED=0 DIRECTION_UNSPECIFIED value
         * @property {number} UP=1 UP value
         * @property {number} DOWN=2 DOWN value
         * @property {number} LEFT=3 LEFT value
         * @property {number} RIGHT=4 RIGHT value
         */
        Operation.Direction = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DIRECTION_UNSPECIFIED"] = 0;
            values[valuesById[1] = "UP"] = 1;
            values[valuesById[2] = "DOWN"] = 2;
            values[valuesById[3] = "LEFT"] = 3;
            values[valuesById[4] = "RIGHT"] = 4;
            return values;
        })();

        /**
         * OperationType enum.
         * @name input.Operation.OperationType
         * @enum {number}
         * @property {number} OPERATION_UNSPECIFIED=0 OPERATION_UNSPECIFIED value
         * @property {number} MOVE=1 MOVE value
         * @property {number} ATTACK=2 ATTACK value
         * @property {number} HIT=3 HIT value
         * @property {number} GAME_STATE=4 GAME_STATE value
         */
        Operation.OperationType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OPERATION_UNSPECIFIED"] = 0;
            values[valuesById[1] = "MOVE"] = 1;
            values[valuesById[2] = "ATTACK"] = 2;
            values[valuesById[3] = "HIT"] = 3;
            values[valuesById[4] = "GAME_STATE"] = 4;
            return values;
        })();

        Operation.HitRange = (function() {

            /**
             * Properties of a HitRange.
             * @memberof input.Operation
             * @interface IHitRange
             * @property {input.IPosition|null} [leftBottom] HitRange leftBottom
             * @property {input.IPosition|null} [rightTop] HitRange rightTop
             */

            /**
             * Constructs a new HitRange.
             * @memberof input.Operation
             * @classdesc Represents a HitRange.
             * @implements IHitRange
             * @constructor
             * @param {input.Operation.IHitRange=} [properties] Properties to set
             */
            function HitRange(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HitRange leftBottom.
             * @member {input.IPosition|null|undefined} leftBottom
             * @memberof input.Operation.HitRange
             * @instance
             */
            HitRange.prototype.leftBottom = null;

            /**
             * HitRange rightTop.
             * @member {input.IPosition|null|undefined} rightTop
             * @memberof input.Operation.HitRange
             * @instance
             */
            HitRange.prototype.rightTop = null;

            /**
             * Creates a new HitRange instance using the specified properties.
             * @function create
             * @memberof input.Operation.HitRange
             * @static
             * @param {input.Operation.IHitRange=} [properties] Properties to set
             * @returns {input.Operation.HitRange} HitRange instance
             */
            HitRange.create = function create(properties) {
                return new HitRange(properties);
            };

            /**
             * Encodes the specified HitRange message. Does not implicitly {@link input.Operation.HitRange.verify|verify} messages.
             * @function encode
             * @memberof input.Operation.HitRange
             * @static
             * @param {input.Operation.IHitRange} message HitRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HitRange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.leftBottom != null && Object.hasOwnProperty.call(message, "leftBottom"))
                    $root.input.Position.encode(message.leftBottom, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.rightTop != null && Object.hasOwnProperty.call(message, "rightTop"))
                    $root.input.Position.encode(message.rightTop, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified HitRange message, length delimited. Does not implicitly {@link input.Operation.HitRange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof input.Operation.HitRange
             * @static
             * @param {input.Operation.IHitRange} message HitRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HitRange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HitRange message from the specified reader or buffer.
             * @function decode
             * @memberof input.Operation.HitRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {input.Operation.HitRange} HitRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HitRange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.input.Operation.HitRange();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.leftBottom = $root.input.Position.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.rightTop = $root.input.Position.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a HitRange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof input.Operation.HitRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {input.Operation.HitRange} HitRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HitRange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HitRange message.
             * @function verify
             * @memberof input.Operation.HitRange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HitRange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.leftBottom != null && message.hasOwnProperty("leftBottom")) {
                    let error = $root.input.Position.verify(message.leftBottom);
                    if (error)
                        return "leftBottom." + error;
                }
                if (message.rightTop != null && message.hasOwnProperty("rightTop")) {
                    let error = $root.input.Position.verify(message.rightTop);
                    if (error)
                        return "rightTop." + error;
                }
                return null;
            };

            /**
             * Creates a HitRange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof input.Operation.HitRange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {input.Operation.HitRange} HitRange
             */
            HitRange.fromObject = function fromObject(object) {
                if (object instanceof $root.input.Operation.HitRange)
                    return object;
                let message = new $root.input.Operation.HitRange();
                if (object.leftBottom != null) {
                    if (typeof object.leftBottom !== "object")
                        throw TypeError(".input.Operation.HitRange.leftBottom: object expected");
                    message.leftBottom = $root.input.Position.fromObject(object.leftBottom);
                }
                if (object.rightTop != null) {
                    if (typeof object.rightTop !== "object")
                        throw TypeError(".input.Operation.HitRange.rightTop: object expected");
                    message.rightTop = $root.input.Position.fromObject(object.rightTop);
                }
                return message;
            };

            /**
             * Creates a plain object from a HitRange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof input.Operation.HitRange
             * @static
             * @param {input.Operation.HitRange} message HitRange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HitRange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.leftBottom = null;
                    object.rightTop = null;
                }
                if (message.leftBottom != null && message.hasOwnProperty("leftBottom"))
                    object.leftBottom = $root.input.Position.toObject(message.leftBottom, options);
                if (message.rightTop != null && message.hasOwnProperty("rightTop"))
                    object.rightTop = $root.input.Position.toObject(message.rightTop, options);
                return object;
            };

            /**
             * Converts this HitRange to JSON.
             * @function toJSON
             * @memberof input.Operation.HitRange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HitRange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for HitRange
             * @function getTypeUrl
             * @memberof input.Operation.HitRange
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            HitRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/input.Operation.HitRange";
            };

            return HitRange;
        })();

        Operation.GameState = (function() {

            /**
             * Properties of a GameState.
             * @memberof input.Operation
             * @interface IGameState
             * @property {Array.<input.Operation.GameState.IUserState>|null} [userStates] GameState userStates
             */

            /**
             * Constructs a new GameState.
             * @memberof input.Operation
             * @classdesc Represents a GameState.
             * @implements IGameState
             * @constructor
             * @param {input.Operation.IGameState=} [properties] Properties to set
             */
            function GameState(properties) {
                this.userStates = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameState userStates.
             * @member {Array.<input.Operation.GameState.IUserState>} userStates
             * @memberof input.Operation.GameState
             * @instance
             */
            GameState.prototype.userStates = $util.emptyArray;

            /**
             * Creates a new GameState instance using the specified properties.
             * @function create
             * @memberof input.Operation.GameState
             * @static
             * @param {input.Operation.IGameState=} [properties] Properties to set
             * @returns {input.Operation.GameState} GameState instance
             */
            GameState.create = function create(properties) {
                return new GameState(properties);
            };

            /**
             * Encodes the specified GameState message. Does not implicitly {@link input.Operation.GameState.verify|verify} messages.
             * @function encode
             * @memberof input.Operation.GameState
             * @static
             * @param {input.Operation.IGameState} message GameState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userStates != null && message.userStates.length)
                    for (let i = 0; i < message.userStates.length; ++i)
                        $root.input.Operation.GameState.UserState.encode(message.userStates[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GameState message, length delimited. Does not implicitly {@link input.Operation.GameState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof input.Operation.GameState
             * @static
             * @param {input.Operation.IGameState} message GameState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameState message from the specified reader or buffer.
             * @function decode
             * @memberof input.Operation.GameState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {input.Operation.GameState} GameState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.input.Operation.GameState();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.userStates && message.userStates.length))
                                message.userStates = [];
                            message.userStates.push($root.input.Operation.GameState.UserState.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GameState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof input.Operation.GameState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {input.Operation.GameState} GameState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameState message.
             * @function verify
             * @memberof input.Operation.GameState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userStates != null && message.hasOwnProperty("userStates")) {
                    if (!Array.isArray(message.userStates))
                        return "userStates: array expected";
                    for (let i = 0; i < message.userStates.length; ++i) {
                        let error = $root.input.Operation.GameState.UserState.verify(message.userStates[i]);
                        if (error)
                            return "userStates." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GameState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof input.Operation.GameState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {input.Operation.GameState} GameState
             */
            GameState.fromObject = function fromObject(object) {
                if (object instanceof $root.input.Operation.GameState)
                    return object;
                let message = new $root.input.Operation.GameState();
                if (object.userStates) {
                    if (!Array.isArray(object.userStates))
                        throw TypeError(".input.Operation.GameState.userStates: array expected");
                    message.userStates = [];
                    for (let i = 0; i < object.userStates.length; ++i) {
                        if (typeof object.userStates[i] !== "object")
                            throw TypeError(".input.Operation.GameState.userStates: object expected");
                        message.userStates[i] = $root.input.Operation.GameState.UserState.fromObject(object.userStates[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GameState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof input.Operation.GameState
             * @static
             * @param {input.Operation.GameState} message GameState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.userStates = [];
                if (message.userStates && message.userStates.length) {
                    object.userStates = [];
                    for (let j = 0; j < message.userStates.length; ++j)
                        object.userStates[j] = $root.input.Operation.GameState.UserState.toObject(message.userStates[j], options);
                }
                return object;
            };

            /**
             * Converts this GameState to JSON.
             * @function toJSON
             * @memberof input.Operation.GameState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GameState
             * @function getTypeUrl
             * @memberof input.Operation.GameState
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/input.Operation.GameState";
            };

            GameState.UserState = (function() {

                /**
                 * Properties of a UserState.
                 * @memberof input.Operation.GameState
                 * @interface IUserState
                 * @property {input.IPosition|null} [position] UserState position
                 * @property {number|null} [score] UserState score
                 */

                /**
                 * Constructs a new UserState.
                 * @memberof input.Operation.GameState
                 * @classdesc Represents a UserState.
                 * @implements IUserState
                 * @constructor
                 * @param {input.Operation.GameState.IUserState=} [properties] Properties to set
                 */
                function UserState(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserState position.
                 * @member {input.IPosition|null|undefined} position
                 * @memberof input.Operation.GameState.UserState
                 * @instance
                 */
                UserState.prototype.position = null;

                /**
                 * UserState score.
                 * @member {number} score
                 * @memberof input.Operation.GameState.UserState
                 * @instance
                 */
                UserState.prototype.score = 0;

                /**
                 * Creates a new UserState instance using the specified properties.
                 * @function create
                 * @memberof input.Operation.GameState.UserState
                 * @static
                 * @param {input.Operation.GameState.IUserState=} [properties] Properties to set
                 * @returns {input.Operation.GameState.UserState} UserState instance
                 */
                UserState.create = function create(properties) {
                    return new UserState(properties);
                };

                /**
                 * Encodes the specified UserState message. Does not implicitly {@link input.Operation.GameState.UserState.verify|verify} messages.
                 * @function encode
                 * @memberof input.Operation.GameState.UserState
                 * @static
                 * @param {input.Operation.GameState.IUserState} message UserState message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserState.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                        $root.input.Position.encode(message.position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.score);
                    return writer;
                };

                /**
                 * Encodes the specified UserState message, length delimited. Does not implicitly {@link input.Operation.GameState.UserState.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof input.Operation.GameState.UserState
                 * @static
                 * @param {input.Operation.GameState.IUserState} message UserState message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserState.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UserState message from the specified reader or buffer.
                 * @function decode
                 * @memberof input.Operation.GameState.UserState
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {input.Operation.GameState.UserState} UserState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserState.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.input.Operation.GameState.UserState();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.position = $root.input.Position.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.score = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UserState message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof input.Operation.GameState.UserState
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {input.Operation.GameState.UserState} UserState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserState.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UserState message.
                 * @function verify
                 * @memberof input.Operation.GameState.UserState
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UserState.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.position != null && message.hasOwnProperty("position")) {
                        let error = $root.input.Position.verify(message.position);
                        if (error)
                            return "position." + error;
                    }
                    if (message.score != null && message.hasOwnProperty("score"))
                        if (!$util.isInteger(message.score))
                            return "score: integer expected";
                    return null;
                };

                /**
                 * Creates a UserState message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof input.Operation.GameState.UserState
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {input.Operation.GameState.UserState} UserState
                 */
                UserState.fromObject = function fromObject(object) {
                    if (object instanceof $root.input.Operation.GameState.UserState)
                        return object;
                    let message = new $root.input.Operation.GameState.UserState();
                    if (object.position != null) {
                        if (typeof object.position !== "object")
                            throw TypeError(".input.Operation.GameState.UserState.position: object expected");
                        message.position = $root.input.Position.fromObject(object.position);
                    }
                    if (object.score != null)
                        message.score = object.score | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a UserState message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof input.Operation.GameState.UserState
                 * @static
                 * @param {input.Operation.GameState.UserState} message UserState
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserState.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.position = null;
                        object.score = 0;
                    }
                    if (message.position != null && message.hasOwnProperty("position"))
                        object.position = $root.input.Position.toObject(message.position, options);
                    if (message.score != null && message.hasOwnProperty("score"))
                        object.score = message.score;
                    return object;
                };

                /**
                 * Converts this UserState to JSON.
                 * @function toJSON
                 * @memberof input.Operation.GameState.UserState
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserState.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for UserState
                 * @function getTypeUrl
                 * @memberof input.Operation.GameState.UserState
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UserState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/input.Operation.GameState.UserState";
                };

                return UserState;
            })();

            return GameState;
        })();

        return Operation;
    })();

    input.RoomState = (function() {

        /**
         * Properties of a RoomState.
         * @memberof input
         * @interface IRoomState
         * @property {input.RoomState.RoomStatusType|null} [status] RoomState status
         * @property {string|null} [roomName] RoomState roomName
         * @property {number|null} [maxUsers] RoomState maxUsers
         * @property {Array.<string>|null} [userIds] RoomState userIds
         */

        /**
         * Constructs a new RoomState.
         * @memberof input
         * @classdesc Represents a RoomState.
         * @implements IRoomState
         * @constructor
         * @param {input.IRoomState=} [properties] Properties to set
         */
        function RoomState(properties) {
            this.userIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomState status.
         * @member {input.RoomState.RoomStatusType} status
         * @memberof input.RoomState
         * @instance
         */
        RoomState.prototype.status = 0;

        /**
         * RoomState roomName.
         * @member {string} roomName
         * @memberof input.RoomState
         * @instance
         */
        RoomState.prototype.roomName = "";

        /**
         * RoomState maxUsers.
         * @member {number} maxUsers
         * @memberof input.RoomState
         * @instance
         */
        RoomState.prototype.maxUsers = 0;

        /**
         * RoomState userIds.
         * @member {Array.<string>} userIds
         * @memberof input.RoomState
         * @instance
         */
        RoomState.prototype.userIds = $util.emptyArray;

        /**
         * Creates a new RoomState instance using the specified properties.
         * @function create
         * @memberof input.RoomState
         * @static
         * @param {input.IRoomState=} [properties] Properties to set
         * @returns {input.RoomState} RoomState instance
         */
        RoomState.create = function create(properties) {
            return new RoomState(properties);
        };

        /**
         * Encodes the specified RoomState message. Does not implicitly {@link input.RoomState.verify|verify} messages.
         * @function encode
         * @memberof input.RoomState
         * @static
         * @param {input.IRoomState} message RoomState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.roomName != null && Object.hasOwnProperty.call(message, "roomName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomName);
            if (message.maxUsers != null && Object.hasOwnProperty.call(message, "maxUsers"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxUsers);
            if (message.userIds != null && message.userIds.length)
                for (let i = 0; i < message.userIds.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.userIds[i]);
            return writer;
        };

        /**
         * Encodes the specified RoomState message, length delimited. Does not implicitly {@link input.RoomState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof input.RoomState
         * @static
         * @param {input.IRoomState} message RoomState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomState message from the specified reader or buffer.
         * @function decode
         * @memberof input.RoomState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {input.RoomState} RoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.input.RoomState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 2: {
                        message.roomName = reader.string();
                        break;
                    }
                case 3: {
                        message.maxUsers = reader.int32();
                        break;
                    }
                case 4: {
                        if (!(message.userIds && message.userIds.length))
                            message.userIds = [];
                        message.userIds.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof input.RoomState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {input.RoomState} RoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomState message.
         * @function verify
         * @memberof input.RoomState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                if (!$util.isString(message.roomName))
                    return "roomName: string expected";
            if (message.maxUsers != null && message.hasOwnProperty("maxUsers"))
                if (!$util.isInteger(message.maxUsers))
                    return "maxUsers: integer expected";
            if (message.userIds != null && message.hasOwnProperty("userIds")) {
                if (!Array.isArray(message.userIds))
                    return "userIds: array expected";
                for (let i = 0; i < message.userIds.length; ++i)
                    if (!$util.isString(message.userIds[i]))
                        return "userIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RoomState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof input.RoomState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {input.RoomState} RoomState
         */
        RoomState.fromObject = function fromObject(object) {
            if (object instanceof $root.input.RoomState)
                return object;
            let message = new $root.input.RoomState();
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "ROOM_STATUS_UNSPECIFIED":
            case 0:
                message.status = 0;
                break;
            case "WAITING":
            case 1:
                message.status = 1;
                break;
            case "PLAYING":
            case 2:
                message.status = 2;
                break;
            }
            if (object.roomName != null)
                message.roomName = String(object.roomName);
            if (object.maxUsers != null)
                message.maxUsers = object.maxUsers | 0;
            if (object.userIds) {
                if (!Array.isArray(object.userIds))
                    throw TypeError(".input.RoomState.userIds: array expected");
                message.userIds = [];
                for (let i = 0; i < object.userIds.length; ++i)
                    message.userIds[i] = String(object.userIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof input.RoomState
         * @static
         * @param {input.RoomState} message RoomState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.userIds = [];
            if (options.defaults) {
                object.status = options.enums === String ? "ROOM_STATUS_UNSPECIFIED" : 0;
                object.roomName = "";
                object.maxUsers = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.input.RoomState.RoomStatusType[message.status] === undefined ? message.status : $root.input.RoomState.RoomStatusType[message.status] : message.status;
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                object.roomName = message.roomName;
            if (message.maxUsers != null && message.hasOwnProperty("maxUsers"))
                object.maxUsers = message.maxUsers;
            if (message.userIds && message.userIds.length) {
                object.userIds = [];
                for (let j = 0; j < message.userIds.length; ++j)
                    object.userIds[j] = message.userIds[j];
            }
            return object;
        };

        /**
         * Converts this RoomState to JSON.
         * @function toJSON
         * @memberof input.RoomState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoomState
         * @function getTypeUrl
         * @memberof input.RoomState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoomState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/input.RoomState";
        };

        /**
         * RoomStatusType enum.
         * @name input.RoomState.RoomStatusType
         * @enum {number}
         * @property {number} ROOM_STATUS_UNSPECIFIED=0 ROOM_STATUS_UNSPECIFIED value
         * @property {number} WAITING=1 WAITING value
         * @property {number} PLAYING=2 PLAYING value
         */
        RoomState.RoomStatusType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ROOM_STATUS_UNSPECIFIED"] = 0;
            values[valuesById[1] = "WAITING"] = 1;
            values[valuesById[2] = "PLAYING"] = 2;
            return values;
        })();

        return RoomState;
    })();

    input.Lobby = (function() {

        /**
         * Properties of a Lobby.
         * @memberof input
         * @interface ILobby
         * @property {input.Lobby.LobbyType|null} [type] Lobby type
         * @property {string|null} [roomName] Lobby roomName
         * @property {number|null} [maxUsers] Lobby maxUsers
         * @property {Array.<input.IRoomState>|null} [roomStates] Lobby roomStates
         */

        /**
         * Constructs a new Lobby.
         * @memberof input
         * @classdesc Represents a Lobby.
         * @implements ILobby
         * @constructor
         * @param {input.ILobby=} [properties] Properties to set
         */
        function Lobby(properties) {
            this.roomStates = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Lobby type.
         * @member {input.Lobby.LobbyType} type
         * @memberof input.Lobby
         * @instance
         */
        Lobby.prototype.type = 0;

        /**
         * Lobby roomName.
         * @member {string} roomName
         * @memberof input.Lobby
         * @instance
         */
        Lobby.prototype.roomName = "";

        /**
         * Lobby maxUsers.
         * @member {number} maxUsers
         * @memberof input.Lobby
         * @instance
         */
        Lobby.prototype.maxUsers = 0;

        /**
         * Lobby roomStates.
         * @member {Array.<input.IRoomState>} roomStates
         * @memberof input.Lobby
         * @instance
         */
        Lobby.prototype.roomStates = $util.emptyArray;

        /**
         * Creates a new Lobby instance using the specified properties.
         * @function create
         * @memberof input.Lobby
         * @static
         * @param {input.ILobby=} [properties] Properties to set
         * @returns {input.Lobby} Lobby instance
         */
        Lobby.create = function create(properties) {
            return new Lobby(properties);
        };

        /**
         * Encodes the specified Lobby message. Does not implicitly {@link input.Lobby.verify|verify} messages.
         * @function encode
         * @memberof input.Lobby
         * @static
         * @param {input.ILobby} message Lobby message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Lobby.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.roomName != null && Object.hasOwnProperty.call(message, "roomName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomName);
            if (message.maxUsers != null && Object.hasOwnProperty.call(message, "maxUsers"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxUsers);
            if (message.roomStates != null && message.roomStates.length)
                for (let i = 0; i < message.roomStates.length; ++i)
                    $root.input.RoomState.encode(message.roomStates[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Lobby message, length delimited. Does not implicitly {@link input.Lobby.verify|verify} messages.
         * @function encodeDelimited
         * @memberof input.Lobby
         * @static
         * @param {input.ILobby} message Lobby message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Lobby.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Lobby message from the specified reader or buffer.
         * @function decode
         * @memberof input.Lobby
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {input.Lobby} Lobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Lobby.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.input.Lobby();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.roomName = reader.string();
                        break;
                    }
                case 3: {
                        message.maxUsers = reader.int32();
                        break;
                    }
                case 4: {
                        if (!(message.roomStates && message.roomStates.length))
                            message.roomStates = [];
                        message.roomStates.push($root.input.RoomState.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Lobby message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof input.Lobby
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {input.Lobby} Lobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Lobby.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Lobby message.
         * @function verify
         * @memberof input.Lobby
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Lobby.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                if (!$util.isString(message.roomName))
                    return "roomName: string expected";
            if (message.maxUsers != null && message.hasOwnProperty("maxUsers"))
                if (!$util.isInteger(message.maxUsers))
                    return "maxUsers: integer expected";
            if (message.roomStates != null && message.hasOwnProperty("roomStates")) {
                if (!Array.isArray(message.roomStates))
                    return "roomStates: array expected";
                for (let i = 0; i < message.roomStates.length; ++i) {
                    let error = $root.input.RoomState.verify(message.roomStates[i]);
                    if (error)
                        return "roomStates." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Lobby message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof input.Lobby
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {input.Lobby} Lobby
         */
        Lobby.fromObject = function fromObject(object) {
            if (object instanceof $root.input.Lobby)
                return object;
            let message = new $root.input.Lobby();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "LOBBY_UNSPECIFIED":
            case 0:
                message.type = 0;
                break;
            case "CREATE_ROOM":
            case 1:
                message.type = 1;
                break;
            case "JOIN_ROOM":
            case 2:
                message.type = 2;
                break;
            case "QUIT_ROOM":
            case 3:
                message.type = 3;
                break;
            case "STATE":
            case 4:
                message.type = 4;
                break;
            }
            if (object.roomName != null)
                message.roomName = String(object.roomName);
            if (object.maxUsers != null)
                message.maxUsers = object.maxUsers | 0;
            if (object.roomStates) {
                if (!Array.isArray(object.roomStates))
                    throw TypeError(".input.Lobby.roomStates: array expected");
                message.roomStates = [];
                for (let i = 0; i < object.roomStates.length; ++i) {
                    if (typeof object.roomStates[i] !== "object")
                        throw TypeError(".input.Lobby.roomStates: object expected");
                    message.roomStates[i] = $root.input.RoomState.fromObject(object.roomStates[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Lobby message. Also converts values to other types if specified.
         * @function toObject
         * @memberof input.Lobby
         * @static
         * @param {input.Lobby} message Lobby
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Lobby.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.roomStates = [];
            if (options.defaults) {
                object.type = options.enums === String ? "LOBBY_UNSPECIFIED" : 0;
                object.roomName = "";
                object.maxUsers = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.input.Lobby.LobbyType[message.type] === undefined ? message.type : $root.input.Lobby.LobbyType[message.type] : message.type;
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                object.roomName = message.roomName;
            if (message.maxUsers != null && message.hasOwnProperty("maxUsers"))
                object.maxUsers = message.maxUsers;
            if (message.roomStates && message.roomStates.length) {
                object.roomStates = [];
                for (let j = 0; j < message.roomStates.length; ++j)
                    object.roomStates[j] = $root.input.RoomState.toObject(message.roomStates[j], options);
            }
            return object;
        };

        /**
         * Converts this Lobby to JSON.
         * @function toJSON
         * @memberof input.Lobby
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Lobby.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Lobby
         * @function getTypeUrl
         * @memberof input.Lobby
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Lobby.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/input.Lobby";
        };

        /**
         * LobbyType enum.
         * @name input.Lobby.LobbyType
         * @enum {number}
         * @property {number} LOBBY_UNSPECIFIED=0 LOBBY_UNSPECIFIED value
         * @property {number} CREATE_ROOM=1 CREATE_ROOM value
         * @property {number} JOIN_ROOM=2 JOIN_ROOM value
         * @property {number} QUIT_ROOM=3 QUIT_ROOM value
         * @property {number} STATE=4 STATE value
         */
        Lobby.LobbyType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "LOBBY_UNSPECIFIED"] = 0;
            values[valuesById[1] = "CREATE_ROOM"] = 1;
            values[valuesById[2] = "JOIN_ROOM"] = 2;
            values[valuesById[3] = "QUIT_ROOM"] = 3;
            values[valuesById[4] = "STATE"] = 4;
            return values;
        })();

        return Lobby;
    })();

    input.Room = (function() {

        /**
         * Properties of a Room.
         * @memberof input
         * @interface IRoom
         * @property {input.Room.RoomType|null} [type] Room type
         * @property {string|null} [roomName] Room roomName
         * @property {input.IRoomState|null} [roomState] Room roomState
         * @property {Object.<string,input.Room.CharacterType>|null} [userCharacterTypes] Room userCharacterTypes
         * @property {Array.<input.ITerrain>|null} [terrains] Room terrains
         */

        /**
         * Constructs a new Room.
         * @memberof input
         * @classdesc Represents a Room.
         * @implements IRoom
         * @constructor
         * @param {input.IRoom=} [properties] Properties to set
         */
        function Room(properties) {
            this.userCharacterTypes = {};
            this.terrains = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Room type.
         * @member {input.Room.RoomType} type
         * @memberof input.Room
         * @instance
         */
        Room.prototype.type = 0;

        /**
         * Room roomName.
         * @member {string} roomName
         * @memberof input.Room
         * @instance
         */
        Room.prototype.roomName = "";

        /**
         * Room roomState.
         * @member {input.IRoomState|null|undefined} roomState
         * @memberof input.Room
         * @instance
         */
        Room.prototype.roomState = null;

        /**
         * Room userCharacterTypes.
         * @member {Object.<string,input.Room.CharacterType>} userCharacterTypes
         * @memberof input.Room
         * @instance
         */
        Room.prototype.userCharacterTypes = $util.emptyObject;

        /**
         * Room terrains.
         * @member {Array.<input.ITerrain>} terrains
         * @memberof input.Room
         * @instance
         */
        Room.prototype.terrains = $util.emptyArray;

        /**
         * Creates a new Room instance using the specified properties.
         * @function create
         * @memberof input.Room
         * @static
         * @param {input.IRoom=} [properties] Properties to set
         * @returns {input.Room} Room instance
         */
        Room.create = function create(properties) {
            return new Room(properties);
        };

        /**
         * Encodes the specified Room message. Does not implicitly {@link input.Room.verify|verify} messages.
         * @function encode
         * @memberof input.Room
         * @static
         * @param {input.IRoom} message Room message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Room.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.roomName != null && Object.hasOwnProperty.call(message, "roomName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomName);
            if (message.roomState != null && Object.hasOwnProperty.call(message, "roomState"))
                $root.input.RoomState.encode(message.roomState, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.userCharacterTypes != null && Object.hasOwnProperty.call(message, "userCharacterTypes"))
                for (let keys = Object.keys(message.userCharacterTypes), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.userCharacterTypes[keys[i]]).ldelim();
            if (message.terrains != null && message.terrains.length)
                for (let i = 0; i < message.terrains.length; ++i)
                    $root.input.Terrain.encode(message.terrains[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link input.Room.verify|verify} messages.
         * @function encodeDelimited
         * @memberof input.Room
         * @static
         * @param {input.IRoom} message Room message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Room.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @function decode
         * @memberof input.Room
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {input.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.input.Room(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.roomName = reader.string();
                        break;
                    }
                case 4: {
                        message.roomState = $root.input.RoomState.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        if (message.userCharacterTypes === $util.emptyObject)
                            message.userCharacterTypes = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = 0;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.userCharacterTypes[key] = value;
                        break;
                    }
                case 6: {
                        if (!(message.terrains && message.terrains.length))
                            message.terrains = [];
                        message.terrains.push($root.input.Terrain.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof input.Room
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {input.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Room message.
         * @function verify
         * @memberof input.Room
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Room.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                if (!$util.isString(message.roomName))
                    return "roomName: string expected";
            if (message.roomState != null && message.hasOwnProperty("roomState")) {
                let error = $root.input.RoomState.verify(message.roomState);
                if (error)
                    return "roomState." + error;
            }
            if (message.userCharacterTypes != null && message.hasOwnProperty("userCharacterTypes")) {
                if (!$util.isObject(message.userCharacterTypes))
                    return "userCharacterTypes: object expected";
                let key = Object.keys(message.userCharacterTypes);
                for (let i = 0; i < key.length; ++i)
                    switch (message.userCharacterTypes[key[i]]) {
                    default:
                        return "userCharacterTypes: enum value{k:string} expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
            }
            if (message.terrains != null && message.hasOwnProperty("terrains")) {
                if (!Array.isArray(message.terrains))
                    return "terrains: array expected";
                for (let i = 0; i < message.terrains.length; ++i) {
                    let error = $root.input.Terrain.verify(message.terrains[i]);
                    if (error)
                        return "terrains." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Room message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof input.Room
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {input.Room} Room
         */
        Room.fromObject = function fromObject(object) {
            if (object instanceof $root.input.Room)
                return object;
            let message = new $root.input.Room();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "ROOM_UNSPECIFIED":
            case 0:
                message.type = 0;
                break;
            case "QUIT":
            case 1:
                message.type = 1;
                break;
            case "START":
            case 2:
                message.type = 2;
                break;
            case "STATE":
            case 3:
                message.type = 3;
                break;
            }
            if (object.roomName != null)
                message.roomName = String(object.roomName);
            if (object.roomState != null) {
                if (typeof object.roomState !== "object")
                    throw TypeError(".input.Room.roomState: object expected");
                message.roomState = $root.input.RoomState.fromObject(object.roomState);
            }
            if (object.userCharacterTypes) {
                if (typeof object.userCharacterTypes !== "object")
                    throw TypeError(".input.Room.userCharacterTypes: object expected");
                message.userCharacterTypes = {};
                for (let keys = Object.keys(object.userCharacterTypes), i = 0; i < keys.length; ++i)
                    switch (object.userCharacterTypes[keys[i]]) {
                    default:
                        if (typeof object.userCharacterTypes[keys[i]] === "number") {
                            message.userCharacterTypes[keys[i]] = object.userCharacterTypes[keys[i]];
                            break;
                        }
                        break;
                    case "CHARACTER_UNSPECIFIED":
                    case 0:
                        message.userCharacterTypes[keys[i]] = 0;
                        break;
                    case "PINK":
                    case 1:
                        message.userCharacterTypes[keys[i]] = 1;
                        break;
                    case "DUDE":
                    case 2:
                        message.userCharacterTypes[keys[i]] = 2;
                        break;
                    case "OWL":
                    case 3:
                        message.userCharacterTypes[keys[i]] = 3;
                        break;
                    }
            }
            if (object.terrains) {
                if (!Array.isArray(object.terrains))
                    throw TypeError(".input.Room.terrains: array expected");
                message.terrains = [];
                for (let i = 0; i < object.terrains.length; ++i) {
                    if (typeof object.terrains[i] !== "object")
                        throw TypeError(".input.Room.terrains: object expected");
                    message.terrains[i] = $root.input.Terrain.fromObject(object.terrains[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Room message. Also converts values to other types if specified.
         * @function toObject
         * @memberof input.Room
         * @static
         * @param {input.Room} message Room
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Room.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.terrains = [];
            if (options.objects || options.defaults)
                object.userCharacterTypes = {};
            if (options.defaults) {
                object.type = options.enums === String ? "ROOM_UNSPECIFIED" : 0;
                object.roomName = "";
                object.roomState = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.input.Room.RoomType[message.type] === undefined ? message.type : $root.input.Room.RoomType[message.type] : message.type;
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                object.roomName = message.roomName;
            if (message.roomState != null && message.hasOwnProperty("roomState"))
                object.roomState = $root.input.RoomState.toObject(message.roomState, options);
            let keys2;
            if (message.userCharacterTypes && (keys2 = Object.keys(message.userCharacterTypes)).length) {
                object.userCharacterTypes = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.userCharacterTypes[keys2[j]] = options.enums === String ? $root.input.Room.CharacterType[message.userCharacterTypes[keys2[j]]] === undefined ? message.userCharacterTypes[keys2[j]] : $root.input.Room.CharacterType[message.userCharacterTypes[keys2[j]]] : message.userCharacterTypes[keys2[j]];
            }
            if (message.terrains && message.terrains.length) {
                object.terrains = [];
                for (let j = 0; j < message.terrains.length; ++j)
                    object.terrains[j] = $root.input.Terrain.toObject(message.terrains[j], options);
            }
            return object;
        };

        /**
         * Converts this Room to JSON.
         * @function toJSON
         * @memberof input.Room
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Room.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Room
         * @function getTypeUrl
         * @memberof input.Room
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Room.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/input.Room";
        };

        /**
         * RoomType enum.
         * @name input.Room.RoomType
         * @enum {number}
         * @property {number} ROOM_UNSPECIFIED=0 ROOM_UNSPECIFIED value
         * @property {number} QUIT=1 QUIT value
         * @property {number} START=2 START value
         * @property {number} STATE=3 STATE value
         */
        Room.RoomType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ROOM_UNSPECIFIED"] = 0;
            values[valuesById[1] = "QUIT"] = 1;
            values[valuesById[2] = "START"] = 2;
            values[valuesById[3] = "STATE"] = 3;
            return values;
        })();

        /**
         * CharacterType enum.
         * @name input.Room.CharacterType
         * @enum {number}
         * @property {number} CHARACTER_UNSPECIFIED=0 CHARACTER_UNSPECIFIED value
         * @property {number} PINK=1 PINK value
         * @property {number} DUDE=2 DUDE value
         * @property {number} OWL=3 OWL value
         */
        Room.CharacterType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CHARACTER_UNSPECIFIED"] = 0;
            values[valuesById[1] = "PINK"] = 1;
            values[valuesById[2] = "DUDE"] = 2;
            values[valuesById[3] = "OWL"] = 3;
            return values;
        })();

        return Room;
    })();

    input.GameResult = (function() {

        /**
         * Properties of a GameResult.
         * @memberof input
         * @interface IGameResult
         * @property {string|null} [winnerId] GameResult winnerId
         * @property {string|null} [roomName] GameResult roomName
         */

        /**
         * Constructs a new GameResult.
         * @memberof input
         * @classdesc Represents a GameResult.
         * @implements IGameResult
         * @constructor
         * @param {input.IGameResult=} [properties] Properties to set
         */
        function GameResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameResult winnerId.
         * @member {string} winnerId
         * @memberof input.GameResult
         * @instance
         */
        GameResult.prototype.winnerId = "";

        /**
         * GameResult roomName.
         * @member {string} roomName
         * @memberof input.GameResult
         * @instance
         */
        GameResult.prototype.roomName = "";

        /**
         * Creates a new GameResult instance using the specified properties.
         * @function create
         * @memberof input.GameResult
         * @static
         * @param {input.IGameResult=} [properties] Properties to set
         * @returns {input.GameResult} GameResult instance
         */
        GameResult.create = function create(properties) {
            return new GameResult(properties);
        };

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link input.GameResult.verify|verify} messages.
         * @function encode
         * @memberof input.GameResult
         * @static
         * @param {input.IGameResult} message GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.winnerId != null && Object.hasOwnProperty.call(message, "winnerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.winnerId);
            if (message.roomName != null && Object.hasOwnProperty.call(message, "roomName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomName);
            return writer;
        };

        /**
         * Encodes the specified GameResult message, length delimited. Does not implicitly {@link input.GameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof input.GameResult
         * @static
         * @param {input.IGameResult} message GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof input.GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {input.GameResult} GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.input.GameResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.winnerId = reader.string();
                        break;
                    }
                case 2: {
                        message.roomName = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof input.GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {input.GameResult} GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameResult message.
         * @function verify
         * @memberof input.GameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                if (!$util.isString(message.winnerId))
                    return "winnerId: string expected";
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                if (!$util.isString(message.roomName))
                    return "roomName: string expected";
            return null;
        };

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof input.GameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {input.GameResult} GameResult
         */
        GameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.input.GameResult)
                return object;
            let message = new $root.input.GameResult();
            if (object.winnerId != null)
                message.winnerId = String(object.winnerId);
            if (object.roomName != null)
                message.roomName = String(object.roomName);
            return message;
        };

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof input.GameResult
         * @static
         * @param {input.GameResult} message GameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.winnerId = "";
                object.roomName = "";
            }
            if (message.winnerId != null && message.hasOwnProperty("winnerId"))
                object.winnerId = message.winnerId;
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                object.roomName = message.roomName;
            return object;
        };

        /**
         * Converts this GameResult to JSON.
         * @function toJSON
         * @memberof input.GameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameResult
         * @function getTypeUrl
         * @memberof input.GameResult
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/input.GameResult";
        };

        return GameResult;
    })();

    input.Terrain = (function() {

        /**
         * Properties of a Terrain.
         * @memberof input
         * @interface ITerrain
         * @property {input.Terrain.TerrainType|null} [type] Terrain type
         * @property {input.Terrain.TerrainState|null} [state] Terrain state
         * @property {input.IPosition|null} [position] Terrain position
         */

        /**
         * Constructs a new Terrain.
         * @memberof input
         * @classdesc Represents a Terrain.
         * @implements ITerrain
         * @constructor
         * @param {input.ITerrain=} [properties] Properties to set
         */
        function Terrain(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Terrain type.
         * @member {input.Terrain.TerrainType} type
         * @memberof input.Terrain
         * @instance
         */
        Terrain.prototype.type = 0;

        /**
         * Terrain state.
         * @member {input.Terrain.TerrainState} state
         * @memberof input.Terrain
         * @instance
         */
        Terrain.prototype.state = 0;

        /**
         * Terrain position.
         * @member {input.IPosition|null|undefined} position
         * @memberof input.Terrain
         * @instance
         */
        Terrain.prototype.position = null;

        /**
         * Creates a new Terrain instance using the specified properties.
         * @function create
         * @memberof input.Terrain
         * @static
         * @param {input.ITerrain=} [properties] Properties to set
         * @returns {input.Terrain} Terrain instance
         */
        Terrain.create = function create(properties) {
            return new Terrain(properties);
        };

        /**
         * Encodes the specified Terrain message. Does not implicitly {@link input.Terrain.verify|verify} messages.
         * @function encode
         * @memberof input.Terrain
         * @static
         * @param {input.ITerrain} message Terrain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Terrain.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                $root.input.Position.encode(message.position, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Terrain message, length delimited. Does not implicitly {@link input.Terrain.verify|verify} messages.
         * @function encodeDelimited
         * @memberof input.Terrain
         * @static
         * @param {input.ITerrain} message Terrain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Terrain.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Terrain message from the specified reader or buffer.
         * @function decode
         * @memberof input.Terrain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {input.Terrain} Terrain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Terrain.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.input.Terrain();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.state = reader.int32();
                        break;
                    }
                case 3: {
                        message.position = $root.input.Position.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Terrain message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof input.Terrain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {input.Terrain} Terrain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Terrain.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Terrain message.
         * @function verify
         * @memberof input.Terrain
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Terrain.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.position != null && message.hasOwnProperty("position")) {
                let error = $root.input.Position.verify(message.position);
                if (error)
                    return "position." + error;
            }
            return null;
        };

        /**
         * Creates a Terrain message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof input.Terrain
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {input.Terrain} Terrain
         */
        Terrain.fromObject = function fromObject(object) {
            if (object instanceof $root.input.Terrain)
                return object;
            let message = new $root.input.Terrain();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "TERRAIN_UNSPECIFIED":
            case 0:
                message.type = 0;
                break;
            case "ROCK":
            case 1:
                message.type = 1;
                break;
            }
            switch (object.state) {
            default:
                if (typeof object.state === "number") {
                    message.state = object.state;
                    break;
                }
                break;
            case "TERRAIN_STATE_UNSPECIFIED":
            case 0:
                message.state = 0;
                break;
            case "SOLID":
            case 1:
                message.state = 1;
                break;
            case "DAMAGED":
            case 2:
                message.state = 2;
                break;
            case "VULNERABLE":
            case 3:
                message.state = 3;
                break;
            case "DESTROYED":
            case 4:
                message.state = 4;
                break;
            }
            if (object.position != null) {
                if (typeof object.position !== "object")
                    throw TypeError(".input.Terrain.position: object expected");
                message.position = $root.input.Position.fromObject(object.position);
            }
            return message;
        };

        /**
         * Creates a plain object from a Terrain message. Also converts values to other types if specified.
         * @function toObject
         * @memberof input.Terrain
         * @static
         * @param {input.Terrain} message Terrain
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Terrain.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "TERRAIN_UNSPECIFIED" : 0;
                object.state = options.enums === String ? "TERRAIN_STATE_UNSPECIFIED" : 0;
                object.position = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.input.Terrain.TerrainType[message.type] === undefined ? message.type : $root.input.Terrain.TerrainType[message.type] : message.type;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.input.Terrain.TerrainState[message.state] === undefined ? message.state : $root.input.Terrain.TerrainState[message.state] : message.state;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = $root.input.Position.toObject(message.position, options);
            return object;
        };

        /**
         * Converts this Terrain to JSON.
         * @function toJSON
         * @memberof input.Terrain
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Terrain.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Terrain
         * @function getTypeUrl
         * @memberof input.Terrain
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Terrain.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/input.Terrain";
        };

        /**
         * TerrainType enum.
         * @name input.Terrain.TerrainType
         * @enum {number}
         * @property {number} TERRAIN_UNSPECIFIED=0 TERRAIN_UNSPECIFIED value
         * @property {number} ROCK=1 ROCK value
         */
        Terrain.TerrainType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TERRAIN_UNSPECIFIED"] = 0;
            values[valuesById[1] = "ROCK"] = 1;
            return values;
        })();

        /**
         * TerrainState enum.
         * @name input.Terrain.TerrainState
         * @enum {number}
         * @property {number} TERRAIN_STATE_UNSPECIFIED=0 TERRAIN_STATE_UNSPECIFIED value
         * @property {number} SOLID=1 SOLID value
         * @property {number} DAMAGED=2 DAMAGED value
         * @property {number} VULNERABLE=3 VULNERABLE value
         * @property {number} DESTROYED=4 DESTROYED value
         */
        Terrain.TerrainState = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TERRAIN_STATE_UNSPECIFIED"] = 0;
            values[valuesById[1] = "SOLID"] = 1;
            values[valuesById[2] = "DAMAGED"] = 2;
            values[valuesById[3] = "VULNERABLE"] = 3;
            values[valuesById[4] = "DESTROYED"] = 4;
            return values;
        })();

        return Terrain;
    })();

    return input;
})();

export { $root as default };
