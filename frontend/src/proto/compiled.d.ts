import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace input. */
export namespace input {

    /** Properties of an Input. */
    interface IInput {

        /** Input userId */
        userId?: (string|null);

        /** Input init */
        init?: (input.IInit|null);

        /** Input op */
        op?: (input.IOperation|null);

        /** Input lobby */
        lobby?: (input.ILobby|null);

        /** Input room */
        room?: (input.IRoom|null);

        /** Input gameResult */
        gameResult?: (input.IGameResult|null);
    }

    /** Represents an Input. */
    class Input implements IInput {

        /**
         * Constructs a new Input.
         * @param [properties] Properties to set
         */
        constructor(properties?: input.IInput);

        /** Input userId. */
        public userId: string;

        /** Input init. */
        public init?: (input.IInit|null);

        /** Input op. */
        public op?: (input.IOperation|null);

        /** Input lobby. */
        public lobby?: (input.ILobby|null);

        /** Input room. */
        public room?: (input.IRoom|null);

        /** Input gameResult. */
        public gameResult?: (input.IGameResult|null);

        /** Input kind. */
        public kind?: ("init"|"op"|"lobby"|"room"|"gameResult");

        /**
         * Creates a new Input instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Input instance
         */
        public static create(properties?: input.IInput): input.Input;

        /**
         * Encodes the specified Input message. Does not implicitly {@link input.Input.verify|verify} messages.
         * @param message Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: input.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Input message, length delimited. Does not implicitly {@link input.Input.verify|verify} messages.
         * @param message Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: input.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): input.Input;

        /**
         * Decodes an Input message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): input.Input;

        /**
         * Verifies an Input message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Input
         */
        public static fromObject(object: { [k: string]: any }): input.Input;

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @param message Input
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: input.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Input to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Input
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Init. */
    interface IInit {
    }

    /** Represents an Init. */
    class Init implements IInit {

        /**
         * Constructs a new Init.
         * @param [properties] Properties to set
         */
        constructor(properties?: input.IInit);

        /**
         * Creates a new Init instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Init instance
         */
        public static create(properties?: input.IInit): input.Init;

        /**
         * Encodes the specified Init message. Does not implicitly {@link input.Init.verify|verify} messages.
         * @param message Init message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: input.IInit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Init message, length delimited. Does not implicitly {@link input.Init.verify|verify} messages.
         * @param message Init message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: input.IInit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Init message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Init
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): input.Init;

        /**
         * Decodes an Init message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Init
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): input.Init;

        /**
         * Verifies an Init message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Init message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Init
         */
        public static fromObject(object: { [k: string]: any }): input.Init;

        /**
         * Creates a plain object from an Init message. Also converts values to other types if specified.
         * @param message Init
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: input.Init, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Init to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Init
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Position. */
    interface IPosition {

        /** Position x */
        x?: (number|null);

        /** Position y */
        y?: (number|null);
    }

    /** Represents a Position. */
    class Position implements IPosition {

        /**
         * Constructs a new Position.
         * @param [properties] Properties to set
         */
        constructor(properties?: input.IPosition);

        /** Position x. */
        public x: number;

        /** Position y. */
        public y: number;

        /**
         * Creates a new Position instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Position instance
         */
        public static create(properties?: input.IPosition): input.Position;

        /**
         * Encodes the specified Position message. Does not implicitly {@link input.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: input.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link input.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: input.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): input.Position;

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): input.Position;

        /**
         * Verifies a Position message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Position
         */
        public static fromObject(object: { [k: string]: any }): input.Position;

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @param message Position
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: input.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Position to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Position
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Operation. */
    interface IOperation {

        /** Operation type */
        type?: (input.Operation.OperationType|null);

        /** Operation direction */
        direction?: (input.Operation.Direction|null);

        /** Operation hitRange */
        hitRange?: (input.Operation.IHitRange|null);

        /** Operation gameState */
        gameState?: (input.Operation.IGameState|null);

        /** Operation targetUserId */
        targetUserId?: (string|null);

        /** Operation targetTerrainId */
        targetTerrainId?: (number|null);

        /** Operation projectileId */
        projectileId?: (number|null);

        /** Operation context */
        context?: (number|Long|null);

        /** Operation prevContext */
        prevContext?: (number|Long|null);
    }

    /** Represents an Operation. */
    class Operation implements IOperation {

        /**
         * Constructs a new Operation.
         * @param [properties] Properties to set
         */
        constructor(properties?: input.IOperation);

        /** Operation type. */
        public type: input.Operation.OperationType;

        /** Operation direction. */
        public direction: input.Operation.Direction;

        /** Operation hitRange. */
        public hitRange?: (input.Operation.IHitRange|null);

        /** Operation gameState. */
        public gameState?: (input.Operation.IGameState|null);

        /** Operation targetUserId. */
        public targetUserId: string;

        /** Operation targetTerrainId. */
        public targetTerrainId: number;

        /** Operation projectileId. */
        public projectileId: number;

        /** Operation context. */
        public context: (number|Long);

        /** Operation prevContext. */
        public prevContext: (number|Long);

        /**
         * Creates a new Operation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Operation instance
         */
        public static create(properties?: input.IOperation): input.Operation;

        /**
         * Encodes the specified Operation message. Does not implicitly {@link input.Operation.verify|verify} messages.
         * @param message Operation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: input.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Operation message, length delimited. Does not implicitly {@link input.Operation.verify|verify} messages.
         * @param message Operation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: input.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Operation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): input.Operation;

        /**
         * Decodes an Operation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): input.Operation;

        /**
         * Verifies an Operation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Operation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Operation
         */
        public static fromObject(object: { [k: string]: any }): input.Operation;

        /**
         * Creates a plain object from an Operation message. Also converts values to other types if specified.
         * @param message Operation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: input.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Operation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Operation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Operation {

        /** Direction enum. */
        enum Direction {
            DIRECTION_UNSPECIFIED = 0,
            UP = 1,
            DOWN = 2,
            LEFT = 3,
            RIGHT = 4
        }

        /** OperationType enum. */
        enum OperationType {
            OPERATION_UNSPECIFIED = 0,
            MOVE = 1,
            ATTACK = 2,
            HIT = 3,
            GAME_STATE = 4
        }

        /** Properties of a HitRange. */
        interface IHitRange {

            /** HitRange leftBottom */
            leftBottom?: (input.IPosition|null);

            /** HitRange rightTop */
            rightTop?: (input.IPosition|null);
        }

        /** Represents a HitRange. */
        class HitRange implements IHitRange {

            /**
             * Constructs a new HitRange.
             * @param [properties] Properties to set
             */
            constructor(properties?: input.Operation.IHitRange);

            /** HitRange leftBottom. */
            public leftBottom?: (input.IPosition|null);

            /** HitRange rightTop. */
            public rightTop?: (input.IPosition|null);

            /**
             * Creates a new HitRange instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HitRange instance
             */
            public static create(properties?: input.Operation.IHitRange): input.Operation.HitRange;

            /**
             * Encodes the specified HitRange message. Does not implicitly {@link input.Operation.HitRange.verify|verify} messages.
             * @param message HitRange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: input.Operation.IHitRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HitRange message, length delimited. Does not implicitly {@link input.Operation.HitRange.verify|verify} messages.
             * @param message HitRange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: input.Operation.IHitRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HitRange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HitRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): input.Operation.HitRange;

            /**
             * Decodes a HitRange message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HitRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): input.Operation.HitRange;

            /**
             * Verifies a HitRange message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HitRange message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HitRange
             */
            public static fromObject(object: { [k: string]: any }): input.Operation.HitRange;

            /**
             * Creates a plain object from a HitRange message. Also converts values to other types if specified.
             * @param message HitRange
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: input.Operation.HitRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HitRange to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HitRange
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GameState. */
        interface IGameState {

            /** GameState userStates */
            userStates?: (input.Operation.GameState.IUserState[]|null);
        }

        /** Represents a GameState. */
        class GameState implements IGameState {

            /**
             * Constructs a new GameState.
             * @param [properties] Properties to set
             */
            constructor(properties?: input.Operation.IGameState);

            /** GameState userStates. */
            public userStates: input.Operation.GameState.IUserState[];

            /**
             * Creates a new GameState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameState instance
             */
            public static create(properties?: input.Operation.IGameState): input.Operation.GameState;

            /**
             * Encodes the specified GameState message. Does not implicitly {@link input.Operation.GameState.verify|verify} messages.
             * @param message GameState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: input.Operation.IGameState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameState message, length delimited. Does not implicitly {@link input.Operation.GameState.verify|verify} messages.
             * @param message GameState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: input.Operation.IGameState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): input.Operation.GameState;

            /**
             * Decodes a GameState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): input.Operation.GameState;

            /**
             * Verifies a GameState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameState
             */
            public static fromObject(object: { [k: string]: any }): input.Operation.GameState;

            /**
             * Creates a plain object from a GameState message. Also converts values to other types if specified.
             * @param message GameState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: input.Operation.GameState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GameState
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GameState {

            /** Properties of a UserState. */
            interface IUserState {

                /** UserState position */
                position?: (input.IPosition|null);

                /** UserState score */
                score?: (number|null);
            }

            /** Represents a UserState. */
            class UserState implements IUserState {

                /**
                 * Constructs a new UserState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: input.Operation.GameState.IUserState);

                /** UserState position. */
                public position?: (input.IPosition|null);

                /** UserState score. */
                public score: number;

                /**
                 * Creates a new UserState instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UserState instance
                 */
                public static create(properties?: input.Operation.GameState.IUserState): input.Operation.GameState.UserState;

                /**
                 * Encodes the specified UserState message. Does not implicitly {@link input.Operation.GameState.UserState.verify|verify} messages.
                 * @param message UserState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: input.Operation.GameState.IUserState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UserState message, length delimited. Does not implicitly {@link input.Operation.GameState.UserState.verify|verify} messages.
                 * @param message UserState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: input.Operation.GameState.IUserState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): input.Operation.GameState.UserState;

                /**
                 * Decodes a UserState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UserState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): input.Operation.GameState.UserState;

                /**
                 * Verifies a UserState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UserState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UserState
                 */
                public static fromObject(object: { [k: string]: any }): input.Operation.GameState.UserState;

                /**
                 * Creates a plain object from a UserState message. Also converts values to other types if specified.
                 * @param message UserState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: input.Operation.GameState.UserState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UserState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UserState
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Properties of a RoomState. */
    interface IRoomState {

        /** RoomState status */
        status?: (input.RoomState.RoomStatusType|null);

        /** RoomState roomName */
        roomName?: (string|null);

        /** RoomState maxUsers */
        maxUsers?: (number|null);

        /** RoomState userIds */
        userIds?: (string[]|null);
    }

    /** Represents a RoomState. */
    class RoomState implements IRoomState {

        /**
         * Constructs a new RoomState.
         * @param [properties] Properties to set
         */
        constructor(properties?: input.IRoomState);

        /** RoomState status. */
        public status: input.RoomState.RoomStatusType;

        /** RoomState roomName. */
        public roomName: string;

        /** RoomState maxUsers. */
        public maxUsers: number;

        /** RoomState userIds. */
        public userIds: string[];

        /**
         * Creates a new RoomState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomState instance
         */
        public static create(properties?: input.IRoomState): input.RoomState;

        /**
         * Encodes the specified RoomState message. Does not implicitly {@link input.RoomState.verify|verify} messages.
         * @param message RoomState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: input.IRoomState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomState message, length delimited. Does not implicitly {@link input.RoomState.verify|verify} messages.
         * @param message RoomState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: input.IRoomState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): input.RoomState;

        /**
         * Decodes a RoomState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): input.RoomState;

        /**
         * Verifies a RoomState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomState
         */
        public static fromObject(object: { [k: string]: any }): input.RoomState;

        /**
         * Creates a plain object from a RoomState message. Also converts values to other types if specified.
         * @param message RoomState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: input.RoomState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoomState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace RoomState {

        /** RoomStatusType enum. */
        enum RoomStatusType {
            ROOM_STATUS_UNSPECIFIED = 0,
            WAITING = 1,
            PLAYING = 2
        }
    }

    /** Properties of a Lobby. */
    interface ILobby {

        /** Lobby type */
        type?: (input.Lobby.LobbyType|null);

        /** Lobby roomName */
        roomName?: (string|null);

        /** Lobby maxUsers */
        maxUsers?: (number|null);

        /** Lobby roomStates */
        roomStates?: (input.IRoomState[]|null);
    }

    /** Represents a Lobby. */
    class Lobby implements ILobby {

        /**
         * Constructs a new Lobby.
         * @param [properties] Properties to set
         */
        constructor(properties?: input.ILobby);

        /** Lobby type. */
        public type: input.Lobby.LobbyType;

        /** Lobby roomName. */
        public roomName: string;

        /** Lobby maxUsers. */
        public maxUsers: number;

        /** Lobby roomStates. */
        public roomStates: input.IRoomState[];

        /**
         * Creates a new Lobby instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Lobby instance
         */
        public static create(properties?: input.ILobby): input.Lobby;

        /**
         * Encodes the specified Lobby message. Does not implicitly {@link input.Lobby.verify|verify} messages.
         * @param message Lobby message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: input.ILobby, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Lobby message, length delimited. Does not implicitly {@link input.Lobby.verify|verify} messages.
         * @param message Lobby message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: input.ILobby, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Lobby message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Lobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): input.Lobby;

        /**
         * Decodes a Lobby message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Lobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): input.Lobby;

        /**
         * Verifies a Lobby message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Lobby message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Lobby
         */
        public static fromObject(object: { [k: string]: any }): input.Lobby;

        /**
         * Creates a plain object from a Lobby message. Also converts values to other types if specified.
         * @param message Lobby
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: input.Lobby, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Lobby to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Lobby
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Lobby {

        /** LobbyType enum. */
        enum LobbyType {
            LOBBY_UNSPECIFIED = 0,
            CREATE_ROOM = 1,
            JOIN_ROOM = 2,
            QUIT_ROOM = 3,
            STATE = 4
        }
    }

    /** Properties of a Room. */
    interface IRoom {

        /** Room type */
        type?: (input.Room.RoomType|null);

        /** Room roomName */
        roomName?: (string|null);

        /** Room roomState */
        roomState?: (input.IRoomState|null);

        /** Room userCharacterTypes */
        userCharacterTypes?: ({ [k: string]: input.Room.CharacterType }|null);

        /** Room terrains */
        terrains?: (input.ITerrain[]|null);
    }

    /** Represents a Room. */
    class Room implements IRoom {

        /**
         * Constructs a new Room.
         * @param [properties] Properties to set
         */
        constructor(properties?: input.IRoom);

        /** Room type. */
        public type: input.Room.RoomType;

        /** Room roomName. */
        public roomName: string;

        /** Room roomState. */
        public roomState?: (input.IRoomState|null);

        /** Room userCharacterTypes. */
        public userCharacterTypes: { [k: string]: input.Room.CharacterType };

        /** Room terrains. */
        public terrains: input.ITerrain[];

        /**
         * Creates a new Room instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Room instance
         */
        public static create(properties?: input.IRoom): input.Room;

        /**
         * Encodes the specified Room message. Does not implicitly {@link input.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: input.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link input.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: input.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): input.Room;

        /**
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): input.Room;

        /**
         * Verifies a Room message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Room message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Room
         */
        public static fromObject(object: { [k: string]: any }): input.Room;

        /**
         * Creates a plain object from a Room message. Also converts values to other types if specified.
         * @param message Room
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: input.Room, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Room to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Room
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Room {

        /** RoomType enum. */
        enum RoomType {
            ROOM_UNSPECIFIED = 0,
            QUIT = 1,
            START = 2,
            STATE = 3
        }

        /** CharacterType enum. */
        enum CharacterType {
            CHARACTER_UNSPECIFIED = 0,
            PINK = 1,
            DUDE = 2,
            OWL = 3
        }
    }

    /** Properties of a GameResult. */
    interface IGameResult {

        /** GameResult winnerId */
        winnerId?: (string|null);

        /** GameResult roomName */
        roomName?: (string|null);
    }

    /** Represents a GameResult. */
    class GameResult implements IGameResult {

        /**
         * Constructs a new GameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: input.IGameResult);

        /** GameResult winnerId. */
        public winnerId: string;

        /** GameResult roomName. */
        public roomName: string;

        /**
         * Creates a new GameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResult instance
         */
        public static create(properties?: input.IGameResult): input.GameResult;

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link input.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: input.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameResult message, length delimited. Does not implicitly {@link input.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: input.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): input.GameResult;

        /**
         * Decodes a GameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): input.GameResult;

        /**
         * Verifies a GameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameResult
         */
        public static fromObject(object: { [k: string]: any }): input.GameResult;

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @param message GameResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: input.GameResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameResult
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Terrain. */
    interface ITerrain {

        /** Terrain type */
        type?: (input.Terrain.TerrainType|null);

        /** Terrain state */
        state?: (input.Terrain.TerrainState|null);

        /** Terrain position */
        position?: (input.IPosition|null);
    }

    /** Represents a Terrain. */
    class Terrain implements ITerrain {

        /**
         * Constructs a new Terrain.
         * @param [properties] Properties to set
         */
        constructor(properties?: input.ITerrain);

        /** Terrain type. */
        public type: input.Terrain.TerrainType;

        /** Terrain state. */
        public state: input.Terrain.TerrainState;

        /** Terrain position. */
        public position?: (input.IPosition|null);

        /**
         * Creates a new Terrain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Terrain instance
         */
        public static create(properties?: input.ITerrain): input.Terrain;

        /**
         * Encodes the specified Terrain message. Does not implicitly {@link input.Terrain.verify|verify} messages.
         * @param message Terrain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: input.ITerrain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Terrain message, length delimited. Does not implicitly {@link input.Terrain.verify|verify} messages.
         * @param message Terrain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: input.ITerrain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Terrain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Terrain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): input.Terrain;

        /**
         * Decodes a Terrain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Terrain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): input.Terrain;

        /**
         * Verifies a Terrain message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Terrain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Terrain
         */
        public static fromObject(object: { [k: string]: any }): input.Terrain;

        /**
         * Creates a plain object from a Terrain message. Also converts values to other types if specified.
         * @param message Terrain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: input.Terrain, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Terrain to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Terrain
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Terrain {

        /** TerrainType enum. */
        enum TerrainType {
            TERRAIN_UNSPECIFIED = 0,
            ROCK = 1
        }

        /** TerrainState enum. */
        enum TerrainState {
            TERRAIN_STATE_UNSPECIFIED = 0,
            SOLID = 1,
            DAMAGED = 2,
            VULNERABLE = 3,
            DESTROYED = 4
        }
    }
}
