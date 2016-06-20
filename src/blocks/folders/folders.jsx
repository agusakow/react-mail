import React from 'react';
import Folder from '../folder/folder.jsx';
import { Link } from 'react-router';

export default class Folders extends React.Component {
    initHeight() {
        var getChildCount = (folders) => {
            if (!folders) {
                return 0;
            }
            var count = folders.length;
            for (let folder of folders) {
                if (folder.expanded) {
                    count += getChildCount(folder.subfolders);
                }
            }
            return count;
        }
        var folders = this.refs.folders;
        var childCount = getChildCount(this.props.folders);
        folders.style.height = `${childCount * 30}px`;
    }

    componentDidMount() {
        this.initHeight();
    }

    componentDidUpdate() {
        this.initHeight();
    }

    render() {
        var folders;
        var level = this.props.level;
        var className = `folders folders_${level ? 'child' : 'root'}`;
        if (this.props.folders) {
            folders = this.props.folders.map(folder => (
                <Folder folder={folder} level={this.props.level}/>
            ));
        }
        if (typeof level == 'number') {
            className += ` folders_level-${this.props.level}`;
        }
        if (level && !this.props.expanded) {
            className += ' folders_collapsed';
        }

        return (
            <ul className={className} ref="folders">
                {folders}
            </ul>
        );
    }
};
