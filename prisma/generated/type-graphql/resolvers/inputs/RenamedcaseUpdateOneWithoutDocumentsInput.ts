import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutDocumentsInput } from "../inputs/RenamedcaseCreateOrConnectWithoutDocumentsInput";
import { RenamedcaseCreateWithoutDocumentsInput } from "../inputs/RenamedcaseCreateWithoutDocumentsInput";
import { RenamedcaseUpdateWithoutDocumentsInput } from "../inputs/RenamedcaseUpdateWithoutDocumentsInput";
import { RenamedcaseUpsertWithoutDocumentsInput } from "../inputs/RenamedcaseUpsertWithoutDocumentsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutDocumentsInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutDocumentsInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutDocumentsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutDocumentsInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutDocumentsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutDocumentsInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutDocumentsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutDocumentsInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutDocumentsInput | undefined;
}
