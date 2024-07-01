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
- uitlizado Postgres com TypeORM, ao invés de dados em memória

Decisões e trade-offs:

Com mais tempo, delimitaria mais claramente cerne e infraestrutura na minha aplicação. Pude vivenciar situações em escala que pequenos ajustes na implementação resolveram instabilidades com milhares de usuários. Delimitações precisas de infraestrutura foram cruciais para corrigir problemas rapidamente com times enxutos.
Ao lançar produto para amplo público de eSports, resolvemos instabilidades por meio de análise rápida. Refatoramos para desempenho ao eliminar ORMs e queryBuilders em pontos-chave. Na semana seguinte, adotamos abordagem assíncrona, redefinindo gatilhos de execução e otimizamos o processamento de dados em massa.
Delimitar núcleo e infraestrutura é conceitual e pontual, crucial em grandes aplicações. Em contextos menores, como uma aplicação de backoffice, é dispensável mas também pode se beneficiar de conceitos pontuais de arquiteturas mais desacopladas.

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
