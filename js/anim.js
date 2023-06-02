document.addEventListener('DOMContentLoaded', () => {
	new TypeIt(".animated",{
		speed: 200,
		loop: true,
	})
	.type('Designer Gráfico!', {delay: 900})
	.delete(17)
	.type('Coder ;)', {delay: 500}).pause(1000)

	.go();
})