// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { NestFactory } from '@nestjs/core';
import { findAvailablePort } from '@subql/common';
import { AppModule } from './app.module';
import { IndexerSolanaManager } from './indexer/indexer.manager';
import { getLogger, NestLogger } from './utils/logger';
import { argv } from './yargs';

const DEFAULT_PORT = 3000;
const logger = getLogger('subql-node-solana');

async function bootstrap() {
  const debug = argv('debug');

  const validate = (x: any) => {
    const p = parseInt(x);
    return isNaN(p) ? null : p;
  };

  const port =
    validate(argv('port')) ?? (await findAvailablePort(DEFAULT_PORT));
  if (!port) {
    logger.error(
      `Unable to find available port (tried ports in range (${port}..${
        port + 10
      })). Try setting a free port manually by setting the --port flag`,
    );
    process.exit(1);
  }

  if (argv('unsafe')) {
    logger.warn(
      'UNSAFE MODE IS ENABLED. This is not recommended for most projects and will not be supported by our hosted service',
    );
  }

  try {
    const app = await NestFactory.create(AppModule, {
      logger: debug ? new NestLogger() : false,
    });
    await app.init();

    const indexerManager = app.get(IndexerSolanaManager);
    await indexerManager.start();
    await app.listen(port);

    logger.info(`node started on port: ${port}`);
  } catch (e) {
    logger.error(e, 'node failed to start');
    process.exit(1);
  }
}

void bootstrap();
