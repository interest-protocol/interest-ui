import { A, Div, Span } from '@stylin.js/elements';
import React, { FC, isValidElement } from 'react';
import { v4 } from 'uuid';

import { TableHeaderProps } from './table.types';
import NotFound from './not-found';

const TableBodyContent: FC<TableHeaderProps> = ({
  rows,
  title,
  gridTemplateColumns,
}) =>
  rows.length ? (
    rows.map(({ cells, link, target }) => (
      <A
        href={link || '#'}
        target={link && target}
        key={v4()}
        color="unset"
        textDecoration="none"
      >
        <Div
          display="grid"
          borderStyle="solid"
          borderColor=" #1F2937"
          nHover={{
            bg: '#9CA3AF1A',
          }}
          cursor="pointer"
          borderWidth=" 1px 0px 0px 0px"
          transition="all 150ms ease-in-out"
          minWidth={['1000px', '1000px', '400px', 'unset']}
          gridTemplateColumns={
            gridTemplateColumns || `repeat(${title.length},1fr)`
          }
        >
          {cells.map(({ Suffix, Prefix, Title, Content, color, position }) => (
            <Div p="0.75rem" display="flex" key={v4()} width="100%">
              <Div
                display="flex"
                alignItems="center"
                gap="0.5rem"
                width="100%"
                color={color || '#fff'}
              >
                {isValidElement(Content) ? (
                  Content
                ) : (
                  <>
                    {Prefix}
                    {isValidElement(Title) ? (
                      Title
                    ) : (
                      <Span
                        color={color || '#fff'}
                        width={position ? '100%' : 'unset'}
                        display="block"
                        fontWeight="500"
                        fontFamily="Satoshi"
                        fontSize="0.875rem"
                        lineHeight="1.12rem"
                        textAlign={position || 'left'}
                      >
                        {Title}
                      </Span>
                    )}
                    {Suffix}
                  </>
                )}
              </Div>
            </Div>
          ))}
        </Div>
      </A>
    ))
  ) : (
    <Div display="grid" gridTemplateColumns="1fr">
      <NotFound />
    </Div>
  );

export default TableBodyContent;
