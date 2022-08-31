import oneshotDAO from "../dao/oneshotDAO.js"

export default class onshotController {
  static async apiGetOneshot(req, res, next) {
    const oneshotPerPage = req.query.oneshotPerPage ? parseInt(req.query.oneshotPerPage, 10) : 20
    const page = req.query.page ? parseInt(req.query.page, 10) : 0

    let filters = {}
    if (req.query.city) {
      filters.city = req.query.city
    } else if (req.query.state) {
      filters.state = req.query.state
    }else if(req.query.country){
        filters.country = req.query.country
    } 
    else if (req.query.name) {
      filters.name = req.query.name
    }

    const { collegeList, totalColleges } = await oneshotDAO.getColleges({
      filters,
      page,
      oneshotPerPage,
    })

    let response = {
      restaurants: collegeList,
      page: page,
      filters: filters,
      entries_per_page: oneshotPerPage,
      total_results: totalColleges,
    }
    res.json(response)
  }
}