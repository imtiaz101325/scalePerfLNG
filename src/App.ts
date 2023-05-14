import { Lightning } from '@lightningjs/sdk'
import { RENDER_TREE } from './CPReference'

interface AppTemplateSpec extends Lightning.Component.TemplateSpec {
  Component_1_0: unknown
}

export class App
  extends Lightning.Component<AppTemplateSpec>
  implements Lightning.Component.ImplementTemplateSpec<AppTemplateSpec>
{
  static override _template(): Lightning.Component.Template<AppTemplateSpec> {
    return RENDER_TREE
  }

  override _init() {
    requestAnimationFrame(() => {
      console.time('hide using alpha')
      this.tag('Component_1_0').patch({ alpha: 0 })
      console.timeEnd('hide using alpha')

      requestAnimationFrame(() => {
        console.time('show using alpha')
        this.tag('Component_1_0').patch({ alpha: 1 })
        console.timeEnd('show using alpha')

        requestAnimationFrame(() => {
          console.time('hide using scaleX')
          this.tag('Component_1_0').patch({ scaleX: 0 })
          console.timeEnd('hide using scaleX')

          requestAnimationFrame(() => {
            console.time('show using scaleX')
            this.tag('Component_1_0').patch({ scaleX: 1 })
            console.timeEnd('show using scaleX')
          })
        })
      })
    })
  }
}
