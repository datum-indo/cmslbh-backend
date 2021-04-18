import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutLogRequestsInput } from "../inputs/RenamedcaseCreateOrConnectWithoutLogRequestsInput";
import { RenamedcaseCreateWithoutLogRequestsInput } from "../inputs/RenamedcaseCreateWithoutLogRequestsInput";
import { RenamedcaseUpdateWithoutLogRequestsInput } from "../inputs/RenamedcaseUpdateWithoutLogRequestsInput";
import { RenamedcaseUpsertWithoutLogRequestsInput } from "../inputs/RenamedcaseUpsertWithoutLogRequestsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutLogRequestsInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutLogRequestsInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutLogRequestsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutLogRequestsInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutLogRequestsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutLogRequestsInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutLogRequestsInput | undefined;

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

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutLogRequestsInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutLogRequestsInput | undefined;
}
