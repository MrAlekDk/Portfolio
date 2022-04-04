<script>
    import { navbar } from "../../../store/globalStore"
    let navComponents =[];
    navbar.subscribe(elements =>{
        navComponents = elements.navbarComponents;
    });
    </script>
    
    <nav>
        {#each navComponents as element}
        <a href={"/"+element.toLowerCase()}>{element}</a>
        {/each}
    </nav>
    
    <style>
        
        nav{
            border: solid black 1px;
            background-color: rgba(60, 58, 68, 0.747);
            height: 5%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 100%;
        }
        a{
            color: white;
            text-shadow: 1px 1px #141313;
            align-self: center;
            font-size: 25px;;
        }
    </style>