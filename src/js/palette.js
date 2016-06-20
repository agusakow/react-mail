import utils from './utils';

export default function() {
    return colors[utils.random(0, colors.length -1)];
};

var colors = [
    '#7c034c',
    '#9241be',
    '#73888c',
    '#b98546',
    '#ca5087',
    '#46b9aa',
    '#3d79c2',
    '#1ad5b3',
    '#4f57a1',
    '#6fc58c',
    '#d65959',
    '#507caf',
    '#eaba29',
    '#CC3333',
    '#95CAE4',
    '#A3E496',
    '#008AB8',
    '#993333',
];
