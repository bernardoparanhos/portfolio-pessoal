document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    // Seleciona os botões do currículo
    const curriculoMainButton = document.getElementById('curriculoMainButton');
    const curriculoSidebarButton = document.getElementById('curriculoSidebarButton');

    // URL do seu currículo (substitua pela sua URL real)
    const resumeURL = "caminho-da-pasta/Bernardo.CV2025.pdf"; 

    // Funcionalidade para abrir/fechar a sidebar
    if (menuToggle && sidebar) { // Adicionado verificação para garantir que os elementos existem
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            menuToggle.classList.toggle('open'); 
        });

        // Opcional: Fechar o menu ao clicar fora dele
        document.addEventListener('click', (event) => {
            if (!menuToggle.contains(event.target) && !sidebar.contains(event.target)) {
                if (sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                    menuToggle.classList.remove('open');
                }
            }
        });
    }

    // Funcionalidade para fechar a sidebar quando um botão dela é clicado
    const sidebarButtons = document.querySelectorAll('.sidebar-button');
    sidebarButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Verifica se o botão clicado não é o de projetos (que já tem um redirecionamento)
            // Ou se ele não tem um 'href' definido (como o botão "Sobre mim" que rola a página)
            if (!button.onclick && button.id !== 'curriculoSidebarButton') { // Adiciona condição para o botão do currículo
                sidebar.classList.remove('open');
                menuToggle.classList.remove('open');
            }
        });
    });

    // Funcionalidade para abrir o currículo (botão principal)
    if (curriculoMainButton) {
        curriculoMainButton.addEventListener('click', () => {
            window.open(resumeURL, '_blank'); // Abre em uma nova aba
        });
    }

    // Funcionalidade para abrir o currículo (botão da sidebar)
    if (curriculoSidebarButton) {
        curriculoSidebarButton.addEventListener('click', () => {
            window.open(resumeURL, '_blank'); // Abre em uma nova aba
            // Fecha a sidebar após clicar no botão do currículo
            sidebar.classList.remove('open');
            menuToggle.classList.remove('open');
        });
    }
});