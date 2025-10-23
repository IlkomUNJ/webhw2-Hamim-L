import type { HttpContext } from '@adonisjs/core/http'
import Service from '#models/service'

export default class SellerServicesController {
  // 🧾 Menampilkan semua service seller
  async index({ view }: HttpContext) {
    const services = await Service.all()
    return view.render('pages/seller/seller_dashboard', { services })
  }

  // ➕ Tambah service baru
  async create({ request, response }: HttpContext) {
    const data = request.only(['title', 'description'])
    await Service.create(data)
    console.log(data)
    return response.redirect('/seller/seller_dashboard')
  }

  // ❌ Hapus service berdasarkan ID
  async delete({ params, response }: HttpContext) {
    const service = await Service.find(params.id)
    if (service) {
      await service.delete()
    }
    return response.redirect().toRoute('/seller/seller_dashboard')
  }
}
