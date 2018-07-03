export const PORT: string = process.env.PORT || "8000";
export const PLAYER_MAX_NUMBER: number = Number(process.env.PLAYER_MAX_NUMBER) || 6;
export const ROTATION_MAX_NUMBER: number = Number(process.env.ROUTATION_MAX_NUMBER) || 21; // 各cardListのlengthの総和/人数/3
export const RARE_CARD_INIT_NUMBER: number = 2; // 1パック内の初期枚数
export const MONSTER_CARD_INIT_NUMBER: number = 10; // 1パック内の初期枚数
export const MAGIC_CARD_INIT_NUMBER: number = 3; // 1パック内の初期枚数
export const TRAP_CARD_INIT_NUMBER: number = 3; // 1パック内の初期枚数
export const EXTRA_CARD_INIT_NUMBER: number = 3; // 1パック内の初期枚数