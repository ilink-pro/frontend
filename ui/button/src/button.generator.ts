import { AppearanceStyleGenerator } from '@ilink-ui-generators/button'

import { theme }                    from '@ui/theme'

const generator = new AppearanceStyleGenerator(theme.colors.button)

// @ts-ignore
generator.generateFile(__dirname)
