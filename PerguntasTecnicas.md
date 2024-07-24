## Matheus de Souza Costa

Aplicação disponível em: https://weather-matheusdev.koyeb.app/monitor

Consulta via cURL:
```curl
curl "http://weather-env.eba-23jhqb3g.us-east-1.elasticbeanstalk.com/monitor?city=Sao%20Paulo&startDate=01-06-2024&endDate=01-08-2024"

```

# Perguntas Técnicas

1. Quanto tempo você usou para completar a solução apresentada? O que você faria se tivesse mais tempo?

Em torno de 6 horas.

Com mais tempo, eu teria:
- utilizado uma instância AWS Ec2 gerenciada pelo Elastic Beanstalk para disponibilizar a aplicação
- uitlizado Postgres com TypeORM, ao invés de dados em memória

Decisões e trade-offs:

Por problemas de tempo, optei por utilizar algo mais simples para disponibilizar a aplicação, um container executando no Koyeb, um serviço semelhante ao AWS Elastic Beanstalk, mas gratuito e com menos configurações. Como a AWS está migrando suas máquinas virtuais para AWS Linux 2023, seria uma barreira de entrada em relação ao que já atuei com AWS, por esse motivo a decisão de usar o Koyeb.

Com mais tempo, delimitaria mais claramente cerne e infraestrutura na minha aplicação. Pude vivenciar situações em escala que pequenos ajustes na implementação resolveram instabilidades com milhares de usuários. Delimitações precisas de infraestrutura foram cruciais para corrigir problemas rapidamente com times enxutos.
Ao lançar produto para amplo público de eSports, resolvemos instabilidades por meio de análise rápida. Refatoramos para desempenho ao eliminar ORMs e queryBuilders em pontos-chave. Na semana seguinte, adotamos abordagem assíncrona, redefinindo gatilhos de execução e otimizamos o processamento de dados em massa.
Delimitar núcleo e infraestrutura é conceitual e pontual, crucial em grandes aplicações. Em contextos menores, como uma aplicação de backoffice, é dispensável mas também pode se beneficiar de conceitos pontuais de arquiteturas mais desacopladas.


O exemplo a seguir me entregaria mais clareza e facilidade de manutenção, me entregaria abstrações e separações mais claras, facilitando trabalho de times e crescimento modular.

Essa versão foi pensada utilizando apenas conceitos mais diretos da Arquitetura Limpa:
```

- src
 - modules
  - temperatures

	Aqui teremos tudo que acomete nosso modulo de temperatura. 
	
	O que é definição de negócio (interfaces de repositórios), vem na raiz.
	Regras de negócio e casos de uso devem ser organizados em useCases.
	Objetos de transferência devem ser dispostos em dtos, tanto para inputs quanto responses.


	 - temperatures.repository
	 - useCases
          - monitorServices
	  - extractServices
	 - dtos
	
	O que vemos como mais volátil e externo, fica em infra. 
	Na raiz, implementações de entrada direta: HTTP, AMQP.
	Em implementations, entradas via implementação de definição de negócio: repositórios, entidades.
	
	 - infra
	  - http
	   - controllers
	   - validators
	  - implementations
	   - orm
	     - entity
		 - repository
		
 - shared

  Nossos providers são responsáveis por soluções externas utilizadas 
  pela aplicação. No nosso caso, teremos um provedor de previsão do tempo.
  Em cada provider, devemos definir o como nossa aplicação se comunica com
  soluções externas e devemos implementar a solução de acordo com a definição.

  implementation.OpenWeather irá implementar forecast.repository, e dessa forma,
  quando nossos casos de uso buscarem pelo provider, verão apenas a definição,
  enquanto uma instância da solução implementada é utilizada em tempo de execução.

  - providers
   - forecastProvider
	- forecast.repository
	- dtos
	- implementations
	 - OpenWeather
 - utils

```

Estrutura de pastas representando o exemplo anterior:

```
src/
├── modules/
│   └── temperatures/
│       ├── temperatures.repository.ts
│       ├── useCases/
│       │   ├── monitorServices.ts
│       │   └── extractServices.ts
│       ├── dtos/
│       ├── infra/
│       │   ├── http/
│       │   │   ├── controllers/
│       │   │   ├── validators/
│       │   └── implementations/
│       │       └── orm/
│       │           ├── entity/
│       │           └── repository/
├── shared/
│   └── providers/
│       ├── forecastProvider/
│       │   ├── forecast.repository.ts
│       │   ├── dtos/
│       │   └── implementations/
│       │       └── OpenWeather.ts
│       └── 
└── utils/

```
#

2. Se usou algum framework, qual foi o motivo de ter usado este? Caso contrário, por que não utilizou nenhum?

Usei o NestJS por ser um requisito do desafio. Dou preferência pela não utilização de frameworks no Backend, para reduzir volatilidade e barreira de entrada de novos membros no time. Cada framework vem com uma quantidade gigantesca de nuances, após dois anos sem usar Nest em nada, foi bastante trabalhoso lidar com os detalhes, como organização de modulos, abordagem de injeção de dependência gerenciada pelo framework, entre outros detalhes que seriam evitados se eu tivesse escolhido o caminho de usar apenas Typescript rodando na engine do Node. Por outro lado, me beneficiei de um sistema de testes extremamente bem documentado, dos validadores do NestJS (usando Pipes, por exemplo) e da grande quantidade de conteúdo que está disponível na internet, por ter uma grande comunidade.

Concluindo, frameworks trazem facilidades para dar os primeiros passos de um projeto, mas pode ser uma barreira de entrada quase tão grande quanto utilizar uma linguagem que um membro do time não conheça.

#

3. Descreva você mesmo utilizando json.
```json
{
	"nome": "Matheus Costa",
	"anos_de_experiencia": 4,
	"anos_de_tecnologia": 7,
	"tecnologias": ["Node.js", "GoLang"],
	"experiencias": {
		"controle_de_versao": ["Git"],
		"nuvem": {
			"AWS": ["EC2", "Elastic Beanstalk", "S3", "SES"],
		},
		"bancos_de_dados": ["Postgres", "MySQL", "MongoDB"]
	},
	"soft_skills": ["Trabalho em equipe", "Resolução de Problemas", "Adaptabilidade"]
}
```
