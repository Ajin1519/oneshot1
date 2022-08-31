let oneshot_colleges

export default class oneshotDAO {
    static async injectDB(conn) {
      if (oneshot_colleges) {
        return
      }
      try {
        oneshot_colleges = await conn.db(process.env.ONESHOT_NS).collection("colleges")
      } catch (e) {
        console.error(
          `Unable to establish a collection handle in OneShotCollegesDAO: ${e}`,
        )
      }
    }

    static async getColleges({
        filters = null,
        page = 0,
        oneshotPerPage = 20,
      } = {}) {
        let query
        if (filters) {
          if ("name" in filters) {
            query = { $text: { $search: filters["name"] } }
          } else if ("city" in filters) {
            query = { "city": { $eq: filters["city"] } }
          } 
          else if ("state" in filters) {
            query = { "state": { $eq: filters["state"] } }
          }else if("country" in filters){
                query = {"country":{$eq:filters["country"]}}
            }
          }

        let cursor
    
    try {
      cursor = await oneshot_colleges
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { collegeList: [], totalcolleges: 0 }
    }

    const displayCursor = cursor.limit(oneshotPerPage).skip(oneshotPerPage * page)

    try {
      const collegeList = await displayCursor.toArray()
      const totalcolleges = await oneshot_colleges.countDocuments(query)

      return { collegeList, totalcolleges }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { collegeList: [], totalcolleges: 0 }
    }
  }
}