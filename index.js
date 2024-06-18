class Animal {
    constructor(name,type) {
        this.name = name;
        this.type= type;
    }
    #getDetail(){
      switch( this.type) {
        case 'reptile':
            {
               return 'they crawl.';
               break;  
            }
        case 'Vertebrate':
            { return 'They have a backbone.'; 
          break;}
          case 'bird':
             {
                return 'they can fly.';
            break;
             } 
          case 'mammal':
            {return 'Some of them are wild and some are domesticated.';
            break;
            }
        default:
          // code block
      }
    }
    introduce() {
      console.log(`${this.name} is a ${this.type}. ${this.#getDetail()}`);
    }
  }


  class Rabbit extends Animal {
    constructor(name, type, earLength) {
        super(name,type);
        this.earLength = earLength; 
      }

     get getEarLength(){
        return this.earLength;
      }
      set setEarLength(earLength) {
        this.earLength = earLength;
    }
  }
  
  let rabbit = new Rabbit("white-rabbit", 'mammal', '1.2 inch');
  rabbit.introduce();
  console.log(`its ear size is ${rabbit.earLength}`);
 

  
  class Dog extends Animal {
    constructor(name, type, breed) {
        super(name,type);
        this.breed = breed; 
      }

     get getBreed(){
        return this.breed;
      }
      set setBreed(breed) {
        this.breed = breed;
    }
  }
  
  let dog = new Dog("Jessi", 'Vertebrate', 'Golden-retriver');
  dog.introduce();
  console.log(`its breed is ${dog.getBreed}`);
 
