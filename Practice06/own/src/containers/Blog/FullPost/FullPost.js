import React, { Component } from 'react'
import classes from './FullPost.module.css'

export default class FullPost extends Component {
	render() {
		const { title, author, content } = this.props
		return (
			<div className={classes.wrapper}>
				<div className={classes.info}>
					<h1 className={classes.title}>{title}</h1>
					<span className={classes.author}>{author}</span>
				</div>
				<p className={classes.content}>{content}</p>
			</div>
		)
	}
}
