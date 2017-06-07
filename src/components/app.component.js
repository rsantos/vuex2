import TimeListComponent from './time-list.component';
import TimeJogoComponent from './time-jogo.component';

export default {
  components: {
    'time-list': TimeListComponent,
    'time-jogo': TimeJogoComponent
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
        </div>
    </div>
  `,
  data(){
    return {
      view: 'tabela'
    }
  },
  methods: {
    showView(view){
      this.view = view;
    }
  }
};