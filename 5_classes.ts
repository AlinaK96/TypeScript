class TypeScript {
    vertion: string
    constructor(vertion: string){
        this.vertion = vertion;
    }

    info(name: string){
        return `[${name}]: TS vertion is ${this.vertion}`
    }
}

class Car {
    readonly model :string ;
    readonly numberOfWeels: number = 4;
    // private engine: Engine | null=null;
    // engineType  : EngineTypeEnum | undefined;

    constructor (theModel :string){
        this.model = theModel
    }
}

//  модификаторы
// protected / public / private модификаторы 

class animal {
    protected voice: string = '' //доступны для всех классов, которые наследуются
    public color: string = 'red'  // доступны для всех инстенсов
    private go(){               //доступны только в классе, в котором определены 
        console.log('Go!');
    }
}

class Cat extends animal {
    public setVoice (voice: string): void{
        this.voice = voice
    }
}

const cat = new Cat()
cat.color = 'green'
cat.setVoice('Mey')


// абстрактные классы
// нужно для того, чтобы от них наследоваться

abstract class Component {
    abstract render():void
    abstract info(): string
}

class AppComponent extends Component {
    render() {
        console.log('Rendering');
    }

    info () {
        return "App component"
    }
}