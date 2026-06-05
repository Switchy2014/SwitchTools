class SwitchTools {

    constructor() {

    }

    getInfo() {
        return {
            id: 'switchtools',
            name: 'SwitchTools',
            color1: '#4C97FF',
            color2: '#3373CC',
            blocks: [
                {
                    blockType: Scratch.BlockType.LABEL,
                    text: 'Random Stuff'
                },
                {
                    opcode: 'wave',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'wave to [TARGET]',
                    arguments: {
                        TARGET: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Switchy2014'
                        }
                    }
                },
                {
                    blockType: Scratch.BlockType.LABEL,
                    text: 'Text Utilities'
                },
                {
                    opcode: 'lowercase',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[TEXT] to lowercase',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'BAR'
                        }
                    }
                },
                {
                    opcode: 'uppercase',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[TEXT] to uppercase',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'foo'
                        }
                    }
                },
                {
                    opcode: 'reverse',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'reverse [TEXT]',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'foobar'
                        }
                    }
                },
                {
                    blockType: Scratch.BlockType.LABEL,
                    text: 'VM utilities'
                },
                {
                    opcode: 'spritecount',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Sprite Count'
                },
                {
                    opcode: 'clonecount',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Clone Count'
                },
                {
                    opcode: 'costumecount',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Costume Count'
                },
                {
                    opcode: 'bgcount',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Backdrops Count'
                }
            ]
        };
    }


    wave(args) {
        return `Hi to ${args.TARGET}!`;
    }

    lowercase(args) {
        return String(args.TEXT).toLowerCase();
    }

    uppercase(args) {
        return String(args.TEXT).toUpperCase();
    }

    reverse(args) {
        return String(args.TEXT).split('').reverse().join('');
    }
    spritecount(args, util) {
        const runtime = util.runtime;
        const targets = runtime?.targets || [];

        return targets.filter(t =>
            t && t.sprite && t.isOriginal && !t.isStage
        ).length;
}
    clonecount(args, util) {
        const runtime = util.runtime;
        const targets = runtime?.targets || [];
        return targets.filter(t =>
            t && t.sprite && !t.isOriginal && !t.isStage
        ).length;
    }
    costumecount(args, util) {
        const targets = util.runtime?.targets || [];

        let count = 0;

        for (const t of targets) {
            if (!t || t.isStage) continue;

            count += t?.sprite?.costumes?.length || 0;
        }

        return count;
    }
    bgcount(args, util) {
        const stage = util.runtime?.getTargetForStage();

        if (!stage?.sprite?.costumes) return 0;

        return stage.sprite.costumes.length;
    }
}

Scratch.extensions.register(new SwitchTools());