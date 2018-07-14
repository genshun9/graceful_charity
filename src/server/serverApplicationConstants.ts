require('dotenv').config();

export const PORT: string = process.env.PORT || "8000";
export const PLAYER_MAX_NUMBER: number = Number(process.env.PLAYER_MAX_NUMBER) || 6; // プレイヤー人数
export const ROTATION_MAX_NUMBER: number = Number(process.env.ROUTATION_MAX_NUMBER) || 22; // 各cardListのlengthの総和/人数/3
export const RARE_CARD_INIT_NUMBER: number = Number(process.env.RARE_CARD_INIT_NUMBER) || 2; // 1パック内の初期枚数
export const MONSTER_CARD_INIT_NUMBER: number = Number(process.env.MONSTER_CARD_INIT_NUMBER) || 10; // 1パック内の初期枚数
export const MAGIC_CARD_INIT_NUMBER: number = Number(process.env.MAGIC_CARD_INIT_NUMBER) || 3; // 1パック内の初期枚数
export const TRAP_CARD_INIT_NUMBER: number = Number(process.env.TRAP_CARD_INIT_NUMBER) || 3; // 1パック内の初期枚数
export const EXTRA_CARD_INIT_NUMBER: number = Number(process.env.EXTRA_CARD_INIT_NUMBER) || 4; // 1パック内の初期枚数