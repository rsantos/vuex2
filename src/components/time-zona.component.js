import store from '../store';

export default {
  template: `
    <div>
        <h3>Time que irão para a libertadores</h3>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="time in timesLibertadores">
                <td>
                    <img :src="time.escudo" style="height: 30px; width: 30px;">
                    <strong>{{time.nome}}</strong>
                </td>
            </tr>
            </tbody>
        </table>
        <h3>Time que serão rebaixados</h3>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="time in timesRebaixados">
                <td>
                    <img :src="time.escudo" style="height: 30px; width: 30px;">
                    <strong>{{time.nome}}</strong>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  `,
  computed: {
    timesLibertadores(){
        return store.getters.timesLibertadores;
    },
    timesRebaixados(){
        return store.getters.timesRebaixados;
    },
  }
};