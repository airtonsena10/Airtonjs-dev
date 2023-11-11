'use client'
import React from 'react'
import Image from 'next/image'
import styles from '@/styles/modules/Portfolio.module.scss'
import Link from 'next/link'
import { FiLink as LinkIcon } from 'react-icons/fi'
import { UrlObject } from 'url'
import classNames from 'classnames'

type Props = {
  imageUrl: string
  title: string
  href: string | UrlObject
}

export default function Portfolio({ imageUrl, title, href }: Props) {
  return (
    <div className={classNames(styles.portfolio, 'bg-white dark:bg-gray-700')}>
      <Image
        src={imageUrl}
        height={384}
        width={512}
        layout="responsive"
        alt={title}
      />
      <div className={styles['portfolio-overlay']}>
        <Link href={href} className={styles['portfolio-title']}>
          {title}
        </Link>
        <Link href={href} className={styles['portfolio-link']}>
          <LinkIcon className="h-5 text-white" />
        </Link>
      </div>
    </div>
  )
}
