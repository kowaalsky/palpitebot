const comandos = {
  incentivar: `<h1>!+</h1>
                <p class="sig">Enviar mensagem de incentivo</p>
                <p>O comando <spam class="cmd">!+</spam> serve para incentivar os membros a palpitares. Há 5 mensagens armazenadas; ao dar <spam class="cmd">!+</spam>, ele enviará uma aleatória das 5 ao grupo.</p>
                <h3>Mensagem 1</h3>
                <p>⚠️ Bora palpitar galera! Estamos com <spam class="ngt">x</spam> palpites!</p>
                <h3>Mensagem 2</h3>
                <p>📢 Galera, tem bolão rolando! Quem puder participar, é de graça! Os <spam class="ngt">3 primeiros colocados</spam> vão ganhar premiações em pix</p>
                <h3>Mensagem 3</h3>
                <p>SRN! Bora palpitar, galera! Se não for pela premiação, vamos pela diversão!</p>
                <h3>Mensagem 4</h3>
                <p>🚨🚨 Galera, estamos com <spam class="ngt">x</spam> palpites... Bora participar pessoal! Isso agrega demais — além disso, o bolão é <spam class="ngt">premiado</spam>!</p>
                <div class="aviso">Este comando só pode ser usado de 15 em 15 minutos para evitar flood.</div>`,
  enviar2fig: `                <h1>!a</h1>
                <p class="sig">Enviar bolão ao grupo com 2 figurinhas</p>
                <p>O comando <spam class="cmd">!a</spam> enviará o bolão no grupo junto com 2 figurinhas embaixo.</p>
                <h3>2 figurinhas</h3>
                <p>Há uma figurinha que sempre será enviada:</p>
                <div class="sticdiv">
                    <div><img src="img/figurinhas/aviso1.webp" alt="" class="stic"></div>
                    <p class="sticdesc">Essa figurinha sempre será usada</p>
                </div>
                <p>A segunda figurinha a ser enviada é sorteada; são 2. Uma delas será enviada de forma aleatória.</p>
                <div class="sticdiv">
                    <div style="display: flex; gap: 7px;"><img src="img/figurinhas/aviso1-1.webp" alt="" class="stic"><img src="img/figurinhas/aviso1-2.webp" alt="" class="stic"></div>
                    <p class="sticdesc">Uma dessas duas figurinhas será enviada de forma aleatória</p>
                </div>`,
  enviar1fig: `                <h1>!a*</h1>
                <p class="sig">Enviar bolão ao grupo com 1 figurinha</p>
                <p>O comando <spam class="cmd">!a*</spam> enviará o bolão no grupo junto com 1 figurinha embaixo.</p>
                <p>A figurinha que sempre será enviada será a de atualizada com sucesso:</p>
                <div class="sticdiv">
                    <div><img src="img/figurinhas/upd.webp" alt="" class="stic"></div>
                    <p class="sticdesc">Essa figurinha sempre será usada</p>
                </div>
                <p>É útil para mostrar que o bolão foi atualizado apenas.</p>`,
  enviar: `                <h1>!a-</h1>
                <p class="sig">Enviar bolão ao grupo sem nenhuma figurinha</p>
                <p>O comando <spam class="cmd">!a-</spam> enviará o bolão no grupo, mas só o bolão e nada mais.</p>
                <p>É útil para enviar o bolão sem querer floodar o grupo com figurinhas.</p>`,
  abrir: `                <h1>!abr</h1>
                <p class="sig">Abre o bolão</p>
                <p>O comando <spam class="cmd">!abr</spam> é muito útil ser usado após o comando <span class="itc">!enc</span>. Ele só vai ser útil quando o bolão for reiniciado e estiver pronto para ser aberto.</p>
                <p>Ao dar <span class="cmd">!abr</span>, ele vai enviar o novo bolão criado através de !enc com a figurinha do Bolão aberto.</p>
                <div class="sticdiv">
                    <div><img src="img/figurinhas/bolao_aberto.webp" alt="" class="stic"></div>
                    <p class="sticdesc">Essa figurinha sempre vai acompanhar o bolão quando enviado pela primeira vez</p>
                </div>
                <p class="aviso">Só é possível dar <span class="cmd">!abr</span> se o bolão estiver fechado. Ao dar este comando 3 (três) vezes enquanto o bolão estiver aberto, ele vai entender que é spam e vai encerrar a atividade do bot e só será possível religá-lo com o comando <span class="cmd">!cmd</span>.</p>
                <p>Se o bolão estiver aberto, o bot responderá isto:</p>
                <p class="frasebot">🔓 O bolão já está aberto.</p>`,
checar: `                <h1>!chc</h1>
                <p class="sig">Checar</p>
                <p>O comando <spam class="cmd">!chc</spam> é útil para checar se o palpite com um nome já existe. O formato usado neste comando é !chc + Nome / Sobrenome</p>
                <p class="frasebot">!chc Jucelino Andrade</p>
                <p>Ele vai puxar todas as informações a respeito; se o membro for detectado, ele avisa e mostra o placar que o membro palpitou, a posição em que ele está nesse placar (útil caso tenham muitos palpites em um só lugar) e a hora em que o palpite do membro foi adicionado ao bolão.</p>
                <p>A mensagem do bot será a seguinte (exemplo):</p>
                <div class="frasebot">
                    <div>
                        <p style="margin-bottom: 18px;"><span class="ngt">Palpite encontrado!</span></p>
                        <p>Nome: <span class="ngt">Jucelino Andrade</span></p>
                        <p>Placar: <span class="itc">2 x 1</span></p>
                        <p>Posição no placar: <span class="itc">1</span></p>
                        <p>Feito em: <span class="itc">03/11/2025, 08:28:11</span></p>
                    </div>
                </div>
                <p>Se o bot não encontrar o membro, ele avisa de que ninguém com o nome informado foi encontrado.</p>`,
coletar: `                <h1>!col</h1>
                <p class="sig">Coletar</p>
                <p>O comando <spam class="cmd">!col</spam> é útil para coletar palpites de um placar específico. O formato desse comando é !col + placar</p>
                <p class="frasebot">!col 2:1</p>
                <p>Ele vai coletar todos os palpites do placar de 2 x 1.</p>`,

deletar: `                <h1>!del</h1>
                <p class="sig">Deletar</p>
                <p>O comando <spam class="cmd">!del</spam> é útil para deletar palpites. O formato usado é !del + posição do palpite ; + placar.</p>
                <p class="frasebot">!del 3;1:0</p>
                <p class="sticdesc">Ele vai deletar o palpite 03 de 1x0</p>
                <p>É possível delterar apenas dois palpites de um só placar usando vírgula entre as posições:</p>
                <div class="frasebot">
                    <p>!del 2,16;3:1</p>
                </div>
                <p class="sticdesc">Ele vai deletar os palpites 02 e 16 de 3x1</p>
                <p class="aviso">Para evitar deletar muitos palpites sem intenção, só é permitido dois de um único placar e 6 ao todo.</p>`,
editaratualizacao: `                <h1>!ea</h1>
                <p class="sig">Editar atualização</p>
                <p>Para evitar flood de bolão no grupo, o comando <spam class="cmd">!ea</spam> é útil para atualizar o bolão editando a última atualização de bolão enviada no grupo. Para confirmar a atualização, ele envia uma figurinha de atualizado com sucesso.</p>
                <div class="sticdiv">
                    <div><img src="img/figurinhas/upd.webp" alt="" class="stic"></div>
                    <p class="sticdesc">Essa figurinha sempre vai acompanhar o bolão quando ele for editado por !ea</p>
                </div>
                <p class="aviso">Como o WhatsApp pemite edição de uma mensagem em até 15 minutos, então só pode usar o <span class="cmd">!ea</span> após 13 minutos (treze, por dar 2 minutos de reserva) da última atualização do bolão, de qualquer outro comando que o envie. Após 13 minutos do envio da última atualização do bolão, o bot reage com ❌ e não atualiza. É necessário mandar outra atualização por meio de qualquer um dos comandos: <span class="cmd">!a</span>, <span class="cmd">!a*</span>, <span class="cmd">!a-</span></p>`,
editarbolao: `                <h1>!eb</h1>
                <p class="sig">Editar bolão</p>
                <p class="sticdesc">Este comando está relacionado com o comando !enc</p>
                <p>Serve para editar o bolão. Para melhor compreensão, melhor que veja o comando !enc primeiro.</p>
                <p>O formato do comando é !eb + chave + novo valor</p>
                <h3>$cha (Campeonato)</h3>
                <p><span class="cmd">$cha</span> mudará o campeonato.</p>
                <p>Vamos supor que no bolão estava como sendo brasileirão. Se eu quero mudar de brasileirão para libertadores, basta usar a chave da libertadores <span class="itc">(se não sabe as chaves, são as mesmas usadas em <span class="cmd">!enc</span>)</span>.</p>
                <p class="frasebot">!eb $cha lib</p>
                <p class="sticdesc">O bot vai alterar o campeonato de Brasileirão para Libertadores</p>
                <div class="sticdiv">
                    <div><img src="img/arc/cha.png"></div>
                    <p class="sticdesc">Essa é a parte que será alterada.</p>
                </div>
                <h3>$adv (Adversário)</h3>
                <p><span class="cmd">$adv</span> mudará o adversário (ou seja, o nome do time que Flamengo enfrenta).</p>
                <p class="frasebot">!eb $adv Palmeiras</p>
                <p class="sticdesc">O bot vai alterar o nome do adversário para 'Palmeiras'</p>
                <h3>$bd (Bandeira do adversário)</h3>
                <p><span class="cmd">$bd</span> mudará a bandeira do adversário do Flamengo.</p>
                <p class="aviso">Essa chave só aceita emoji.</p>
                <p class="frasebot">!eb $bd 🇲🇴</p>
                <p class="sticdesc">O bot vai alterar a bandeira do adversário para 🇲🇴</p>
                <h3>$tp (Tipo de partida)</h3>
                <p><span class="cmd">$tp</span> mudará o tipo de partida que será realida (se é oitavas de final, se é rodada, se é semifinal, etc...).</p>
                <p class="frasebot">!eb $tp 8fi</p>
                <p class="sticdesc">O bot vai alterar o tipo da partida para Oitavas de Final - Ida</p>
                <h3>$estd (Estádio)</h3>
                <p><span class="cmd">$estd</span> mudará o estádio em que a partida será realida.</p>
                <p class="frasebot">!eb $estd Morumbis</p>
                <p class="sticdesc">O bot vai alterar o estádio para 'Morumbis'</p>
                <h3>$d (Data)</h3>
                <p><span class="cmd">$d</span> mudará a data em que a partida será realida.</p>
                <p class="frasebot">!eb $d 30/12/2025</p>
                <p class="sticdesc">O bot vai alterar a data para 30/12/2025</p>
                <h3>$h (Horário)</h3>
                <p><span class="cmd">$h</span> mudará o horário da partida.</p>
                <p class="aviso">Também alterará o horário do fechamento do bolão para sempre ser 1h antes do horário do jogo.</p>
                <p class="aviso">O formato aceito é igual ao <span class="cmd">!enc</span>: 10h30</p>
                <p class="frasebot">!eb $h 23h45</p>
                <p class="sticdesc">O bot vai alterar a hora para 23:45 (fechamento: 22:45)</p>
                <h3>$tv (Canais de televisão)</h3>
                <p><span class="cmd">$tv</span> mudará os canais de televisão.</p>
                <p class="aviso">Esta chave possui várias subchaves. Leia <span class="cmd">!enc</span>.</p>
                <p class="frasebot">!eb $tv $ap</p>
                <p class="sticdesc">O bot vai alterar os canais de televisão para 'Prime Video'.</p>
                <p class="aviso">Como os jogos podem ser transmitidos por 2 ou mais canais diferentes, há outras maneiras de usar a chave de canais (<span class="cmd">$tv</span>).</p>
                <h4>$tv para alterar apenas um canal</h4>
                <p>Para mudar um canal no meio de vários, use ; (ponto e vírgula) e indique qual o canal a ser editado pela ordem.</p>
                <p class="frasebot">!eb $tv;3 $pre</p>
                <p class="sticdesc">O bot vai alterar o terceiro canal para Premiere.</p>
                <h3>$pt (Pontuação)</h3>
                <p><span class="cmd">$pt</span> mudará a pontuação do bolão.</p>
                <p class="frasebot">!eb $pt 10</p>
                <p class="sticdesc">O bot vai alterar a pontuação para 10 pontos.</p>`,
editar: `                <h1>!ed</h1>
                <p class="sig">Editar palpite</p>
                <p>Serve para editar um palpite do bolão. A forma aceita desse comando é !ed posição do palpite + placar + chave do que será alterado + >> + novo valor.</p>
                <p class="frasebot">
                    !ed 11;2:0 $n >> Jucelino
                </p>
                <p class="sticdesc">Daqui a pouco vamos entender o que o bot está alterando. Leia abaixo.</p>
                <h3>$n (Alterar nome)</h3>
                <p>Vai alterar o nome do usuário.</p>
                <p>Exemplo: o usuário 16 de 3x0 está como Juclino Andrade e quero mudar o nome para Jucelino.</p>
                <p class="frasebot">!ed 16;3:0 $n >> Jucelino</p>
                <p class="sticdesc">O bot mudará o nome de 'Juclino' para 'Jucelino'.</p>
                <h3>$s (Alterar sobrenome)</h3>
                <p>Vai alterar o sobrenome do usuário.</p>
                <p class="aviso">Se não tiver um seguno nome, ele não vai funcionar.</p>
                <p>Exemplo: o usuário 9 de 1x0 está como Jucelino Andrde e quero mudar o sobrenome para Andrade.</p>
                <p class="frasebot">!ed 9;1:0 $s >> Andrade</p>
                <p class="sticdesc">O bot mudará o sobrenome de 'Andrde' para 'Andrade'.</p>
                <h3>$ns (Alterar nome e sobrenome)</h3>
                <p>Vai alterar o nome e o sobrenome do usuário.</p>
                <p class="aviso">Se tiver um nome só não vai funcionar.</p>
                <p>Exemplo: o usuário 1 de 2x1 está como Juclino Andrde e quero mudar o nome para Jucelino Andrade.</p>
                <p class="frasebot">!ed 1;2:1 $ns >> Jucelino Andrade</p>
                <p class="sticdesc">O bot mudará o nome de 'Juclino Andrde' para 'Jucelino Andrade'.</p>
                <h3>$j (Alterar jogador)</h3>
                <p>Vai alterar o jogador apostado.</p>
                <p class="aviso">Se não houver jogador, não vai funcionar.</p>
                <p>Exemplo: o usuário 13 de 2x0 apostou em Arrascaeta, mas quis mudar para Bruno Henrique. (Os jogadores são escolhidos através do número da camisa).</p>
                <p class="frasebot">!ed 13;2:0 $j >> 27</p>
                <p class="sticdesc">O bot mudará o jogador para $j:27 (B. Henrique).</p>
                <h3>add() (Adicionar)</h3>
                <p>Vai incrementar algo no palpite.</p>
                <p class="aviso">Se já tiver o que será adicionado, ele vai substituir.</p>
                <ul>
                    <li>add($n) (Adicionar um nome)</li>
                    <li>add($s) (Adicionar um sobrenome)</li>
                    <li>add($j) (Adicionar um jogador)</li>
                </ul>
                <p class="aviso">Não tem a opção de adicionar nome e sobrenome.</p>
                <p class="frasebot">!ed 16;3:0 add($n) >> Jucelino</p>
                <p class="sticdesc">O bot adicionará o nome de 'Jucelino'.</p>
                <p>É possível, também, adicionar o negrito (representar ADM) em um membro: <span class="ngt">add($dm)</span></p>
                <p class="frasebot">!ed 16;3:0 add($dm)</p>
                <p class="sticdesc">O bot fará com que o nome e sobrenome do membro 16 de 3x0 fique em negrito.</p>

                
                <h3>rem() (Remover)</h3>
                <p>Vai remover algo no palpite.</p>
                <p class="aviso">Se não tiver o que será removido, ele vai dar erro.</p>
                <ul>
                    <li>rem($j) (Remover um jogador)</li>
                    <li>rem($dm) (Remover o negrito)</li>
                </ul>
                <p class="aviso">Não é possível remover nem o nome e nem o sobrenome</p>
                <p class="frasebot">!ed 16;3:0 rem($j)</p>
                <p class="sticdesc">O bot removerá o jogador apostado do palpite 16 de 3x0.</p>`,
encerrar: `                <h1>!enc</h1>
                <p class="sig">Encerrar bolão antigo e criar novo bolão</p>
                <p>Este é o comando chave para o bolão funcionar. É o comando que cria o bolão.</p>
                <p>Ao dar <span class="cmd">!enc</span>, o bot vai excluir o bolão antigo, ou seja, nenhum outro comando vai funcionar até que crie o bolão novamente.</p>
                <p>Após excluir o bolão, ele mandará uma mensagem:</p>
                <div class="frasebot">
                    <div>
                        <p style="margin-bottom: 16px;"><span class="ngt">📝 Novo Bolão Iniciado!</span></p>
                        <p>Digite os dados do bolão em sequência:</p>
                        <ul>
                            <li>Campeonato:</li>
                            <li>Adversário:</li>
                            <li>Bandeira do Adversário:</li>
                            <li>Tipo:</li>
                            <li>Estádio:</li>
                            <li>Data:</li>
                            <li>Horário:</li>
                            <li>TV:</li>
                            <li>Pontuação:</li>
                        </ul>
                        <p style="margin-top: 16px;">⚠️ Copie esta mensagem, cole e responda nos campos correspondentes!</p>
                    </div>
                </div>
                <p>Ao aparecer esta mensagem, você deve copiar, colar esta mensagem e enviar com as respostas. As respostas aceitas são as seguintes (abaixo):</p>
                <h3>Campeonato</h3>
                <p>Campeonato é a parte que informa qual o campeonato que o Flamengo está participando. As chaves para o campeonato são:</p>

  <details>
    <summary>Chaves do Campeonato</summary>
      <table>
        <caption>Modelo: Campeonato: br (ex.)</caption>
        <thead>
          <tr>
            <th>Chave</th>
            <th>Campeonato</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="chv">br</td>
            <td>Brasileirão</td>
          </tr>
          <tr>
            <td class="chv">lib</td>
            <td>Libertadores</td>
          </tr>
          <tr>
            <td class="chv">cbr</td>
            <td>Copa do Brasil</td>
          </tr>
          <tr>
            <td class="chv">scbr</td>
            <td>Supercopa do Brasil</td>
          </tr>
          <tr>
            <td class="chv">rj</td>
            <td>Carioca</td>
          </tr>
          <tr>
            <td class="chv">mun</td>
            <td>Mundial</td>
          </tr>
          <tr>
            <td class="chv">cmc / smc</td>
            <td>Copa do Mundo de Clubes</td>
          </tr>
          <tr>
            <td class="chv">resa</td>
            <td>Recopa Sul-Americana</td>
          </tr>
          <tr>
            <td class="chv">sa</td>
            <td>Copa Sul-Americana</td>
          </tr>
          <tr>
            <td class="chv">amg</td>
            <td>Amistoso</td>
          </tr>
        </tbody>
      </table>
  </details>
            <h3>Adversário</h3>
            <p>No campo de adversário, é só inserir (CORRETAMENTE) o nome do adversário, seguindo o esquema padrão de início com maiúscula e o resto em minúscula.</p>
            <p class="frasebot">Adversário: Racing</p>
            <p>O nome do adversário se encaixará aqui dessa forma:</p>
            <div class="sticdiv">
                <div>
                    <img src="img/arc/adversário_1.png" alt="">
                </div>
            </div>
            <p>E também ficará embutido nos placares de forma automática: aparece apenas as 3 primeiras letras do nome, sempre em caixa-alta.</p>
            <div class="sticdiv">
                <div>
                    <img src="img/arc/adversario_2.png" alt="">
                </div>
            </div>
            <p class="aviso">Em caso de nomes de time que tenham acentos, ele remove automaticamente (ex: São Paulo = SAO)</p>
            <h3>Bandeira do Adversário</h3>
            <p class="aviso">Para este campo, só são aceitos <b>emojis</b>.</p>
            <p>É a bandeira que vai aparecer no bolão para representar o adversário. Coloque apenas 1 emoji. Ele vai substituir todas as bandeiras existentes no bolão que representem o adversário.</p>
            <h3>Tipo</h3>
            <p>É o tipo da partida: oitavas de final, rodada, semifinal... etc.</p>
            <p>Possui chaves para o campo de tipo:</p>
              <details>
    <summary>Chaves do Tipo</summary>
      <table>
        <caption>Modelo: Tipo: 8fi (ex.)</caption>
        <thead>
          <tr>
            <th>valor</th>
            <th>O que aparece</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="chv">$br 18</td>
            <td>(Rodada 18/38)</td>
          </tr>
          <tr>
            <td class="chv">2/4fg</td>
            <td>Fase de Grupos - 2 de 4</td>
          </tr>
          <tr>
            <td class="chv">8f</td>
            <td>Oitavas de Final</td>
          </tr>
          <tr>
            <td class="chv">8fi</td>
            <td>Oitavas de Final - Ida</td>
          </tr>
          <tr>
            <td class="chv">8fv</td>
            <td>Oitavas de Final - Volta</td>
          </tr>
          <tr>
            <td class="chv">4f</td>
            <td>Quartas de Final</td>
          </tr>
          <tr>
            <td class="chv">4fi</td>
            <td>Quartas de Final - Ida</td>
          </tr>
          <tr>
            <td class="chv">4fv</td>
            <td>Quartas de Final - Volta</td>
          </tr>
          <tr>
            <td class="chv">2f</td>
            <td>Semifinal</td>
          </tr>
          <tr>
            <td class="chv">2fi</td>
            <td>Semifinal - Ida</td>
          </tr>
          <tr>
            <td class="chv">2fv</td>
            <td>Semifinal - Volta</td>
          </tr>
          <tr>
            <td class="chv">1f</td>
            <td>Final</td>
          </tr>
        </tbody>
      </table>
  </details>
  <h3>Estádio</h3>
  <p>Estádio aceita 2 valores: o nome do estádio (que é qualquer um) ou <mark><b>casa</b></mark>, isso porque, ao colocar 'casa' como valor de Estádio, ele entende como Maracanã e já preenche automaticamente.</p>
  <p>Relembrando que o bot entende se no jogo o Flamengo é mandante e preenche os placares da forma correta; se Flamengo joga fora de casa, Flamengo fica à direita; se Flamengo joga em casa, Flamengo fica à esquerda, como mandante.</p>
  <p class="frasebot">...Estádio: El Cilindro</p>
  
            <div class="sticdiv">
                <div>
                    <img src="img/arc/fla_fora.png" alt="">
                </div>
                <p class="sticdesc">Flamengo à direita, como visitante.</p>
            </div>
  <p class="frasebot">...Estádio: casa</p>
  
            <div class="sticdiv">
                <div>
                    <img src="img/arc/fla_casa.png" alt="">
                </div>
                <p class="sticdesc">Flamengo à esquerda, como mandante.</p>
            </div>
            <h3>Data</h3>
            <p>A data vai ser crucial para mostrar o dia em que o jogo do Flamengo acontece e quando o bolão se encerra.</p>
            <p>O formato da data é dd/mm/aaaa.</p>
            <p>A informação de fechamento do bolão também segue datas:</p>
            <ul>
                <li>Se o jogo acontece em 2 dias ou mais, <b>BOLÃO FECHA DEPOIS DE AMANHÃ</b></li>
                <li>Se o jogo acontece em 1 dia, <b>BOLÃO FECHA AMANHÃ</b></li>
                <li>Se o jogo acontece no mesmo dia, <b>BOLÃO FECHA HOJE</b></li>
            </ul>
            <p>O bolão fechará automaticamente no horário e data inseridos.</p>
            <h3>Horário</h3>
            <p>O horário também determina o horário do fechamento do bolão como sendo automaticamente 1 hora antes do jogo. Se o valor inserido foi 11h45, o bolão fecha às 10:45.</p>
            <p>O formato da data não é com dois pontos (:) e sim com um 'h' para indicar as horas.</p>
            <p class="frasebot">...Horário: 21h30</p>
            <h3>TV</h3>
            <p>Informa em quais canais o jogo será transmitido. TV possui várias chaves:</p>  <details>
    <summary>Chaves da TV</summary>
      <table>
        <caption>Modelo: TV: $ap, $pre (ex.)</caption>
        <thead>
          <tr>
            <th>Chave</th>
            <th>Canal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="chv">$ap</td>
            <td>Prime Video</td>
          </tr>
          <tr>
            <td class="chv">$g</td>
            <td>Globo</td>
          </tr>
          <tr>
            <td class="chv">$ge</td>
            <td>geTV</td>
          </tr>
          <tr>
            <td class="chv">$kz</td>
            <td>Cazé TV</td>
          </tr>
          <tr>
            <td class="chv">$pre</td>
            <td>Premiere</td>
          </tr>
          <tr>
            <td class="chv">$pn</td>
            <td>ESPN</td>
          </tr>
          <tr>
            <td class="chv">$pa</td>
            <td>Paramount</td>
          </tr>
          <tr>
            <td class="chv">$dis</td>
            <td>Disney+</td>
          </tr>
          <tr>
            <td class="chv">$rec</td>
            <td>Record</td>
          </tr>
          <tr>
            <td class="chv">$ptv</td>
            <td>SporTV</td>
          </tr>
        </tbody>
      </table>
  </details>
  <p>Pode inserir mais que um, por vírgula e espaço, assim:</p>
  <p class="frasebot">...TV: $g, $ge, $kz</p>
  <p class="sticdesc">O bot vai preencher como: Globo / geTV / Cazé TV</p>
  <h3>Pontuação</h3>
  <p>O valor do bolão. É crucial para a contagem de pontos e está muito ligado aos comandos <span class="cmd">!pt</span>, <span class="cmd">!vit</span> e <span class="cmd">!rank</span>.</p>
  <p>Basta inserir o número.</p>
  <p class="aviso">O campo de Pontuação só aceita número.</p>
  <p class="frasebot">...Pontuação: 6</p>
  <p class="sticdesc">O bot já preenche: Pontuação: 6 pontos.</p>`,
envia2fig: `                <h1>!fig</h1>
                <p class="sig">2 figurinhas</p>
                <p>Envia duas figurinhas para incentivar ao pessoal a palpitar.</p>
                <p>As figurinhas que o bot envia são:</p>
                
            <div class="sticdiv">
                <div>
                    <img src="img/figurinhas/aviso1.webp" class="stic" alt="">
                    <img src="img/figurinhas/aviso1-1.webp" alt="" class="stic">
                </div>
                <p class="sticdesc">O bot envia essas duas figurinhas.</p>
            </div>`,
envia1fig: `                <h1>!fig*</h1>
                <p class="sig">1 figurinha</p>
                <p>Envia apenas uma figurinha para incentivar ao pessoal a palpitar.</p>
                <p>A figurinhas que o bot envia é:</p>
                
            <div class="sticdiv">
                <div>
                    <img src="img/figurinhas/aviso1.webp" class="stic" alt="">
                </div>
                <p class="sticdesc">O bot envia esta figurinha.</p>
            </div>`,
historico: `                <h1>!his</h1>
                <p class="sig">Histórico</p>
                <p>Mostra os palpites do último bolão fechado e informações do bolão anterior.</p>
                <p class="aviso">Não é a mesma formatação do bolão original para não confundir.</p>`,
info: `                <h1>!i (ou) !info</h1>
                <p class="sig">Informações do bolão</p>
                <p>Mostra uma mensagem referente às informações do bolão, por exemplo a premiação, as regras, etc.</p>
                <p>A mensagem que o bot envia é:</p>
                <div class="frasebot">
                    <div>
                        <p>🏆 INFORMAÇÕES DO BOLÃO 🏆</p>
                        <p class="seta_forwpp">Como funciona o bolão?</p>
                        <p>Cada membro manda seu palpite contendo nome e sobrenome + placar e, opcional, + homem-gol, o jogador que fará gol/assistência no jogo. Para participar é de graça!</p>
                        <p>Cada bolão tem uma pontuação geral. A pontuação do bolão é mostrada logo no final de cada bolão. Às pessoas que acertarem o palpite, ganharam a quantidade de pontos indicada no bolão. Ao final de tudo, há uma classificação geral.</p>
                        <p class="seta_forwpp">Premiação do Bolão</p>
                        <p>Os ADMS deste grupo se disponibilizam a premiar os 3 primeiros colocados na classificação geral do Bolão com pix. Em ordem:</p>
                        <p>🥇 1° lugar receberá R$50,00</p>
                        <p>🥈 2° lugar receberá R$30,00</p>
                        <p>🥉 3° lugar receberá R$10,00</p>
                        <p>Não precisa pagar nada.</p>
                        <p class="seta_forwpp">Regras do Bolão</p>
                        <p>Para participar do Bolão, você deve:</p>
                        <ul>
                            <li>Enviar seu nome e sobrenome;</li>
                            <li>Enviar seu placar;</li>
                            <li>Opcional: enviar o homem-gol;</li>
                            <li>Enviar um palpite que seja vitória ou até mesmo empate;</li>
                            <li>Enviar um palpite duas ou mais vezes;</li>
                            <li>Você só vai poder alterar seu placar se quiser por 2x;</li>
                        </ul>
                        <p>O bolão é alterado via BOT e tudo fica registrado.</p>
                        <p class="ngt">Só os ADMS deste grupo podem alterar o bolão. Palpite com o bolão em si alterado não será contado. Você envia seu palpite no grupo, aguarde que um ADM atualizará o bolão.</p>
                    </div>
                </div>`,
listar: `                <h1>!li</h1>
                <p class="sig">Listar comandos</p>
                <p>Esse comando vai listar todos os comandos existentes pelo o WhatsApp.</p>
                <p class="aviso">Comando só disponível no privado.</p>
                <p class="aindanao">Comando ainda não disponível.</p>`,
manual: `                <h1>!manu</h1>
                <p class="sig">Apresentar o manual</p>
                <p>Esse comando vai mostrar o link deste site para acesso.</p>
                <p class="aviso">Comando só disponível no privado.</p>
                <p class="aindanao">Comando ainda não disponível.</p>`,
pontuacao: `                <h1>!pt</h1>
                <p class="sig">Pontuação do bolão</p>
                <p>Mostra a pontuação do bolão atual.</p>`,
quantidade: `                <h1>!qtd</h1>
                <p class="sig">Quantidade de palpites</p>
                <p>Mostra a quantidade de palpites do bolão atual.</p>
                <p>Também mostra a quantidade de palpites de um determinado placar:</p>
                <p class="frasebot">!qtd 2:1</p>
                <p class="sticdesc">O bot vai informar a quantidade de palpites do placar informado.</p>
                <p>Nesse modo, o bot também informa a porcentagem da quantidade de palpites para a quantidade total dos palpites.</p>`,
classificacao: `                <h1>!rank</h1>
                <p class="sig">Classificação geral</p>
                <p>Mostra a classificação geral.</p>
                <p>Ele funciona automaticamente após o uso do <span class="cmd">!vit</span>.</p>
                <p>Ele também possui chaves para mexer na classificação:</p>
                <h3>$o (ordem descrescente)</h3>
                <p>Ele envia a classificação geral em ordem decrescente (do menor para o maior).</p>
                <h3>$lim (Limpar classificação)</h3>
                <p>Ele vai resetar todos os membros que estão na classificação.</p>
                <p>É útil numa mudança de ano, onde será outra classificação.</p>
                <h3>$cc (Corrigir)</h3>
                <p>Vai corrigir a pontuação de algum integrante.</p>
                <h4>%+ (acrescentar)</h4>
                <p>Para acrescentar pontos, basta dar !rank $cc %+ e indicar a posição e a quantidade de pontos a ser adicionada.</p>
                <p class="frasebot">!rank $cc %+ 51^4</p>
                <p class="sticdesc">Adiciona +4 pontos ao 51°</p>
                <h4>-% (diminuir)</h4>
                <p>Para diminuir pontos, basta dar !rank $cc -% e indicar a posição e a quantidade de pontos a ser removida.</p>
                <p class="frasebot">!rank $cc -% 37^8</p>
                <p class="sticdesc">Subtrai -8 pontos ao 37°</p>
                <h3>$a (Enviar ao grupo)</h3>
                <p>Serve para mostrar a classificação geral no grupo.</p>
                <h3>$dup (Verificar nome duplo)</h3>
                <p>Verifica se algum mesmo nome já existe na classificação, para evitar que um mesmo membro esteja dividido na classificação.</p>
                <p>A forma de uso é !rank $dup + o nome e sobrenome.</p>
                <p class="frasebot">!rank $dup Jucelino Andrade.</p>
                <h3>$del (deletar membro)</h3>
                <p>Serve para excluir um membro da lista de classificação.</p>
                <p>O formato a ser usado é !rank $del + a posição do membro.</p>
                <p class="frasebot">!rank $del 39</p>
                <p class="sticdesc">O bot vai remover o 39° do ranking</p>
                <h4>%seg (deletar em sequência)</h4>
                <p>Também pode deletar sem sequência, usando %seg. Use %seg + *a sequência, contando o começo + a posição inicial da sequência.</p>
                <p class="frasebot">!rank $del %seg *3 21</p>
                <p class="sticdesc">O bot vai remover 3 em sequência a partir do 21°: o 21°, 22° e 23°</p>
                <p class="aviso">Limite de 3 em sequência.</p>
                <h3>$ban (banir um membro)</h3>
                <p>Serve para banir um membro do palpite. Ao dar <span class="cmd">!vit</span>, o membro banido sequer será adicionado à lista de classificação.</p>
                <p>O formato é !rank $ban + nome e sobrenome.</p>
                <p class="frasebot">!rank $ban Jucelino Andrade</p>
                <p>Para listar os banidos da classificação, use <b>$lisban</b>.</p>
                <p>Para remover o banimento, use <b>$tban</b>.</p>
                <h3>$add (adicionar um membro)</h3>
                <p>Serve para adicionar um membro na classificação, com seu nome e sobrenome e sua quantidade de pontos.</p>
                <p class="frasebot">!rank $add Jucelino Fiel 19</p>
                <p class="sticdesc">O bot adicionará na classificação a sua posição de acordo com o restante: Jucelino Fiel, 19 pontos</p>`,
recordes: `                <h1>!rc</h1>
                <p class="sig">Recordes de palpites</p>
                <p>Captura os 3 bolões que mais tiveram palpites e mostra: qual foi o bolão e a quantidade de palpites.</p>`,
resetar: `                <h1>!res</h1>
                <p class="sig">Resetar</p>
                <p>Apaga todos os palpites.</p>
                <p class="aviso">Não é possível (por enquanto) desfazer.</p>`,
trocar: `                <h1>!t</h1>
                <p class="sig">Trocar palpite</p>
                <p>Troca o palpite de um participante de um placar para outro placar.</p>
                <p>O formato é !t posição; + placar + >> novo placar.</p>
                <p class="frasebot">!t 16;3:1 >> 2:0</p>
                <p class="sticdesc">Muda o placar 16 de 3x1 para 2x0.</p>
                <p>Para trocar um palpite com placar não listado, use o atalho <b>ot</b>.</p>
                <p class="frasebot">!t 5;ot >> 1:0</p>
                <p class="sticdesc">Mudou o placar 05 não listado (desconhecido) para 1x0</p>`,
tops: `                <h1>!top</h1>
                <p class="sig">Tops da classificação</p>
                <p>Mostra o top3 da classificação geral atual.</p>
                <p>Também é possível visualizar o top 5, top 10, top 20... só inserir a quantidade após o comando.</p>
                <p class="frasebot">!top 10</p>
                <p class="sticdesc">Mostra o top 10 da classificação geral.</p>`,
adicionar: `                <h1>!u, !add ou !adicionar</h1>
                <p class="sig">Adiciona um palpite</p>
                <p>Adiciona um palpite ao bolão.</p>
                <p>O formato é !u + placar + nome e sobrenome</p>
                <p class="frasebot">!u 2:1 Jucelino Fiel</p>
                <p class="sticdesc">Adiciona o placar de 2x1 no nome de 'Jucelino Fiel'.</p>
                <h3>$dm (palpite de ADM)</h3>
                <p>O palpite ficará em negrito. <b>$dm</b> deverá vir depois do nome.</p>
                <p class="frasebot">!u 2:1 Jucelino Fiel $dm</p>
                <p class="sticdesc">Adiciona o placar de 2x1 no nome de '<b>Jucelino Fiel</b>'.</p>
                <h3>$j: (adicionar homem-gol)</h3>
                <p>Para adicionar um homem-gol, basta adicionar a chave <b>$j:</b> e indicar o número do jogador no elenco do Flamengo.</p>
                <ul>
                    <li><b>$j:7</b> L. Araújo</li>
                    <li><b>$j:8</b> Saúl</li>
                    <li><b>$j:9</b> Pedro</li>
                    <li><b>$j:10</b> Arrascaeta</li>
                    <li><b>$j:27</b> B. Henrique</li>
                    <li><b>$j:50</b> G. Plata</li>
                </ul>
                <p class="aviso">Vem por último, após $dm (se usar junto).</p>
                <p class="frasebot">!u 2:1 Jucelino Fiel $j:10</p>
                <p class="sticdesc">Resultado: Jucelino Fiel ⚽ Arrascaeta</p>
                <p>Pode usar as duas chaves juntas, a de ADM e a de adicionar jogador, mas a ordem é: primeiro $dm e depois $j:</p>
                <p style="text-align: center;">primeiro vem o<b> $dm</b> e depois o<b> $j:</b></p>`,
adicionarmais: `                <h1>!u+, !add+ ou !adicionar+</h1>
                <p class="sig">Adiciona dois ou mais palpites</p>
                <p>Adiciona dois ou mais palpites ao bolão.</p>
                <p>O formato é !u+ (dar um enter), começa com o nome e sobrenome + placar + (opcional) chaves.</p>
                <div class="frasebot">
                    <div>
                        <p>!u+</p>
                        <p>Sérgio Benéfico 2:1 $dm</p>
                        <p>Jucelino Fiel 3:1 $dm $j:9</p>
                        <p>Marcelo das Almas 2:1 $j:27</p>
                        <p>Dejamim Couto 5:0</p>
                        <p></p>
                    </div>
                </div>
                <p class="sticdesc">Adiciona os 4 placares com suas modulações.</p>
                <p class="aviso">Para saber das chaves <b>$dm</b> e <b>$j:</b>, leia o comando <span class="cmd">!u</span>.</p>`,
ultimo: `                <h1>!ult</h1>
                <p class="sig">Último palpitante</p>
                <p>Mostra o último palpite.</p>`,
ver: `                <h1>!ver</h1>
                <p class="sig">Visualizar bolão</p>
                <p>Mostra o bolão atualizado no privado. Não envia no grupo.</p>
                <p class="aviso">Comando disponível apenas no privado.</p>`,
vitoria: `                <h1>!vit</h1>
                <p class="sig">Mostrar os vencedores do bolão</p>
                <p>Mostra os vencedores do bolão. O formato usado é !vit + o placar.</p>
                <p class="frasebot">!vit 3:1</p>
                <p class="sticdesc">O bot pegará os palpites de 3x1 e informará que são os vencedores. A mensagem é a seguinte:</p>
                <div class="frasebot">
                    <div>
                        <p style="margin-bottom: 8px;">🏆 <b>VENCEDORES DO BOLÃO</b> 🏆</p>

                        <p>(PLACAR DE 3X1)</p>
                        <ul>
                            <li>Teste Sobreteste</li>
                            <li>Fulano Silva</li>
                        </ul>
                        <p>✅ +5 pontos (*pontuação do bolão)</p>
                        <p>Parabéns 🥳🎉</p>
                    </div>
                </div>
                <h3>gol()</h3>
                <p><b>Adiciona vencedores que acertaram o homem-gol (que fez gol).</b></p>
                <p>Para isso, dentro de <b>gol()</b>, utilize a chave de jogador <mark><b>$j:</b></mark> e marque qual foi o jogador.</p>
                <p class="frasebot">!vit 3:0 gol($j:9)</p>
                <p>O bot adicionará automaticamente uma parte que menciona quem acertou o homem-gol (para gol) e adiciona automaticamente +2 pontos.</p>
                <p>No exemplo, todos que chutaram ⚽ Pedro vão aparecer listados.</p>
                <p>Pode adicionar mais de um jogador caso tenham acertado mais de 1 jogador: <mark><b>gol($j:10,9)</b></mark>, ou seja, Arrascaeta e Pedro.</p>
                <h3>as()</h3>
                <p><b>Adiciona vencedores que acertaram o homem-gol (que deu assistência).</b></p>
                <p>Vai funcionar do mesmo jeito que <b>gol()</b>.</p>
                <p class="aviso">Caso não existam palpites de homem-gol com um jogador, simplesmente nenhum palpite será mencionado.</p>
                <p>Se caso sejam os dois, a sequência é primeiro informar o <b>gol()</b> e depois a assistência <b>as()</b>.</p>
                <p>Caso seja:</p>
                <p class="frasebot">!vit 1:0 gol($j:7,9) as($j:16)</p>
                <p>O bot responderá isso:</p>
                <div class="frasebot">
                    <div>
                        <p style="margin-bottom: 8px;">🏆 <b>VENCEDORES DO BOLÃO</b> 🏆</p>

                        <p>(PLACAR DE 1X0)</p>
                        <ul>
                            <li>Nome Um</li>
                            <li>Nome Dois</li>
                        </ul>
                        <p>✅ +3 pontos (*pontuação do bolão)</p>
                        <pre>_____________
⚽ <b>GOL</b> (* pessoas que apostaram em Pedro ou L. Araújo)</pre>
<ul>
    <li>Nome Santos</li>
</ul>

                        <p>✅ +2 pontos</p>
                        <pre>_____________
👟 <b>ASSISTÊNCIA</b> (*pessoas que apostaram em S. Lino)</pre>
<ul>
    <li>Nome Silva</li>
</ul>

                        <p>✅ +1 ponto</p>
                        <p>Parabéns 🥳🎉</p>
                    </div>
                </div>
                <p class="aviso">Ao dar <span class="cmd">!vit</span>, automaticamente a pontuação dos que aparecerem já será salva no arquivo interno do bot para que, ao dar <span class="cmd">!rank</span>, a classificação já estar atualizada.</p>`,
fechar: `                <h1>!x</h1>
                <p class="sig">Fechar o bolão</p>
                <p>Serve para fechar o bolão antes da hora do fechamento.</p>
                <p>Ao dar <span class="cmd">!x</span>, ele enviará o bolão atualizado + 1 figurinha:</p>
                <div class="sticdiv">
                    <img src="img/figurinhas/bolao-fechado.webp" alt="" class="stic">
                </div>
                <p>Mas, ele pode ser útil para mais opções:</p>
                <h3>r (Reabrir bolão)</h3>
                <p>Caso o bolão tenha sido fechado mas por algum motivo o horário do jogo foi adiado, dá-se <b>!x r</b></p>
                <p class="frasebot">!x r</p>
                <p class="sticdesc">O bolão será reaberto, avisando no grupo.</p>
                <p class="aviso">Se o bolão estiver aberto, ele não funciona.</p>
                <h3>$ad (Adiar fechamento)</h3>
                <p>Para adiar o fechamento do bolão, basta usar a chave <b>$ad</b> + o valor dos minutos.</p>
                <p class="frasebot">!x $ad30</p>
                <p class="sticdesc">O horário do fechamento do bolão terá +30 minutos</p>
                <h3>nr (Reverter adiamento)</h3>
                <p>Para reverter um adiamento, use <b>nr</b>.</p>
                <p class="frasebot">!x nr</p>
                <p class="sticdesc">O bolão voltará ao seu horário de fechamento antigo.</p>
                <p class="aindanao">RELEMBRANDO QUE O BOLÃO FECHA AUTOMATICAMENTE COM O HORÁRIO INFORMADO NO !enc. ESTE COMANDO SERVE PARA FECHAR ANTES, SE NECESSÁRIO. POR FAVOR, NÃO USAR NO HORÁRIO DO FECHAMENTO INFORMADO NO BOLÃO.</p>`,
desfazer: `                <h1>!dfz</h1>
                <p class="sig">Desfazer</p>
                <p>Ele desfaz a última ação do bot. Não funciona para o comando <span class="cmd">!res</span></p>
                <p class="aindanao">Comando ainda não lançado.</p>`,
};

const content = document.getElementById('content');

// Percorre todas as chaves do objeto comandos
for (let id in comandos) {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.addEventListener('click', () => {
      // Atualiza o conteúdo da div
      content.innerHTML = comandos[id];
    });
  }
}