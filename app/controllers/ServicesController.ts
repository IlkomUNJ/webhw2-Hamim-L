import type { HttpContext } from '@adonisjs/core/http'
import Service from '#models/service'

export default class ServicesController {
  async index(ctx: HttpContext) {
    const { view } = ctx
    const services = await Service.all()
    return view.render('pages/services', { services })
  }
}
