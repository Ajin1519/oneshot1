import httpCommons from "../http-commons";

class CollegeDataService{
    getAll(page = 0){
        return httpCommons.get(`?page=${page}`);
    }
}

export default new CollegeDataService();