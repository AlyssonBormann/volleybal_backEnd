import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class PrimeriaMigration1595465940498 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns:[
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'name',
              type: 'varchar',

            },
            {
              name: 'email',
              type:'varchar',
              isUnique: true,
            },
            {
              name: 'password',
              type: 'varchar',
            },
            {
              name:'avatar',
              type:'varchar',
              isNullable: true,
            },
            {
              name:'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'deleted_at',
              type: 'timestamp',
              default:'now()',
            },
            {
              name: 'is_deleted',
              type: 'BOOLEAN',
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
    }

}
