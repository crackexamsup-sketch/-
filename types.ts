export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
  maxLife: number;
}

export enum WishStyle {
  FUNNY = '재미있는',
  HEARTFELT = '감동적인',
  POETIC = '시적인',
  SHORT = '짧고 굵은'
}

export interface WishRequest {
  name: string;
  age?: string;
  relation: string;
  style: WishStyle;
}

export interface GuestMessage {
  id: string;
  text: string;
  from: string;
  color: string;
  date: string;
}