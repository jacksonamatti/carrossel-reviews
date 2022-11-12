const reviews = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRygVsf_UXNN5fqNEWbC2pgooA_r28mchvMzVdBkICuhDQ3_UnMsUvcOSEVMZOTANeTqXU&usqp=CAU",
    name: "Jhon black",
    cargo: "web developer",
    depoimento:
      "Suspendisse potenti. Sed commodo, dolor nec consequat finibus, nunc metus hendrerit libero, ut fringilla eros purus quis massa. Vivamus sodales congue dolor ut bibendum. Nam et pulvinar felis. Aliquam a elementum turpis. Aliquam pellentesque finibus sem a porta. In consectetur condimentum pharetra",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJ83DK_RTZsTrPsq_BtRT2-Hiju7FwYchFA&usqp=CAU",
    name: "Vicent Salvatore",
    cargo: "SEO",
    depoimento:
      "Nunc quis lobortis dolor. Aliquam erat volutpat. Aenean commodo neque eu tristique vulputate. Mauris sit amet est interdum, sollicitudin nisi dapibus, elementum sapien. Pellentesque vel magna consectetur, rutrum eros egestas, porttitor libero. In lobortis vitae sem eu lacinia. Nam finibus gravida dapibus. In volutpat nisl nisi, ut scelerisque velit accumsan vitae. Sed ut varius nisi.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUs73Mz3FqhV8uy2F5TGw_jGvFdzGirConJA&usqp=CAU",
    name: "João Erisman",
    cargo: "UI developer",
    depoimento:
      "Donec venenatis euismod faucibus. Praesent facilisis convallis orci ac dictum. Mauris massa enim, efficitur varius cursus porttitor, convallis vel magna. Cras et urna a magna convallis euismod et a risus. Maecenas placerat ipsum eget dui bibendum condimentum. Morbi placerat libero id sem luctus volutpat. Quisque ac erat lectus. Nam tincidunt felis vel venenatis hendrerit. Vivamus eget lectus leo. Nullam placerat ex nec ex bibendum malesuada",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?b=1&s=170667a&w=0&k=20&c=TXCiY7rYEvIBd6ibj2bE-VbJu0rRGy3MlHwxt2LHt9w=",
    name: "Will Potter",
    cargo: "back end developer",
    depoimento:
      "Nulla elementum eros sed lacus tempus, nec euismod sapien consectetur. Morbi nec feugiat velit, in feugiat lectus. Sed pretium tincidunt est, non venenatis tellus scelerisque a. Nam lobortis erat lobortis ex convallis, id tempor massa tincidunt. Praesent facilisis accumsan malesuada. Nam mi felis, volutpat quis augue non, eleifend finibus ipsum. Donec ornare dui eget lectus pretium congue.",
  },
];

//instancia todos os elementos q serao usados
const nome = document.querySelector(".nome");
const cargo = document.querySelector(".cargo");
const depoimento = document.querySelector(".depoimento");
const profile = document.getElementById("profile");

const buttonE = document.getElementById("buttonE");
const buttonD = document.getElementById("buttonD");

//seta uma variavel inicial

let inicial = 0;

//carregamento do item inicial

window.addEventListener("DOMContentLoaded", function () {
  mostraPessoa(inicial);
});

//mostrar pessoa bvaseada em item

function mostraPessoa(pessoa) {
  const item = reviews[pessoa];
  profile.src = item.img;
  nome.textContent = item.name;
  cargo.textContent = item.cargo;
  depoimento.textContent = item.depoimento;
}

buttonE.addEventListener("click", function () {
  inicial++;
  if (inicial > reviews.length - 1) {
    inicial = 0;
  }
  mostraPessoa(inicial);
});

buttonD.addEventListener("click", function () {
  inicial--;
  if (inicial < 0) {
    inicial = reviews.length - 1;
  }
  mostraPessoa(inicial);
});
