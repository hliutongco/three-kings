import {prologueData} from './prologue'
import {scene_A} from './scene_a'
import {scene_B} from './scene_b'
import {scene_C} from './scene_c'
import {scene_C_i} from './scene_c_i'
import {scene_C_ii} from './scene_c_ii'
import {scene_C_iii_a} from './scene_c_iii'
import {scene_C_iii_b} from './scene_c_iii'
import {scene_C_iv} from './scene_c_iv'
import {scene_D} from './scene_d'
import {scene_E} from './scene_e'
import {scene_F} from './scene_f'
import {bad_end} from './endings/bad_end'
import {neutral_end} from './endings/neutral_end'
import {truth_end} from './endings/truth_end'
import {lies_end} from './endings/lies_end'

// This functions as a table of contents
export const chapterData = {
  0: prologueData,
  1: scene_A,
  2: scene_B,
  3: scene_C,
  4: scene_C_i,
  5: scene_C_ii,
  6: scene_C_iii_a,
  7: scene_C_iii_b,
  8: scene_C_iv,
  9: scene_D,
  10: scene_E,
  11: scene_F,
  100: bad_end,
  101: neutral_end,
  102: truth_end,
  103: lies_end
}

// chapters where call button should be enabled
export const enableMenu = [3,4,5,6,7,8,9,10]

// chapters that should have checkpoints
export const checkpointData = [3, 9, 10]
