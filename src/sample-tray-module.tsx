import { declareModule, makeTraySimpleModule, React } from '@collboard/modules-sdk';
import { contributors, description, license, name, repository, version } from '../package.json';

import img20220101_155315 from '../assets/20220101_155315.jpg';
import img20220105_130407 from '../assets/20220105_130407.jpg';
import img20220207_141122 from '../assets/20220207_141122.jpg';
import img20220208_145707 from '../assets/20220208_145707.jpg';
import img20220215_145915 from '../assets/20220215_145915.jpg';
import img20220215_160201 from '../assets/20220215_160201.jpg';
import img20220219_155700 from '../assets/20220219_155700.jpg';
import img20220223_164612 from '../assets/20220223_164612.jpg';
import img20220319_160701 from '../assets/20220319_160701.jpg';
import img20220319_164131 from '../assets/20220319_164131.jpg';
import img20220319_174200 from '../assets/20220319_174200.jpg';
import img20220319_174757 from '../assets/20220319_174757.jpg';
import img20220322_154653 from '../assets/20220322_154653.jpg';
import img20220322_163319 from '../assets/20220322_163319.jpg';
import img20220326_142552 from '../assets/20220326_142552.jpg';
import img20220327_122308 from '../assets/20220327_122308.jpg';
import img20220328_152716 from '../assets/20220328_152716.jpg';
import img20220328_194840 from '../assets/20220328_194840.jpg';

declareModule(
    makeTraySimpleModule({
        manifest: {
            name,
            version,
            description,
            contributors,
            license,
            repository,
        },

        icon: {
            order: 60,
            icon: img20220101_155315,
        },
        trayDefinition: [
            {
                // TODO: !!! Mix internal and external assets + NON-image assets
                title: 'Czechia',
                icon: img20220101_155315,
                groups: [
                    {
                        title: <>Images with</>,
                        items: [
                            { imageSrc: img20220101_155315 },
                            { imageSrc: img20220208_145707 },
                            { imageSrc: img20220219_155700 },
                            { imageSrc: img20220319_164131 },
                            { imageSrc: img20220322_154653 },
                            { imageSrc: img20220327_122308 },
                            { imageSrc: img20220105_130407 },
                            { imageSrc: img20220215_145915 },
                            { imageSrc: img20220223_164612 },
                            { imageSrc: img20220319_174200 },
                            { imageSrc: img20220322_163319 },
                            { imageSrc: img20220328_152716 },
                            { imageSrc: img20220207_141122 },
                            { imageSrc: img20220215_160201 },
                            { imageSrc: img20220319_160701 },
                            { imageSrc: img20220319_174757 },
                            { imageSrc: img20220326_142552 },
                            { imageSrc: img20220328_194840 },
                        ],
                    },

                    /*
                    !!! Remove
                    {
                        title: 'Kraje 2',
                        items: [
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                        ],
                    },
                    {
                        title: 'Kraje 3',
                        items: [
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                        ],
                    },
                    */
                ],
            },

            /*
            !!! Delete and make new group
            {
                title: 'Slovakia',
                icon: 'https://collboard.fra1.cdn.digitaloceanspaces.com/assets/18.42.0/languages/sk.svg',
                groups: [
                    {
                        title: 'Kraje',
                        items: [
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                        ],
                    },
                    {
                        title: 'Kraje 2',
                        items: [
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                        ],
                    },
                ],
            },*/
        ],
    }),
);
