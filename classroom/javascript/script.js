class Kendani {
        constructor (anun){
            this.anun = anun
        }
        
        
    }


    class Dzi extends Kendani {
            constructor (anun ,tariq , cexatesak ){
                super(anun)
                this.tariq = tariq
                this.cexatesak = cexatesak
            }

            tpel(){
                console.log(`${this.anun}y kendanu anun e um tariqy ${this.tariq} e isk cexatesaky ${this.cexatesak} `)
            }

    }


    const pony = new Dzi(`bucefal`,3,`pony`)

    pony.tpel()