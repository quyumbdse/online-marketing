import axios from 'axios';

export default class Render {

    async getResults() {
        try {
            const res = await axios(`https://qrservicedk.herokuapp.com/api/products`);
            this.result = res.data;
            // console.log(res);
        } catch (error) {
            alert(error);
        }
    }
}
