import React from 'react';
import { TopPageComponentProps } from './top-page-component.props';
import styles from './top-page-component.module.css';
import { Heading, HhData, Tag } from '../../components';
import { TopLevelCategory } from '../../interfaces/page.interface';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps):JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Heading tag='h1'>{page.title}</Heading>
        {products && <Tag color='grey' size='m'>{products.length}</Tag>}
        <span>Сортировка</span>
      </div>
      <div className={styles.products}>
        {products && products.map(p => (
          <div key={p._id}>
            {p.title}
          </div>
        ))}
      </div>
      <div className={styles.hhTitle}>
        <Heading tag='h2'>Вакансии - {page.category}</Heading>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
    </div>
  );
};
