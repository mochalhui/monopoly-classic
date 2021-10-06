import { AreaDTO } from "./area";
import User from "./user";

export default class ActionController {
    userId: number;
    constructor(){}
    activeUser(id: number){
        this.userId = id;
    }
    move(user: User, step: number) {
        user.goAhead(step);
    }
    buyArea(user: User, area: AreaDTO) {
        user.buyArea(area.moneyCost,area.diamond);
        area.owner = user.id;
    }
    buildHouse(user: User, area: AreaDTO) {
        user.buildHouse(200);
        area.houseLevel ++;
    }
    updateHouse(user: User, area: AreaDTO) {
        user.updateHouse(1)
        area.houseLevel ++;
    }
    
}