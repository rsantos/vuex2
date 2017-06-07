import TimeListComponent from './time-list.component';
import TimeJogoComponent from './time-jogo.component';
import TimeZonaComponent from './time-zona.component';
import event from '../event';
import store from '../store';

export default {
  components: {
    'time-list': TimeListComponent,
    'time-jogo': TimeJogoComponent,
    'time-zona': TimeZonaComponent
  },
  template: `
    <div class="container">
        <div class="row">
            <h3>Campeonato Brasileiro - Série A</h3>
            <div v-show="view == 'tabela'">
                <time-list></time-list>
            </div>
            <div v-show="view == 'novojogo'">
                <time-jogo></time-jogo>
            </div>
            <div v-show="view == 'zona'">
                <time-zona></time-zona>
            </div>
        </div>
    </div>
  `,
  computed: {
    view(){
        return store.state.view;
    }    
  }
};