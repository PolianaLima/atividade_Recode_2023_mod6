import {http} from "@/utils/http";
import {ptBR} from "date-fns/locale";
import {format, parseISO} from "date-fns";

export const getDataVoos = async ()=>{

    try {
        const response = await http.get(`/api/Voos`);
        return response.data

    }catch (error) {
        console.error("Erro ao buscar dados", error);
        throw error; // Rejeitar o erro para que o chamador possa lidar com ele
    }
}