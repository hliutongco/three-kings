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
import {bad_end} from './bad_end'

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
  100: bad_end
}

// chapters where call button should be disabled
export const disableMenu = [0,1,2,100]
