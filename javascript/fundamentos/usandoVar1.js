{
    {
        {
            {
                {
                    var sera = "sera?"; //Var acessa de qualquer lugar
                }
            }
        }
    }
}

console.log(sera);

{
    {
        {
            {
                {
                    let sera2 = "sera2?"; //Let so pode ser acessado pelo proprio escopo
                    console.log(sera2);
                }
            }
        }
    }
}

