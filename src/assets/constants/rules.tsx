import { FiveCardRules } from "../../pages/rules/game-types/five-card-draw";

interface GameRulesButtons {
  isDisabled: boolean;
  name: string;
  type: string;
}

interface GameRules {
  title: string;
  description: () => JSX.Element;
}

// will set up looping of buttons, rules at another time
export const GAME_RULES_BUTTONS: GameRulesButtons[] = [
  {
    isDisabled: false,
    name: 'Five-card Draw',
    type: 'outline-light'
  },
  {
    isDisabled: true,
    name: 'Seven-card Stud',
    type: 'outline-light'
  },
  {
    isDisabled: true,
    name: 'Texas Hold-em',
    type: 'outline-light'
  },
  {
    isDisabled: true,
    name: 'Omaha Hold-em',
    type: 'outline-light'
  }
]

export const GAME_RULES: GameRules[] = [
  {
    title: GAME_RULES_BUTTONS[0].name,
    description: FiveCardRules
  }
]