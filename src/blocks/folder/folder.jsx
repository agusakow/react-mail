import React from 'react';
import Link from '../link/link.jsx';
import Folders from '../folders/folders.jsx';
import foldersActions from '../../actions/foldersActions';

export default class Folder extends React.Component {
    constructor() {
        super();
        this.onArrowClick = this.onArrowClick.bind(this);
    }

    onArrowClick() {
        foldersActions.toggleExpanded(this.props.folder.id);
    }

    render() {
        var folder = this.props.folder;
        var className = 'folder';
        var subfolders;
        var arrow;
        var unreaded;
        if (folder.selected) {
            className += ' folder_selected';
        }
        if (folder.expanded) {
            className += ' folder_expanded';
        }
        if (folder.subfolders && folder.subfolders.length) {
            className += ' folder_root';
            subfolders = (
                <Folders folders={folder.subfolders}
                    level={this.props.level + 1}
                    expanded={folder.expanded}/>
            );
            arrow = (
                <span className="folder__arrow-wrapper" onClick={this.onArrowClick}>
                    <span className="folder__arrow" />
                </span>
            );
        }
        if (folder.unreadedCount > 0) {
            unreaded = (
                <span className="folder__unreaded">
                    {folder.unreadedCount}
                </span>
            )
        }
        return (
            <li key={folder.id} className={className}>
                <Link to={`/mail/${folder.id}`}>
                    <span className="folder__title">
                        {folder.title}
                    </span>
                    {unreaded}
                </Link>
                {arrow}
                {subfolders}
            </li>
        );
    }
};
