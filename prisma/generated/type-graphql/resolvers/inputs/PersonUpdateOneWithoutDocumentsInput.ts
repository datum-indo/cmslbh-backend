import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutDocumentsInput } from "../inputs/PersonCreateOrConnectWithoutDocumentsInput";
import { PersonCreateWithoutDocumentsInput } from "../inputs/PersonCreateWithoutDocumentsInput";
import { PersonUpdateWithoutDocumentsInput } from "../inputs/PersonUpdateWithoutDocumentsInput";
import { PersonUpsertWithoutDocumentsInput } from "../inputs/PersonUpsertWithoutDocumentsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpdateOneWithoutDocumentsInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutDocumentsInput, {
    nullable: true
  })
  create?: PersonCreateWithoutDocumentsInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutDocumentsInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutDocumentsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpsertWithoutDocumentsInput, {
    nullable: true
  })
  upsert?: PersonUpsertWithoutDocumentsInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutDocumentsInput, {
    nullable: true
  })
  update?: PersonUpdateWithoutDocumentsInput | undefined;
}
