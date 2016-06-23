(function(env) {
        "use strict";
        env.ddg_spice_rand_word_data = function(api_result) {
            if(!api_result || api_result.length === 0) {
                return Spice.failed('rand_word');
            }
            var first = api_result[0];
            // dividing the whole array into an array of 4 elements each
            var list_of_list = [];
            while(api_result.length > 0) {
                list_of_list.push(api_result.splice(0, 4));
            }
            var spiceObj = {
                id: "rand_word",
                data: {
                    title: 'Random Words',
                    list: list_of_list
                },
                name: "Answer",
                meta: {
                    sourceUrl: 'https://wordnik.com/randoml',
                    sourceName: 'Wordnik',
                    sourceIcon: true
                },
                templates: {
                    group: 'list',
                    options: {
                        list_content: Spice.rand_word_data.content,
                        moreAt: true
                    }
                }
            };
            if(list_of_list[0].length == 1) {
             
                $.getScript("/js/spice/rand_word/fetch_id/" + first.word);
                
            }
            console.log("goodbye")
             Spice.add(spiceObj);
        };
 env.ddg_spice_rand_word_fetch_id = function(api_result) {
    console.log("hello")
        if(!api_result || api_result.length === 0) {
            return Spice.failed('rand_word');
        }
        var first = api_result[0];
        console.log("hello");
        var spiceObj = {
            id: "rand_word",
            data: {
                title: "Random Word",
                word: first.word,
                definition: first.text
            },
            name: "Answer",
            meta: {
                sourceUrl: 'https://wordnik.com/randoml',
                sourceName: 'Wordnik',
                sourceIcon: true
            },
            templates: {
                group: 'text',
                options: {
                    content: Spice.rand_word.single_word,
                    moreAt: true
                }
            }
        };
     console.log("hello");
        Spice.add(spiceObj);
    }
}(this));