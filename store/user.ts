export interface UserInformation {
  username: string;
  score: number;
  inGame: boolean;
}

export const state = () => ({
  username: "",
  score: 0,
  inGame: false,
});

export const getters = {
  getUsername(state: UserInformation): string {
    return state.username;
  },
  getScore(state: UserInformation): number {
    return state.score;
  },
  getInGame(state: UserInformation): boolean {
    return state.inGame;
  },
};

export const mutations = {
  setNewGame(state: UserInformation, payload: UserInformation) {
    state.username = payload.username;
    state.score = payload.score;
    state.inGame = payload.inGame;
  },
  setUsername(state: UserInformation, username: string) {
    state.username = username;
  },
  setScore(state: UserInformation, score: number) {
    state.score = score;
  },
};
