import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutClassificationsInput } from "../inputs/RenamedcaseCreateOrConnectWithoutClassificationsInput";
import { RenamedcaseCreateWithoutClassificationsInput } from "../inputs/RenamedcaseCreateWithoutClassificationsInput";
import { RenamedcaseUpdateWithoutClassificationsInput } from "../inputs/RenamedcaseUpdateWithoutClassificationsInput";
import { RenamedcaseUpsertWithoutClassificationsInput } from "../inputs/RenamedcaseUpsertWithoutClassificationsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutClassificationsInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutClassificationsInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutClassificationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutClassificationsInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutClassificationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutClassificationsInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutClassificationsInput | undefined;

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

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutClassificationsInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutClassificationsInput | undefined;
}
